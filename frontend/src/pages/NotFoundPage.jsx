import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-24 text-center">
      <p className="text-xs uppercase tracking-widest text-brand-500">U-Ticaret</p>
      <h1 className="mt-3 font-display text-5xl text-ink-900">404</h1>
      <p className="mt-2 text-sm text-ink-500">Bu sayfa bulunamadi.</p>
      <Link
        to="/"
        className="mt-6 inline-flex rounded-full bg-brand-500 px-5 py-2 text-sm font-semibold text-white"
      >
        Ana sayfaya don
      </Link>
    </div>
  );
}
