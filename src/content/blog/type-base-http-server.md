---
title: "typescript优先的web服务器"
description: '这是一个关于我自己的服务器实现的说明性文章, 明确了我的服务器技术选型'
pubDate: '2026-1-25 18:35'
---


最近一直想编写一些关于oauth + sso 的文章, 但是没有示例不是很好体验这个过程. 遂一直没有写. 基于此目的, 我将先实现服务, 再完成这个文章

最近[与 ai 讨论(需具备国际网络访问能力)](https://share.google/aimode/N9CKblfu2VhHu4c8p)时, 我决定放弃 基于kotlin的编写一个服务实例, 现在对其最大的尊重仅存于  Android 上了. 其他方面我并不是非常愿意使用. 即使它新造了一个 web 服务器框架 ktor. 

## 技术选型

基于 [ai 的讨论(需具备国际网络访问能力)](https://share.google/aimode/N9CKblfu2VhHu4c8p)与具体目标的讨论时, 最终选型出以下技术框架, 且我十分认可的选型

1. denojs(运行时)
2. Drizzle: 数据库操作库
3. drizzle-zod: 将Drizzle 转化为 zod-schame
4. Hono: web服务器, 直接使用时, 作为私有化的api使用. 
5. @hono/zod-openapi: 基于 drizzle-zod , 生成符合 openapi 3.0标准的json 文档内容.
6. Scalar: 基于 @hono/zod-openapi 生成的 openapi json 生成漂亮的api文档


**选型优势**

- 自动同步（Single Source of Truth）：当你修改 Drizzle 数据库字段时，Zod 校验器、API 类型检查以及 Swagger 文档会同步更新。这证明了系统架构的高内聚性。
- 多格式元数据：在 responses 中，你可以定义同一个 Schema 对应不同的 content-type。Swagger UI 会清晰地展示出你的 API 支持 Media Type Negotiation（媒体类型协商）。
- 图查询可视化：你可以在 OpenAPI 的 components 中定义嵌套关系（Nested Objects），直观地展示 Drizzle 生成的图状数据结构。



