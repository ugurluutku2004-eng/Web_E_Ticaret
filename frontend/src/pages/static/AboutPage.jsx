import { ShieldCheck, Truck, Headphones, Tag } from 'lucide-react';
import Button from '../../components/ui/Button';

const values = [
  {
    icon: ShieldCheck,
    title: 'Güvenli alışveriş',
    description: 'Hesap işlemleri ve oturumlar güvenli şekilde yönetilir; bilgilerin korunur.',
  },
  {
    icon: Truck,
    title: 'Hızlı teslimat',
    description: 'Siparişlerin en kısa sürede hazırlanıp adresine ulaştırılması için çalışırız.',
  },
  {
    icon: Headphones,
    title: '7/24 destek',
    description: 'Sorularını yanıtlamak ve yaşadığın sorunları çözmek için her zaman buradayız.',
  },
  {
    icon: Tag,
    title: 'Avantajlı fiyatlar',
    description: 'Kupon ve kampanyalarla bütçene uygun fiyatlarla alışveriş yaparsın.',
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-xs uppercase tracking-widest text-brand-500">Hakkımızda</p>
      <h1 className="mt-2 font-display text-4xl text-ink-900">U-Ticaret</h1>
      <p className="mt-4 max-w-3xl text-base text-ink-600">
        U-Ticaret; teknolojiden giyime, ev yaşamından kozmetiğe kadar günlük ihtiyaçlarını tek bir
        yerden karşılayabileceğin modern bir e-ticaret platformudur. Amacımız, alışverişi hem keyifli
        hem de güvenilir hale getirmek.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <section className="rounded-3xl border border-sand-200 bg-white p-6 shadow-soft">
          <h2 className="font-display text-2xl text-ink-900">Biz kimiz?</h2>
          <p className="mt-3 text-sm text-ink-600">
            Geniş ürün yelpazemiz, kullanıcı dostu arayüzümüz ve özenli müşteri hizmetimizle binlerce
            kullanıcıya hizmet vermeyi hedefliyoruz. Kategori sayfaları, ürün kartları, ürün detayları
            ve sepetten ödemeye uzanan akıcı bir alışveriş deneyimi sunuyoruz.
          </p>
        </section>

        <section className="rounded-3xl border border-sand-200 bg-white p-6 shadow-soft">
          <h2 className="font-display text-2xl text-ink-900">Vizyonumuz</h2>
          <p className="mt-3 text-sm text-ink-600">
            Müşteri memnuniyetini her zaman ön planda tutarak; kaliteli ürünleri, uygun fiyatları ve
            hızlı teslimatı bir araya getiren güvenilir bir alışveriş adresi olmak istiyoruz. Sürekli
            gelişen yapımızla deneyimini her gün biraz daha iyileştiriyoruz.
          </p>
        </section>
      </div>

      <h2 className="mt-12 font-display text-2xl text-ink-900">Neden U-Ticaret?</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {values.map(({ icon: Icon, title, description }) => (
          <div key={title} className="rounded-3xl border border-sand-200 bg-white p-6 shadow-soft">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-ink-900">{title}</h3>
            <p className="mt-2 text-sm text-ink-500">{description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <Button to="/products">Ürünlere git</Button>
        <Button to="/" variant="ghost">Ana sayfa</Button>
      </div>
    </div>
  );
}
