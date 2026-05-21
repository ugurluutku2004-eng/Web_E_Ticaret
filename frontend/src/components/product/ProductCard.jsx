import Button from '../ui/Button';

export default function ProductCard({ product }) {
  return (
    <div className="rounded-3xl border border-sand-200 bg-white p-4 shadow-card">
      <div className="aspect-square rounded-2xl bg-sand-100" />
      <div className="mt-4 space-y-2">
        <p className="text-xs uppercase tracking-widest text-ink-400">{product.category}</p>
        <p className="text-lg font-semibold text-ink-900">{product.name}</p>
        <p className="text-sm text-ink-500">{product.short}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-ink-900">{product.price} TL</span>
          <Button variant="ghost">Sepete ekle</Button>
        </div>
      </div>
    </div>
  );
}
