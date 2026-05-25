import { useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import Button from '../components/ui/Button';
import StarRating from '../components/product/StarRating';
import { products } from '../data/catalog';
import { addItem } from '../features/cart/cartSlice';

const formatPrice = (value) =>
  new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    maximumFractionDigits: 0,
  }).format(value);

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  const product = useMemo(() => products.find((item) => item.id === id), [id]);
  const total = product ? product.price * qty : 0;
  const hasDiscount = Boolean(product?.oldPrice && product.oldPrice > product.price);
  const discountPct = hasDiscount
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : 0;

  const onAddToCart = () => {
    if (!product) return;
    dispatch(
      addItem({
        productId: product.id,
        name: product.name,
        model: product.model,
        price: product.price,
        qty,
      })
    );
    toast.success('Ürün sepete eklendi');
  };

  const onBuyNow = () => {
    onAddToCart();
    navigate('/checkout');
  };

  if (!product) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="font-display text-4xl text-ink-900">Ürün bulunamadı</h1>
        <p className="mt-3 text-sm text-ink-500">Bu ürün mevcut değil veya kaldırıldı.</p>
        <Button to="/products" className="mt-6">Ürünlere geri dön</Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-widest text-brand-500">
            <Link className="hover:text-brand-600" to={`/category/${product.categorySlug}`}>
              {product.category}
            </Link>
          </p>
          <h1 className="mt-2 font-display text-4xl text-ink-900">{product.name}</h1>
          <p className="mt-2 text-sm text-ink-600">Model: {product.model}</p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <StarRating value={product.rating} size={16} showValue />
            <p className="text-sm text-ink-500">({product.numReviews} değerlendirme)</p>
          </div>
        </div>
        <div className="rounded-3xl border border-sand-200 bg-white p-5 shadow-soft w-full md:w-auto md:min-w-[320px]">
          <p className="text-xs uppercase tracking-widest text-ink-400">Fiyat</p>
          <div className="mt-2 flex flex-wrap items-baseline gap-2">
            <p className="text-3xl font-semibold text-ink-900">{formatPrice(product.price)}</p>
            {hasDiscount ? (
              <>
                <p className="text-base text-ink-400 line-through">{formatPrice(product.oldPrice)}</p>
                <span className="rounded-full bg-brand-500 px-2 py-0.5 text-xs font-semibold text-white">
                  %{discountPct} indirim
                </span>
              </>
            ) : null}
          </div>

          <div className="mt-4 flex items-center justify-between gap-3">
            <label className="text-sm text-ink-600" htmlFor="qty">Adet</label>
            <input
              id="qty"
              type="number"
              min={1}
              value={qty}
              onChange={(e) => setQty(Math.max(1, Number(e.target.value) || 1))}
              className="w-24 rounded-2xl border border-sand-200 px-3 py-2 text-sm text-ink-900 focus:outline-none"
            />
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-sand-100 pt-4">
            <p className="text-sm text-ink-600">Toplam</p>
            <p className="text-xl font-semibold text-ink-900">{formatPrice(total)}</p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <Button variant="ghost" onClick={onAddToCart}>
              Sepete ekle
            </Button>
            <Button variant="dark" onClick={onBuyNow}>
              Satın al
            </Button>
            <Button to="/cart" className="ml-auto">Sepete git</Button>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-3xl border border-sand-200 bg-white p-6">
          <p className="text-xs uppercase tracking-widest text-ink-400">Ürün bilgisi</p>
          <p className="mt-3 text-sm text-ink-700 leading-relaxed">{product.description}</p>
        </section>

        <section className="rounded-3xl border border-sand-200 bg-white p-6">
          <p className="text-xs uppercase tracking-widest text-ink-400">Yorumlar</p>
          <div className="mt-4 space-y-4">
            {product.reviews.map((review) => (
              <div key={review.id} className="border-b border-sand-100 pb-4 last:border-b-0 last:pb-0">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-ink-900">{review.name}</p>
                    <p className="mt-1 text-xs text-ink-500">{review.date}</p>
                  </div>
                  <StarRating value={review.rating} size={14} />
                </div>
                <p className="mt-2 text-sm text-ink-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
