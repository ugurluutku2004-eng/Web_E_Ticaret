import { useParams } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function OrderDetailPage() {
  const { id } = useParams();
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl text-ink-900">Sipariş Detayı</h1>

      <div className="mt-8 rounded-3xl border border-sand-200 bg-white p-6 shadow-soft">
        <p className="text-sm text-ink-600">Sipariş No: <span className="font-semibold text-ink-900">{id}</span></p>
        <p className="mt-2 text-sm text-ink-500">
          Siparişinin detayları burada görüntülenir.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button to="/account/orders" variant="ghost">Siparişlere geri dön</Button>
          <Button to="/products">Ürünlere git</Button>
        </div>
      </div>
    </div>
  );
}
