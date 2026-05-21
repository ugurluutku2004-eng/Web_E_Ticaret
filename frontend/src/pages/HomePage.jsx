import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';
import SectionHeader from '../components/product/SectionHeader';

const categories = [
  { title: 'Elektronik', count: '248 urun' },
  { title: 'Telefonlar', count: '92 urun' },
  { title: 'Giyim', count: '310 urun' },
  { title: 'Ev & Yasam', count: '140 urun' },
  { title: 'Spor', count: '86 urun' },
  { title: 'Kozmetik', count: '64 urun' },
];

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/&/g, 'and');

const products = [
  { name: 'Aurora Kulaklik', price: '1299', category: 'Elektronik', short: 'Yuksek bass, net ses.' },
  { name: 'Nova Akilli Saat', price: '1999', category: 'Telefonlar', short: 'Guncel saglik takibi.' },
  { name: 'Savana Sirt Canta', price: '799', category: 'Spor', short: 'Her mevsime uygun.' },
  { name: 'Linea Kahve Seti', price: '549', category: 'Ev & Yasam', short: 'Minimal mutfak stili.' },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-10">
      <section className="grid gap-8 rounded-[36px] border border-sand-200 bg-white p-8 shadow-soft md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-widest text-brand-500">Yaz koleksiyonu</p>
          <h1 className="font-display text-4xl text-ink-900 md:text-5xl">
            U-Ticaret ile enerjik yaz kampanyalari
          </h1>
          <p className="text-sm text-ink-500">
            Gunluk ihtiyaclarin, teknoloji ve stil seninle. Turuncu enerjisiyle alisveris
            deneyimini tazele.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button to="/products">Alisverise basla</Button>
            <Button to="/category/elektronik" variant="ghost">Kampanyalari gor</Button>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-200 via-brand-100 to-sand-50 p-6">
          <div className="absolute right-6 top-6 rounded-full bg-white/80 px-4 py-2 text-xs text-ink-600">
            %30'a varan indirim
          </div>
          <div className="mt-24 space-y-2">
            <p className="text-xs uppercase tracking-widest text-ink-500">Haftanin favorisi</p>
            <h3 className="text-2xl font-semibold text-ink-900">Summer Tech Pack</h3>
            <p className="text-sm text-ink-500">Kulaklik + powerbank + smart watch</p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <SectionHeader
          title="Kategoriler"
          subtitle="Hizli erisim ile trend kategoriler"
          action={<Button to="/products" variant="ghost">Tum kategoriler</Button>}
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              to={`/category/${slugify(cat.title)}`}
              className="rounded-3xl border border-sand-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-card"
            >
              <p className="text-xs uppercase tracking-widest text-ink-400">U-Ticaret</p>
              <h3 className="mt-2 text-xl font-semibold text-ink-900">{cat.title}</h3>
              <p className="mt-1 text-sm text-ink-500">{cat.count}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <SectionHeader
          title="One cikan urunler"
          subtitle="U-Ticaret editoryal secimleri"
          action={<Button to="/products" variant="dark">Tum urunler</Button>}
        />
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-sand-200 bg-brand-500 p-8 text-white">
          <p className="text-xs uppercase tracking-widest text-white/80">Hafta sonu kampanyasi</p>
          <h3 className="mt-3 text-3xl font-semibold">Teknoloji paketlerinde ekstra indirim</h3>
          <p className="mt-2 text-sm text-white/80">Sinirli sure icin</p>
          <Button to="/products" className="mt-6 bg-white text-brand-600 hover:bg-white/90">Incele</Button>
        </div>
        <div className="rounded-3xl border border-sand-200 bg-white p-8">
          <p className="text-xs uppercase tracking-widest text-brand-500">Yeni gelenler</p>
          <h3 className="mt-3 text-3xl font-semibold text-ink-900">Yaz modasi seckisi</h3>
          <p className="mt-2 text-sm text-ink-500">Minimal, rahat ve canli renkler.</p>
          <Button to="/products" variant="ghost" className="mt-6">Kesfet</Button>
        </div>
      </section>
    </div>
  );
}
