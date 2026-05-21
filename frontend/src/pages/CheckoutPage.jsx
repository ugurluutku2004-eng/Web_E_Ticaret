import { useSelector } from 'react-redux';
import Button from '../components/ui/Button';

const formatPrice = (value) =>
  new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    maximumFractionDigits: 0,
  }).format(value);

export default function CheckoutPage() {
  const { items, total } = useSelector((state) => state.cart);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl text-ink-900">Odeme</h1>

      {!items.length ? (
        <div className="mt-6 rounded-3xl border border-sand-200 bg-white p-6">
          <p className="text-sm text-ink-600">Odeme icin sepetinde urun olmali.</p>
          <Button to="/products" className="mt-4">Urunlere git</Button>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-sand-200 bg-white p-6">
            <p className="text-xs uppercase tracking-widest text-ink-400">Siparis ozeti</p>
            <div className="mt-4 space-y-3">
              {items.map((item) => (
                <div key={item.productId} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-ink-900">{item.name}</p>
                    <p className="text-xs text-ink-500">Model: {item.model}</p>
                    <p className="mt-1 text-xs text-ink-500">Adet: {item.qty}</p>
                  </div>
                  <p className="text-sm font-semibold text-ink-900">
                    {formatPrice(item.price * item.qty)}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-sand-100 pt-4">
              <p className="text-sm text-ink-600">Toplam</p>
              <p className="text-2xl font-semibold text-ink-900">{formatPrice(total)}</p>
            </div>
          </div>

          <aside className="rounded-3xl border border-sand-200 bg-white p-6 h-fit">
            <p className="text-xs uppercase tracking-widest text-ink-400">Odeme bilgileri</p>
            <p className="mt-3 text-sm text-ink-600">
              Bu bolum tasarim/entegre icin hazir. Hocanin istedigi sayfa ayrimi icin odeme adimi
              goruntuleniyor.
            </p>
            <Button className="mt-6 w-full" to="/orders">
              Siparisi tamamla (demo)
            </Button>
            <Button variant="ghost" className="mt-3 w-full" to="/cart">
              Sepete geri don
            </Button>
          </aside>
        </div>
      )}
    </div>
  );
}
