import { galleryItems } from "../data/siteContent";
import { GalleryCard } from "./GalleryCard";
import { SectionReveal } from "./SectionReveal";

export function GallerySection() {
  return (
    <section id="gallery" className="section-rule py-[var(--section-space)]">
      <div className="page-grid">
        <div className="grid grid-cols-12 gap-y-8">
          <SectionReveal className="col-span-12 lg:col-span-6">
            <p className="section-kicker">Объекты / галерея</p>
            <h2 className="section-title max-w-[11ch]">
              Объекты, в которых форма удерживает пространство.
            </h2>
          </SectionReveal>

          <SectionReveal className="col-span-12 lg:col-span-5 lg:col-start-8 lg:self-end">
            <p className="section-copy max-w-xl">
              Мы работаем с мебелью как с архитектурным инструментом: собираем
              посадку, сервисный сценарий, свет, материал и ресурс эксплуатации
              в один спокойный и цельный язык.
            </p>
          </SectionReveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-12 xl:auto-rows-[7rem]">
          {galleryItems.map((item, index) => (
            <GalleryCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
