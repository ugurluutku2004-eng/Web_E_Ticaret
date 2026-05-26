import { useEffect, useState } from 'react';
import { api } from '../../lib/api';
import Button from '../../components/ui/Button';

export default function AdminDashboard() {
  const [stats, setStats] = useState({ products: '–', categories: '–', orders: '–', users: '–' });

  useEffect(() => {
    (async () => {
      try {
        const [prodRes, catRes, orderRes, userRes] = await Promise.all([
          api.get('/products?limit=1'),
          api.get('/categories'),
          api.get('/orders'),
          api.get('/users'),
        ]);
        setStats({
          products: prodRes.data.pagination?.total ?? (prodRes.data.data?.length || 0),
          categories: catRes.data.data?.length || 0,
          orders: orderRes.data.data?.length || 0,
          users: userRes.data.data?.length || 0,
        });
      } catch {
        // Yetki yoksa veya hata olursa sayımlar "–" kalır.
      }
    })();
  }, []);

  const cards = [
    { label: 'Ürün', value: stats.products },
    { label: 'Kategori', value: stats.categories },
    { label: 'Sipariş', value: stats.orders },
    { label: 'Kullanıcı', value: stats.users },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl text-ink-900">Admin Panel</h1>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div key={card.label} className="rounded-3xl border border-sand-200 bg-white p-6 shadow-soft">
            <p className="text-sm text-ink-500">{card.label}</p>
            <p className="mt-2 font-display text-3xl text-ink-900">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-3xl border border-sand-200 bg-white p-6 shadow-soft">
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
