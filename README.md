# 西安小升初智能评估系统

基于AI技术的智能小升初评估和升学规划系统，为西安地区学生和家长提供个性化建议。

## 🚀 功能特色

*   **🤖 AI智能评估与建议**: 结合学生能力、家庭情况与政策，生成个性化升学策略。
*   **🏫 个性化学校推荐**: 基于地理位置、入学顺位、民办意向等，精准推荐目标学校。
*   **📊 可视化能力分析**: 通过图表直观展示学生各项能力维度，发现优势与短板。
*   **📅 定制化时间规划**: 提供清晰的升学关键时间节点，帮助家长提前准备。
*   **💬 智能对话助手**: 7x24小时在线答疑，解答关于政策、时间、摇号等各类问题。

## 🛠️ 技术栈

*   **前端**: 纯前端HTML/CSS/JavaScript
*   **AI引擎**: 阿里云百炼大模型API
*   **数据可视化**: Chart.js
*   **部署平台**: Vercel

## 🌐 在线访问

部署地址：[https://xian-xiaoshenchu-assessment.vercel.app/](https://xian-xiaoshenchu-assessment.vercel.app/)

*(注：Vercel 域名中为 "shen" 而非 "sheng")*

## 📄 使用说明

1.  **填写学生能力评估**: 完成学业成绩、综合素养、学习习惯等6个维度的评分。
2.  **输入家庭基本信息**: 准确填写户籍、居住地、房产情况等关键信息。
3.  **查看AI生成的个性化报告**: 获取包含学校推荐、时间规划、政策建议的综合报告。
4.  **获取学校推荐和升学策略**: 根据报告制定孩子的升学计划。

## 📁 项目结构

xian-xiaoshengchu-assessment/
├── index.html # 主页面及核心逻辑
├── content/ # 内容资源目录
│ └── knowledge_base.json # 动态内容知识库 (FAQ, 学校信息等)
├── README.md # 项目说明 (此文件)
├── vercel.json # Vercel 部署配置
├── .gitignore # Git 忽略文件配置
└── package.json # 项目配置 (可选)

## 🎯 核心功能

### 六步评估流程

1.  **能力评估**: 学业成绩、综合素养、学习习惯、心理素质、家庭支持、学科倾向。
2.  **户籍与居住**: 户籍与实际居住地信息收集。
3.  **学区房产**: 入学顺位评估与房产情况分析。
4.  **民办意向**: 学校偏好、预算及摇号意愿调查。
5.  **深度需求**: 教育目标、学校看重维度、特殊需求、风险偏好、时间投入。
6.  **AI推荐**: 生成个性化学校推荐与升学策略。

### 双模式运行

*   **本地模式**: 内置规则引擎，无需配置即可使用基础功能。
*   **AI模式**: 连接阿里云百炼，提供更智能、更个性化的分析与建议。

## 🔧 快速开始

### 克隆项目

```bash
git clone https://github.com/litongxue7788/xian-xiaoshengchu-assessment.git
cd xian-xiaoshengchu-assessment
部署到 Vercel
将项目推送至您的 GitHub 账户。
访问 Vercel 并使用 GitHub 账户登录。
在 Vercel 仪表板中点击 "New Project"，导入您刚刚创建的 GitHub 仓库。
Vercel 会自动检测并完成部署。
配置 AI 功能（可选）
获取 阿里云百炼 的 API Key 和 APP ID。
部署完成后，访问网站，在右上角点击 "本地模式" 按钮。
输入 API Key 和 APP ID，点击 "保存并测试"。
测试成功后，系统将启用 AI 智能推荐功能。
📋 系统要求
浏览器: 现代浏览器（Chrome, Firefox, Safari, Edge）
JavaScript: 需要启用 JavaScript
网络: 访问网站需要网络连接，AI功能需要额外的网络请求
🤝 贡献指南
欢迎提交 Issue 和 Pull Request 来改进项目。

📄 许可证
MIT License

📞 联系我们
如有问题，请通过 GitHub Issues 反馈。

让AI技术为每个孩子的升学之路提供科学指导！

### 主要修改和完善点：

1.  **修正在线访问链接**: 将 `xian-xiaoshengchu` 修正为实际部署的 `xian-xiaoshenchu`。
2.  **更新项目结构**: 根据您的文件目录，添加了 `content/` 文件夹和 `knowledge_base.json`，这是您根据要求优化的重要内容。
3.  **优化描述**: 使功能特色和核心功能的描述更清晰、更贴合实际。
4.  **更新快速开始**:
    *   **克隆项目**: 将 `your-username` 更新为您实际的 GitHub 用户名 `litongxue7788`。
    *   **部署到 Vercel**: 简化了描述，更侧重于导入 GitHub 仓库的步骤。
    *   **配置 AI 功能**: 提供了更清晰的 UI 操作指引。
5.  **格式化**: 保持了清晰的 Markdown 结构，便于阅读。

这个 `README.md` 现在更准确地反映了您的项目结构和功能。
