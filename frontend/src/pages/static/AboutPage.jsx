import Button from '../../components/ui/Button';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-xs uppercase tracking-widest text-brand-500">Hakkimizda</p>
      <h1 className="mt-2 font-display text-4xl text-ink-900">U-Ticaret</h1>
      <p className="mt-3 text-sm text-ink-600">
        U-Ticaret, teknoloji ve gunluk ihtiyaclar icin modern bir e-ticaret demo projesidir.
        Kategori sayfalari, urun kartlari, urun detay ve sepet akisi ile linkli sayfa yapisi
        sunar.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button to="/products">Urunlere git</Button>
        <Button to="/" variant="ghost">Ana sayfa</Button>
      </div>
    </div>
  );
}
