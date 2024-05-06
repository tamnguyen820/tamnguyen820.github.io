import { SchoolItem } from "./models";

export const educationData: SchoolItem[] = [
  {
    name: "University of Waterloo",
    site: "https://uwaterloo.ca",
    degree: "Bachelor of Computer Science, Honours Co-op",
    fromDate: new Date("2020-09-05"),
    toDate: new Date("2024-04-30"),
    description: [
      "GPA: 3.83/4.00 (88%)",
      "Graduating with Dean's Honours Distinction",
    ],
  },
  {
    name: "University of New Brunswick",
    site: "https://www.unb.ca",
    degree: "Bachelor of Computer Science",
    fromDate: new Date("2019-09-05"),
    toDate: new Date("2020-05-05"),
    description: [
      "GPA: 4.2/4.3, Dean's List",
      "Entrance Scholarships, Academic Scholarships, Enriched Calculus Grant",
      "Transferred to UWaterloo",
    ],
  },
];
