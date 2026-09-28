import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { projects, type Project } from "@/lib/content";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

function ProjectCard({ project, num }: { project: Project; num: number }) {
  const [open, setOpen] = useState(false);

  return (
    <article
      className="hover-lift rounded-sm border border-border bg-card"
    >
      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="kicker text-[10px]">
            {String(num + 1).padStart(2, "0")} / {project.period}
          </span>
          {project.outcome && (
            <span className="rounded-full bg-published-bg px-2.5 py-0.5 text-xs text-published">
              {project.outcome}
            </span>
          )}
        </div>
        <h3 className="mt-3 font-display text-xl leading-snug text-ink sm:text-[22px]">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.summary}</p>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary transition-colors hover:text-ink"
        >
          {open ? "收起详情" : "查看详情"}
          <ChevronDown
            size={15}
            className={cn("transition-transform duration-300", open && "rotate-180")}
          />
        </button>
      </div>

      {open && (
        <div className="expand-panel border-t border-border px-6 pb-8 pt-6 sm:px-8">
          <dl className="space-y-5">
            {project.detail.map((d) => (
              <div key={d.label} className="grid gap-1.5 sm:grid-cols-[7.5rem_1fr] sm:gap-4">
                <dt className="pt-0.5 text-sm font-medium text-ink">{d.label}</dt>
                <dd className="text-sm leading-7 text-muted-foreground">{d.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </article>
  );
}

export function Projects() {
  return (
    <section id="research" className="bg-secondary/40">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 md:py-24">
        <SectionHeading index="02" en="Research" zh="科研项目" />
        <div className="mt-10 space-y-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} num={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
