import { ShoppingCart, Search, User } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const categories = ['Elektronik', 'Telefonlar', 'Giyim', 'Ev & Yaşam', 'Spor', 'Kozmetik'];

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/&/g, 'and');

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { token, user } = useSelector((state) => state.auth);

  const urlQuery = useMemo(() => {
    if (location.pathname !== '/products') return '';
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get('q') ?? '';
  }, [location.pathname, location.search]);

  const [query, setQuery] = useState(urlQuery);

  // Hesap sayfalarında navbar altındaki kategori çubuğu gizlenir.
  const hideCategoryNav = location.pathname.startsWith('/account');

  useEffect(() => {
    if (location.pathname === '/products') {
      setQuery(urlQuery);
    }
  }, [location.pathname, urlQuery]);

  const goToProductsWithQuery = (nextQuery, { replace = false } = {}) => {
    const trimmed = nextQuery.trim();
    const search = trimmed.length ? `?q=${encodeURIComponent(trimmed)}` : '';
    navigate({ pathname: '/products', search }, { replace });
  };

  return (
    <header className="bg-white/80 backdrop-blur border-b border-sand-200">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-brand-500" />
          <div>
            <p className="font-display text-2xl text-ink-900">U-Ticaret</p>
            <p className="text-xs text-ink-500">Sepetini doldur, keyfini sür.</p>
          </div>
        </Link>

        <form
          className="flex w-full flex-1 items-center gap-2 rounded-full border border-sand-200 bg-white px-4 py-2 shadow-soft md:w-auto md:max-w-md"
          role="search"
          onSubmit={(event) => {
            event.preventDefault();
            goToProductsWithQuery(query);
          }}
        >
          <Search className="h-4 w-4 text-ink-500" />
          <input
            className="w-full bg-transparent text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none"
            placeholder="Ürün, marka veya kategori ara"
            value={query}
            onChange={(event) => {
              const nextQuery = event.target.value;
              setQuery(nextQuery);
              if (location.pathname === '/products') {
                goToProductsWithQuery(nextQuery, { replace: true });
              }
            }}
          />
        </form>

        <div className="flex items-center gap-3">
          {token ? (
            <Link
              to="/account"
              className="flex items-center gap-2 rounded-full border border-sand-200 px-3 py-2 text-sm text-ink-700 hover:border-brand-400 hover:text-brand-600"
            >
              <User className="h-4 w-4" />
              Merhaba, {user?.name?.split(' ')[0] ?? 'Hesabım'}
            </Link>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-2 rounded-full border border-sand-200 px-3 py-2 text-sm text-ink-700 hover:border-brand-400 hover:text-brand-600"
            >
              <User className="h-4 w-4" />
              Giriş yap
            </Link>
          )}
          <Link
            to="/cart"
            className="flex items-center gap-2 rounded-full bg-ink-900 px-3 py-2 text-sm text-white"
          >
            <ShoppingCart className="h-4 w-4" />
            Sepet
          </Link>
        </div>
      </div>

      {hideCategoryNav ? null : (
        <nav className="border-t border-sand-100 bg-white">
          <div className="mx-auto flex max-w-6xl gap-6 overflow-x-auto px-4 py-3 text-sm text-ink-600">
            {categories.map((item) => (
              <Link
                key={item}
                to={`/category/${slugify(item)}`}
                className="whitespace-nowrap hover:text-brand-500"
              >
                {item}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
