export type Experience = {
  company: string;
  role: string;
  date: string;
  details: string[];
};

export const experience: Experience[] = [
  {
    company: "Soosai Hardwares",
    role: "Freelance Full-Stack Developer",
    date: "Aug 2026 – Sep 2026",
    details: [
      "Independently built and deployed a full-stack e-commerce catalog platform with React, Node.js, and Express.",
      "Built category, brand, and search filtering with a WhatsApp-based order handoff aligned to the business workflow.",
      "Built a mobile-first admin dashboard with inventory CRUD and camera-based uploads for phone-based stock management.",
      "Secured REST APIs with JWT, Helmet, CORS, and rate limiting; used Cloudinary for images and PostgreSQL for data.",
    ],
  },
];
