import type {
  BlogPost,
  Experience,
  PhilosophyItem,
  Project,
  TechCategory,
} from "@/types";

export const ABOUT_PARAGRAPHS = [
  "I'm a self-taught engineer who learned by building things that broke in production. That experience shaped how I think about software — not as a collection of features, but as systems that need to work reliably under real-world conditions.",
  "I care about the hard problems: designing services that scale, automating workflows that waste engineering time, and making deployments boring. I believe the best infrastructure is the kind nobody notices because it just works.",
  "Most of my work sits at the intersection of backend development, cloud infrastructure, and reliability engineering. I enjoy taking products from zero to production — setting up the architecture, CI/CD pipelines, monitoring, and the guardrails that keep everything running when traffic spikes at 2 AM.",
  "I'm always learning. Whether it's a new language, a better way to structure an API, or lessons from a postmortem, I treat every project as an opportunity to get better at building software that lasts.",
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Go", "Python"],
  },
  {
    title: "Frontend",
    items: ["Next.js", "React", "Tailwind", "HTML", "CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "NestJS", "REST API", "GraphQL"],
  },
  {
    title: "Database",
    items: ["MySQL", "PostgreSQL", "Redis"],
  },
  {
    title: "Cloud",
    items: ["Google Cloud Platform"],
  },
  {
    title: "DevOps",
    items: ["Docker", "GitHub Actions", "Terraform", "Kubernetes"],
  },
  {
    title: "Monitoring",
    items: ["Prometheus", "Grafana", "Linux", "Nginx"],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "ScaleFlow",
    role: "Senior Software Engineer",
    duration: "2023 — Present",
    achievements: [
      "Designed and shipped event-driven backend services handling 12M+ daily API requests with sub-100ms p99 latency.",
      "Led migration from monolithic deployment to Kubernetes on GCP, reducing deployment time from 45 minutes to 8 minutes.",
      "Built internal developer platform with self-service environments, cutting onboarding time for new engineers by 60%.",
      "Implemented observability stack with Prometheus and Grafana, reducing mean time to detection from hours to minutes.",
    ],
  },
  {
    company: "CloudNest",
    role: "Software Engineer — Platform",
    duration: "2021 — 2023",
    achievements: [
      "Architected multi-tenant API gateway with rate limiting, authentication, and request tracing across 40+ microservices.",
      "Automated infrastructure provisioning with Terraform, eliminating manual setup and reducing environment drift.",
      "Improved database query performance by 3x through connection pooling, indexing strategy, and read replica routing.",
      "Established incident response runbooks and on-call rotation, improving SLA from 99.5% to 99.95%.",
    ],
  },
  {
    company: "BuildKit",
    role: "Backend Engineer",
    duration: "2019 — 2021",
    achievements: [
      "Built REST and GraphQL APIs powering a SaaS product used by 50,000+ active users.",
      "Designed CI/CD pipelines with GitHub Actions, enabling 15+ daily deployments with zero-downtime rollouts.",
      "Introduced Redis caching layer that reduced database load by 70% during peak traffic periods.",
      "Created automated backup and disaster recovery procedures tested quarterly with documented recovery times.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    name: "PulseStream",
    description:
      "Real-time event processing platform that ingests, transforms, and routes millions of events per day. Built for teams that need reliable data pipelines without managing Kafka clusters themselves.",
    techStack: [
      "Go",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "GCP Pub/Sub",
      "Kubernetes",
    ],
    architecture:
      "Event producers publish to a managed message bus. Worker pools consume events in parallel, apply transformations, and write to PostgreSQL with idempotency keys. Redis handles deduplication and rate limiting. Horizontal pod autoscaling responds to queue depth.",
    challenges: [
      "Handling duplicate events during network retries without data corruption.",
      "Maintaining ordering guarantees for related events while scaling consumers horizontally.",
      "Processing spikes of 10x normal traffic during batch imports without dropping messages.",
    ],
    solutions: [
      "Implemented idempotency keys with Redis-backed deduplication windows.",
      "Used partition keys to route related events to the same consumer group.",
      "Added backpressure controls and dead-letter queues with automatic replay for failed batches.",
    ],
    githubUrl: "https://github.com/harithtarmizi/pulsestream",
    liveUrl: "https://pulsestream.dev",
    status: "Production",
  },
  {
    name: "DeployKit",
    description:
      "Internal developer platform for managing deployments, environment variables, and service health across multiple GCP projects. Replaced a fragile shell-script workflow with a unified control plane.",
    techStack: [
      "TypeScript",
      "NestJS",
      "React",
      "Terraform",
      "Docker",
      "GitHub Actions",
    ],
    architecture:
      "NestJS API serves as the control plane, storing deployment configs in PostgreSQL. Terraform modules are generated dynamically per service. GitHub Actions triggers deployments via webhook. React dashboard provides visibility into deployment history and rollback capabilities.",
    challenges: [
      "Engineers deploying to wrong environments due to inconsistent configuration.",
      "No audit trail for infrastructure changes or deployment approvals.",
      "Rollback process required manual kubectl commands and tribal knowledge.",
    ],
    solutions: [
      "Environment-scoped configuration with mandatory approval gates for production.",
      "Full audit log of every deployment, config change, and rollback with actor attribution.",
      "One-click rollback that reverts to the last known good container image and config snapshot.",
    ],
    githubUrl: "https://github.com/harithtarmizi/deploykit",
    status: "Open Source",
  },
  {
    name: "MetricLens",
    description:
      "Observability dashboard that aggregates metrics from Prometheus, application logs, and custom business events into a single operational view. Designed for on-call engineers who need context fast.",
    techStack: [
      "Python",
      "Next.js",
      "Prometheus",
      "Grafana",
      "PostgreSQL",
      "Redis",
    ],
    architecture:
      "Python ingestion service pulls metrics from Prometheus federated endpoints and normalizes them into a time-series store. Next.js frontend renders dashboards with server-side data fetching. Alert correlation engine groups related alerts to reduce notification noise.",
    challenges: [
      "Alert fatigue from uncorrelated notifications during cascading failures.",
      "Dashboard load times exceeding 8 seconds with large metric datasets.",
      "Different teams using inconsistent metric naming conventions.",
    ],
    solutions: [
      "Built alert grouping engine that clusters related alerts within a 5-minute window.",
      "Implemented server-side aggregation and Redis caching for dashboard queries.",
      "Created metric naming guidelines and linting rules enforced at ingestion time.",
    ],
    githubUrl: "https://github.com/harithtarmizi/metriclens",
    liveUrl: "https://metriclens.dev",
    status: "Production",
  },
];

export const PHILOSOPHY_ITEMS: PhilosophyItem[] = [
  {
    title: "Build simple systems",
    description:
      "Complexity is the enemy of reliability. I start with the simplest design that solves the problem, then add complexity only when metrics prove it's necessary.",
  },
  {
    title: "Automate repetitive work",
    description:
      "If I do something twice, I automate it. Manual processes don't scale, and they introduce human error into systems that should be deterministic.",
  },
  {
    title: "Measure before optimizing",
    description:
      "Premature optimization wastes time. I profile first, identify the actual bottleneck, then fix what the data shows — not what I assume is slow.",
  },
  {
    title: "Documentation matters",
    description:
      "Good docs are a force multiplier. Runbooks, architecture decisions, and API references save hours during incidents and onboarding.",
  },
  {
    title: "Developer experience matters",
    description:
      "Engineers are users too. Fast builds, clear error messages, and self-service tooling directly impact how quickly teams ship quality software.",
  },
  {
    title: "Reliability first",
    description:
      "Uptime isn't luck — it's design. Graceful degradation, circuit breakers, and thoughtful error handling keep systems running when components fail.",
  },
  {
    title: "Security first",
    description:
      "Security isn't a feature you add later. Least-privilege access, encrypted secrets, and input validation are baseline requirements, not nice-to-haves.",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "How I Design APIs",
    excerpt:
      "Principles I follow when designing REST and GraphQL APIs — from resource modeling to error handling and versioning strategies that don't break clients.",
    date: "Mar 15, 2025",
    readTime: "8 min read",
    slug: "how-i-design-apis",
  },
  {
    title: "Scaling Node.js Applications",
    excerpt:
      "Practical patterns for scaling Node.js services: connection pooling, worker threads, horizontal scaling, and the profiling tools that revealed our actual bottlenecks.",
    date: "Feb 2, 2025",
    readTime: "12 min read",
    slug: "scaling-nodejs-applications",
  },
  {
    title: "Building Reliable Systems",
    excerpt:
      "What reliability actually means in practice — SLIs, SLOs, error budgets, and the engineering practices that keep services dependable under pressure.",
    date: "Jan 10, 2025",
    readTime: "10 min read",
    slug: "building-reliable-systems",
  },
  {
    title: "What Makes Good Software",
    excerpt:
      "Good software isn't just working code. It's software that's readable, testable, observable, and designed for the people who will maintain it after you.",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    slug: "what-makes-good-software",
  },
  {
    title: "Lessons From Production Incidents",
    excerpt:
      "Five incidents that changed how I think about system design — and the concrete changes we made after each postmortem.",
    date: "Nov 18, 2024",
    readTime: "14 min read",
    slug: "lessons-from-production-incidents",
  },
];
