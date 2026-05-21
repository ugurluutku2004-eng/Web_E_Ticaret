import Button from '../../components/ui/Button';

export default function HelpPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-xs uppercase tracking-widest text-brand-500">Yardim Merkezi</p>
      <h1 className="mt-2 font-display text-4xl text-ink-900">Sik Sorulan Sorular</h1>

      <div className="mt-8 space-y-4 rounded-3xl border border-sand-200 bg-white p-6 shadow-soft">
        <div>
          <p className="text-sm font-semibold text-ink-900">Sepete nasil urun eklerim?</p>
          <p className="mt-1 text-sm text-ink-600">
            Urun kartindaki "Sepete ekle" butonunu kullanabilir veya urun detay sayfasindan
            adet secip sepete ekleyebilirsin.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink-900">Satin al butonu ne yapiyor?</p>
          <p className="mt-1 text-sm text-ink-600">
            Urunu sepete ekleyip dogrudan odeme adimina yonlendirir.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink-900">Giris yapmadan sepeti kullanabilir miyim?</p>
          <p className="mt-1 text-sm text-ink-600">
            Sepet ve checkout demo olarak aciktir. Profil ve siparis sayfalari icin giris gerekir.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button to="/products">Urunlere git</Button>
        <Button to="/account" variant="ghost">Hesap merkezi</Button>
      </div>
    </div>
  );
}
