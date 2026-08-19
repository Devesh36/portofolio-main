import { ExtensionCard } from "@/components/extension-card";
import { HackathonCard } from "@/components/hackathon-card";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

function SectionLabel({ children }: { children: string }) {
  return (
    <h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
      {children}
    </h2>
  );
}

export default function Page() {
  return (
    <main className="flex min-h-[100dvh] flex-col space-y-16 pb-24 sm:space-y-20">
      <section id="hero">
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1 space-y-4">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {DATA.role}
              </p>
              <h1 className="mt-2 text-3xl font-medium tracking-tight sm:text-4xl">
                {DATA.name}
              </h1>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                {DATA.summary}
              </p>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <dl className="space-y-1 font-mono text-[11px] text-muted-foreground">
                {DATA.focus.map((item) => (
                  <div key={item.label} className="grid grid-cols-[72px_1fr] gap-3">
                    <dt className="text-muted-foreground/70">{item.label}</dt>
                    <dd className="text-foreground/80">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <Link
                href="/resume.pdf"
                download
                target="_blank"
                className="inline-block font-mono text-[11px] uppercase tracking-[0.14em] text-foreground underline-offset-4 hover:underline"
              >
                Resume
              </Link>
            </BlurFade>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Avatar className="size-16 rounded-md sm:size-20">
              <AvatarImage
                alt={DATA.name}
                src={DATA.avatarUrl}
                className="object-cover object-top"
              />
              <AvatarFallback className="rounded-md">
                {DATA.initials}
              </AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </section>

      <section id="work">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <SectionLabel>Experience</SectionLabel>
        </BlurFade>
        <div className="divide-y divide-border/60">
          {DATA.work.map((work, id) => (
            <BlurFade
              key={`${work.company}-${id}`}
              delay={BLUR_FADE_DELAY * 6 + id * 0.04}
            >
              <ResumeCard
                href={"href" in work ? work.href : undefined}
                logoUrl={work.logoUrl ?? ""}
                logoIconName={work.logoIconName}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                badges={work.badges ?? []}
                period={
                  work.start === work.end
                    ? work.start
                    : `${work.start} - ${work.end ?? "Present"}`
                }
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 8}>
          <SectionLabel>Projects</SectionLabel>
        </BlurFade>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {DATA.projects.map((project, id) => (
            <BlurFade
              key={`${project.title}-${id}`}
              delay={BLUR_FADE_DELAY * 9 + id * 0.04}
            >
              <ProjectCard
                href={project.href}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="extensions">
        <BlurFade delay={BLUR_FADE_DELAY * 9.5}>
          <SectionLabel>VS Code theme</SectionLabel>
        </BlurFade>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {DATA.extensions.map((extension) => (
            <BlurFade key={extension.title} delay={BLUR_FADE_DELAY * 10}>
              <ExtensionCard
                title={extension.title}
                description={extension.description}
                type={extension.type}
                downloads={extension.downloads}
                highlight={extension.highlight}
                platform={extension.platform}
                href={extension.href}
                image={extension.image}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="skills">
        <BlurFade delay={BLUR_FADE_DELAY * 10}>
          <SectionLabel>Stack</SectionLabel>
        </BlurFade>
        <div className="space-y-2">
          {DATA.skillGroups.map((group, id) => (
            <BlurFade
              key={group.label}
              delay={BLUR_FADE_DELAY * 13 + id * 0.04}
            >
              <div className="grid grid-cols-[88px_1fr] gap-3 text-sm">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                  {group.label}
                </span>
                <span className="text-muted-foreground">
                  {group.items.join(" · ")}
                </span>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="education">
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <SectionLabel>Education</SectionLabel>
        </BlurFade>
        <div className="divide-y divide-border/60">
          {DATA.education.map((education, id) => (
            <BlurFade
              key={`${education.school}-${id}`}
              delay={BLUR_FADE_DELAY * 15 + id * 0.04}
            >
              <ResumeCard
                href={(education as any).href ?? ""}
                logoUrl={(education as any).logoUrl ?? ""}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="hackathons">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <SectionLabel>Hackathons</SectionLabel>
        </BlurFade>
        <ul className="divide-y divide-border/60">
          {DATA.hackathons.map((project, id) => (
            <BlurFade
              key={`${project.title}-${project.dates}-${id}`}
              delay={BLUR_FADE_DELAY * 17 + id * 0.04}
            >
              <HackathonCard
                title={project.title}
                description={project.description}
                location={project.location}
                dates={project.dates}
                image={project.image}
                tech={project.tech}
                links={project.links}
              />
            </BlurFade>
          ))}
        </ul>
      </section>

      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 18}>
          <SectionLabel>Contact</SectionLabel>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Open to backend, AI systems, and infrastructure roles.{" "}
            <Link
              href={DATA.contact.social.email.url}
              className="text-foreground underline-offset-4 hover:underline"
            >
              {DATA.contact.email}
            </Link>
            {" · "}
            <Link
              href={DATA.contact.social.X.url}
              className="text-foreground underline-offset-4 hover:underline"
            >
              X
            </Link>
            {" · "}
            <Link
              href={DATA.contact.social.GitHub.url}
              className="text-foreground underline-offset-4 hover:underline"
            >
              GitHub
            </Link>
            .
          </p>
        </BlurFade>
      </section>
    </main>
  );
}
