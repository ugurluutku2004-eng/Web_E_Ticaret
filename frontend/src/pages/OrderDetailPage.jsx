import { useParams } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function OrderDetailPage() {
  const { id } = useParams();
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl text-ink-900">Siparis Detayi</h1>

      <div className="mt-8 rounded-3xl border border-sand-200 bg-white p-6 shadow-soft">
        <p className="text-sm text-ink-600">Siparis ID: <span className="font-semibold text-ink-900">{id}</span></p>
        <p className="mt-2 text-sm text-ink-500">
          Bu sayfa demo icin hazir. Gercek siparis detaylari backend entegrasyonu ile doldurulur.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button to="/orders" variant="ghost">Siparislere geri don</Button>
          <Button to="/products">Urunlere git</Button>
        </div>
      </div>
    </div>
  );
}
