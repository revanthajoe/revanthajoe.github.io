export type Project = {
  name: string;
  description: string;
  technologies: string[];
  date?: string;
  github?: string;
  demo?: string;
  postSlug?: string;
};

export const projects: Project[] = [
  {
    name: "NexMarket AI",
    date: "Sep 2026 – Present",
    description:
      "AI-powered marketing automation platform for generating, evaluating, publishing, forecasting, and optimizing campaigns.",
    technologies: ["Next.js", "FastAPI", "PostgreSQL", "n8n", "PyTorch", "XGBoost", "Stable Diffusion XL", "Qwen"],
    github: "https://github.com/revanthajoe/NexMarket_AI",
    postSlug: "building-nexmarket-ai",
  },
  {
    name: "IntelliLearn",
    date: "Nov 2025",
    description:
      "RAG study assistant answering from uploaded documents with searchable OCR ingestion, chat history, streaming responses, and citation-backed answers.",
    technologies: ["React", "TypeScript", "FastAPI", "LangChain", "FAISS", "Llama 3.2", "OCR"],
    github: "https://github.com/revanthajoe/Smart_Study_Assistant",
  },
  {
    name: "MinuteMaster AI",
    date: "Dec 2025",
    description:
      "AI meeting assistant that transforms conversations into structured notes and actionable information.",
    technologies: ["Python", "Whisper", "React", "FastAPI", "NLP", "LLM"],
    github: "https://github.com/revanthajoe/MinuteMaster_AI",
  },
  {
    name: "Soosai Hardwares",
    date: "Aug 2026 – Sep 2026",
    description:
      "Mobile-first full-stack e-commerce catalog with search, category and brand filtering, WhatsApp order handoff, and a phone-friendly inventory admin dashboard.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "Cloudinary"],
    github: "https://github.com/revanthajoe/Soosai-Hardwares",
    demo: "https://soosai-hardwares.vercel.app/",
    postSlug: "building-soosai-hardwares",
  },
];
