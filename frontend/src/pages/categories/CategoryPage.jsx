import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product/ProductCard';
import { categories, products } from '../../data/catalog';

export default function CategoryPage() {
  const { slug } = useParams();
  const category = categories.find((item) => item.slug === slug);
  const categoryProducts = products.filter((product) => product.categorySlug === slug);
  const title = category?.name ?? slug?.replace(/-/g, ' ');

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-xs uppercase tracking-widest text-brand-500">Kategori</p>
      <h1 className="mt-2 font-display text-4xl text-ink-900">{title}</h1>

      {categoryProducts.length ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="mt-6 text-sm text-ink-500">Bu kategoride henuz urun bulunamadi.</p>
      )}
    </div>
  );
}
