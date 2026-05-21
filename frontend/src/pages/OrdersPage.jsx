import Button from '../components/ui/Button';

export default function OrdersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl text-ink-900">Siparisler</h1>

      <div className="mt-8 rounded-3xl border border-sand-200 bg-white p-6 shadow-soft">
        <p className="text-sm text-ink-600">Henuz bir siparisin yok.</p>
        <p className="mt-2 text-sm text-ink-500">
          Demo akista "Satın al" ile checkout sayfasina gidip siparis ozeti gorebilirsin.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button to="/products">Urunlere git</Button>
          <Button to="/cart" variant="ghost">Sepete git</Button>
        </div>
      </div>
    </div>
  );
}
