import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { papers, type PaperStatus } from "@/lib/content";
import { cn } from "@/lib/utils";

const statusStyle: Record<PaperStatus, string> = {
  published: "bg-published-bg text-published",
  submitted: "bg-submitted-bg text-submitted",
  reviewing: "bg-reviewing-bg text-reviewing",
  preprint: "bg-preprint-bg text-preprint",
};

type Filter = "all" | PaperStatus;

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "全部" },
  { key: "published", label: "已发表" },
  { key: "submitted", label: "在投" },
  { key: "reviewing", label: "在审" },
  { key: "preprint", label: "预印本" },
];

/** 作者串中把 Xueyu Zhou 加粗高亮 */
function renderAuthors(authors: string) {
  return authors.split(/(Xueyu Zhou)/g).map((part, i) =>
    part === "Xueyu Zhou" ? (
      <strong key={i} className="font-semibold text-ink">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export function Papers() {
  const [filter, setFilter] = useState<Filter>("all");

  const list = useMemo(
    () => (filter === "all" ? papers : papers.filter((p) => p.status === filter)),
    [filter]
  );

  return (
    <section id="papers" className="mx-auto max-w-5xl px-5 py-16 sm:px-8 md:py-24">
      <SectionHeading index="03" en="Publications" zh="论文成果" />

      <div className="mt-8 flex flex-wrap gap-1.5">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={cn(
              "rounded-full border px-3.5 py-1 text-xs transition-colors",
              filter === f.key
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-ink-soft hover:border-ink-soft"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <ol className="mt-6 divide-y divide-border border-y border-border">
        {list.map((p, i) => (
          <li
            key={p.title}
            className="expand-panel group flex gap-4 py-5 sm:gap-6"
            style={{ animationDelay: `${Math.min(i, 6) * 40}ms` }}
          >
            <span className="kicker w-7 shrink-0 pt-1 text-[11px]">
              {String(papers.indexOf(p) + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="font-display text-base leading-snug text-ink sm:text-lg">
                {p.title}
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                {renderAuthors(p.authors)}
                {p.coFirst && (
                  <span className="ml-1.5 text-xs text-ink-soft">(* 共同一作)</span>
                )}
              </p>
              <p className="mt-1 text-sm italic text-ink-soft">{p.venue}</p>
            </div>
            <span
              className={cn(
                "h-fit shrink-0 self-center rounded-full px-2.5 py-0.5 text-xs whitespace-nowrap",
                statusStyle[p.status]
              )}
            >
              {p.statusLabel}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
