import { profile } from "@/lib/content";
import { Mail } from "lucide-react";

const initials = "XZ";

export function Hero() {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* 极淡的纸面渐变底纹 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_70%_0%,oklch(0.93_0.02_250/0.5),transparent_70%)]"
      />
      <div className="relative mx-auto grid max-w-5xl gap-10 px-5 pb-20 pt-16 sm:px-8 md:grid-cols-[1.6fr_1fr] md:items-center md:pb-28 md:pt-24">
        <div>
          <h1 className="font-display text-5xl leading-none tracking-tight text-ink sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 font-display text-xl text-ink-soft sm:text-2xl">
            {profile.nameEn}
          </p>
          <div className="mt-6 space-y-1.5 text-sm leading-relaxed">
            <p className="text-[16px] font-medium text-ink">{profile.school}</p>
            <p className="text-ink-soft">{profile.department}</p>
            <p className="text-ink-soft">{profile.degree}</p>
            <p className="text-muted-foreground">{profile.advisor}</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {profile.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-card px-3.5 py-1 text-xs text-ink-soft"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="mt-6 max-w-xl text-sm leading-7 text-muted-foreground">
            {profile.bio}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Mail size={15} />
              邮件联系
            </a>
          </div>
        </div>

        {/* 右侧极简姓名卡 */}
        <div className="hidden md:block">
          <div className="hover-lift ml-auto w-full max-w-xs rounded-sm border border-border bg-card p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-primary font-display text-xl text-primary-foreground">
              {initials}
            </div>
            <dl className="mt-7 space-y-4 text-sm">
              {[
                ["学校", "The Hong Kong Polytechnic University"],
                ["学系", profile.department],
                ["专业", "统计学 · 博士生"],
                ["方向", profile.tags.join(" · ")],
                ["荣誉", "香港理工大学校长奖学金 · 国家奖学金"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="kicker text-[10px]">{k}</dt>
                  <dd className="mt-1 leading-6 text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
