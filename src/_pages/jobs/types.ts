export interface Vacancy {
  id: number;
  active: boolean;
  externalId: string | null;
  companyName: string;
  title: string;
  salary: string | null;
  location: string | null;
  specialty: string;
  internship: boolean;
  remote: boolean;
  url: string;
  description: string;
  source: string;
  image: string | null;
  datePublication: string | Date;
}

export interface JobFilters {
  specialization: string;
  city: string;
  source: string;
  remote: boolean;
  internship: boolean;
}
