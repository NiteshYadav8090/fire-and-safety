
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
