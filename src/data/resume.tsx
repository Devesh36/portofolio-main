import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Devesh Rathod",
  initials: "DR",
  url: "https://devesh.cv",
  location: "Mumbai, India",
  locationLink: "https://www.google.com/maps/place/Mumbai",
  description:
    "Backend and AI systems engineer. LLM agents, voice pipelines, and SRE automation.",
  summary:
    "Backend and AI systems engineer working on LLM agents, voice pipelines, and operations automation. Core maintainer of OpenSRE and core member of CopperHead. Previously shipped on-prem inference for plant operations and hardened STT/TTS runtimes in production voice stacks.",
  avatarUrl: "/me2.jpeg",
  role: "Backend & AI Systems",
  focus: [
    { label: "now", value: "OpenSRE, CopperHead" },
    { label: "focus", value: "LLM agents, SRE automation, voice systems" },
    { label: "location", value: "Mumbai, India" },
  ],
  skillGroups: [
    {
      label: "languages",
      items: ["Python", "TypeScript", "Java", "C++"],
    },
    {
      label: "backend",
      items: ["Node.js", "Express", "FastAPI", "PostgreSQL", "Redis", "Prisma"],
    },
    {
      label: "ai",
      items: ["LLM agents", "Groq", "OpenAI", "STT/TTS", "on-prem inference"],
    },
    {
      label: "infra",
      items: ["Docker", "AWS", "CI/CD", "Git"],
    },
  ],
  skills: [
    "Python",
    "TypeScript",
    "Java",
    "C++",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Redis",
    "Prisma",
    "MongoDB",
    "Docker",
    "AWS",
    "LLM agents",
    "Groq",
    "Git",
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
      company: "CopperHead",
      href: "https://github.com/chouhanindustries/copperhead",
      badges: ["Core Member"],
      location: "Remote",
      title: "Core Member, Agent Runtime",
      logoUrl: "https://github.com/chouhanindustries.png",
      logoIconName: "circuit",
      start: "Jul 2026",
      end: "Present",
      description: `Core member of CopperHead, an open-source hardware-design agent that produces validated KiCad artifacts from a product brief. Building the agent runtime: spec-gated edits to .kicad_sch/.kicad_pcb, design-doc propagation, and kicad-cli ERC/DRC verification before a change is accepted.`,
    },
    {
      company: "OpenSRE",
      href: "https://github.com/Tracer-Cloud/opensre",
      badges: ["Core Maintainer"],
      location: "Remote",
      title: "Core Maintainer, AI SRE",
      logoUrl: "https://github.com/Tracer-Cloud.png",
      logoIconName: "cloud",
      start: "Apr 2026",
      end: "Present",
      description: `Core maintainer of OpenSRE (Tracer Cloud), an open-source platform for AI-assisted incident investigation and operations automation. 100+ merged PRs covering Discord and Slack delivery, CI and documentation, and contributor infrastructure including a public leaderboard.`,
    },
    {
      company: "Tscircuit",
      href: "https://github.com/tscircuit",
      badges: ["Sponsored"],
      location: "Remote",
      title: "Open Source Engineer",
      logoUrl: "https://avatars.githubusercontent.com/u/111661322?s=280&v=4",
      logoIconName: "circuit",
      start: "Dec 2025",
      end: "Feb 2026",
      description: `Sponsored contributor to TypeScript PCB compilers and converters (jscad-electronics, footprinter, easyeda-converter). Shipped component libraries, footprint generation, and reliability fixes in the tscircuit toolchain.`,
    },
    {
      company: "LiveKit",
      href: "https://github.com/livekit/agents-js",
      badges: ["Voice Agents"],
      location: "Remote",
      title: "Open Source Contributor",
      logoUrl: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-avatar/avatars/livekit.webp",
      logoIconName: "mic",
      start: "Nov 2025",
      end: "Nov 2025",
      description: `Hardened LiveKit Agents JS voice pipelines: fixed interruption detection, added 23+ unit tests, and resolved race conditions in STT/TTS plugins across OpenAI, Deepgram, ElevenLabs, Cartesia, and Neuphonic.`,
    },
    {
      company: "Adani Thermal Power Plant",
      badges: ["On-prem LLM"],
      location: "Mumbai, India",
      title: "Software Engineer Intern",
      logoUrl: "https://www.adani.com/-/media/project/adaniv1/logo/adani-logo.svg",
      logoIconName: "factory",
      start: "Jul 2025",
      end: "Sep 2025",
      description: `Built PlantOps Knowledge Engine, an on-premises LLM assistant for 40+ plant staff on a restricted network. Packaged and optimized models for edge deployment: 60% fewer manual searches, 45% lower query latency, 99.9% uptime.`,
    },
    {
      company: "Devtonius",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "https://content.jdmagicbox.com/v2/comp/palghar/p2/022pxx22.xx22.250430115834.s9p2/catalogue/devtonius-dahanu-road-palghar-internet-website-developers-75dc0lz81e-250.jpg",
      logoIconName: "wrench",
      start: "Jun 2024",
      end: "May 2025",
      description: `Shipped production backends and CMS-driven applications (Next.js, Sanity, HyGraph). Lead-capture systems handling 200+ leads/month; improved response times and page performance by 40%.`,
    },
  ],

  education: [
    {
      school: "Terna Engineering College",
      href: "https://www.terna.org/",
      degree: "B.E. Computer Engineering",
      logoUrl:
        "https://images.shiksha.com/mediadata/images/1663656852phpDeGhCE.jpeg",
      start: "2022",
      end: "2026",
    },
  ],

  projects: [
    {
      title: "CodeLens AI",
      href: "https://codelens.devesh.cv/",
      dates: "2026",
      active: true,
      description:
        "LLM code-analysis service. LLaMA 3.1 on Groq produces line-level explanations, summaries, and complexity scores over a Monaco editor. Analyses are persisted in PostgreSQL via Prisma; JWT auth and shareable links cover multi-language snippets.",
      technologies: [
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Groq",
        "JWT",
        "Next.js",
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
        "Operations backend for college internships. Role-based access for students, teachers, and HR; email-based JWT attendance verification; audit logs; analytics dashboards; and cron jobs for reminders and cleanup. Deployed and in active use.",
      technologies: [
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "JWT",
        "Cron",
        "Next.js",
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
        "Concurrent audio rooms with independent playback state, shared catalogs, and user-owned rooms. Auth, slug routing, YouTube and Spotify ingest, and room chat. Live at baithak.devesh.cv with 15 themed rooms.",
      technologies: [
        "TypeScript",
        "Next.js",
        "Auth",
        "YouTube API",
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
        "Knowledge backend on Express and MongoDB. Session auth, tagged records, and a typed retrieval API, with a React client for capturing notes, links, and media into a personal knowledge base.",
      technologies: ["TypeScript", "Node.js", "Express", "MongoDB"],
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
        "Prompt-to-schema pipeline. An LLM compiles a natural-language brief into a form definition persisted on PostgreSQL, then rendered as a fillable form with field types, validation, and stored responses.",
      technologies: ["TypeScript", "OpenAI", "PostgreSQL", "Next.js"],
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
        "Infinity Castle — a dark VS Code theme on Open VSX. Syntax and editor chrome tuned for long sessions. 500+ installs; packaging and marketplace listing maintained.",
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
      dates: "Mar 2025",
      location: "Jaipur, India",
      description:
        "Legal-document pipeline: scan, OCR/extract, translate, and text-to-speech so users can read or hear filings without a lawyer in the loop. Also shipped a marketplace for legal professionals. Built OCR + TTS as a sequential processing path over uploaded files.",
      tech: ["OCR", "TTS", "translation", "document pipeline"],
      image: "/hackathon/acehack4.jpg",
      links: [],
    },
    {
      title: "Level SuperMind",
      dates: "Jan 2025",
      location: "Mumbai, India",
      description:
        "Consultation system with realtime session booking, stateful chat, and a shared session clock. Booking and chat state lived in a client store backed by a session API so two users could join the same slot without dropping messages.",
      tech: ["realtime booking", "session state", "chat"],
      image:
        "https://cdn.prod.website-files.com/674ad949a9a9dac6c88af770/674c4677c29e9c0c25c2f571_faviconV2%20(2).png",
      links: [],
    },
    {
      title: "HackSparrow",
      dates: "Mar 2024",
      location: "Mumbai, India",
      description:
        "On-chain voting with Solidity and MetaMask. Ballots are append-only on-chain with no central tally: each vote is a signed transaction, results are derived from contract state, and the UI talks to the chain through a wallet provider.",
      tech: ["Solidity", "MetaMask", "Web3"],
      image:
        "https://hackodyssey.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fcf7124eed86446e1b5ddabb1c504d739%2Fassets%2Ffavicon%2F783.png&w=1440&q=75",
      links: [],
    },
    {
      title: "HACKX 2.0",
      dates: "Mar 2024",
      location: "Mumbai, India",
      description:
        "Content aggregation service over Reddit, YouTube, and Medium. Ingests feeds, applies filters and a task list, and emits scheduled daily digests. Ranking and mood filters ran on the aggregated payload rather than a single-source UI.",
      tech: ["feed ingest", "filters", "scheduled digests"],
      image:
        "https://edu.ieee.org/in-nmimsnavimumbai/wp-content/uploads/sites/993/2024/07/image-removebg-preview-21.png",
      links: [],
    },
    {
      title: "Bit N Build",
      dates: "Feb 2024",
      location: "Mumbai, India",
      description:
        "Anonymous reporting on Web3, then a farmer-supplier marketplace with smart contracts in the final round. Reports are stored without a central identity store; marketplace orders settle on-chain. Finalist.",
      tech: ["Solidity", "smart contracts", "Web3"],
      image: "https://bitnbuild.vercel.app/favicon.ico",
      links: [],
    },
  ],
} as const;
