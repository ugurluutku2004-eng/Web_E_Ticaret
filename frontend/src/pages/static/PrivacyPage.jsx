import Button from '../../components/ui/Button';

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-xs uppercase tracking-widest text-brand-500">KVKK & Gizlilik</p>
      <h1 className="mt-2 font-display text-4xl text-ink-900">Gizlilik Bilgilendirmesi</h1>
      <p className="mt-3 text-sm text-ink-600">
        Kişisel verilerinin güvenliği bizim için önemlidir. Bu sayfada hangi bilgileri topladığımızı
        ve nasıl kullandığımızı kısaca açıklıyoruz.
      </p>

      <div className="mt-8 rounded-3xl border border-sand-200 bg-white p-6 shadow-soft">
        <p className="text-sm font-semibold text-ink-900">Toplanan veriler</p>
        <p className="mt-2 text-sm text-ink-600">
          Giriş ve kayıt sırasında ad ile e-posta bilgisi alınır. Bu bilgiler yalnızca hesabının
          oluşturulması ve oturumunun yönetilmesi için kullanılır.
        </p>

        <p className="mt-6 text-sm font-semibold text-ink-900">Ödeme bilgileri</p>
        <p className="mt-2 text-sm text-ink-600">
          Kart bilgilerin yalnızca alışveriş işlemini tamamlamak için kullanılır ve gizliliğin
          korunarak işlenir.
        </p>

        <p className="mt-6 text-sm font-semibold text-ink-900">Çerezler</p>
        <p className="mt-2 text-sm text-ink-600">
          Oturum bilgin, tekrar giriş yapmana gerek kalmaması için tarayıcında (localStorage)
          saklanır.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button to="/" variant="ghost">Ana sayfa</Button>
        <Button to="/help">Yardım Merkezi</Button>
      </div>
    </div>
  );
}
