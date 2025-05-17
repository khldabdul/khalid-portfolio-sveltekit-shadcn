// About types
export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
}

export interface AboutInfo {
  fullName: string;
  title: string;
  photoUrl: string;
  shortBio: string;
  longBio: string;
  contactInfo: ContactInfo;
}

// Experience types
export interface Experience {
  company: string;
  position: string;
  location: string;
  period: string;
  achievements: string[];
  keyAchievement: string;
}

// Skills types
export interface Skill {
  name: string;
  icon?: string; // Path to SVG icon
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

// Education types
export interface Education {
  institution: string;
  degree: string;
  location: string;
  graduationDate: string;
  gpa?: string;
}

// Project types
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
}
