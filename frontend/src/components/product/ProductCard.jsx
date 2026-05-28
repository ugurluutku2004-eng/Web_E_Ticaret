import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import Button from '../ui/Button';
import StarRating from './StarRating';
import { addItem } from '../../features/cart/cartSlice';
import { getCategoryIcon } from '../../lib/categoryIcons';

const formatPrice = (value) =>
  new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    maximumFractionDigits: 0,
  }).format(value);

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productId = product._id || product.id;
  const image = product.images?.[0] || product.image;
  const categoryName = product.category?.name || product.category || '';
  const categorySlug = product.category?.slug || product.categorySlug || '';
  const rating = product.avgRating ?? product.rating ?? 0;

  const CategoryIcon = getCategoryIcon(categorySlug);
  const hasDiscount = Boolean(product.oldPrice && product.oldPrice > product.price);
  const discountPct = hasDiscount
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : 0;

  const handleAddToCart = (event) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(
      addItem({
        productId,
        name: product.name,
        model: product.model,
        price: product.price,
        qty: 1,
      })
    );
    toast.success('Ürün sepete eklendi');
  };

  const handleBuyNow = (event) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(
      addItem({
        productId,
        name: product.name,
        model: product.model,
        price: product.price,
        qty: 1,
      })
    );
    navigate('/checkout');
  };

  return (
    <Link
      to={`/products/${productId}`}
      className="flex h-full flex-col rounded-2xl border border-sand-200 bg-white p-3 shadow-card transition hover:-translate-y-1 hover:shadow-soft sm:rounded-3xl sm:p-4"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-sand-100 sm:rounded-2xl">
        {image ? (
          <img
            src={image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition duration-300 hover:scale-105"
            onError={(event) => {
              event.currentTarget.style.display = 'none';
            }}
          />
        ) : null}
        {hasDiscount ? (
          <span className="absolute left-2 top-2 rounded-full bg-brand-500 px-2 py-0.5 text-[11px] font-semibold text-white shadow-sm">
            %{discountPct} indirim
          </span>
        ) : null}
      </div>

      <div className="mt-3 flex flex-1 flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="flex items-center gap-1 text-[11px] uppercase tracking-widest text-ink-400">
              <CategoryIcon size={12} className="shrink-0" />
              <span className="truncate">{categoryName}</span>
            </p>
            <p className="mt-1 truncate text-base font-semibold text-ink-900 sm:text-lg">
              {product.name}
            </p>
            {product.model ? (
              <p className="mt-0.5 text-xs text-ink-500">Model: {product.model}</p>
            ) : null}
          </div>
          <div className="shrink-0">
            <StarRating value={rating} size={13} />
          </div>
        </div>

        {product.short ? (
          <p className="line-clamp-2 text-sm text-ink-500">{product.short}</p>
        ) : null}

        <div className="mt-auto pt-1">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0">
            <span className="text-lg font-semibold text-ink-900">{formatPrice(product.price)}</span>
            {hasDiscount ? (
              <span className="text-xs text-ink-400 line-through">{formatPrice(product.oldPrice)}</span>
            ) : null}
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <Button variant="ghost" onClick={handleAddToCart} className="w-full">
              Sepete ekle
            </Button>
            <Button variant="dark" onClick={handleBuyNow} className="w-full">
              Satın al
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
