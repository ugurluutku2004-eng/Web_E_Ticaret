import { useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';

import Button from '../../components/ui/Button';
import { api } from '../../lib/api';

const formatPrice = (value) =>
  new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(value || 0);

const statusLabel = (status) => {
  const map = {
    pending: 'Beklemede',
    processing: 'Hazırlanıyor',
    shipped: 'Kargoda',
    delivered: 'Teslim edildi',
    cancelled: 'İptal edildi',
  };
  return map[status] || status || '-';
};

export default function AccountOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cancellingId, setCancellingId] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get('/orders/my');
        setOrders(res.data.data || []);
      } catch (error) {
        toast.error(error.response?.data?.message || 'Siparişler yüklenemedi.');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const hasOrders = useMemo(() => orders.length > 0, [orders.length]);

  const canCancel = (order) =>
    order && order.status !== 'cancelled' && order.status !== 'delivered';

  const onCancelOrder = async (orderId) => {
    try {
      setCancellingId(orderId);
      await api.put(`/orders/${orderId}/cancel`);
      setOrders((prev) =>
        prev.map((order) =>
          order._id === orderId
            ? { ...order, status: 'cancelled', isPaid: false }
            : order
        )
      );
      toast.success('Sipariş iptal edildi, iade işlemi başlatıldı.');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Sipariş iptal edilemedi.');
    } finally {
      setCancellingId(null);
    }
  };

  return (
    <div className="rounded-3xl border border-sand-200 bg-white p-6 shadow-soft">
      <p className="text-sm font-semibold text-ink-900">Siparişlerim</p>

      {loading ? (
        <p className="mt-3 text-sm text-ink-500">Yükleniyor...</p>
      ) : !hasOrders ? (
        <>
          <p className="mt-3 text-sm text-ink-600">Henüz bir siparişin yok.</p>
          <p className="mt-2 text-sm text-ink-500">
            Ürünleri inceleyip "Satın al" diyerek ödeme adımına geçebilirsin.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button to="/products">Ürünlere git</Button>
            <Button to="/cart" variant="ghost">Sepete git</Button>
          </div>
        </>
      ) : (
        <div className="mt-4 space-y-3">
          {orders.map((order) => (
            <div
              key={order._id}
              className="rounded-2xl border border-sand-200 px-4 py-4"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-ink-900">
                    #{order._id.slice(-6).toUpperCase()} • {formatPrice(order.totalPrice)}
                  </p>
                  <p className="mt-1 text-xs text-ink-500">
                    {new Date(order.createdAt).toLocaleDateString('tr-TR')} • {statusLabel(order.status)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-ink-500">Ödeme</p>
                  <p className="text-sm font-semibold text-ink-900">
                    {order.status === 'cancelled' && order.isPaid === false
                      ? 'İade edildi'
                      : order.isPaid
                        ? 'Tamamlandı'
                        : 'Beklemede'}
                  </p>
                </div>
              </div>

              <div className="mt-3 space-y-1">
                {(order.items || []).map((item) => (
                  <div key={item._id || item.product} className="flex items-center justify-between">
                    <p className="text-xs text-ink-600">
                      {item.name} x {item.quantity}
                    </p>
                    <p className="text-xs text-ink-600">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                ))}
              </div>

              {canCancel(order) ? (
                <div className="mt-4 flex justify-end">
                  <Button
                    variant="ghost"
                    onClick={() => onCancelOrder(order._id)}
                    disabled={cancellingId === order._id}
                  >
                    {cancellingId === order._id ? 'İptal ediliyor...' : 'Siparişi iptal et'}
                  </Button>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
