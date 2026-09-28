import { SectionHeading } from "@/components/SectionHeading";
import { competitions, skills } from "@/lib/content";
import { Trophy } from "lucide-react";

export function Skills() {
  return (
    <section id="skills" className="bg-secondary/40">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 md:py-24">
        <SectionHeading index="04" en="Skills & Awards" zh="竞赛与技能" />

        <div className="mt-10 grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
          {/* 左栏：竞赛经历 */}
          <div>
            <h3 className="kicker">Competitions</h3>
            <ul className="mt-5 space-y-5">
              {competitions.map((c) => (
                <li
                  key={c.name}
                  className="hover-lift flex gap-4 rounded-sm border border-border bg-card p-5"
                >
                  <Trophy size={18} className="mt-0.5 shrink-0 text-reviewing" />
                  <div>
                    <p className="font-display text-base text-ink">{c.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{c.result}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* 右栏：个人技能 */}
          <div>
            <h3 className="kicker">Skill Set</h3>
            <dl className="mt-5 divide-y divide-border border-t border-border">
              {skills.map((s) => (
                <div key={s.name} className="py-4">
                  <dt className="text-sm font-medium text-ink">{s.name}</dt>
                  <dd className="mt-1 text-sm leading-7 text-muted-foreground">{s.desc}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
