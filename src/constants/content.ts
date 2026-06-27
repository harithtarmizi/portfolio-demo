import type { EngineeringDomain, Experience, Project } from "@/types";

export const ABOUT_PARAGRAPHS = [
  "I learned engineering by fixing things that broke in production. That shaped how I design software — as systems with failure modes, not features with deadlines.",
  "My work sits at the intersection of backend services, cloud infrastructure, and reliability. I take products from zero to production: architecture, pipelines, monitoring, and the runbooks that keep teams confident during incidents.",
];

export const ENGINEERING_DOMAINS: EngineeringDomain[] = [
  {
    title: "Backend Systems",
    description:
      "API design, data modeling, and service boundaries built for scale and maintainability.",
    tools: ["TypeScript", "Go", "Node.js", "PostgreSQL", "Redis", "GraphQL"],
  },
  {
    title: "Platform & DevOps",
    description:
      "Infrastructure as code, CI/CD pipelines, and developer platforms that make shipping predictable.",
    tools: ["Kubernetes", "Terraform", "Docker", "GitHub Actions", "GCP"],
  },
  {
    title: "Reliability & SRE",
    description:
      "Observability, SLOs, incident response, and the guardrails that keep systems running at 2 AM.",
    tools: ["Prometheus", "Grafana", "Linux", "Nginx", "On-call"],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "ScaleFlow",
    role: "Senior Software Engineer",
    duration: "2023 — Present",
    startDate: "2023-01",
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
    startDate: "2021-03",
    endDate: "2023-12",
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
    startDate: "2019-06",
    endDate: "2021-02",
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
    slug: "pulsestream",
    name: "PulseStream",
    tagline: "Real-time event processing at scale, without managing Kafka.",
    overview:
      "PulseStream ingests, transforms, and routes millions of events per day for teams that need reliable data pipelines. I designed and built the full system — from message ingestion to horizontal autoscaling — and operate it in production.",
    description:
      "Real-time event processing platform that ingests, transforms, and routes millions of events per day. Built for teams that need reliable data pipelines without managing Kafka clusters themselves.",
    problem:
      "Teams needed event-driven architectures but lacked the infrastructure expertise to run message brokers reliably. Existing managed services were either too expensive or too limited for their throughput requirements.",
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
    decisions: [
      {
        decision: "Managed Pub/Sub over self-hosted Kafka",
        tradeoff: "Less control over broker tuning",
        outcome: "Eliminated ops overhead; team focused on pipeline logic instead of cluster health",
      },
      {
        decision: "At-least-once delivery with idempotency keys",
        tradeoff: "Extra storage for deduplication windows",
        outcome: "99.9% delivery guarantee without distributed transaction complexity",
      },
      {
        decision: "Partition keys for ordering",
        tradeoff: "Hot partitions under skewed workloads",
        outcome: "Ordering preserved where it mattered; horizontal scale everywhere else",
      },
    ],
    impact: [
      { label: "Events processed daily", value: "10M+" },
      { label: "Ingestion p99 latency", value: "<100ms" },
      { label: "Delivery guarantee", value: "99.9%" },
    ],
    lessonsLearned: [
      "Idempotency keys are cheaper than distributed transactions — design for at-least-once from day one.",
      "Dead-letter queues aren't optional; they're how you sleep during batch imports.",
      "Horizontal scaling breaks ordering guarantees — partition keys are a design decision, not an optimization.",
    ],
    githubUrl: "https://github.com/harithtarmizi/pulsestream",
    liveUrl: "https://pulsestream.dev",
    status: "Production",
    year: "2024",
    featured: true,
  },
  {
    slug: "metriclens",
    name: "MetricLens",
    tagline: "Operational context for on-call engineers, in one view.",
    overview:
      "MetricLens aggregates metrics from Prometheus, application logs, and custom business events into a single operational view. I built the ingestion pipeline, alert correlation engine, and dashboard frontend used by on-call teams during incidents.",
    description:
      "Observability dashboard that aggregates metrics from Prometheus, application logs, and custom business events into a single operational view. Designed for on-call engineers who need context fast.",
    problem:
      "On-call engineers spent critical minutes switching between Prometheus, Grafana, and log aggregators during incidents. Uncorrelated alerts caused alert fatigue and delayed root cause identification.",
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
    decisions: [
      {
        decision: "Server-side aggregation over client-side charting",
        tradeoff: "More backend compute per dashboard load",
        outcome: "Dashboard load times dropped from 8s to under 1.5s",
      },
      {
        decision: "Alert correlation window of 5 minutes",
        tradeoff: "Slight delay before grouped notifications",
        outcome: "Alert volume reduced by 70% during cascading failures",
      },
      {
        decision: "Metric naming lint at ingestion",
        tradeoff: "Rejected metrics from non-compliant services",
        outcome: "Cross-team dashboards became reliable within one quarter",
      },
    ],
    impact: [
      { label: "Dashboard load time", value: "<1.5s" },
      { label: "Alert volume reduction", value: "70%" },
      { label: "Teams onboarded", value: "6" },
    ],
    lessonsLearned: [
      "Alert correlation is a product feature, not an ops afterthought — design it before alert volume becomes unmanageable.",
      "Metric naming conventions need enforcement, not documentation.",
      "On-call tools must load fast under stress; optimize the p99, not the happy path.",
    ],
    githubUrl: "https://github.com/harithtarmizi/metriclens",
    liveUrl: "https://metriclens.dev",
    status: "Production",
    year: "2024",
    featured: true,
  },
  {
    slug: "deploykit",
    name: "DeployKit",
    tagline: "Internal developer platform for predictable deployments.",
    overview:
      "DeployKit replaced a fragile shell-script deployment workflow with a unified control plane for managing deployments, environment variables, and service health across multiple GCP projects.",
    description:
      "Internal developer platform for managing deployments, environment variables, and service health across multiple GCP projects. Replaced a fragile shell-script workflow with a unified control plane.",
    problem:
      "Engineers were deploying to wrong environments due to inconsistent configuration. There was no audit trail for infrastructure changes, and rollbacks required manual kubectl commands and tribal knowledge.",
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
    decisions: [
      {
        decision: "Dynamic Terraform generation per service",
        tradeoff: "Complexity in module templating",
        outcome: "Consistent infrastructure across 30+ services without manual drift",
      },
      {
        decision: "Mandatory production approval gates",
        tradeoff: "Slower deploy velocity for prod",
        outcome: "Zero wrong-environment deployments after launch",
      },
      {
        decision: "Config snapshots for rollback",
        tradeoff: "Storage cost for historical configs",
        outcome: "Rollback time reduced from 20 minutes to under 2 minutes",
      },
    ],
    impact: [
      { label: "Services managed", value: "30+" },
      { label: "Rollback time", value: "<2 min" },
      { label: "Wrong-env deploys", value: "0" },
    ],
    lessonsLearned: [
      "Developer platforms succeed when they remove decisions, not when they add options.",
      "Audit logs are trust infrastructure — build them before you need them in a postmortem.",
      "One-click rollback is the feature engineers remember; everything else is table stakes.",
    ],
    githubUrl: "https://github.com/harithtarmizi/deploykit",
    status: "Open Source",
    year: "2023",
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((project) => project.featured);
}

export function getSecondaryProjects(): Project[] {
  return PROJECTS.filter((project) => !project.featured);
}
