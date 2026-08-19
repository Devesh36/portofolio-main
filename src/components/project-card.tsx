import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <article className={cn("group flex h-full flex-col", className)}>
      <Link href={href || "#"} className="block overflow-hidden rounded-md">
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none h-40 w-full object-cover object-top"
          />
        ) : null}
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
          <time className="font-mono text-[11px] text-muted-foreground">{dates}</time>
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        {tags?.length ? (
          <p className="mt-2 font-mono text-[11px] text-muted-foreground/80">
            {tags.join(" · ")}
          </p>
        ) : null}
        {links?.length ? (
          <div className="mt-3 flex gap-3 font-mono text-[11px]">
            {links.map((item, idx) => (
              <Link
                href={item.href}
                key={idx}
                target="_blank"
                className="text-foreground underline-offset-4 hover:underline"
              >
                {item.type}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
