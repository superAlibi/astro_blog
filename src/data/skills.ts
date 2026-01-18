export const skills = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/></svg>`,
    title: "系统设计与架构",
    description: "设计可扩展、弹性的服务，清晰的边界和数据模型；通过 ADR/RFC 文档记录实用的权衡决策。",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 17l-5-5 5-5v3l-2 2 2 2v3zm8-10l5 5-5 5v-3l2-2-2-2V7z"/></svg>`,
    title: "全栈开发",
    description: "使用 React/Next.js、Node.js 和 TypeScript 开发端到端功能，注重用户体验、可访问性和性能。",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a3 3 0 110 6 3 3 0 010-6zm0 6v6m0 0a3 3 0 100 6 3 3 0 000-6zm0 0a3 3 0 10-6 0 3 3 0 006 0zm6 0a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
    title: "API 与分布式系统",
    description: "设计 REST/GraphQL API、后台任务、队列、幂等性、重试机制和可观测性，确保系统可靠性。",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C7 3 4 4.79 4 7v10c0 2.21 3 4 8 4s8-1.79 8-4V7c0-2.21-3-4-8-4zm0 2c3.87 0 6 .93 6 2s-2.13 2-6 2-6-.93-6-2 2.13-2 6-2zm0 6c3.87 0 6 .93 6 2s-2.13 2-6 2-6-.93-6-2 2.13-2 6-2z"/></svg>`,
    title: "数据库与缓存",
    description: "使用 Postgres 进行模式设计、迁移和性能调优；使用 Redis 进行缓存和限流。",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"/></svg>`,
    title: "测试与 CI/CD",
    description: "使用 Jest 和 Playwright 进行单元、集成和端到端测试；通过 GitHub Actions 流水线、预览环境和质量门控确保代码质量。",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 18H6a4 4 0 010-8 5 5 0 019.9-1.5A4.5 4.5 0 1119 18z"/></svg>`,
    title: "云与 DevOps",
    description: "使用 AWS、Docker 和 Terraform；安全部署、监控/告警和成本意识运维。",
  },
];

export type Skill = (typeof skills)[number];

