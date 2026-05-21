import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '../components/ui/Button';
import { removeItem, setItemQuantity, clearCart } from '../features/cart/cartSlice';

const formatPrice = (value) =>
  new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    maximumFractionDigits: 0,
  }).format(value);

export default function CartPage() {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl text-ink-900">Sepet</h1>

      {!items.length ? (
        <div className="mt-6 rounded-3xl border border-sand-200 bg-white p-6">
          <p className="text-sm text-ink-600">Sepetin bos. Urunlere goz atmak ister misin?</p>
          <Button to="/products" className="mt-4">Urunlere git</Button>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-3">
            {items.map((item) => (
              <div
                key={item.productId}
                className="rounded-3xl border border-sand-200 bg-white p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold text-ink-900">{item.name}</p>
                    <p className="mt-1 text-xs text-ink-500">Model: {item.model}</p>
                    <Link
                      className="mt-2 inline-block text-sm text-brand-600 hover:text-brand-700"
                      to={`/products/${item.productId}`}
                    >
                      Urun detayina git
                    </Link>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-ink-500">Birim fiyat</p>
                    <p className="text-lg font-semibold text-ink-900">{formatPrice(item.price)}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <label className="text-sm text-ink-600" htmlFor={`qty-${item.productId}`}>
                      Adet
                    </label>
                    <input
                      id={`qty-${item.productId}`}
                      type="number"
                      min={1}
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(setItemQuantity({ productId: item.productId, qty: e.target.value }))
                      }
                      className="w-20 rounded-2xl border border-sand-200 px-3 py-2 text-sm text-ink-900 focus:outline-none"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="ghost" onClick={() => dispatch(removeItem(item.productId))}>
                      Kaldir
                    </Button>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-sand-100 pt-4">
                  <p className="text-sm text-ink-600">Ara toplam</p>
                  <p className="text-lg font-semibold text-ink-900">
                    {formatPrice(item.price * item.qty)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <aside className="rounded-3xl border border-sand-200 bg-white p-6 h-fit">
            <p className="text-xs uppercase tracking-widest text-ink-400">Ozet</p>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-ink-600">Toplam</p>
              <p className="text-2xl font-semibold text-ink-900">{formatPrice(total)}</p>
            </div>
            <Button to="/checkout" className="mt-6 w-full">Odeme adimina git</Button>
            <Button
              variant="ghost"
              className="mt-3 w-full"
              onClick={() => dispatch(clearCart())}
            >
              Sepeti temizle
            </Button>
          </aside>
        </div>
      )}
    </div>
  );
}
