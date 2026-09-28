import { SectionHeading } from "@/components/SectionHeading";
import { educations } from "@/lib/content";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-5 py-16 sm:px-8 md:py-24">
      <SectionHeading index="01" en="Education" zh="教育背景" />
      <ol className="mt-10 space-y-0 border-l border-border">
        {educations.map((e) => (
          <li key={e.school} className="relative pb-10 pl-8 last:pb-0">
            {/* 时间线节点 */}
            <span className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full bg-primary ring-4 ring-background" />
            <p className="kicker">{e.period}</p>
            <h3 className="mt-2 font-display text-xl text-ink">
              {e.school}
              <span className="ml-3 text-sm font-normal text-muted-foreground">{e.degree}</span>
            </h3>
            <p className="mt-1 text-sm text-ink-soft">{e.major}</p>
            <ul className="mt-3 space-y-1.5">
              {e.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-sm leading-6 text-muted-foreground">
                  <span className="mt-[11px] h-px w-3 shrink-0 bg-border" aria-hidden />
                  {h}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
