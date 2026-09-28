type Props = {
  index: string;
  zh: string;
  en: string;
};

export function SectionHeading({ index, zh, en }: Props) {
  return (
    <div className="flex items-end justify-between gap-6 border-b border-ink/80 pb-4">
      <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
        {zh}
      </h2>
      <p className="kicker pb-1 text-right">
        {index} · {en}
      </p>
    </div>
  );
}
