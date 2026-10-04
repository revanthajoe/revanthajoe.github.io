export type PostSection =
  | { type: "heading"; title: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "diagram"; text: string };

export type Post = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  date: string;
  excerpt: string;
  readingTime: string;
  tags: string[];
  projectHref?: string;
  projectLabel?: string;
  sections: PostSection[];
};

export const posts: Post[] = [
  {
    slug: "building-nexmarket-ai",
    title: "Building NexMarket AI: From AI Content Generation to Campaign Optimization",
    description: "An engineering case study of an AI marketing automation workflow built around generation, evaluation, analytics, forecasting, and optimization.",
    intro: "NexMarket AI started with a practical problem: campaign work is usually split across separate tools for writing, design, publishing, analytics, and prediction. I built the project as an end-to-end workflow that keeps those stages connected while making the origin of each result visible.",
    date: "Oct 2026",
    excerpt: "From AI content generation to campaign optimization, with explicit boundaries between actual and simulated analytics.",
    readingTime: "8 min read",
    tags: ["AI engineering", "FastAPI", "Machine learning", "n8n"],
    projectHref: "/projects#nexmarket-ai",
    projectLabel: "NexMarket AI",
    sections: [
      { type: "heading", title: "Why I built NexMarket AI" },
      { type: "paragraph", text: "Marketing campaign creation often means moving between a copywriting tool, a design tool, a social scheduler, an analytics dashboard, and a spreadsheet for prediction. That workflow makes it difficult to connect a campaign input to the decisions made later. NexMarket AI is an attempt to bring those stages into one AI-assisted marketing automation workflow." },
      { type: "paragraph", text: "The project accepts campaign information and moves it through content generation, poster creation, evaluation, publishing, analytics ingestion, sentiment analysis, lead scoring, engagement forecasting, and campaign optimization. The goal is not to suggest that every stage is magically autonomous. The goal is to make the hand-offs explicit and give each component a place in a coherent system." },
      { type: "heading", title: "System overview" },
      { type: "diagram", text: "Campaign input\n    |\n    v\nAdvertisement and content generation\n    |\n    v\nPoster generation -> Poster evaluation -> Poster selection\n    |\n    v\nSocial publishing\n    |\n    v\nActual analytics ingestion -> Sentiment analysis\n    |\n    v\nLead prediction -> LSTM engagement forecasting\n    |\n    v\nCampaign optimization" },
      { type: "paragraph", text: "The frontend is a Next.js and React dashboard styled with Tailwind CSS and Recharts. It communicates with a FastAPI backend through REST endpoints. PostgreSQL stores campaign state and the outputs of each stage. n8n can orchestrate the longer-running sequence through webhooks, polling, scheduling, and retries." },
      { type: "heading", title: "Architecture" },
      { type: "list", items: ["Frontend: Next.js, React, Tailwind CSS, and Recharts for the dashboard, campaign form, poster preview, and analytics views.", "Backend: FastAPI owns the API surface and keeps the AI, posting, analytics, and optimization services behind explicit boundaries.", "Database: PostgreSQL, accessed asynchronously through SQLAlchemy, stores campaigns and their generated artifacts, events, scores, forecasts, and optimization results.", "Workflow: n8n coordinates webhooks, status polling, scheduling, retries, and analytics ingestion. The AI logic remains in the backend services.", "AI and ML: Stable Diffusion XL for local image generation, Qwen for ad copy, Qwen2.5-VL or GPT-4o Vision for poster evaluation, DistilBERT for sentiment, XGBoost for lead scoring, a PyTorch LSTM for forecasting, and a Thompson Sampling contextual bandit for optimization." ] },
      { type: "paragraph", text: "The database is more than a place to store the final dashboard numbers. Campaigns relate to posters, ad copies, social posts, analytics events, sentiment results, lead scores, forecasts, and optimization results. Model metadata, versions, datasets, training runs, and validations provide a separate record of how model artifacts are identified and evaluated." },
      { type: "heading", title: "Generating content and posters" },
      { type: "paragraph", text: "The content generation stage creates platform-specific advertisement copy from a campaign brief. The project can use Qwen 2.5 Instruct locally or GPT-4o when configured, with demo templates available as a fallback. The output is kept as structured ad copy with fields such as platform, headline, body, call-to-action variants, hashtags, and tone." },
      { type: "paragraph", text: "Poster generation follows a similar provider boundary. Stable Diffusion XL can generate images locally, DALL-E 3 can be used as a configured provider, and a mock SVG mode makes the application usable without external model credentials. That fallback is useful for demonstrations, but it must remain identifiable as a fallback rather than being confused with a real model result." },
      { type: "heading", title: "Why evaluate a generated poster?" },
      { type: "paragraph", text: "A generated image is not automatically a usable advertisement. Text can be hard to read, a call to action can be visually buried, contrast can be weak, and the composition can fail to match the campaign brief. NexMarket AI sends poster candidates through a vision evaluation step that records dimensions such as readability, layout, branding, contrast, call-to-action quality, and visual appeal." },
      { type: "paragraph", text: "The evaluator can use Qwen2.5-VL locally or GPT-4o Vision, with mock scores available in demo mode. Storing an evaluation alongside the poster makes selection a deliberate step instead of silently accepting the first generated variation. Feedback and regeneration can also be associated with the poster version that produced it." },
      { type: "heading", title: "Publishing and orchestration" },
      { type: "paragraph", text: "The posting service uses adapters for Instagram, Facebook, Telegram, and WhatsApp Cloud API, plus a mock adapter for local demos. A social post records its platform, scheduling information, status, provider identifiers, retry state, and whether the result is mock data. n8n can trigger the pipeline, poll status, schedule work, and retry steps through backend webhooks." },
      { type: "heading", title: "Actual analytics is not simulated analytics" },
      { type: "paragraph", text: "This distinction is one of the most important engineering lessons in the project. Actual analytics comes from a platform integration or an explicitly identified external source. Simulated analytics is useful for testing the dashboard, exercising an end-to-end demo, and checking that forecasts and charts render. It is not evidence of campaign performance." },
      { type: "paragraph", text: "The data model records whether an analytics event is mock, its source type and system, a source reference, and when it was synced. The application also exposes a demo analytics seed path. That is a good way to test the product experience, but the resulting rows must not silently enter a training dataset as if they were measured engagement." },
      { type: "heading", title: "The machine learning pipeline" },
      { type: "list", items: ["DistilBERT performs sentiment analysis over text and stores the label, scores, model information, and input provenance.", "XGBoost scores leads using input features and returns a score, purchase probability, category, and feature importance. The repository documents synthetic bootstrap training, so those results need to be described as demo or fallback behavior when real labeled data is not available.", "A PyTorch LSTM forecasts engagement over a configured horizon using historical engagement signals. The project supports a 7 to 30 day horizon and records the history source and fallback state.", "The Thompson Sampling contextual bandit uses campaign context and reward information to recommend a platform, time, or budget direction. Optimization results retain the reward source and analytics reference so the recommendation can be inspected later." ] },
      { type: "heading", title: "Reliability and data provenance" },
      { type: "paragraph", text: "An AI system needs to know where its data came from. NexMarket AI treats source type, source system, model version, fallback state, and analytics references as part of the result rather than as incidental logging. That allows a dashboard reader to distinguish a real platform measurement from a seeded demo event and a model response from a fallback template." },
      { type: "paragraph", text: "The practical rule is simple: actual data can enter learning pipelines when it is appropriate and documented; simulated data can support UI and integration testing; simulated data should never silently become training data. Keeping that boundary explicit is more valuable than presenting a polished but misleading metric." },
      { type: "heading", title: "Challenges" },
      { type: "list", items: ["Model availability and resource requirements: local image and vision models need substantial hardware, while hosted providers introduce credentials, quotas, and network failure modes.", "Fallbacks: mock providers and template generation keep the system demonstrable, but every fallback needs clear provenance so it is not mistaken for a production result.", "Generated image quality: poster generation needs evaluation and regeneration rather than a single fire-and-forget request.", "Analytics reliability: platform APIs, synchronization freshness, and demo seeds all require different handling and labeling.", "Training requirements: lead scoring and forecasting need suitable historical data; synthetic bootstrap data is useful for wiring the system, not for claiming real-world performance.", "Frontend and backend contracts: long-running generation and orchestration steps need stable status shapes, retries, and clear error states." ] },
      { type: "heading", title: "What I learned" },
      { type: "paragraph", text: "The project taught me to think of AI features as a system of contracts rather than isolated model calls. Model orchestration, full-stack integration, provenance, fallback behavior, and ML data requirements all affect whether a feature can be trusted. The strongest parts of the design are not the model names by themselves; they are the boundaries around them and the metadata that explains what happened." },
      { type: "heading", title: "Conclusion" },
      { type: "paragraph", text: "NexMarket AI is a working exploration of an end-to-end marketing automation architecture. It connects content generation, visual evaluation, publishing, measurement, prediction, and optimization while keeping demo behavior distinguishable from measured behavior. That distinction is the foundation I would keep strengthening as more real integrations and labeled data become available." },
    ],
  },
  {
    slug: "building-soosai-hardwares",
    title: "Building Soosai Hardwares: A Mobile-First Full-Stack E-Commerce Platform",
    description: "A case study of a mobile-first product catalog, WhatsApp ordering flow, and phone-friendly inventory dashboard.",
    intro: "Soosai Hardwares was built for a real business workflow that needed a useful digital catalog without the complexity of a full payment platform. The result is a mobile-first customer experience backed by a Node and Express API, PostgreSQL through Supabase, JWT authentication, and Cloudinary media handling.",
    date: "Sep 2026",
    excerpt: "A mobile-first full-stack e-commerce platform for product discovery, inventory management, and WhatsApp order handoff.",
    readingTime: "6 min read",
    tags: ["React", "Node.js", "PostgreSQL", "Full-stack"],
    projectHref: "/projects#soosai-hardwares",
    projectLabel: "Soosai Hardwares",
    sections: [
      { type: "heading", title: "The problem" },
      { type: "paragraph", text: "The business needed a simple way for customers to browse hardware products, understand what was available, and contact the shop from a phone. It also needed an administrative workflow that did not assume the person managing inventory would always be sitting at a desktop computer." },
      { type: "paragraph", text: "That led to a deliberately focused product: a digital catalog and mobile-friendly inventory dashboard, with WhatsApp as the handoff for an order conversation. It does not pretend to be a complete payment or fulfillment platform." },
      { type: "heading", title: "Customer experience" },
      { type: "paragraph", text: "The React frontend provides a product listing, product detail views, search, category filtering, brand filtering, stock indicators, and product information. The interface is responsive and mobile-first, because the primary task is often a customer checking a product from a phone rather than comparing a large desktop table." },
      { type: "paragraph", text: "The customer workflow also includes reviews and a quantity selector before ordering. These features give the catalog enough context to be useful without adding an invented checkout system or a payment gateway that the project does not implement." },
      { type: "heading", title: "Why WhatsApp for ordering?" },
      { type: "paragraph", text: "The business already has a natural conversation channel in WhatsApp. A pre-filled WhatsApp order message lets the customer carry the selected product and quantity into that conversation, where availability, delivery, and payment can be handled by the business." },
      { type: "paragraph", text: "This is a deliberate boundary. The application improves discovery and order handoff, but it does not claim to process payments, maintain a full order state machine, or replace the shop's conversation with an unimplemented checkout flow." },
      { type: "heading", title: "A phone-friendly admin dashboard" },
      { type: "paragraph", text: "The admin side supports JWT login and product CRUD, so inventory can be managed from a phone or laptop. It also supports category management, stock updates, advertisement management, and image upload. The mobile workflow includes camera capture through an image input that accepts the phone camera, which is useful when new stock arrives and the administrator wants to add it immediately." },
      { type: "heading", title: "Backend architecture" },
      { type: "diagram", text: "React + React Router frontend\n              |\n              v\n       Node.js + Express API\n              |\n              v\n PostgreSQL through Supabase\n              |\n              +--> Cloudinary media storage" },
      { type: "paragraph", text: "The frontend calls an Express and Node.js API. The backend uses Supabase's PostgreSQL access and row-level security model for persistence, while Cloudinary handles uploaded product and advertisement media. The API is organized around authentication, products, categories, advertisements, reviews, and health checks." },
      { type: "heading", title: "Authentication" },
      { type: "paragraph", text: "Admin login is protected with JWT. The backend validates the token through its protection middleware before allowing administrative operations. Passwords are hashed with bcrypt, and the authenticated user model includes an admin role. This keeps public catalog reads separate from product and advertisement management." },
      { type: "heading", title: "Images and media" },
      { type: "paragraph", text: "Cloudinary is used for image and media uploads rather than storing large files in the application database. Product images and advertisement media can therefore be managed as URLs and metadata while the media service handles the file delivery concerns. The dashboard's camera-friendly input is the frontend part of that workflow; the backend still owns validation and persistence of the resulting media reference." },
      { type: "heading", title: "Data model" },
      { type: "paragraph", text: "The backend model helpers and Supabase schema checks identify users, categories, products, reviews, analytics, and advertisements. Products relate to categories and expose fields such as name, slug, brand, unit, nickname, price, stock, description, image, active state, and featured state. Reviews relate to products but can also represent shop-level reviews." },
      { type: "paragraph", text: "The analytics table stores counters such as visits and WhatsApp orders. Advertisements store media details, link information, display order, and active state. This is enough to support the catalog, the admin dashboard, the home advertisement carousel, reviews, and the order handoff without inventing an order or payment table that is not part of the project." },
      { type: "heading", title: "Challenges" },
      { type: "list", items: ["Designing a responsive catalog that remains easy to scan on a phone while still supporting search and multiple filters.", "Keeping public product reads and protected admin mutations separate in the API.", "Handling image uploads and phone camera capture without making the inventory workflow desktop-only.", "Working with Supabase access, row-level security, and a backend service key without exposing privileged credentials to the frontend.", "Keeping the WhatsApp handoff useful while staying honest about the boundary between catalog software and a full commerce platform.", "Making API errors and empty states understandable across both the customer and admin experiences." ] },
      { type: "heading", title: "What I learned" },
      { type: "paragraph", text: "Soosai Hardwares reinforced that full-stack engineering is often about choosing the right boundary for the problem. React handles discovery and interaction, Express owns the API contract, PostgreSQL provides durable data, JWT protects administrative actions, and Cloudinary handles media. The result is more useful because it fits the business workflow instead of adding features that the business did not ask for." },
      { type: "heading", title: "Conclusion" },
      { type: "paragraph", text: "Soosai Hardwares is a practical full-stack catalog for a hardware shop: searchable products, useful filters, mobile-first presentation, a phone-friendly admin workflow, and a clear WhatsApp handoff. It is an example of building a focused system around an actual operating need while leaving payment and fulfillment to the conversation where they already belong." },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
