import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Devesh Rathod",
  initials: "DR",
  url: "https://devesh.cv",
  location: "Mumbai, India",
  locationLink: "https://www.google.com/maps/place/Mumbai",
  description:
    "AI and agentic AI developer building LLM-powered agents, AI developer tools, and production workflows across SRE, security, and voice systems.",
  summary:
    "I build agentic AI systems and LLM-powered tools for real-world operations. My work spans OpenSRE incident-response agents, Ghost's local-first security review and verified repair workflow, on-prem LLM deployment, and production voice AI.",
  avatarUrl: "/me2.jpeg",
  role: "AI & Agentic Systems · Open-source Maintainer",
  focus: [
    { label: "focus", value: "Agentic AI, LLM systems, AI developer tools" },
  ],
  skillGroups: [
    {
      label: "languages",
      items: ["Java", "C++", "Python", "JavaScript", "TypeScript"],
    },
    {
      label: "frontend",
      items: ["React", "Next.js", "HTML/CSS", "TailwindCSS"],
    },
    {
      label: "backend",
      items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Redis"],
    },
    {
      label: "tools",
      items: ["Docker", "AWS", "Git"],
    },
    {
      label: "soft skills",
      items: ["Critical thinking", "Team collaboration", "Problem solving"],
    },
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
        url: "https://linkedin.com/in/deveshrathod",
        icon: Icons.linkedin,
        navbar: true,
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
      badges: [],
      location: "Remote",
      title: "Maintainer · Tracer Cloud · Remote",
      logoUrl: "https://github.com/Tracer-Cloud.png",
      logoIconName: "cloud",
      start: "Apr 2026",
      end: "Oct 2026",
      description: `Shipped 140+ pull requests in six months while maintaining OpenSRE, an open-source AI SRE platform for incident investigation and operations automation. Built the Discord gateway for two-way chat, /investigate, attachments, approvals, and feedback, and wired proactive Slack delivery for scheduled loops. Improved REPL session browsing and resume workflows, fixed scheduler reliability and token-redaction issues, and updated contributor documentation and CI. Also delivered contributor tools including a public leaderboard dashboard.`,
    },
    {
      company: "Tscircuit",
      href: "https://github.com/tscircuit",
      badges: ["Sponsored"],
      location: "Remote",
      title: "Open Source Contributor · Remote",
      logoUrl: "https://avatars.githubusercontent.com/u/111661322?s=280&v=4",
      logoIconName: "circuit",
      start: "Dec 2025",
      end: "Feb 2026",
      description: `Sponsored contributor to TypeScript PCB compilers and converters (jscad-electronics, footprinter, easyeda-converter). Shipped component libraries, footprint generation, and reliability fixes in the tscircuit toolchain.`,
    },
    {
      company: "LiveKit",
      href: "https://github.com/livekit/agents-js",
      badges: ["Open Source"],
      location: "Remote",
      title: "Open Source Contributor · Remote",
      logoUrl: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-avatar/avatars/livekit.webp",
      logoIconName: "mic",
      start: "Nov 2025",
      end: "Nov 2025",
      description: `Hardened LiveKit Agents JS voice pipelines: fixed interruption detection, added 23+ unit tests, and resolved race conditions in STT/TTS plugins across OpenAI, Deepgram, ElevenLabs, Cartesia, and Neuphonic.`,
    },
    {
      company: "Adani Thermal Power Plant",
      badges: [],
      location: "Mumbai, India",
      title: "Software Engineer Intern · Mumbai, India",
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
      title: "Full Stack Intern · Remote",
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
    {
      school: "P. G. Jr. College",
      degree: "Higher Secondary Certificate (HSC)",
      start: "2020",
      end: "2022",
    },
  ],

  projects: [
    {
      title: "Ghost — Local-First Security Review CLI",
      dates: "",
      active: true,
      href: "https://github.com/Devesh36/ghost",
      description:
        "A developer-focused CLI that scans Python and JavaScript/TypeScript code for security risks and stores review evidence locally. It tests proposed repairs in isolated Git worktrees and requires approval before applying changes, with an interactive REPL and offline static checks.",
      technologies: ["Python", "JavaScript", "TypeScript", "Git worktrees"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Devesh36/ghost",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "X",
          href: "https://x.com/ghost_ai_hq",
          icon: <Icons.x className="size-3" />,
        },
      ],
      image: "/projects/Ghost-preview.jpg",
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
      title: "KeyTone",
      href: "https://keytone.vercel.app/",
      dates: "2026",
      active: true,
      description:
        "Local-first mechanical keyboard audio engine for macOS, Windows, and Linux. A native Rust pipeline handles global key events, preloaded samples, a 64-voice mixer, and real-time DSP. A Tauri and React interface provides sound packs, presets, and spatial audio controls without recording or transmitting keystrokes.",
      technologies: ["Rust", "Tauri", "React", "TypeScript", "CPAL", "DSP"],
      links: [
        {
          type: "Preview",
          href: "https://keytone.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Devesh36/KeyTone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/Keytone.png",
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
