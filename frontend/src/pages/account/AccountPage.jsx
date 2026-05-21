import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Button from '../../components/ui/Button';

export default function AccountPage() {
  const { token, user } = useSelector((state) => state.auth);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-xs uppercase tracking-widest text-brand-500">Hesabim</p>
      <h1 className="mt-2 font-display text-4xl text-ink-900">U-Ticaret Hesap Merkezi</h1>
      <p className="mt-3 text-sm text-ink-500">Profil ayarlari ve odeme tercihlerin buradan yonetilir.</p>

      {!token ? (
        <div className="mt-8 rounded-3xl border border-sand-200 bg-white p-6 shadow-soft">
          <p className="text-sm text-ink-600">Devam etmek icin giris yap veya kayit ol.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button to="/login">Giris yap</Button>
            <Button to="/register" variant="ghost">Kayit ol</Button>
          </div>
        </div>
      ) : (
        <div className="mt-8 rounded-3xl border border-sand-200 bg-white p-6 shadow-soft">
          <p className="text-sm text-ink-600">Hos geldin, <span className="font-semibold text-ink-900">{user?.name}</span>.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button to="/profile" variant="ghost">Profil</Button>
            <Button to="/orders" variant="ghost">Siparislerim</Button>
            <Button to="/cart" variant="ghost">Sepet</Button>
          </div>
        </div>
      )}

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Link
          to="/account/settings"
          className="rounded-3xl border border-sand-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-card"
        >
          <p className="text-xs uppercase tracking-widest text-ink-400">Ayarlar</p>
          <h3 className="mt-2 text-xl font-semibold text-ink-900">Hesap Ayarlari</h3>
          <p className="mt-1 text-sm text-ink-500">Ad, e-posta, sifre ve bildirimler.</p>
        </Link>

        <Link
          to="/account/payments"
          className="rounded-3xl border border-sand-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-card"
        >
          <p className="text-xs uppercase tracking-widest text-ink-400">Odeme</p>
          <h3 className="mt-2 text-xl font-semibold text-ink-900">Odeme Secenekleri</h3>
          <p className="mt-1 text-sm text-ink-500">Kartlarin ve fatura tercihleriniz.</p>
        </Link>
      </div>
    </div>
  );
}
