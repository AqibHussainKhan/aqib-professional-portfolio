
export type ProjectCategory = "Web Apps" | "Dashboards" | "Portfolios";

export type PortfolioProject = {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  gradient: string;
};

// Add another project here and it will automatically appear in My Work.
// Repository name and liveUrl must match the actual GitHub Pages deployment.
export const portfolioProjects: PortfolioProject[] = [
  {
    id: "nova-ecommerce-store",
    title: "NOVA E-Commerce Store",
    category: "Web Apps",
    description: "Responsive e-commerce storefront with product browsing, wishlist and cart interactions.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://aqibhussainkhan.github.io/nova-ecommerce-store/",
    githubUrl: "https://github.com/AqibHussainKhan/nova-ecommerce-store",
    gradient: "linear-gradient(135deg, rgba(168,85,247,.27), rgba(217,70,239,.06), transparent)",
  },
  {
    id: "hostelx-management-system",
    title: "HOSTELX PRO",
    category: "Web Apps",
    description: "Hostel dashboard with rooms, residents, rent, attendance, visitors and complaints.",
    tech: ["React", "TypeScript", "LocalStorage"],
    liveUrl: "https://aqibhussainkhan.github.io/hostelx-management-system/",
    githubUrl: "https://github.com/AqibHussainKhan/hostelx-management-system",
    gradient: "linear-gradient(135deg, rgba(16,185,129,.21), rgba(6,182,212,.06), transparent)",
  },
  {
    id: "cards-portal-project",
    title: "Cards Portal",
    category: "Web Apps",
    description: "Responsive student, product and course cards presented in a reusable React interface.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://aqibhussainkhan.github.io/cards-portal-project/",
    githubUrl: "https://github.com/AqibHussainKhan/cards-portal-project",
    gradient: "linear-gradient(135deg, rgba(244,114,182,.22), rgba(168,85,247,.06), transparent)",
  },
  {
    id: "Dashboard-Login-status-project",
    title: "SmartPanel Dashboard",
    category: "Dashboards",
    description: "Personal dashboard exploring login status, notifications and online/offline UI states.",
    tech: ["React", "TypeScript", "Vite"],
    liveUrl: "https://aqibhussainkhan.github.io/Dashboard-Login-status-project/",
    githubUrl: "https://github.com/AqibHussainKhan/Dashboard-Login-status-project",
    gradient: "linear-gradient(135deg, rgba(56,189,248,.23), rgba(99,102,241,.06), transparent)",
  },
  {
    id: "aqib-latest-portfolio",
    title: "Latest Portfolio",
    category: "Portfolios",
    description: "Personal developer portfolio with experience, education and animated sections.",
    tech: ["React", "TypeScript", "Animations"],
    liveUrl: "https://aqibhussainkhan.github.io/aqib-latest-portfolio/",
    githubUrl: "https://github.com/AqibHussainKhan/aqib-latest-portfolio",
    gradient: "linear-gradient(135deg, rgba(99,102,241,.24), rgba(139,92,246,.07), transparent)",
  },
  {
    id: "aqib-cinematic-portfolio",
    title: "Cinematic Portfolio",
    category: "Portfolios",
    description: "Immersive portfolio with cinematic transitions, motion effects and project showcases.",
    tech: ["React", "TypeScript", "CSS Motion"],
    liveUrl: "https://aqibhussainkhan.github.io/aqib-cinematic-portfolio/",
    githubUrl: "https://github.com/AqibHussainKhan/aqib-cinematic-portfolio",
    gradient: "linear-gradient(135deg, rgba(217,70,239,.24), rgba(244,63,94,.06), transparent)",
  },
  {
    id: "portfolio-ideas-in-motion",
    title: "Ideas in Motion",
    category: "Portfolios",
    description: "Modern creative portfolio combining clean typography and interactive motion.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://aqibhussainkhan.github.io/portfolio-ideas-in-motion/",
    githubUrl: "https://github.com/AqibHussainKhan/portfolio-ideas-in-motion",
    gradient: "linear-gradient(135deg, rgba(20,184,166,.22), rgba(6,182,212,.05), transparent)",
  },
  {
    id: "portfolio-new-design",
    title: "Portfolio New Design",
    category: "Portfolios",
    description: "Premium responsive portfolio with smooth navigation, interactive sections and modern visuals.",
    tech: ["React", "TypeScript", "Responsive UI"],
    liveUrl: "https://aqibhussainkhan.github.io/portfolio-new-design/",
    githubUrl: "https://github.com/AqibHussainKhan/portfolio-new-design",
    gradient: "linear-gradient(135deg, rgba(167,139,250,.26), rgba(59,130,246,.06), transparent)",
  },
];
