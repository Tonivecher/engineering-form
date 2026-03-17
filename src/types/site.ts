export interface NavItem {
  id: string;
  label: string;
}

export interface HeroMetric {
  value: string;
  label: string;
}

export interface MaterialFeature {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export type GallerySpan = "feature" | "portrait" | "landscape" | "square";

export interface GalleryItem {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  span: GallerySpan;
}

export interface ContactFormValues {
  name: string;
  contact: string;
  message: string;
}
