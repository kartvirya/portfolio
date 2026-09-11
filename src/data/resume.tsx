import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, TrophyIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";

export const DATA = {
  name: "Bikash Sharma",
  initials: "BS",
  url: "https://portfolio-kohl-seven-pkizjvlyiv.vercel.app",
  location: "Kathmandu, Nepal",
  locationLink: "https://www.google.com/maps/place/Kathmandu,+Nepal",
  description:
    "Full Stack UI/UX focused developer with a security-first mindset. Building products with SvelteKit, Django, and AI-assisted workflows.",
  summary:
    "Full Stack UI/UX focused developer with a security-first mindset, working with SvelteKit, Django, and modern web stacks. Experienced across the full product lifecycle, from designing scalable backend architecture and REST APIs to building performant, accessible frontend interfaces. Background in penetration testing and vulnerability assessment adds security awareness to development work. Delivered 7+ full-stack projects for international clients on Fiverr, and actively expand web security expertise through bug bounty research on HackerOne.",
  avatarUrl: "/me.webp",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "SvelteKit" },
    { name: "Tailwind CSS" },
    { name: "Node.js", icon: Nodejs },
    { name: "Python / Django", icon: Python },
    { name: "REST APIs" },
    { name: "Firebase" },
    { name: "Figma" },
    { name: "Penetration Testing" },
    { name: "SEO / Digital Marketing" },
    { name: "Git / GitHub" },
    { name: "AI-assisted Dev" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#achievements", icon: TrophyIcon, label: "Achievements" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "bikashtail619@gmail.com",
    tel: "+9779764833730",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/kartvirya",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        // Replace with your LinkedIn profile URL when ready
        url: "https://www.linkedin.com/in/",
        icon: Icons.linkedin,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:bikashtail619@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Outix",
      href: "https://outix.co",
      badges: [],
      location: "Remote",
      title: "Fullstack Developer",
      logoUrl: "/outix.webp",
      start: "Dec 2024",
      end: "Present",
      description:
        "Working as a fullstack developer on the Outix event management platform using SvelteKit and Django. Building and maintaining dashboards, APIs, and responsive UI components focused on performance, accessibility, and cross-device compatibility.",
    },
    {
      company: "V7 OS",
      href: "https://v7os.ae",
      badges: [],
      location: "Remote",
      title: "SEO Officer and Web Developer",
      logoUrl: "/v7os.webp",
      start: "2024",
      end: "Present",
      description:
        "SEO Officer and Web Developer for V7 Omni Source (v7os.ae), a B2B industrial sourcing platform for UAE & MEA. Led SEO strategy, keyword research, and technical/on-page optimization while building and improving website features for performance and search visibility.",
    },
    {
      company: "Bugv",
      href: "https://bugv.io",
      badges: [],
      location: "Nepal",
      title: "Junior Security Analyst",
      logoUrl: "/bugv.webp",
      start: "Sept 2023",
      end: "Dec 2024",
      description:
        "Conducted vulnerability assessments and penetration tests on web applications and REST APIs. Documented findings using OWASP and industry-standard frameworks. Active bug bounty researcher on HackerOne with successful reports on major platforms like inDrive.",
    },
    {
      company: "Bugv & Cynical Technology",
      href: "https://bugv.io",
      badges: [],
      location: "Nepal",
      title: "Digital Marketing and SEO Officer",
      logoUrl: "/bugv.webp",
      start: "Feb 2022",
      end: "July 2023",
      description:
        "Managed SEO strategies, keyword research, on-page optimization, and technical SEO improvements. Planned and implemented digital marketing campaigns across social media, search engines, and email marketing channels. Monitored performance analytics and optimized campaigns to improve ROI and conversion rates.",
    },
    {
      company: "Subisu",
      href: "https://www.subisu.net.np",
      badges: [],
      location: "Kathmandu, Nepal",
      title: "Technical Support Representative",
      logoUrl: "/subisu.webp",
      start: "Feb 2022",
      end: "July 2023",
      description:
        "Handled technical support, router/configuration faults, and network issue escalations for ISP customers.",
    },
  ],
  education: [
    {
      school: "Lord Buddha Education Foundation",
      href: "https://www.lbef.edu.np",
      degree:
        "Bachelor's in Computer Science & Information Technology (BScIT)",
      logoUrl: "/lbef.webp",
      start: "2022",
      end: "2025",
    },
    {
      school: "Liverpool International College",
      href: "https://liverpool.edu.np",
      degree: "+2 in Management | GPA: 3.4",
      logoUrl: "/liverpool.webp",
      start: "2018",
      end: "2020",
    },
    {
      school: "The Insight Vision School, Kathmandu",
      href: "https://tivs.edu.np",
      degree: "SEE | GPA: 3.55",
      logoUrl: "/insight-vision.webp",
      start: "2018",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Digital QR Ordering System",
      href: "https://github.com/kartvirya/digitalqrbackend",
      dates: "Aug 2025 - May 2026",
      active: true,
      description:
        "Full-stack QR-based food ordering system for restaurants and hotels — table/room QR menus, real-time order tracking, billing, staff management, and an analytics dashboard.",
      technologies: [
        "Django",
        "React",
        "TypeScript",
        "PostgreSQL",
        "REST APIs",
      ],
      links: [
        {
          type: "Backend",
          href: "https://github.com/kartvirya/digitalqrbackend",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Frontend",
          href: "https://github.com/kartvirya/digitalqrfrontend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "SB Vision E-commerce",
      href: "https://github.com/kartvirya/aadipanchadhatu",
      dates: "2026",
      active: true,
      description:
        "Production-oriented e-commerce platform with product catalog, cart, wishlist, NextAuth auth, admin analytics, eSewa payments, and logistics integration.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/kartvirya/aadipanchadhatu",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "SB Vision IMS",
      href: "https://sbvision-ims.vercel.app",
      dates: "2026",
      active: true,
      description:
        "Sales and inventory management app for vendors, customers, billing, and stock tracking — built with Django and a Bootstrap/Ajax-driven UI.",
      technologies: ["Django", "Python", "Bootstrap", "Ajax"],
      links: [
        {
          type: "Website",
          href: "https://sbvision-ims.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/kartvirya/SbVisionIms",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "EduConnect",
      href: "https://github.com/kartvirya/studylink",
      dates: "2025",
      active: true,
      description:
        "College management platform for student applications, college profiles, admin dashboards, email verification, and Google OAuth login.",
      technologies: [
        "React",
        "TypeScript",
        "Express",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/kartvirya/studylink",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  achievements: [
    {
      title: "HackerOne Bug Bounty Researcher",
      date: "2023 – Present",
      description:
        "Active bug bounty researcher with successful vulnerability reports on major platforms, including inDrive.",
      href: "https://hackerone.com",
    },
    {
      title: "7+ Freelance Full-Stack Projects Delivered",
      date: "2022 – Present",
      description:
        "Completed more than 7 full-stack web development projects for international clients on Fiverr — covering design, development, SEO, and digital marketing.",
      href: "https://www.fiverr.com",
    },
    {
      title: "Web Application Penetration Testing",
      date: "2023 – 2024",
      description:
        "Conducted vulnerability assessments and penetration tests on web applications and REST APIs, documenting findings with OWASP and industry-standard frameworks.",
    },
    {
      title: "SEO & Digital Marketing Campaigns",
      date: "2022 – 2023",
      description:
        "Planned and ran digital marketing campaigns across social, search, and email — improving ROI and conversion rates through analytics-driven optimization.",
    },
    {
      title: "SEE Academic Performance",
      date: "2018",
      description:
        "Completed SEE at The Insight Vision School, Kathmandu with a GPA of 3.55.",
    },
    {
      title: "+2 Management Academic Performance",
      date: "2018 – 2020",
      description:
        "Completed +2 in Management at Liverpool International College with a GPA of 3.4.",
    },
    {
      title: "AI-Assisted Development Workflow",
      date: "2024 – Present",
      description:
        "Proficient with AI-assisted development tools (Cursor, Bolt.new, Lovable) to ship higher-quality full-stack products faster.",
    },
  ],
  hackathons: [] as ReadonlyArray<{
    title: string;
    dates: string;
    location: string;
    description: string;
    image: string;
    mlh?: string;
    win?: string;
    icon?: string;
    links?: ReadonlyArray<{
      title: string;
      icon: React.ReactNode;
      href: string;
    }>;
  }>,
} as const;
