"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  CircuitBoardIcon,
  CloudIcon,
  FactoryIcon,
  MicVocalIcon,
  WrenchIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  logoIconName?: "factory" | "wrench" | "mic" | "circuit" | "cloud";
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}

export const ResumeCard = ({
  logoUrl,
  logoIconName,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const logoIconMap = {
    factory: FactoryIcon,
    wrench: WrenchIcon,
    mic: MicVocalIcon,
    circuit: CircuitBoardIcon,
    cloud: CloudIcon,
  } as const;

  const LogoIcon = logoIconName ? logoIconMap[logoIconName] : null;
  const meta = [subtitle, ...(badges ?? [])].filter(Boolean).join(" · ");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      className="block py-3.5"
      onClick={handleClick}
    >
      <div className="flex items-start gap-3">
        <Avatar className="mt-0.5 size-8 rounded-md bg-muted">
          {logoUrl ? (
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
          ) : null}
          {!logoUrl && LogoIcon ? (
            <LogoIcon className="size-4 text-muted-foreground" />
          ) : null}
          <AvatarFallback className="rounded-md text-xs">
            {altText[0]}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="truncate text-sm font-medium">{title}</h3>
            <span className="shrink-0 font-mono text-[11px] tabular-nums text-muted-foreground">
              {period}
            </span>
          </div>
          {meta ? (
            <p className="mt-0.5 text-xs text-muted-foreground">{meta}</p>
          ) : null}
          {description ? (
            <motion.p
              initial={false}
              animate={{
                height: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0,
                marginTop: isExpanded ? 8 : 0,
              }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "overflow-hidden text-sm leading-relaxed text-muted-foreground"
              )}
            >
              {description}
            </motion.p>
          ) : null}
        </div>
      </div>
    </Link>
  );
};
