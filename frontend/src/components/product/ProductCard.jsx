import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import Button from '../ui/Button';
import StarRating from './StarRating';
import { addItem } from '../../features/cart/cartSlice';

const formatPrice = (value) =>
  new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    maximumFractionDigits: 0,
  }).format(value);

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (event) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(
      addItem({
        productId: product.id,
        name: product.name,
        model: product.model,
        price: product.price,
        qty: 1,
      })
    );
    toast.success('Sepete eklendi');
  };

  const handleBuyNow = (event) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(
      addItem({
        productId: product.id,
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
      to={`/products/${product.id}`}
      className="block rounded-3xl border border-sand-200 bg-white p-4 shadow-card transition hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="aspect-square rounded-2xl bg-sand-100" />
      <div className="mt-4 space-y-2">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-widest text-ink-400">{product.category}</p>
            <p className="mt-1 text-lg font-semibold text-ink-900">{product.name}</p>
            <p className="mt-1 text-xs text-ink-500">Model: {product.model}</p>
          </div>
          <div className="shrink-0">
            <StarRating value={product.rating} size={14} />
          </div>
        </div>

        <p className="text-sm text-ink-500">{product.short}</p>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <span className="text-lg font-semibold text-ink-900">{formatPrice(product.price)}</span>
          <div className="flex items-center gap-2">
            <Button variant="ghost" onClick={handleAddToCart}>
              Sepete ekle
            </Button>
            <Button variant="dark" onClick={handleBuyNow}>
              Satin al
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
