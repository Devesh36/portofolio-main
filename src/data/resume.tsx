import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Devesh Rathod",
  initials: "DR",
  url: "https://devesh.cv",
  location: "Mumbai, India",
  locationLink: "https://www.google.com/maps/place/Mumbai",
  description:
    "Full-stack developer and open-source core maintainer specializing in AI-powered applications, LLM tooling, and hardware-design agents.",
  summary:
    "Full-stack developer and open-source core maintainer specializing in AI-powered applications, LLM tooling, and scalable backend systems. Core maintainer of OpenSRE and core member of CopperHead, with production experience across SaaS, voice AI, SRE, and PCB-design platforms.",
  avatarUrl: "/me2.jpeg",
  skills: [
    "Java",
    "C++",
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "Docker",
    "AWS",
    "Git",
    "HTML/CSS",
    "TailwindCSS",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "deveshrathod047@gmail.com",
    tel: "+917397901565",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Devesh36",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/deveshrathod",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/devesh__31",
        icon: Icons.x,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/_devesh_rathod_",
        icon: Icons.instagram,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:deveshrathod047@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Chouhan Industries",
      href: "https://github.com/chouhanindustries/copperhead",
      badges: ["Core Member"],
      location: "Remote",
      title: "CopperHead Core Member",
      logoUrl: "https://github.com/chouhanindustries.png",
      logoIconName: "circuit",
      start: "July 2026",
      end: "Present",
      description: `Core member of CopperHead, an open-source AI agent for hardware design that generates, documents, and validates real PCBs from a prompt on existing KiCad repositories. Building the agent loop that edits .kicad_sch/.kicad_pcb files, keeps design docs in sync, and verifies changes with kicad-cli ERC/DRC until checks pass.`,
    },
    {
      company: "Tracer Cloud",
      href: "https://github.com/Tracer-Cloud/opensre",
      badges: ["Core Maintainer"],
      location: "Remote",
      title: "OpenSRE Core Maintainer",
      logoUrl: "https://github.com/Tracer-Cloud.png",
      logoIconName: "cloud",
      start: "Apr 2026",
      end: "Present",
      description: `Core maintainer of OpenSRE, an open-source AI SRE platform for incident investigation and operations automation, with 100+ merged pull requests. Shipped Discord gateway, Slack proactive delivery, docs/CI improvements, and contributor ecosystem tooling including a public leaderboard dashboard.`,
    },
   
    {
      company: "Tscircuit",
      href: "https://github.com/tscircuit",
      badges: ["Open Source"],
      location: "Remote",
      title: "Open Source Contributor",
      logoUrl: "https://avatars.githubusercontent.com/u/111661322?s=280&v=4",
      logoIconName: "circuit",
      start: "Dec 2025",
      end: "Feb 2026",
      description: `Contributed to TypeScript PCB tooling across jscad-electronics, footprinter, and easyeda-converter in the tscircuit ecosystem. Implemented component libraries, footprint features, and bug fixes improving developer experience for React-based electronics design. Sponsored by tscircuit for open-source contributions to the PCB design tooling ecosystem.`,
    },
    {
      company: "LiveKit",
      href: "https://github.com/livekit/agents-js",
      badges: ["Open Source"],
      location: "Remote",
      title: "Open Source Contributor",
      logoUrl: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-avatar/avatars/livekit.webp",
      logoIconName: "mic",
      start: "Nov 2025",
      end: "Nov 2025",
      description: `Fixed an interruption-detection bug by refactoring word-count validation and adding 23+ unit tests; merged PRs improving voice pipeline stability. Resolved race-condition crashes in STT/TTS pipelines across OpenAI, Deepgram, ElevenLabs, Cartesia, and Neuphonic plugins.`,
    },
    {
      company: "Adani Thermal Power Plant",
      badges: [],
      location: "Mumbai, India",
      title: "Software Engineer Intern",
      logoUrl: "https://www.adani.com/-/media/project/adaniv1/logo/adani-logo.svg",
      logoIconName: "factory",
      start: "Jul 2025",
      end: "Sep 2025",
      description: `Built PlantOps Knowledge Engine, an on-premises LLM assistant deployed for 40+ staff, reducing manual information searches by 60%. Packaged and optimized models for edge deployment, decreasing average query response time by 45% with 99.9% uptime in a restricted network.`,
    },
    {
      company: "Devtonius",
      badges: [],
      location: "Remote",
      title: "Full Stack Intern",
      logoUrl: "https://content.jdmagicbox.com/v2/comp/palghar/p2/022pxx22.xx22.250430115834.s9p2/catalogue/devtonius-dahanu-road-palghar-internet-website-developers-75dc0lz81e-250.jpg",
      logoIconName: "wrench",
      start: "Jun 2024",
      end: "May 2025",
      description: `Built client-facing web applications using Next.js, React, and headless CMS platforms (Sanity, HyGraph), including portfolio and education consultancy sites. Delivered lead-generation platforms capturing 200+ leads/month and improved page performance by 40% through optimization and modern frontend practices.`,
    },
  ],

  education: [
    {
      school: "Terna Engineering College, Navi Mumbai",
      href: "https://www.terna.org/",
      degree: "Bachelor of Engineering, Computer Engineering",
      logoUrl:
        "https://images.shiksha.com/mediadata/images/1663656852phpDeGhCE.jpeg",
      start: "2022",
      end: "2026",
    },
    {
      school: "P. G. Jr. College, Bordi, Maharashtra",
      href: "https://scontent.fbom50-1.fna.fbcdn.net/v/t39.30808-1/294073696_433246155482168_3299101997460754672_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=7o6gVg1bL-gQ7kNvwF-opYK&_nc_oc=AdmCKI3vfwriqc7Dp1Oap5WQl5arlCu8lviH9HeTR4kI9KH8YOui5S6C6neG7m0U3vU&_nc_zt=24&_nc_ht=scontent.fbom50-1.fna&_nc_gid=1tAJxtR1fRMf8rP3c9TaRw&oh=00_AfJQCJ0sRraAUl8cTi_ZO3bokLsvzezFIL-BoIwb8OoxMg&oe=683E685A",
      degree: "Higher Secondary Certificate (HSC)",
      logoUrl:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJ1aWxkaW5nMi1pY29uIGx1Y2lkZS1idWlsZGluZy0yIj48cGF0aCBkPSJNNiAyMlY0YTIgMiAwIDAgMSAyLTJoOGEyIDIgMCAwIDEgMiAydjE4WiIvPjxwYXRoIGQ9Ik06IDEySDRhMiAyIDAgMCAwLTIgMnY2YTIgMiAwIDAgMCAyIDJoMiIvPjxwYXRoIGQ9Ik0xOCA5aDJhMiAyIDAgMCAxIDIgMnY5YTIgMiAwIDAgMS0yIDJoLTIiLz48cGF0aCBkPSJNMTAgNmg0Ii8+PHBhdGggZD0iTTEwIDEwaDQiLz48cGF0aCBkPSJNMTAgMTRoNCIvPjxwYXRoIGQ9Ik0xMCAxOGg0Ii8+PC9zdmc+",
      start: "2020",
      end: "2022",
    },
    {
      school: "St. Mary's High School",
      href: "https://www.facebook.com/stmarysdahanu/",
      degree: "X th ( SSC )",
      logoUrl:
        "https://scontent.fbom50-1.fna.fbcdn.net/v/t39.30808-1/294073696_433246155482168_3299101997460754672_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=7o6gVg1bL-gQ7kNvwF-opYK&_nc_oc=AdmCKI3vfwriqc7Dp1Oap5WQl5arlCu8lviH9HeTR4kI9KH8YOui5S6C6neG7m0U3vU&_nc_zt=24&_nc_ht=scontent.fbom50-1.fna&_nc_gid=1tAJxtR1fRMf8rP3c9TaRw&oh=00_AfJQCJ0sRraAUl8cTi_ZO3bokLsvzezFIL-BoIwb8OoxMg&oe=683E685A",
      start: "2012",
      end: "2019",
    },
  ],

  projects: [
    {
      title: "CodeLens AI",
      href: "https://codelens.devesh.cv/",
      dates: "2026",
      active: true,
      description:
        "AI-powered SaaS for code explanations, summaries, and complexity analysis using LLaMA 3.1 via Groq SDK with a Monaco-based editor. Built with Next.js, PostgreSQL, Prisma, and JWT authentication with shareable links and multi-language support.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Groq SDK",
        "JWT",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Preview",
          href: "https://codelens.devesh.cv/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Devesh36/CodeLens",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/Codelens.png",
      video: "",
    },
    {
      title: "InternTrack",
      href: "https://interntrack.devesh.cv/",
      dates: "2026",
      active: true,
      description:
        "Full-stack internship platform with RBAC (students, teachers, HR), deployed and actively used within the college. Implemented HR email-based attendance verification with JWT tokens, audit logs, analytics dashboards, and cron jobs.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "JWT",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Preview",
          href: "https://interntrack.devesh.cv/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Devesh36/Interntrack",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/Interntrack.png",
      video: "",
    },
    {
      title: "Baithak",
      href: "https://baithak.devesh.cv/",
      dates: "2026",
      active: true,
      description:
        "A network of Indian nostalgia audio rooms — 15 themed nights like chai tapri rain, monsoon balcony, railway platform, and study desk. Pick a seat, play or skip any song, or build your own room with a YouTube catalog, backdrop, and shareable link.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "YouTube",
        "Auth",
      ],
      links: [
        {
          type: "Preview",
          href: "https://baithak.devesh.cv/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Devesh36/baithak-",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/Baithak.png",
      video: "",
    },
    {
      title: "Brain Stack",
      href: "https://brainstack.devesh.cv/",
      dates: "2025",
      active: true,
      description:
        "Just Keep Brain – A full-stack personal knowledge management app with user sign-up/sign-in, tagging, and modal-based content creation. Built with React/TypeScript (Vite) and Express/TypeScript with MongoDB.",
      technologies: ["React", "TypeScript", "Vite", "Express", "MongoDB", "Node.js"],
      links: [
        {
          type: "Preview",
          href: "https://brainstack.devesh.cv/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Devesh36/Brain-Stack",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/BrainStack.png",
      video: "",
    },
    {
      title: "AI Form Builder",
      href: "https://ai-form-builder-iota.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "AI Form Builder – A prompt-powered form generator built in Next.js and deployed on Vercel. Just provide a prompt—get a form. Styled with Tailwind for an elegant interface.",
      technologies: ["Next.js", "TailwindCSS", "OpenAI API", "Vercel", "PostgreSQL"],
      links: [
        {
          type: "Preview",
          href: "https://ai-form-builder-iota.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Devesh36/AI_FORM_BUILDER",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/Aiformbuilder.png",
      video: "",
    },
  ],

  extensions: [
    {
      title: "Infinity Castle",
      description:
        "A cozy dark VS Code theme published on Open VSX with 500+ downloads, designed and maintained for an immersive, developer-friendly coding experience.",
      type: "Extension",
      downloads: "500+ Downloads",
      highlight: "Real Product",
      platform: "Open VSX",
      href: "https://open-vsx.org/extension/Infinity/infinity-castle",
      image: "/extension/infinityimage.png",
    },
  ],

  hackathons: [
    {
      title: "AceHack 4.0",
      dates: "March 29th - 30th, 2025",
      location: "Jaipur, India",
      description:
        "Developed a legal empowerment app that simplifies interactions with legal documents and services using document scanning, content extraction, translation, text-to-speech, and a marketplace for legal professionals.",
      image: "/hackathon/acehack4.jpg",
      links: [],
    },
    {
      title: "Level SuperMind Hackathon",
      dates: "January 18 – 19, 2025",
      location: "Mumbai, Maharashtra, India",
      description:
        "Built an AstroTalk-style consultation app featuring real-time session booking, state-managed chat, and a clean, calming UI. This project combined cultural insights with technical expertise, resulting in a user-centric experience I am proud of.",
      image:
        "https://cdn.prod.website-files.com/674ad949a9a9dac6c88af770/674c4677c29e9c0c25c2f571_faviconV2%20(2).png",
      links: [],
    },
    

    {
      title: "HackSparrow (E-Cell Terna)",
      dates: "March 22 - 24, 2024",
      location: "Mumbai, Maharashtra, India",
      description:
        "Developed a full-stack voting app to decentralize elections using Web3, MetaMask, and Solidity. Ensured real-time, tamper-proof voting with blockchain-backed transparency and no central control. This purposeful build remains a highlight of my journey.",
      image:
        "https://hackodyssey.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fcf7124eed86446e1b5ddabb1c504d739%2Fassets%2Ffavicon%2F783.png&w=1440&q=75",
      links: [],
    },
    {
      title: "HACKX 2.0 (NMIMS IEEE)",
      dates: "March 16 - 17, 2024",
      location: "Mumbai, Maharashtra, India",
      description:
        "Crafted a Web 2.0 productivity dashboard that aggregates content from platforms like Reddit, YouTube, and Medium, adapting to user goals and moods. Integrated smart filters, a task manager, daily digests, and a mood-based UI. This project was a testament to my passion for UI/UX design and functionality.",
      image:
        "https://edu.ieee.org/in-nmimsnavimumbai/wp-content/uploads/sites/993/2024/07/image-removebg-preview-21.png",
      links: [],
    },
    {
      title: "Bit N Build (GDSC CRCE)",
      dates: "February 24 - 25, 2024",
      location: "Mumbai, Maharashtra, India",
      description:
        "Designed an anti-corruption reporting platform leveraging Web3 for secure, anonymous, and transparent reporting. Advanced to the final round, creating a decentralized farmer-supplier marketplace with smart contracts and a farmer-friendly UI. This hackathon marked the beginning of my journey in impactful tech solutions.",
      image: "https://bitnbuild.vercel.app/favicon.ico",
      links: [],
    },
  ],
} as const;
