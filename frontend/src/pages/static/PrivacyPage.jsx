import Button from '../../components/ui/Button';

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-xs uppercase tracking-widest text-brand-500">KVKK & Gizlilik</p>
      <h1 className="mt-2 font-display text-4xl text-ink-900">Gizlilik Bilgilendirmesi (Demo)</h1>
      <p className="mt-3 text-sm text-ink-600">
        Bu proje bir demo/okul calismasidir. Gercek bir gizlilik metni yerine, sayfa ayrimi ve
        linkli gezinti gereksinimi icin ornek bir bilgilendirme sunar.
      </p>

      <div className="mt-8 rounded-3xl border border-sand-200 bg-white p-6 shadow-soft">
        <p className="text-sm font-semibold text-ink-900">Toplanan veriler</p>
        <p className="mt-2 text-sm text-ink-600">
          Demo olarak giris/kayit sirasinda ad ve e-posta bilgisi alinabilir. Odeme bilgileri bu
          arayuzde kaydedilmez (demo).
        </p>

        <p className="mt-6 text-sm font-semibold text-ink-900">Cerezler</p>
        <p className="mt-2 text-sm text-ink-600">
          Oturum token’i tarayicida (localStorage) saklanabilir.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button to="/" variant="ghost">Ana sayfa</Button>
        <Button to="/help">Yardim Merkezi</Button>
      </div>
    </div>
  );
}
