import Button from '../../components/ui/Button';
import { products } from '../../data/catalog';

export default function AdminProducts() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl text-ink-900">Admin Urunler</h1>

      <div className="mt-8 rounded-3xl border border-sand-200 bg-white p-6 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-ink-600">Urun listesi (demo)</p>
          <Button variant="ghost" onClick={() => {}}>
            Yeni urun ekle
          </Button>
        </div>

        <div className="mt-5 divide-y divide-sand-100">
          {products.slice(0, 8).map((product) => (
            <div key={product.id} className="flex flex-wrap items-center justify-between gap-3 py-3">
              <div>
                <p className="text-sm font-semibold text-ink-900">{product.name}</p>
                <p className="text-xs text-ink-500">Model: {product.model} • {product.category}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button to={`/products/${product.id}`} variant="ghost">Goruntule</Button>
                <Button variant="ghost" onClick={() => {}}>Duzenle</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
