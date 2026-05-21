export default function SectionHeader({ title, subtitle, action }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="text-xs uppercase tracking-widest text-brand-500">U-Ticaret</p>
        <h2 className="font-display text-3xl text-ink-900">{title}</h2>
        <p className="mt-2 text-sm text-ink-500">{subtitle}</p>
      </div>
      {action}
    </div>
  );
}
