import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product/ProductCard';
import { fetchProducts, fetchCategories } from '../../features/products/productSlice';
import { getCategoryIcon } from '../../lib/categoryIcons';

export default function CategoryPage() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { items: products, categories, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  const category = useMemo(
    () => categories.find((item) => item.slug === slug),
    [categories, slug]
  );

  const categoryProducts = useMemo(
    () => products.filter((product) => product.category?.slug === slug),
    [products, slug]
  );

  const title = category?.name ?? slug?.replace(/-/g, ' ');
  const Icon = getCategoryIcon(slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-xs uppercase tracking-widest text-brand-500">Kategori</p>
      <div className="mt-2 flex items-center gap-3">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
          <Icon size={22} />
        </span>
        <h1 className="font-display text-4xl text-ink-900">{title}</h1>
      </div>

      {loading && categoryProducts.length === 0 ? (
        <p className="mt-6 text-sm text-ink-500">Yükleniyor...</p>
      ) : categoryProducts.length ? (
        <div className="mt-8 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categoryProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <p className="mt-6 text-sm text-ink-500">Bu kategoride henüz ürün bulunamadı.</p>
      )}
    </div>
  );
}
