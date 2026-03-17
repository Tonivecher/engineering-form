import { ArrowUpRight } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";

import { studioContacts } from "../data/siteContent";
import { buildMailtoUrl } from "../lib/utils";
import type { ContactFormValues } from "../types/site";
import { MagneticButton } from "./MagneticButton";
import { SectionReveal } from "./SectionReveal";

type ContactErrors = Partial<Record<keyof ContactFormValues, string>>;

const initialValues: ContactFormValues = {
  name: "",
  contact: "",
  message: "",
};

export function ContactSection() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange =
    (field: keyof ContactFormValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const nextValue = event.target.value;

      setValues((current) => ({
        ...current,
        [field]: nextValue,
      }));

      setErrors((current) => ({
        ...current,
        [field]: undefined,
      }));
      setIsSubmitted(false);
    };

  const validate = () => {
    const nextErrors: ContactErrors = {};

    if (values.name.trim().length < 2) {
      nextErrors.name = "Укажите имя для связи.";
    }

    const contactValue = values.contact.trim();
    if (contactValue.length < 5 || !(/@/.test(contactValue) || /\d{5,}/.test(contactValue))) {
      nextErrors.contact = "Нужен email или телефон, по которому можно вернуться с ответом.";
    }

    if (values.message.trim().length < 16) {
      nextErrors.message = "Опишите объект, материал или задачу чуть подробнее.";
    }

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const subject = `Запрос на проект — ${values.name.trim()}`;
    const mailtoUrl = buildMailtoUrl(studioContacts.email, subject, [
      "Новый запрос с сайта «Инженерия формы»",
      "",
      `Имя: ${values.name.trim()}`,
      `Контакт: ${values.contact.trim()}`,
      "",
      "Задача:",
      values.message.trim(),
    ]);

    window.location.href = mailtoUrl;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="section-rule py-[var(--section-space)]">
      <div className="page-grid grid grid-cols-12 gap-y-12 lg:gap-x-10">
        <SectionReveal className="col-span-12 lg:col-span-5">
          <p className="section-kicker">Контакт</p>
          <h2 className="section-title max-w-[10ch]">
            Работаем с архитекторами и дизайнерами напрямую.
          </h2>
          <p className="section-copy mt-8 max-w-xl">
            Присылайте план, визуализацию, подборку референсов или просто
            задачу в свободной форме. Мы соберем ответ через материал,
            конструктив, сроки и логику производства.
          </p>

          <div className="mt-12 space-y-8">
            <div className="border-t border-white/10 pt-5">
              <p className="section-kicker">email</p>
              <a
                href={`mailto:${studioContacts.email}`}
                className="mt-4 inline-block font-display text-2xl tracking-[-0.05em] text-white/92 transition duration-300 ease-editorial hover:text-white"
                data-cursor="interactive"
              >
                {studioContacts.email}
              </a>
            </div>

            <div className="border-t border-white/10 pt-5">
              <p className="section-kicker">телефон</p>
              <a
                href={`tel:${studioContacts.phone.replace(/[^\d+]/g, "")}`}
                className="mt-4 inline-block font-display text-2xl tracking-[-0.05em] text-white/92 transition duration-300 ease-editorial hover:text-white"
                data-cursor="interactive"
              >
                {studioContacts.phone}
              </a>
            </div>

            <div className="border-t border-white/10 pt-5">
              <p className="section-kicker">география</p>
              <p className="mt-4 text-base text-white/70">
                {studioContacts.location}
              </p>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal className="col-span-12 lg:col-span-6 lg:col-start-7" delay={0.08}>
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="space-y-10">
              <label className="block">
                <span className="section-kicker">Имя</span>
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange("name")}
                  placeholder="Ваше имя"
                  data-cursor="interactive"
                />
                {errors.name ? <p className="field-error">{errors.name}</p> : null}
              </label>

              <label className="block">
                <span className="section-kicker">Контакт</span>
                <input
                  type="text"
                  name="contact"
                  value={values.contact}
                  onChange={handleChange("contact")}
                  placeholder="Email или телефон"
                  data-cursor="interactive"
                />
                {errors.contact ? (
                  <p className="field-error">{errors.contact}</p>
                ) : null}
              </label>

              <label className="block">
                <span className="section-kicker">Задача</span>
                <textarea
                  name="message"
                  value={values.message}
                  onChange={handleChange("message")}
                  placeholder="Опишите объект, тип мебели, материалы и ориентир по срокам."
                  data-cursor="interactive"
                />
                {errors.message ? (
                  <p className="field-error">{errors.message}</p>
                ) : null}
              </label>
            </div>

            <div className="flex flex-col items-start gap-4">
              <MagneticButton type="submit">
                Открыть почтовый бриф
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
              </MagneticButton>
              <p className="max-w-md text-sm leading-7 text-white/52">
                Форма работает через `mailto:` и откроет ваш почтовый клиент с
                подготовленным проектным брифом.
              </p>
              {isSubmitted ? (
                <p className="text-sm leading-7 text-white/72">
                  Почтовый клиент открыт. Если он не запустился, напишите
                  напрямую на {studioContacts.email}.
                </p>
              ) : null}
            </div>
          </form>
        </SectionReveal>
      </div>
    </section>
  );
}
