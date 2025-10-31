export type Education = {
  university: string;
  degree: string;
  date: string;
  courses?: string;
};

export type Experience = {
  title: string;
  organization: string;
  date: string;
  details: string[];
};

export type TeachingExperience = {
    title: string;
    organization: string;
    date: string;
    details: string[];
}

export type Project = {
    name: string;
    date: string;
    details: string[];
    url?: string;
}

export type ResearchItem = {
  title:string;
  conference?: string;
  url?: string;
  type?: 'Conference Paper' | 'Journal Paper' | 'Reviewer';
};

export type Skills = {
  [key: string]: string[];
};

export type Resume = {
  name: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  summary: string;
  pdf: string;
  rawText: string;
  education: Education[];
  experience?: Experience[];
  extracurricular?: Experience[];
  teachingExperience?: TeachingExperience[];
  projects?: Project[];
  research?: ResearchItem[];
  skills?: Skills;
};
