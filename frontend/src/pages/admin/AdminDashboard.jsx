import Button from '../../components/ui/Button';

export default function AdminDashboard() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl text-ink-900">Admin Panel</h1>

      <div className="mt-8 rounded-3xl border border-sand-200 bg-white p-6 shadow-soft">
        <p className="text-sm text-ink-600">Yönetim paneli kısayolları:</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button to="/admin/products">Ürünler</Button>
          <Button to="/admin/orders" variant="ghost">Siparişler</Button>
          <Button to="/admin/users" variant="ghost">Kullanıcılar</Button>
        </div>
        <p className="mt-6 text-xs text-ink-500">
          Ürünleri, siparişleri ve kullanıcıları bu panel üzerinden yönetebilirsin.
        </p>
      </div>
    </div>
  );
}
