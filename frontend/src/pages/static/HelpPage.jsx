import Button from '../../components/ui/Button';

export default function HelpPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-xs uppercase tracking-widest text-brand-500">Yardım Merkezi</p>
      <h1 className="mt-2 font-display text-4xl text-ink-900">Sık Sorulan Sorular</h1>

      <div className="mt-8 space-y-4 rounded-3xl border border-sand-200 bg-white p-6 shadow-soft">
        <div>
          <p className="text-sm font-semibold text-ink-900">Sepete nasıl ürün eklerim?</p>
          <p className="mt-1 text-sm text-ink-600">
            Ürün kartındaki "Sepete ekle" butonunu kullanabilir veya ürün detay sayfasından
            adet seçip sepete ekleyebilirsin.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink-900">Satın al butonu ne yapıyor?</p>
          <p className="mt-1 text-sm text-ink-600">
            Ürünü sepete ekleyip doğrudan ödeme adımına yönlendirir.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink-900">Kupon kodumu nasıl kullanırım?</p>
          <p className="mt-1 text-sm text-ink-600">
            Hesap menündeki "Kuponlar" sekmesinden kodları görebilir, ödeme sayfasındaki kupon
            alanına girerek indirimini hemen uygulayabilirsin.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink-900">Giriş yapmadan sepeti kullanabilir miyim?</p>
          <p className="mt-1 text-sm text-ink-600">
            Sepeti ve ödeme adımını giriş yapmadan görüntüleyebilirsin. Profil ve sipariş sayfaları
            için giriş yapman gerekir.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button to="/products">Ürünlere git</Button>
        <Button to="/account" variant="ghost">Hesap merkezi</Button>
      </div>
    </div>
  );
}
