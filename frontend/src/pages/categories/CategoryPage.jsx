import { useParams } from 'react-router-dom';

export default function CategoryPage() {
  const { slug } = useParams();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-xs uppercase tracking-widest text-brand-500">Kategori</p>
      <h1 className="mt-2 font-display text-4xl text-ink-900">{slug?.replace(/-/g, ' ')}</h1>
      <p className="mt-3 text-sm text-ink-500">Bu kategoriye ait urunler yakinda.</p>
    </div>
  );
}
