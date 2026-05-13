
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  longDescription: string;
  benefits: string[];
  industries: string[];
  image: string;
}

export interface Project {
  id: number;
  title: string;
  location: string;
  industry: string;
  image: string;
}

export interface Client {
  name: string;
  logo: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  image: string;
}

export interface BlogContentSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  sections: BlogContentSection[];
}

export interface StudentReview {
  id: number;
  name: string;
  course: string;
  rating: number; // 1..5
  text: string;
}
