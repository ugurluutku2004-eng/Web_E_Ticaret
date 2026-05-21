import Button from '../../components/ui/Button';

export default function AdminOrders() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl text-ink-900">Admin Siparisler</h1>

      <div className="mt-8 rounded-3xl border border-sand-200 bg-white p-6 shadow-soft">
        <p className="text-sm text-ink-600">Siparis listesi (demo)</p>
        <div className="mt-5 space-y-3">
          {['ORD-1001', 'ORD-1002', 'ORD-1003'].map((id) => (
            <div key={id} className="flex items-center justify-between rounded-2xl border border-sand-200 px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-ink-900">{id}</p>
                <p className="text-xs text-ink-500">Durum: Hazirlaniyor</p>
              </div>
              <Button to={`/orders/${id}`} variant="ghost">Detay</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
