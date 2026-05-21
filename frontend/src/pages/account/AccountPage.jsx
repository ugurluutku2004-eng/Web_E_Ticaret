import { Link } from 'react-router-dom';

export default function AccountPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-xs uppercase tracking-widest text-brand-500">Hesabim</p>
      <h1 className="mt-2 font-display text-4xl text-ink-900">U-Ticaret Hesap Merkezi</h1>
      <p className="mt-3 text-sm text-ink-500">Profil ayarlari ve odeme tercihlerin buradan yonetilir.</p>

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
