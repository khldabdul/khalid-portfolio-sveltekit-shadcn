import type { Project } from '$lib/types';

export const projects: Project[] = [
  {
    title: "AI-Assisted Test Automation",
    description: "Developed an innovative approach to test automation by integrating AI for test case generation and script creation",
    technologies: ["Playwright", "TypeScript", "AI/ML tools"],
    highlights: [
      "Reduced test development time by 40%",
      "Improved test coverage by 25%",
      "Enabled more efficient allocation of QA resources"
    ]
  },
  {
    title: "Custom Test Management System",
    description: "Created a cost-effective spreadsheet-based test management system with custom functions and automations",
    technologies: ["Google Spreadsheet", "Google Apps Script", "QMetry API"],
    highlights: [
      "Eliminated need for expensive commercial tooling",
      "Streamlined test plan creation and workload distribution",
      "Integrated with existing QA processes"
    ]
  },
  {
    title: "Performance Testing Framework",
    description: "Established baseline performance testing framework with comprehensive metrics and alerting",
    technologies: ["k6", "JavaScript", "Redis"],
    highlights: [
      "Created performance baseline for critical system components",
      "Implemented automated performance regression testing",
      "Identified and resolved system bottlenecks"
    ]
  }
];
