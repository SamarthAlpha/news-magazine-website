export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  image: string;
  tags: string[];
  featured?: boolean;
  trending?: boolean;
  views?: number;
}

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: "The Quantum Leap: How Enterprise Computing Will Change in 2026",
    excerpt: "As quantum processors hit the 1000-qubit milestone, CIOs must prepare for a paradigm shift in cryptography and optimization.",
    content: `
      <p>The dawn of practical quantum computing is no longer a distant horizon—it is here. With major players announcing stable 1000-qubit processors, the implications for enterprise security and data processing are profound.</p>
      
      <h3>The Cryptography Crisis</h3>
      <p>Current encryption standards like RSA are at risk. "Store now, decrypt later" attacks are already happening. Forward-thinking CISOs are migrating to post-quantum cryptography (PQC) standards immediately.</p>
      
      <h3>Optimization at Scale</h3>
      <p>Beyond security, quantum offers unprecedented power for logistics, drug discovery, and financial modeling. Early adopters in the banking sector are already running hybrid algorithms to optimize portfolios in real-time.</p>
      
      <p>The question is no longer if, but when to integrate quantum readiness into your roadmap.</p>
    `,
    category: "Enterprise",
    author: {
      name: "Dr. Elena Rostova",
      role: "Senior Tech Analyst",
      avatar: "https://picsum.photos/seed/elena/100/100"
    },
    publishedAt: "2026-02-26T09:00:00Z",
    readTime: "6 min read",
    image: "https://picsum.photos/seed/quantum/1200/800",
    tags: ["Quantum Computing", "Cybersecurity", "Innovation"],
    featured: true,
    views: 12543
  },
  {
    id: '2',
    title: "Generative AI in the Boardroom: Moving Beyond the Hype",
    excerpt: "70% of Fortune 500 companies are piloting GenAI, but only 10% have moved to production. Here is the blueprint for scaling.",
    content: "Full content here...",
    category: "AI & ML",
    author: {
      name: "Marcus Chen",
      role: "AI Strategy Lead",
      avatar: "https://picsum.photos/seed/marcus/100/100"
    },
    publishedAt: "2026-02-25T14:30:00Z",
    readTime: "4 min read",
    image: "https://picsum.photos/seed/genai/1200/800",
    tags: ["AI", "Leadership", "Strategy"],
    trending: true,
    views: 9876
  },
  {
    id: '3',
    title: "Sustainable Cloud: The New Metric for CTOs",
    excerpt: "GreenOps is becoming as critical as FinOps. How to measure and reduce your digital carbon footprint without sacrificing performance.",
    content: "Full content here...",
    category: "Cloud",
    author: {
      name: "Sarah Jenkins",
      role: "Cloud Architect",
      avatar: "https://picsum.photos/seed/sarah/100/100"
    },
    publishedAt: "2026-02-24T11:15:00Z",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/cloud/1200/800",
    tags: ["Sustainability", "Cloud Computing", "ESG"],
    trending: true,
    views: 8432
  },
  {
    id: '4',
    title: "Cyber Resilience Act: What European Regulations Mean for US Tech",
    excerpt: "The ripple effect of the EU's new cybersecurity laws is being felt in Silicon Valley. Compliance is now a global standard.",
    content: "Full content here...",
    category: "Policy",
    author: {
      name: "James Thorne",
      role: "Legal Tech Correspondent",
      avatar: "https://picsum.photos/seed/james/100/100"
    },
    publishedAt: "2026-02-23T08:45:00Z",
    readTime: "7 min read",
    image: "https://picsum.photos/seed/policy/1200/800",
    tags: ["Regulation", "GDPR", "Compliance"],
    views: 7654
  },
  {
    id: '5',
    title: "The Death of the Legacy ERP",
    excerpt: "Composable architecture is dismantling the monoliths. Why your next ERP upgrade should be your last.",
    content: "Full content here...",
    category: "Enterprise",
    author: {
      name: "Priya Patel",
      role: "Enterprise Systems Expert",
      avatar: "https://picsum.photos/seed/priya/100/100"
    },
    publishedAt: "2026-02-22T16:20:00Z",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/erp/1200/800",
    tags: ["ERP", "Digital Transformation", "SaaS"],
    views: 6543
  },
  {
    id: '6',
    title: "Neural Interfaces: The Next Frontier for Accessibility",
    excerpt: "Brain-computer interfaces are moving from labs to clinical trials, offering new hope for paralysis patients.",
    content: "Full content here...",
    category: "AI & ML",
    author: {
      name: "Dr. Aris Thorne",
      role: "Biotech Editor",
      avatar: "https://picsum.photos/seed/aris/100/100"
    },
    publishedAt: "2026-02-21T10:00:00Z",
    readTime: "8 min read",
    image: "https://picsum.photos/seed/neural/1200/800",
    tags: ["Biotech", "AI", "Accessibility"],
    views: 5432
  },
  {
    id: '7',
    title: "Zero Trust 2.0: Identity is the New Perimeter",
    excerpt: "With remote work here to stay, traditional firewalls are obsolete. Identity-first security is the only way forward.",
    content: "Full content here...",
    category: "Cybersecurity",
    author: {
      name: "Alex V",
      role: "Security Analyst",
      avatar: "https://picsum.photos/seed/alex/100/100"
    },
    publishedAt: "2026-02-20T13:00:00Z",
    readTime: "6 min read",
    image: "https://picsum.photos/seed/security/1200/800",
    tags: ["Security", "Zero Trust", "Identity"],
    views: 4321
  },
  {
    id: '8',
    title: "The Rise of Sovereign Clouds",
    excerpt: "Nations are building their own cloud infrastructures to protect data sovereignty. What this means for AWS, Azure, and Google.",
    content: "Full content here...",
    category: "Cloud",
    author: {
      name: "Sarah Jenkins",
      role: "Cloud Architect",
      avatar: "https://picsum.photos/seed/sarah/100/100"
    },
    publishedAt: "2026-02-19T09:30:00Z",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/sovereign/1200/800",
    tags: ["Cloud", "Geopolitics", "Infrastructure"],
    views: 3210
  },
  {
    id: '9',
    title: "Blockchain in Supply Chain: A Reality Check",
    excerpt: "After years of pilots, Maersk and IBM's TradeLens shutdown raised questions. Is there still a case for crypto in logistics?",
    content: "Full content here...",
    category: "Blockchain",
    author: {
      name: "David Kim",
      role: "FinTech Reporter",
      avatar: "https://picsum.photos/seed/david/100/100"
    },
    publishedAt: "2026-02-18T15:45:00Z",
    readTime: "7 min read",
    image: "https://picsum.photos/seed/blockchain/1200/800",
    tags: ["Blockchain", "Supply Chain", "Logistics"],
    views: 2109
  },
  {
    id: '10',
    title: "The CIO's Guide to 6G",
    excerpt: "5G is still rolling out, but 6G research is well underway. Expect terahertz frequencies and AI-native networks by 2030.",
    content: "Full content here...",
    category: "Technology",
    author: {
      name: "Dr. Elena Rostova",
      role: "Senior Tech Analyst",
      avatar: "https://picsum.photos/seed/elena/100/100"
    },
    publishedAt: "2026-02-17T11:00:00Z",
    readTime: "4 min read",
    image: "https://picsum.photos/seed/6g/1200/800",
    tags: ["Telecom", "6G", "Future Tech"],
    views: 1987
  },
  {
    id: '11',
    title: "Silicon Valley's New obsession: Nuclear Fusion Startups",
    excerpt: "Tech billionaires are pouring billions into fusion energy. Is unlimited clean power finally within reach?",
    content: "Full content here...",
    category: "Startups",
    author: {
      name: "Michael Chang",
      role: "Energy Tech Reporter",
      avatar: "https://picsum.photos/seed/michael/100/100"
    },
    publishedAt: "2026-02-16T08:00:00Z",
    readTime: "6 min read",
    image: "https://picsum.photos/seed/fusion/1200/800",
    tags: ["Energy", "Startups", "Innovation"],
    views: 1876
  },
  {
    id: '12',
    title: "The Remote Work Reckoning: 2026 Data",
    excerpt: "New studies show hybrid models are winning, but fully remote companies are struggling with retention.",
    content: "Full content here...",
    category: "Enterprise",
    author: {
      name: "Sarah Jenkins",
      role: "Cloud Architect",
      avatar: "https://picsum.photos/seed/sarah/100/100"
    },
    publishedAt: "2026-02-15T14:20:00Z",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/remote/1200/800",
    tags: ["Workforce", "Enterprise", "HR Tech"],
    views: 1765
  },
  {
    id: '13',
    title: "SpaceX Starship: The Mars Timeline Accelerates",
    excerpt: "Successful orbital tests have moved the Mars colony timeline up by two years. NASA is watching closely.",
    content: "Full content here...",
    category: "Technology",
    author: {
      name: "Dr. Elena Rostova",
      role: "Senior Tech Analyst",
      avatar: "https://picsum.photos/seed/elena/100/100"
    },
    publishedAt: "2026-02-14T10:00:00Z",
    readTime: "8 min read",
    image: "https://picsum.photos/seed/space/1200/800",
    tags: ["Space", "Innovation", "SpaceX"],
    views: 1654
  },
  {
    id: '14',
    title: "Algorithmic Trading in 2026: AI vs. AI",
    excerpt: "When trading bots fight each other, market volatility takes on a new meaning. Regulators are stepping in.",
    content: "Full content here...",
    category: "Analysis",
    author: {
      name: "David Kim",
      role: "FinTech Reporter",
      avatar: "https://picsum.photos/seed/david/100/100"
    },
    publishedAt: "2026-02-13T09:15:00Z",
    readTime: "7 min read",
    image: "https://picsum.photos/seed/trading/1200/800",
    tags: ["FinTech", "AI", "Regulation"],
    views: 1543
  },
  {
    id: '15',
    title: "The Smart City Privacy Paradox",
    excerpt: "Citizens want safer, cleaner cities, but are they willing to trade total surveillance for it?",
    content: "Full content here...",
    category: "Policy",
    author: {
      name: "James Thorne",
      role: "Legal Tech Correspondent",
      avatar: "https://picsum.photos/seed/james/100/100"
    },
    publishedAt: "2026-02-12T16:45:00Z",
    readTime: "6 min read",
    image: "https://picsum.photos/seed/smartcity/1200/800",
    tags: ["Privacy", "Smart Cities", "IoT"],
    views: 1432
  },
  {
    id: '16',
    title: "Biotech Breakthrough: CRISPR 2.0",
    excerpt: "New gene-editing techniques are more precise and less expensive. The era of personalized medicine is here.",
    content: "Full content here...",
    category: "Technology",
    author: {
      name: "Dr. Aris Thorne",
      role: "Biotech Editor",
      avatar: "https://picsum.photos/seed/aris/100/100"
    },
    publishedAt: "2026-02-11T11:30:00Z",
    readTime: "9 min read",
    image: "https://picsum.photos/seed/biotech/1200/800",
    tags: ["Biotech", "HealthTech", "Innovation"],
    views: 1321
  },
  {
    id: '17',
    title: "The Ethics of AI Agents: Who is Responsible When Autonomous Bots Fail?",
    excerpt: "As AI agents begin executing complex tasks and spending money, legal frameworks are struggling to keep up with liability questions.",
    content: "Full content here...",
    category: "AI & ML",
    author: {
      name: "Marcus Chen",
      role: "AI Strategy Lead",
      avatar: "https://picsum.photos/seed/marcus/100/100"
    },
    publishedAt: "2026-02-10T09:00:00Z",
    readTime: "6 min read",
    image: "https://picsum.photos/seed/ai-ethics/1200/800",
    tags: ["AI", "Ethics", "Legal"],
    views: 8921
  },
  {
    id: '18',
    title: "Multi-Cloud Mastery: Orchestrating AWS, Azure, and GCP",
    excerpt: "Managing a tri-cloud strategy is complex but necessary for resilience. Here are the tools top CTOs are using.",
    content: "Full content here...",
    category: "Cloud",
    author: {
      name: "Sarah Jenkins",
      role: "Cloud Architect",
      avatar: "https://picsum.photos/seed/sarah/100/100"
    },
    publishedAt: "2026-02-09T14:15:00Z",
    readTime: "7 min read",
    image: "https://picsum.photos/seed/multicloud/1200/800",
    tags: ["Cloud", "DevOps", "Infrastructure"],
    views: 7432
  },
  {
    id: '19',
    title: "Ransomware 3.0: AI-Powered Attacks on the Rise",
    excerpt: "Cybercriminals are using LLMs to craft perfect phishing emails and adaptive malware. Your defense needs AI too.",
    content: "Full content here...",
    category: "Cybersecurity",
    author: {
      name: "Alex V",
      role: "Security Analyst",
      avatar: "https://picsum.photos/seed/alex/100/100"
    },
    publishedAt: "2026-02-08T11:30:00Z",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/ransomware/1200/800",
    tags: ["Security", "AI", "Cybercrime"],
    views: 6543
  },
  {
    id: '20',
    title: "DeFi for Enterprise: Real-World Asset Tokenization",
    excerpt: "BlackRock and Fidelity are tokenizing billions in assets. Is your treasury ready for blockchain-based liquidity?",
    content: "Full content here...",
    category: "Blockchain",
    author: {
      name: "David Kim",
      role: "FinTech Reporter",
      avatar: "https://picsum.photos/seed/david/100/100"
    },
    publishedAt: "2026-02-07T10:00:00Z",
    readTime: "6 min read",
    image: "https://picsum.photos/seed/defi/1200/800",
    tags: ["Blockchain", "FinTech", "DeFi"],
    views: 5432
  },
  {
    id: '21',
    title: "LLMs on the Edge: Running 7B Models on Smartphones",
    excerpt: "Apple and Samsung's latest chips make on-device AI a reality. Privacy and speed are the big winners.",
    content: "Full content here...",
    category: "AI & ML",
    author: {
      name: "Dr. Elena Rostova",
      role: "Senior Tech Analyst",
      avatar: "https://picsum.photos/seed/elena/100/100"
    },
    publishedAt: "2026-02-06T13:45:00Z",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/edge-ai/1200/800",
    tags: ["AI", "Mobile", "Hardware"],
    views: 9123
  },
  {
    id: '22',
    title: "Serverless 2.0: Wasm and the End of Containers?",
    excerpt: "WebAssembly is challenging Docker's dominance in the cloud. Why Wasm might be the future of microservices.",
    content: "Full content here...",
    category: "Cloud",
    author: {
      name: "Sarah Jenkins",
      role: "Cloud Architect",
      avatar: "https://picsum.photos/seed/sarah/100/100"
    },
    publishedAt: "2026-02-05T09:20:00Z",
    readTime: "8 min read",
    image: "https://picsum.photos/seed/wasm/1200/800",
    tags: ["Cloud", "Wasm", "Serverless"],
    views: 4321
  },
  {
    id: '23',
    title: "Quantum Encryption vs. Blockchain: The Countdown Begins",
    excerpt: "Can Bitcoin survive a quantum attack? Developers are racing to implement quantum-resistant signatures.",
    content: "Full content here...",
    category: "Blockchain",
    author: {
      name: "David Kim",
      role: "FinTech Reporter",
      avatar: "https://picsum.photos/seed/david/100/100"
    },
    publishedAt: "2026-02-04T15:10:00Z",
    readTime: "7 min read",
    image: "https://picsum.photos/seed/quantum-crypto/1200/800",
    tags: ["Blockchain", "Quantum", "Security"],
    views: 3456
  },
  {
    id: '24',
    title: "The CISO's Nightmare: Deepfake CEO Fraud",
    excerpt: "A Hong Kong firm lost $25M to a deepfake CFO call. How to verify identity in an age of perfect synthetic media.",
    content: "Full content here...",
    category: "Cybersecurity",
    author: {
      name: "Alex V",
      role: "Security Analyst",
      avatar: "https://picsum.photos/seed/alex/100/100"
    },
    publishedAt: "2026-02-03T11:00:00Z",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/deepfake/1200/800",
    tags: ["Security", "Deepfakes", "Fraud"],
    views: 11234
  },
  {
    id: '25',
    title: "Kubernetes at the Edge: Managing 10,000 Clusters",
    excerpt: "Retailers and factories are deploying K8s to the edge. Here is how they handle the operational overhead.",
    content: "Full content here...",
    category: "Cloud",
    author: {
      name: "Sarah Jenkins",
      role: "Cloud Architect",
      avatar: "https://picsum.photos/seed/sarah/100/100"
    },
    publishedAt: "2026-02-02T10:30:00Z",
    readTime: "6 min read",
    image: "https://picsum.photos/seed/k8s/1200/800",
    tags: ["Cloud", "Kubernetes", "Edge Computing"],
    views: 5678
  },
  {
    id: '26',
    title: "AI Model Collapse: What Happens When AI Trains on AI Data?",
    excerpt: "Researchers warn of 'model collapse' as the web fills with synthetic text. We need human data more than ever.",
    content: "Full content here...",
    category: "AI & ML",
    author: {
      name: "Marcus Chen",
      role: "AI Strategy Lead",
      avatar: "https://picsum.photos/seed/marcus/100/100"
    },
    publishedAt: "2026-02-01T14:00:00Z",
    readTime: "9 min read",
    image: "https://picsum.photos/seed/model-collapse/1200/800",
    tags: ["AI", "Research", "Data"],
    views: 8765
  }
];
