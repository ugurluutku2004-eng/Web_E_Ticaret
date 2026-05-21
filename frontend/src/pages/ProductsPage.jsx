import { useMemo } from 'react';
import ProductCard from '../components/product/ProductCard';
import { products } from '../data/catalog';
import { useSearchParams } from 'react-router-dom';

export default function ProductsPage() {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get('q') ?? '').trim();

  const filteredProducts = useMemo(() => {
    if (!query) return products;

    const tokens = query
      .toLowerCase()
      .split(/\s+/)
      .map((token) => token.trim())
      .filter(Boolean);

    return products.filter((product) => {
      const haystack = `${product.name} ${product.model} ${product.category}`.toLowerCase();
      return tokens.every((token) => haystack.includes(token));
    });
  }, [query]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl text-ink-900">Urunler</h1>

      <div className="mt-3 text-sm text-ink-600">
        {query ? (
          <p>
            "{query}" icin {filteredProducts.length} sonuc
          </p>
        ) : (
          <p>{products.length} urun</p>
        )}
      </div>

      {filteredProducts.length ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-3xl border border-sand-200 bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold text-ink-900">Urun bulunamadi</p>
          <p className="mt-1 text-sm text-ink-600">Aramanizi degistirip tekrar deneyin.</p>
        </div>
      )}
    </div>
  );
}
