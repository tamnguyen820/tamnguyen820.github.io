export type NavItem = {
  name: string;
  href: string;
};

export type JobItem = {
  title: string;
  company: string;
  site: string;
  fromDate: Date;
  toDate: Date;
  description: string;
  tools: string[];
};

export type ProjectItem = {
  name: string;
  imageUrl: string;
  site: string;
  description: string;
  tools: string[];
};

export type SchoolItem = {
  name: string;
  site: string;
  degree: string;
  fromDate: Date;
  toDate: Date;
  description: string[];
};
