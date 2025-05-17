import type { SkillCategory } from '$lib/types';

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: [
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Java", icon: "java" },
      { name: "Node.js", icon: "nodejs" }
    ]
  },
  {
    name: "Testing Tools",
    skills: [
      { name: "Playwright", icon: "playwright" },
      { name: "Cypress", icon: "cypress" },
      { name: "Mocha.js", icon: "mocha" },
      { name: "Appium", icon: "appium" },
      { name: "WebdriverIO", icon: "webdriverio" },
      { name: "k6", icon: "k6" },
      { name: "Postman", icon: "postman" }
    ]
  },
  {
    name: "Databases",
    skills: [
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Redis", icon: "redis" }
    ]
  },
  {
    name: "Project Management",
    skills: [
      { name: "JIRA", icon: "jira" },
      { name: "OpenProject", icon: "openproject" },
      { name: "ClickUp", icon: "clickup" }
    ]
  },
  {
    name: "Testing & Reporting",
    skills: [
      { name: "AIO Tests", icon: "aio-tests" },
      { name: "QMetry", icon: "qmetry" },
      { name: "Allure Report", icon: "allure" },
      { name: "mochawesome", icon: "mochawesome" },
      { name: "jam.dev", icon: "jamdev" },
      { name: "DBeaver", icon: "dbeaver" }
    ]
  }
];
