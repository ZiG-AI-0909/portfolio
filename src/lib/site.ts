export const contact = {
  email: "tiwaribhaveshkumar@gmail.com",
  phone: "+91 8088388193",
  phoneHref: "tel:+918088388193",
  linkedin: "https://www.linkedin.com/in/bhavesh-kumar-tiwari-5043862b4/",
  linkedinLabel: "linkedin.com/in/bhavesh-kumar-tiwari",
  github: "https://github.com/ZiG-AI-0909",
  githubLabel: "github.com/ZiG-AI-0909",
  // TODO: export the resume as /public/Bhavesh-Kumar-Tiwari-Resume.pdf and point this at "/Bhavesh-Kumar-Tiwari-Resume.pdf"
  resume: "/Resume.docx",
  availability: "I am available to join immediately",
  hireMeGmail:
    "https://mail.google.com/mail/?view=cm&to=tiwaribhaveshkumar@gmail.com&su=Hiring%20Inquiry&body=Hi%20Bhavesh%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20potential%20opportunity.",
};

export const profile = {
  name: "Bhavesh Kumar Tiwari",
  jobTitle: "AI Automation Engineer",
  headline: "building AI agents, chatbots and business automation",
  city: "Bengaluru",
  country: "India",
  workTypes: ["Full-time", "Freelance", "Remote"],
  targetRoles: ["AI Automation Engineer", "AI Agent Developer", "Chatbot Developer", "Junior AI Engineer", "Workflow Automation"],
};

/**
 * Content still marked "TODO" is a placeholder: it is kept in the source so it's easy to find,
 * but never rendered, so it can't reach visitors or crawlers.
 */
export const isFilled = (value?: string): value is string => !!value && !value.startsWith("TODO");

export const productLinks = {
  zigbot: {
    live: "https://zigbotai.vercel.app",
    discord: "https://discord.com/oauth2/authorize?client_id=1539530458390593576",
  },
  sudarshan: {
    live: "https://aisudarshanpipes.vercel.app/",
  },
};

export const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

export const siteUrl = "https://aibhaveshportfolio.vercel.app";

export const external = { target: "_blank", rel: "noopener noreferrer" } as const;
