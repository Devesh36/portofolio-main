import Link from "next/link";

interface Props {
  title: string;
  description: string;
  dates: string;
  location: string;
  image?: string;
  tech?: readonly string[];
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
}

export function HackathonCard({
  title,
  description,
  dates,
  location,
  tech,
  links,
}: Props) {
  return (
    <li className="py-4">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-sm font-medium">{title}</h3>
        <time className="shrink-0 font-mono text-[11px] text-muted-foreground">{dates}</time>
      </div>
      {location ? (
        <p className="mt-0.5 text-xs text-muted-foreground">{location}</p>
      ) : null}
      {description ? (
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
      {tech && tech.length > 0 ? (
        <p className="mt-2 font-mono text-[11px] text-muted-foreground/80">
          {tech.join(" · ")}
        </p>
      ) : null}
      {links && links.length > 0 ? (
        <div className="mt-2 flex gap-3 text-xs">
          {links.map((link, idx) => (
            <Link
              href={link.href}
              key={idx}
              className="text-foreground underline-offset-4 hover:underline"
            >
              {link.title}
            </Link>
          ))}
        </div>
      ) : null}
    </li>
  );
}
