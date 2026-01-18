export const studies = [
  {
    title: "计算机科学学士",
    institution: "州立大学",
    description:
      "核心计算机科学基础：数据结构、算法、操作系统、网络和数据库；团队在 Web 系统方面的毕业设计项目。",
    tags: [
      "算法",
      "数据结构",
      "操作系统",
      "数据库",
      "网络",
    ],
  },
  {
    title: "软件工程硕士",
    institution: "技术学院",
    description:
      "专注于分布式系统、测试策略和云架构；关于微服务弹性模式的论文。",
    tags: [
      "分布式系统",
      "云架构",
      "测试",
      "微服务",
    ],
  },
];

export type StudyItem = (typeof studies)[number];

