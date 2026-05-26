import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { api } from '../../lib/api';

const formatPrice = (value) =>
  new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(value || 0);

const STATUS_OPTIONS = [
  { value: 'pending', label: 'Beklemede' },
  { value: 'processing', label: 'Hazırlanıyor' },
  { value: 'shipped', label: 'Kargoda' },
  { value: 'delivered', label: 'Teslim edildi' },
  { value: 'cancelled', label: 'İptal edildi' },
];

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get('/orders');
        setOrders(res.data.data || []);
      } catch {
        toast.error('Siparişler yüklenemedi.');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/orders/${id}/status`, { status });
      setOrders((prev) => prev.map((order) => (order._id === id ? { ...order, status } : order)));
      toast.success('Sipariş durumu güncellendi.');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Güncelleme başarısız.');
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl text-ink-900">Admin Siparişler</h1>

      <div className="mt-8 rounded-3xl border border-sand-200 bg-white p-6 shadow-soft">
        <p className="text-sm font-semibold text-ink-900">Sipariş listesi</p>
        <div className="mt-5 space-y-3">
          {loading && <p className="text-sm text-ink-500">Yükleniyor...</p>}
          {!loading && orders.length === 0 && (
            <p className="text-sm text-ink-500">Henüz sipariş yok.</p>
          )}
          {orders.map((order) => (
            <div
              key={order._id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-sand-200 px-4 py-3"
            >
              <div>
                <p className="text-sm font-semibold text-ink-900">
                  #{order._id.slice(-6).toUpperCase()} • {formatPrice(order.totalPrice)}
                </p>
                <p className="text-xs text-ink-500">
                  {order.user?.name || 'Bilinmiyor'} ({order.user?.email || '-'}) •{' '}
                  {new Date(order.createdAt).toLocaleDateString('tr-TR')}
                </p>
              </div>
              <select
                className="rounded-2xl border border-sand-200 px-3 py-2 text-sm text-ink-900 focus:border-brand-400 focus:outline-none"
                value={order.status}
                onChange={(event) => updateStatus(order._id, event.target.value)}
              >
                {STATUS_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
