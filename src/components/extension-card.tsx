import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface ExtensionCardProps {
  title: string;
  description: string;
  downloads: string;
  type: string;
  href: string;
  platform: string;
  highlight: string;
  image?: string;
  className?: string;
}

export function ExtensionCard({
  title,
  description,
  downloads,
  href,
  platform,
  image,
  className,
}: ExtensionCardProps) {
  return (
    <article className={cn("group flex h-full flex-col", className)}>
      <Link href={href} className="block overflow-hidden rounded-md">
        {image ? (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full object-cover object-top transition-opacity duration-300 group-hover:opacity-90"
          />
        ) : null}
      </Link>
      <div className="mt-3 flex flex-1 flex-col">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-sm font-medium">{title}</h3>
          <span className="font-mono text-[11px] text-muted-foreground">{downloads}</span>
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        <p className="mt-2 font-mono text-[11px] text-muted-foreground/80">{platform}</p>
        <Link
          href={href}
          target="_blank"
          rel="noreferrer"
          className="mt-3 font-mono text-[11px] text-foreground underline-offset-4 hover:underline"
        >
          Open VSX
        </Link>
      </div>
    </article>
  );
}
