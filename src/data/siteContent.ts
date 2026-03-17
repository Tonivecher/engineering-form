import { withBase } from "../lib/utils";
import type {
  GalleryItem,
  HeroMetric,
  MaterialFeature,
  NavItem,
} from "../types/site";

export const studioName = "Инженерия формы";

export const heroImage = withBase("/projects/enhanced_IMG-20210304-WA0004.webp");

export const navItems: NavItem[] = [
  { id: "philosophy", label: "Философия" },
  { id: "gallery", label: "Объекты" },
  { id: "contact", label: "Контакт" },
];

export const heroMetrics: HeroMetric[] = [
  {
    value: "От эскиза до монтажа",
    label: "Один производственный контур без разрыва между проектированием и реализацией.",
  },
  {
    value: "Частные и общественные объекты",
    label: "Работаем с архитекторами, дизайнерами, девелоперами и приватными клиентами.",
  },
  {
    value: "Материал как конструкция",
    label: "Шпон, массив, металл и композиты подчинены точной геометрии и ресурсу эксплуатации.",
  },
];

export const philosophyCopy = [
  "Мы проектируем мебель как архитектурный элемент: через пропорцию, посадку в пространство и контролируемый конструктив. Поэтому каждый объект начинается не с декора, а с логики объема, сценария использования и технологической дисциплины производства.",
  "Архитектурная чистота в нашем понимании означает минимум визуального шума, ясные стыки, выверенный ритм плоскостей и честную работу материала. Так изделие не спорит с интерьером, а собирает его в единую систему.",
];

export const materialFeatures: MaterialFeature[] = [
  {
    eyebrow: "wood",
    title: "Шпон и массив с точной рисунчатой раскладкой",
    description:
      "Подбираем текстуру как часть архитектурной композиции: без случайных переходов, с контролем стыков, кромок и глубины отделки.",
    image: withBase("/images/generated/materials/premium-wood-masterpiece.webp"),
    alt: "Набор древесных образцов и шпон в мастерской премиального мебельного производства",
  },
  {
    eyebrow: "metal",
    title: "Металл как несущая графика объекта",
    description:
      "Каркасы, детали и декоративные элементы работают не отдельно, а как система жесткости, масштаба и визуального ритма.",
    image: withBase("/images/generated/materials/architectural-metal-structure.webp"),
    alt: "Архитектурная металлическая конструкция для мебели и интерьеров",
  },
  {
    eyebrow: "composite",
    title: "Композиты для крупных серий и сложной геометрии",
    description:
      "Используем, когда проект требует повторяемости, радиусов, инженерной интеграции и стабильного качества в серийном цикле.",
    image: withBase("/images/generated/materials/modern-composites-sculpt.webp"),
    alt: "Современные композитные материалы и скульптурная геометрия",
  },
];

export const atmosphereImage = {
  src: withBase("/gallery/exposition-stand.webp"),
  alt: "Минималистичный архитектурный светильник как атмосферная деталь",
};

export const galleryItems: GalleryItem[] = [
  {
    id: "atrium-lounge",
    category: "Hospitality",
    title: "Атриумная мебельная система для общественного пространства",
    description:
      "Посадочные группы, столы и интегрированные кашпо собраны в единый спокойный ритм, способный выдерживать интенсивный поток.",
    image: withBase("/projects/enhanced_IMG-20210304-WA0004.webp"),
    alt: "Атриумное общественное пространство с мебелью и интегрированными кашпо",
    span: "feature",
  },
  {
    id: "private-bedroom",
    category: "Private Interior",
    title: "Графитовая спальня со скрытой архитектурой света",
    description:
      "Мягкое изголовье, подиум и прикроватные модули сведены к чистой горизонтали без лишних декоративных приемов.",
    image: withBase("/projects/P_20190127_212042.webp"),
    alt: "Темный интерьер спальни с интегрированной мебелью и графитовой отделкой",
    span: "portrait",
  },
  {
    id: "restaurant-series",
    category: "Restaurant",
    title: "Серия booth-модулей для премиальной ресторанной посадки",
    description:
      "Комфорт посадки, тактильная отделка и ресурсная конструкция работают на долгую ежедневную эксплуатацию.",
    image: withBase("/projects/gen1.webp"),
    alt: "Ресторанные booth-модули и столы в общественном интерьере",
    span: "landscape",
  },
  {
    id: "retail-kiosk",
    category: "Retail",
    title: "Торговый остров с интегрированной витринной геометрией",
    description:
      "Чистый стык стекла, корпуса и света формирует объект, который считывается как архитектурный элемент, а не отдельная мебель.",
    image: withBase("/projects/gen3.webp"),
    alt: "Торговый остров с подсветкой и стеклянными витринами",
    span: "square",
  },
  {
    id: "wine-display",
    category: "Feature Detail",
    title: "Витринная стена и зона выдачи с акцентом на сервисный сценарий",
    description:
      "Фасады, ниши и подсветка подчинены логике пользования, а не декоративному жесту.",
    image: withBase("/projects/IMG_20171208_010952.webp"),
    alt: "Витринная стена и барная зона с архитектурной подсветкой",
    span: "square",
  },
  {
    id: "restaurant-room",
    category: "Interior Ensemble",
    title: "Гостевой зал как единая мебельная композиция",
    description:
      "Столы, посадка, барная линия и стеновые поверхности сведены в один материальный язык без визуального шума.",
    image: withBase("/projects/IMG-20210304-WA0006.webp"),
    alt: "Ресторанный интерьер с серией столов, барной стойкой и мягкой мебелью",
    span: "landscape",
  },
];

export const studioContacts = {
  email: "atelier@engineering-form.example",
  phone: "+7 (000) 000-00-00",
  location: "Москва · частные и общественные интерьеры",
};
