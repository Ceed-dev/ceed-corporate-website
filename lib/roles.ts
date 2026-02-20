export interface Role {
  slug: string
  title: string
  team: string
  location: string
  type: string
  intro: string
  responsibilities: string[]
  requirements: string[]
  niceToHaves: string[]
  benefits: string[]
  processSteps: { title: string; description: string }[]
}

export const roles: Role[] = [
  {
    slug: "founding-engineer",
    title: "Founding Engineer",
    team: "Engineering",
    location: "Remote / Tokyo",
    type: "Full-time",
    intro: "Join as a foundational member of our engineering team. You'll shape the technical direction and build core systems for AI agents and Web3 products.",
    responsibilities: [
      "Design and build core platform infrastructure from the ground up",
      "Make critical technical decisions that shape our architecture",
      "Collaborate closely with product and design to ship features end-to-end",
      "Establish engineering best practices and mentor future team members",
      "Participate in on-call rotation and ensure system reliability",
    ],
    requirements: [
      "7+ years of software engineering experience",
      "Deep expertise in TypeScript, Python, or Go",
      "Experience building and scaling distributed systems",
      "Strong understanding of cloud infrastructure (AWS, GCP, or Azure)",
      "Track record of shipping products from 0 to 1",
    ],
    niceToHaves: [
      "Experience with AI/ML systems in production",
      "Previous startup or founding experience",
      "Open source contributions",
      "Experience with real-time data processing",
    ],
    benefits: [
      "Competitive salary + meaningful equity",
      "Flexible remote work with quarterly team retreats",
      "Health, dental, and vision coverage",
      "Unlimited PTO with encouraged minimums",
      "Learning & development budget",
      "Home office setup stipend",
    ],
    processSteps: [
      { title: "Application review", description: "We review your resume and any relevant work" },
      { title: "Intro call", description: "30-minute conversation about your background" },
      { title: "Technical deep dive", description: "System design and coding session" },
      { title: "Team interviews", description: "Meet the founding team" },
      { title: "Offer", description: "We move fast on great candidates" },
    ],
  },
  {
    slug: "product-designer",
    title: "Product Designer",
    team: "Design",
    location: "Remote / Tokyo",
    type: "Full-time",
    intro: "Define the visual language and user experience of our products. You'll work on complex problems and turn them into elegant, intuitive solutions.",
    responsibilities: [
      "Lead end-to-end product design from concept to implementation",
      "Create wireframes, prototypes, and high-fidelity designs",
      "Establish and maintain our design system",
      "Conduct user research and usability testing",
      "Collaborate with engineering to ensure design quality in production",
    ],
    requirements: [
      "5+ years of product design experience",
      "Strong portfolio demonstrating complex B2B or product work",
      "Proficiency in Figma and modern design tools",
      "Experience building and maintaining design systems",
      "Excellent communication and presentation skills",
    ],
    niceToHaves: [
      "Experience with data visualization or dashboard design",
      "Basic front-end development skills",
      "Previous experience at a high-growth startup",
      "Motion design capabilities",
    ],
    benefits: [
      "Competitive salary + meaningful equity",
      "Flexible remote work with quarterly team retreats",
      "Health, dental, and vision coverage",
      "Unlimited PTO with encouraged minimums",
      "Learning & development budget",
      "Home office setup stipend",
    ],
    processSteps: [
      { title: "Application review", description: "Portfolio and resume review" },
      { title: "Intro call", description: "30-minute conversation about your work" },
      { title: "Portfolio deep dive", description: "Walk us through your best projects" },
      { title: "Design exercise", description: "Short take-home or live design challenge" },
      { title: "Team interviews", description: "Meet your future collaborators" },
    ],
  },
  {
    slug: "gtm-lead",
    title: "GTM Lead",
    team: "Business",
    location: "Remote / Tokyo",
    type: "Full-time",
    intro: "Build our go-to-market engine from scratch. You'll define how we reach customers, craft our positioning, and drive our initial revenue growth.",
    responsibilities: [
      "Develop and execute go-to-market strategy for Web3 and AI products",
      "Build relationships with early design partners and customers",
      "Define positioning, messaging, and sales materials",
      "Hire and lead the initial sales and marketing team",
      "Work closely with product to incorporate customer feedback",
    ],
    requirements: [
      "8+ years in B2B SaaS sales, marketing, or business development",
      "Experience in Web3, crypto, or AI product marketing",
      "Track record of building GTM functions at early-stage companies",
      "Strong analytical skills and data-driven approach",
      "Excellent verbal and written communication",
    ],
    niceToHaves: [
      "Experience in AI/ML or data infrastructure space",
      "Existing relationships in the Web3 or AI ecosystem",
      "Previous founder or operator experience",
      "MBA or equivalent business education",
    ],
    benefits: [
      "Competitive salary + meaningful equity",
      "Flexible remote work with quarterly team retreats",
      "Health, dental, and vision coverage",
      "Unlimited PTO with encouraged minimums",
      "Learning & development budget",
      "Home office setup stipend",
    ],
    processSteps: [
      { title: "Application review", description: "Resume and background review" },
      { title: "Intro call", description: "30-minute conversation about your experience" },
      { title: "Strategy session", description: "Present a GTM plan for our product" },
      { title: "Founder interviews", description: "Deep dive with co-founders" },
      { title: "Reference checks", description: "Speak with previous colleagues" },
    ],
  },
  {
    slug: "research-engineer",
    title: "Research Engineer",
    team: "AI/ML",
    location: "Remote / Tokyo",
    type: "Full-time",
    intro: "Push the boundaries of what's possible with AI agents. You'll research and implement state-of-the-art techniques for autonomous value creation.",
    responsibilities: [
      "Research and prototype new AI/ML approaches for autonomous agent systems",
      "Implement and optimize models for production deployment",
      "Collaborate with engineering to integrate research into the platform",
      "Stay current with latest developments in AI/ML research",
      "Publish findings and contribute to the research community",
    ],
    requirements: [
      "MS/PhD in Computer Science, ML, or related field",
      "Strong publication record or equivalent industry experience",
      "Deep expertise in deep learning and NLP",
      "Proficiency in Python and ML frameworks (PyTorch, JAX)",
      "Experience taking research from prototype to production",
    ],
    niceToHaves: [
      "Experience with large language models and retrieval systems",
      "Background in autonomous agents or Web3 AI applications",
      "Contributions to open-source ML projects",
      "Experience with distributed training at scale",
    ],
    benefits: [
      "Competitive salary + meaningful equity",
      "Flexible remote work with quarterly team retreats",
      "Health, dental, and vision coverage",
      "Unlimited PTO with encouraged minimums",
      "Conference and research budget",
      "GPU compute budget for personal projects",
    ],
    processSteps: [
      { title: "Application review", description: "Review your research and publications" },
      { title: "Intro call", description: "Discuss your research interests" },
      { title: "Technical presentation", description: "Present a recent project" },
      { title: "Coding session", description: "Pair programming exercise" },
      { title: "Team interviews", description: "Meet the ML team" },
    ],
  },
]

export function getRoleBySlug(slug: string): Role | undefined {
  return roles.find((role) => role.slug === slug)
}

export function getFilteredRoles(filters: {
  location?: string
  team?: string
  type?: string
}): Role[] {
  return roles.filter((role) => {
    if (filters.location && filters.location !== "all" && !role.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false
    }
    if (filters.team && filters.team !== "all" && role.team.toLowerCase() !== filters.team.toLowerCase()) {
      return false
    }
    if (filters.type && filters.type !== "all" && role.type.toLowerCase() !== filters.type.toLowerCase()) {
      return false
    }
    return true
  })
}

export const locations = ["All", "Remote", "Tokyo"]
export const teams = ["All", "Engineering", "Design", "Business", "AI/ML"]
export const types = ["All", "Full-time", "Contract"]
