import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "高级软件工程师",
    company: "Acme Cloud",
    region: "美国",
    description:
      "领导多租户平台的设计和交付，将关键单体路径分解为服务，将 p95 延迟降低 40%，定义 SLO 和值班轮换，并指导初级工程师。",
    technologies: [
      "TypeScript",
      "Node.js",
      "React",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GraphQL",
    ],
  },
  {
    title: "资深软件工程师",
    company: "FinchPay",
    region: "全球",
    description:
      "架构了具有幂等性和重试机制的事件驱动支付服务，引入 Kafka 进行异步处理，强制执行 API 版本控制，并通过结构化日志和追踪推动可观测性。",
    technologies: [
      "TypeScript",
      "NestJS",
      "Kafka",
      "PostgreSQL",
      "Redis",
      "gRPC",
      "OpenTelemetry",
      "AWS",
    ],
  },
  {
    title: "高级前端工程师",
    company: "Insight Analytics",
    region: "欧洲",
    description:
      "负责设计系统和 SSR/ISR 策略，将 Core Web Vitals (LCP/INP) 提升至绿色指标，并交付具有强大测试和 Story 覆盖率的无障碍 UI 组件。",
    technologies: [
      "React",
      "Next.js",
      "Astro",
      "Tailwind CSS",
      "Playwright",
      "Vitest",
    ],
  },
  {
    title: "软件工程师",
    company: "LaunchPad",
    region: "巴西",
    description:
      "端到端构建 MVP：设计 REST/GraphQL API，设置带有预览环境的 CI/CD，引入功能标志，并将数据迁移到 Postgres。",
    technologies: [
      "Node.js",
      "Express",
      "GraphQL",
      "Supabase",
      "PostgreSQL",
      "GitHub Actions",
      "Docker",
    ],
  },
];

export type WorkItem = (typeof work)[number];

