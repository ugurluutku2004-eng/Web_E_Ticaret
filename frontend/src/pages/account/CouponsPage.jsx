import { Copy } from 'lucide-react';
import toast from 'react-hot-toast';

import { coupons } from '../../data/coupons';

export default function CouponsPage() {
  const onCopy = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      toast.success(`${code} kopyalandı`);
    } catch {
      toast.error('Kopyalanamadı, kodu elle gir');
    }
  };

  return (
    <div>
      <p className="text-sm text-ink-600">
        Aşağıdaki kodları ödeme sayfasında kupon alanına girerek indirim kazanabilirsin.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {coupons.map((coupon) => (
          <div
            key={coupon.code}
            className="flex flex-col justify-between rounded-3xl border border-sand-200 bg-white p-6 shadow-soft"
          >
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-brand-50 px-3 py-1 text-sm font-bold tracking-wide text-brand-600">
                  {coupon.code}
                </span>
                <span className="text-lg font-semibold text-ink-900">{coupon.label}</span>
              </div>
              <p className="mt-3 text-sm text-ink-500">{coupon.description}</p>
            </div>

            <button
              type="button"
              onClick={() => onCopy(coupon.code)}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-sand-200 px-4 py-2 text-sm font-semibold text-ink-700 transition hover:border-brand-400 hover:text-brand-600"
            >
              <Copy className="h-4 w-4" />
              Kodu kopyala
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
