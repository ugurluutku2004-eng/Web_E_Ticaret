import { useState } from 'react';
import { useSelector } from 'react-redux';
import { X } from 'lucide-react';
import toast from 'react-hot-toast';

import Button from '../components/ui/Button';
import { findCoupon } from '../data/coupons';

const formatPrice = (value) =>
  new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    maximumFractionDigits: 0,
  }).format(value);

export default function CheckoutPage() {
  const { items, total } = useSelector((state) => state.cart);

  const [couponInput, setCouponInput] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  const discount = appliedCoupon ? total * appliedCoupon.rate : 0;
  const payable = total - discount;

  const onApplyCoupon = (event) => {
    event.preventDefault();
    const match = findCoupon(couponInput);
    if (!match) {
      setAppliedCoupon(null);
      toast.error('Geçersiz kupon kodu');
      return;
    }
    setAppliedCoupon(match);
    toast.success(`${match.code} uygulandı (${match.label})`);
  };

  const onRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponInput('');
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl text-ink-900">Ödeme</h1>

      {!items.length ? (
        <div className="mt-6 rounded-3xl border border-sand-200 bg-white p-6">
          <p className="text-sm text-ink-600">Ödeme için sepetinde ürün olmalı.</p>
          <Button to="/products" className="mt-4">Ürünlere git</Button>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-sand-200 bg-white p-6">
            <p className="text-xs uppercase tracking-widest text-ink-400">Sipariş özeti</p>
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

            <div className="mt-6 space-y-2 border-t border-sand-100 pt-4">
              <div className="flex items-center justify-between text-sm text-ink-600">
                <span>Ara toplam</span>
                <span>{formatPrice(total)}</span>
              </div>

              {appliedCoupon && (
                <div className="flex items-center justify-between text-sm text-emerald-600">
                  <span>Kupon ({appliedCoupon.code} · {appliedCoupon.label})</span>
                  <span>-{formatPrice(discount)}</span>
                </div>
              )}

              <div className="flex items-center justify-between border-t border-sand-100 pt-3">
                <p className="text-sm text-ink-600">Toplam</p>
                <p className="text-2xl font-semibold text-ink-900">{formatPrice(payable)}</p>
              </div>
            </div>
          </div>

          <aside className="rounded-3xl border border-sand-200 bg-white p-6 h-fit">
            <p className="text-xs uppercase tracking-widest text-ink-400">Kupon kodu</p>

            {appliedCoupon ? (
              <div className="mt-3 flex items-center justify-between gap-3 rounded-2xl bg-emerald-50 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-emerald-700">{appliedCoupon.code}</p>
                  <p className="text-xs text-emerald-600">{appliedCoupon.label} uygulandı</p>
                </div>
                <button
                  type="button"
                  onClick={onRemoveCoupon}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-900"
                >
                  <X className="h-4 w-4" />
                  Kaldır
                </button>
              </div>
            ) : (
              <form className="mt-3 flex gap-2" onSubmit={onApplyCoupon}>
                <input
                  value={couponInput}
                  onChange={(event) => setCouponInput(event.target.value)}
                  className="w-full rounded-2xl border border-sand-200 px-4 py-2 text-sm uppercase text-ink-900 placeholder:normal-case placeholder:text-ink-400 focus:outline-none"
                  placeholder="Geçerli Kupon Kodunu Gir"
                />
                <Button type="submit" variant="ghost">Uygula</Button>
              </form>
            )}

            <p className="mt-3 text-xs text-ink-500">
              Kuponlarını hesap menündeki "Kuponlar" sekmesinden görebilirsin.
            </p>

            <div className="mt-6 border-t border-sand-100 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-ink-600">Ödenecek tutar</span>
                <span className="text-lg font-semibold text-ink-900">{formatPrice(payable)}</span>
              </div>
              <Button className="mt-4 w-full" to="/account/orders">
                Siparişi tamamla
              </Button>
              <Button variant="ghost" className="mt-3 w-full" to="/cart">
                Sepete geri dön
              </Button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
