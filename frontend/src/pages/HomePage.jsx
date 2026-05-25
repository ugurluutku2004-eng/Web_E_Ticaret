import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';
import SectionHeader from '../components/product/SectionHeader';

import { campaignProducts, categories, products } from '../data/catalog';
import { getCategoryIcon } from '../lib/categoryIcons';

const getCategoryCountText = (slug) => {
  const count = products.filter((product) => product.categorySlug === slug).length;
  return `${count} ürün`;
};

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-10">
      <section className="grid gap-8 rounded-[36px] border border-sand-200 bg-white p-8 shadow-soft md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-widest text-brand-500">Yaz koleksiyonu</p>
          <h1 className="font-display text-4xl text-ink-900 md:text-5xl">
            U-Ticaret ile enerjik yaz kampanyaları
          </h1>
          <p className="text-sm text-ink-500">
            Günlük ihtiyaçların, teknoloji ve stil seninle. Turuncu enerjisiyle alışveriş
            deneyimini tazele.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button to="/products">Alışverişe başla</Button>
            <Button to="/category/elektronik" variant="ghost">Kampanyaları gör</Button>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-200 via-brand-100 to-sand-50 p-6">
          <div className="absolute right-6 top-6 rounded-full bg-white/80 px-4 py-2 text-xs text-ink-600">
            %30'a varan indirim
          </div>
          <div className="mt-24 space-y-2">
            <p className="text-xs uppercase tracking-widest text-ink-500">Haftanın favorisi</p>
            <h3 className="text-2xl font-semibold text-ink-900">Yaz Teknoloji Paketi</h3>
            <p className="text-sm text-ink-500">Kulaklık + powerbank + akıllı saat</p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <SectionHeader
          title="Kategoriler"
          subtitle="Hızlı erişim ile trend kategoriler"
          action={<Button to="/products" variant="ghost">Tüm kategoriler</Button>}
        />
        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {categories.map((cat) => {
            const Icon = getCategoryIcon(cat.slug);
            return (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className="flex items-center gap-3 rounded-2xl border border-sand-200 bg-white p-4 transition hover:-translate-y-1 hover:shadow-card sm:gap-4 sm:rounded-3xl sm:p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                  <Icon size={20} />
                </span>
                <div className="min-w-0">
                  <h3 className="truncate text-base font-semibold text-ink-900 sm:text-lg">{cat.name}</h3>
                  <p className="text-xs text-ink-500 sm:text-sm">{getCategoryCountText(cat.slug)}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mt-12">
        <SectionHeader
          title="Kampanyalı ürünler"
          subtitle="Sınırlı süreli indirimli seçkiler"
          action={<Button to="/products" variant="dark">Tüm ürünler</Button>}
        />
        <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {campaignProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-sand-200 bg-brand-500 p-8 text-white">
          <p className="text-xs uppercase tracking-widest text-white/80">Hafta sonu kampanyası</p>
          <h3 className="mt-3 text-3xl font-semibold">Teknoloji paketlerinde ekstra indirim</h3>
          <p className="mt-2 text-sm text-white/80">Sınırlı süre için</p>
          <Button to="/products" className="mt-6 bg-white text-brand-600 hover:bg-white/90">İncele</Button>
        </div>
        <div className="rounded-3xl border border-sand-200 bg-white p-8">
          <p className="text-xs uppercase tracking-widest text-brand-500">Yeni gelenler</p>
          <h3 className="mt-3 text-3xl font-semibold text-ink-900">Yaz modası seçkisi</h3>
          <p className="mt-2 text-sm text-ink-500">Minimal, rahat ve canlı renkler.</p>
          <Button to="/products" variant="ghost" className="mt-6">Keşfet</Button>
        </div>
      </section>
    </div>
  );
}
