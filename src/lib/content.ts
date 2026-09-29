// 简历内容数据层：全部信息取自用户提供的简历 PDF，修改内容请只改这里

export const profile = {
  name: "周学宇",
  nameEn: "Xueyu Zhou",
  title: "香港理工大学 · 统计学博士生",
  school: "香港理工大学",
  degree: "统计学博士生",
  department: "数据科学与人工智能学系",
  advisor: "导师：黄坚 教授",
  bio: "我的研究以统计学为基础，关注数据如何塑造大语言模型的学习与推理能力，主要研究合成数据的构建与利用、模型后训练，以及推理中的采样与解码方法。",
  email: "xueyu.zhou@connect.polyu.hk",
  tags: ["LLM Reasoning", "Synthetic Data", "Post-training", "Representation Learning"],
};

export const navItems = [
  { id: "about", label: "关于" },
  { id: "education", label: "教育" },
  { id: "research", label: "研究" },
  { id: "papers", label: "论文" },
  { id: "skills", label: "技能" },
  { id: "contact", label: "联系" },
];

export type Education = {
  period: string;
  school: string;
  major: string;
  degree: string;
  highlights: string[];
};

export const educations: Education[] = [
  {
    period: "2023.01 – 至今",
    school: "香港理工大学",
    major: "数据科学与人工智能学系",
    degree: "统计学 · 博士",
    highlights: [
      "奖项荣誉：香港理工大学校长奖学金",
      "研究方向：LLM Reasoning、Synthetic Data、Post-training、Representation Learning",
    ],
  },
  {
    period: "2018.09 – 2022.06",
    school: "四川大学",
    major: "数学学院 · 国家“珠峰计划”数学拔尖班",
    degree: "数学与应用数学 · 学士",
    highlights: [
      "奖项荣誉：国家奖学金",
    ],
  },
];

export type Project = {
  hidden?: boolean;
  title: string;
  period: string;
  summary: string;
  outcome: string;
  detail: { label: string; text: string }[];
};

const allProjects: Project[] = [
  {
    title: "大语言模型推理的 Power Sampling 与 Test-Time Scaling 研究",
    period: "2026.02 – 2026.08",
    outcome: "",
    summary:
      "发现 Power Sampling 的锐化强度与模型表现呈显著非单调关系，提出无需训练、无需外部 reward model 的自适应锐化方法 ACE，在 5 个模型中的 4 个取得最高平均准确率。",
    detail: [
      {
        label: "问题定义",
        text: "研究大语言模型 test-time scaling 中通过 Power Sampling 对采样轨迹分布进行锐化时，锐化强度与模型表现的关系；在 Qwen2.5、Qwen3、Phi 等 5 个模型上发现锐化强度与数学、科学推理及代码生成性能呈显著非单调关系，且最优强度随模型与任务变化。",
      },
      {
        label: "算法方案设计",
        text: "对模型表现进行 preservation–recovery 分解，刻画高概率推理路径利用与备选路径探索之间的 concentration–exploration trade-off；进一步提出 ACE，结合 Sequential Monte Carlo 与高熵 token 监测，实现无需训练及外部 reward model 的自适应锐化强度调整。",
      },
      {
        label: "实验结论及成果",
        text: "在 HumanEval、GPQA-Diamond、MATH500、AIME 2026 上系统评测，ACE 在 5 个模型中的 4 个取得最高平均准确率；在 Qwen3-8B-Base 上较固定参数 SMC 平均准确率提升 2.9 个百分点，同时仅引入较小额外推理开销。",
      },
    ],
  },
  {
    title: "Masked Diffusion Language Model 中基于 token 相关性感知的解码策略研究",
    period: "2025.11 – 2026.01",
    outcome: "ACL 2026",
    summary:
      "指出 confidence / entropy 等 token-level 解码准则忽略 token 间依赖的缺陷，提出训练无关的 Dependency-Oriented Sampler (DOS)，single-block 解码下取得大幅性能提升。",
    detail: [
      {
        label: "问题定义",
        text: "研究 Masked Diffusion Language Model 的生成机制，发现 confidence、entropy 等 token-level 解码准则忽略 token 间依赖关系，容易造成边缘分布与目标联合分布失配，并使性能对 block size 较为敏感。",
      },
      {
        label: "算法方案设计",
        text: "提出训练无关的 Dependency-Oriented Sampler (DOS)，利用 Transformer 多头注意力矩阵近似 token 间依赖，优先更新与已生成上下文依赖更强的 masked tokens；无需修改模型参数，并可直接与 EB-Sampler 等并行解码方法结合。",
      },
      {
        label: "实验结论及成果",
        text: "在 LLaDA-Instruct-8B、Dream-7B 的代码与数学推理任务上验证，DOS 在 single-block 解码下取得大幅性能提升，在 block decoding 下相较现有方法最高提升 2.4 个准确率百分点；与 EB-Sampler 结合后进一步提升并行解码效率；论文发表于 ACL 2026。",
      },
    ],
  },
  {
    title: "生成式模型中的合成数据使用",
    period: "2025.04 – 2025.09",
    outcome: "",
    summary:
      "揭示直接混合真实与合成数据会引入 distribution shift 与 model collapse，提出 CASD 将数据来源作为条件变量联合学习，FFHQ 上 1k 真实样本 + 合成数据即优于 10k 真实样本基线（FID 4.26 vs. 4.48）。",
    detail: [
      {
        label: "问题定义",
        text: "研究 foundation model 生成的合成数据在生成学习中的有效利用，发现直接混合真实与合成数据会将生成目标由真实分布改变为另一个混合分布，从而引入 distribution shift、model collapse 等问题。",
      },
      {
        label: "算法方案设计",
        text: "提出 Conditional Augmentation with Synthetic Data (CASD)，将数据来源作为条件变量联合学习真实域与合成域，利用共享表示迁移合成数据中的结构信息，同时保持真实数据分布作为生成目标；并建立 real-domain target preservation 与 Wasserstein-1 收敛理论。",
      },
      {
        label: "实验结论及成果",
        text: "使用 CIFAR-10、FFHQ 及表格数据等不同类型真实数据，与 StyleGAN、EDM、SD3、FLUX 等合成数据模型进行实验验证；小样本场景下 CASD 在各组合均能提升生成模型表现，同时显著提升生成多样性并降低 memorization / replication。",
      },
    ],
  },
];

export const projects = allProjects.filter((project) => !project.hidden);

export type PaperStatus = "published" | "submitted" | "reviewing" | "preprint";

export type Paper = {
  hidden?: boolean;
  title: string;
  authors: string;
  venue: string;
  status: PaperStatus;
  statusLabel: string;
  coFirst?: boolean;
};

const allPapers: Paper[] = [
  {
    title: "DOS: Dependency-Oriented Sampler for Masked Diffusion Language Models",
    authors: "Xueyu Zhou, Yangrong Hu, Jian Huang",
    venue: "ACL 2026",
    status: "published",
    statusLabel: "已发表",
  },
  {
    title: "Representation-based Masked Diffusion Model",
    authors: "Yangrong Hu, Ding Huang, Xueyu Zhou, Jian Huang",
    venue: "EMNLP 2026",
    status: "published",
    statusLabel: "已发表",
  },
  {
    title: "Is Sharper Always Better? Rethinking the Role of Sharpness in Power Sampling for Language Models",
    authors: "Xueyu Zhou, Bang An, Bernard Ghanem, Jian Huang",
    venue: "Submitted to ICLR 2027",
    status: "submitted",
    statusLabel: "在投 ICLR 2027",
  },
  {
    title: "Self-Privileged Fine-Tuning",
    authors: "Yangrong Hu*, Xueyu Zhou*, Yue Wu, Jian Huang",
    venue: "Submitted to ICLR 2027",
    status: "submitted",
    statusLabel: "在投 ICLR 2027",
    coFirst: true,
  },
  {
    title: "Bootstrapped On-Policy Distillation",
    authors: "Yue Wu*, Xueyu Zhou*, Yangrong Hu, Jian Huang",
    venue: "Submitted to ICLR 2027",
    status: "submitted",
    statusLabel: "在投 ICLR 2027",
    coFirst: true,
  },
  {
    title: "FamiFT: Familiarity-Adaptive Supervised Fine-Tuning",
    authors: "Yue Wu, Yangrong Hu, Xueyu Zhou, Jian Huang",
    venue: "Submitted to ICLR 2027",
    status: "submitted",
    statusLabel: "在投 ICLR 2027",
  },
  {
    title: "Conditional Augmentation Enables Effective Use of Synthetic Data in Diffusion Models",
    hidden: true,
    authors: "Xueyu Zhou, Yuan Gao, Jian Huang",
    venue: "Annals of Applied Statistics",
    status: "reviewing",
    statusLabel: "Under Review",
  },
  {
    title: "Transfer Learning Enhanced Sufficient Representation Learning",
    authors: "Yeheng Ge∗, Xueyu Zhou∗, Jian Huang",
    venue: "arXiv preprint",
    status: "preprint",
    statusLabel: "arXiv",
    coFirst: true,
  },
  {
    title: "Fair Sufficient Representation Learning",
    authors: "Xueyu Zhou, Chun Yin Ip, Jian Huang",
    venue: "arXiv preprint",
    status: "preprint",
    statusLabel: "arXiv",
  },
];

// 暂不展示在投会议论文，保留原始记录以便恢复。
export const papers = allPapers.filter((paper) => !paper.hidden && paper.status !== "submitted");

export const competitions = [
  {
    name: "腾讯广告算法大赛（2026）",
    result: "复赛第 12 / 1873 名 · Top 1%",
  },
  {
    name: "腾讯广告算法大赛（2025）",
    result: "复赛第 23 / 1334 名 · Top 2% · 独立参赛",
  },
];

export const skills = [
  {
    name: "模型开发与实现",
    desc: "使用 Python 与 PyTorch 实现模型和研究算法，结合 Transformers、vLLM 开展语言模型训练与推理实验，将论文方法转化为可复现的代码与实验流程。",
  },
  {
    name: "语言模型与推理算法",
    desc: "围绕语言模型的采样、解码与推理时计算开展算法研究，关注采样分布与生成质量的关系，具有自回归模型、扩散语言模型及并行解码的研究经验。",
  },
  {
    name: "统计建模与理论分析",
    desc: "以概率统计、线性代数与优化为基础，从分布建模和统计学习的角度分析问题，结合生成式模型、序贯蒙特卡洛与表示学习方法，开展模型设计、理论推导和实验验证。",
  },
  {
    name: "实验设计与迭代",
    desc: "独立推进从数据处理、模型训练到推理评估的实验流程，通过超参数调优与结果分析定位问题，将实验观察反馈到算法改进中，兼顾方法效果与实现效率。",
  },
];
