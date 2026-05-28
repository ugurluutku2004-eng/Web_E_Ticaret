import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import ProductCard from '../components/product/ProductCard';
import { fetchProducts } from '../features/products/productSlice';

export default function ProductsPage() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const query = (searchParams.get('q') ?? '').trim();
  const { items: products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = useMemo(() => {
    if (!query) return products;
    const tokens = query
      .toLowerCase()
      .split(/\s+/)
      .map((token) => token.trim())
      .filter(Boolean);
    return products.filter((product) => {
      const haystack = `${product.name} ${product.model || ''} ${product.category?.name || ''}`.toLowerCase();
      return tokens.every((token) => haystack.includes(token));
    });
  }, [products, query]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl text-ink-900">Ürünler</h1>

      <div className="mt-3 text-sm text-ink-600">
        {loading ? (
          <p>Yükleniyor...</p>
        ) : query ? (
          <p>"{query}" için {filteredProducts.length} sonuç</p>
        ) : (
          <p>{products.length} ürün</p>
        )}
      </div>

      {!loading && filteredProducts.length ? (
        <div className="mt-8 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : !loading ? (
        <div className="mt-8 rounded-3xl border border-sand-200 bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold text-ink-900">Ürün bulunamadı</p>
          <p className="mt-1 text-sm text-ink-600">Aramanı değiştirip tekrar deneyin.</p>
        </div>
      ) : null}
    </div>
  );
}
