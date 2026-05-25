import Button from '../../components/ui/Button';

export default function AccountOrdersPage() {
  return (
    <div className="rounded-3xl border border-sand-200 bg-white p-6 shadow-soft">
      <p className="text-sm text-ink-600">Henüz bir siparişin yok.</p>
      <p className="mt-2 text-sm text-ink-500">
        Ürünleri inceleyip "Satın al" diyerek ödeme adımına geçebilir ve sipariş özetini görebilirsin.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Button to="/products">Ürünlere git</Button>
        <Button to="/cart" variant="ghost">Sepete git</Button>
      </div>
    </div>
  );
}
