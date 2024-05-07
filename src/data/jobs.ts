import { JobItem } from "./models";

function buildLink(link: string, text: string) {
  return `<a class="external-link" href="${link}" target="_blank">${text}</a>`;
}

export const jobsData: JobItem[] = [
  {
    title: "Full Stack Developer Intern",
    company: "SS&C Technologies",
    site: "https://www.ssctech.com",
    fromDate: new Date("2023-09-05"),
    toDate: new Date("2023-12-31"),
    description: `Built frontend and backend features for a modernized mutual funds management system.
      Led a ${buildLink("https://www.mediawiki.org", "MediaWiki")} knowledge base project to provide 
      application instructions by constructing CI/CD pipelines, managing user access,
      migrating databases, and composing guidance documentation.`,
    tools: ["Java", "Angular", "TypeScript", "GitHub Actions", "Bash", "Cloud"],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Milk Moovement",
    site: "https://www.milkmoovement.com",
    fromDate: new Date("2023-05-05"),
    toDate: new Date("2023-08-31"),
    description: `Developed REST APIs and frontend components for a dairy supply chain management platform.
      Streamlined the onboarding process for 2 new clients: ${buildLink("https://www.mimilk.com", "MMPA")} and
      ${buildLink("https://www.jacoby.com", "TC Jacoby")}. Advanced company's transition to
      a microservices architecture by building serverless endpoints and internal tools to 
      transform/synchronize data across multiple services.`,
    tools: [
      "React",
      "TypeScript",
      "Express.js",
      "Microservices",
      "AWS",
      "MongoDB",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Index Exchange",
    site: "https://www.indexexchange.com",
    fromDate: new Date("2022-09-05"),
    toDate: new Date("2022-12-31"),
    description: `Created an automated End-to-End testing system for the team's microservices to minimize
      service downtime. Enhanced CI/CD pipelines for automated testing, deployment, ticket tracking, and
      code linting. Improved the team's codebase by refactoring and optimizing existing code.`,
    tools: [
      "Go",
      "Microservices",
      "Cucumber",
      "Docker",
      "Kubernetes",
      "Argo CD",
      "GitLab CI/CD",
      "Automated Testing",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "SS&C Technologies",
    site: "https://www.ssctech.com",
    fromDate: new Date("2022-01-05"),
    toDate: new Date("2022-04-30"),
    description: `Contributed to the ${buildLink("https://www.ssctech.com/products/trac", "TRAC")}
      platform by building new features, fixing bugs, and improving existing pages with a focus
      on responsiveness and accessibility. Developed routing and state
      management functionalities for unique page flow scenarios.`,
    tools: ["Vue.js", "Vuex", "JavaScript", "Bootstrap", "Accessibility"],
  },
  {
    title: "Software Developer Intern",
    company: "SS&C Technologies",
    site: "https://www.ssctech.com",
    fromDate: new Date("2021-05-05"),
    toDate: new Date("2021-08-31"),
    description: `Collaborated with other developers on the
      ${buildLink("https://www.ssctech.com/products/trac", "TRAC")} refresh project to renovate the
      legacy application for financial investments and retirement planning. Built new pages, charts,
      common components, and integrated API calls.`,
    tools: ["Vue.js", "JavaScript", "Bootstrap", "Highcharts"],
  },
];
