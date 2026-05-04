import { FooterLink } from "./FooterColumn";

const categoryLinks: FooterLink[] = [
  { label: "User Interface", href: "#" },
  { label: "User Experience", href: "#" },
  { label: "Digital Media", href: "#" },
  { label: "Lifestyle", href: "#" },
  { label: "Programming", href: "#" },
  { label: "Animation", href: "#" },
];

const productLinks: FooterLink[] = [
  { label: "Pricing", href: "#" },
  { label: "Overview", href: "#" },
  { label: "Browse", href: "#" },
  { label: "Accessibility", href: "#" },
  { label: "Five", href: "#" },
  { label: "Changelog", href: "#" },
];

const solutionsLinks: FooterLink[] = [
  { label: "Brainstorming", href: "#" },
  { label: "Ideation", href: "#" },
  { label: "Wireframing", href: "#" },
  { label: "Research", href: "#" },
  { label: "Design", href: "#" },
  { label: "Concept", href: "#" },
];

const resourcesLinks: FooterLink[] = [
  { label: "Help Center", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Tutorials", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Community", href: "#" },
  { label: "Events", href: "#" },
];

const supportLinks: FooterLink[] = [
  { label: "Contact Us", href: "#" },
  { label: "Developers", href: "#" },
  { label: "Documentation", href: "#" },
  { label: "Integrations", href: "#" },
  { label: "Reports", href: "#" },
  { label: "Webinar", href: "#" },
];

const companyLinks: FooterLink[] = [
  { label: "About", href: "#" },
  { label: "Press", href: "#" },
  { label: "Events", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Customers", href: "#" },
  { label: "Partners", href: "#" },
];

export const footerNavigation = [
  { title: "Categories", links: categoryLinks },
  { title: "Product", links: productLinks },
  { title: "Solutions", links: solutionsLinks },
  { title: "Resources", links: resourcesLinks },
  { title: "Support", links: supportLinks },
  { title: "Company", links: companyLinks },
];
