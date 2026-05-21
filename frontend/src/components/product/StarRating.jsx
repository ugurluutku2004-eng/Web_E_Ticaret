import { Star } from 'lucide-react';

export default function StarRating({ value = 0, size = 16, showValue = false }) {
  const safeValue = Number.isFinite(value) ? value : 0;
  const fullStars = Math.floor(safeValue);
  const hasHalf = safeValue - fullStars >= 0.5;

  const stars = Array.from({ length: 5 }, (_, index) => {
    const isFull = index < fullStars;
    const isHalf = !isFull && hasHalf && index === fullStars;

    if (isHalf) {
      return (
        <span key={index} className="relative inline-flex">
          <Star className="text-sand-200" size={size} />
          <Star
            className="absolute left-0 top-0 text-brand-500"
            size={size}
            style={{ clipPath: 'inset(0 50% 0 0)' }}
            fill="currentColor"
          />
        </span>
      );
    }

    return (
      <Star
        key={index}
        className={isFull ? 'text-brand-500' : 'text-sand-200'}
        size={size}
        fill={isFull ? 'currentColor' : 'none'}
      />
    );
  });

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">{stars}</div>
      {showValue ? <span className="text-sm text-ink-600">{safeValue.toFixed(1)}</span> : null}
    </div>
  );
}
