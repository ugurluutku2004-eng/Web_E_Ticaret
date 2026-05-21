import { ShoppingCart, Search, User } from 'lucide-react';

const categories = ['Elektronik', 'Telefonlar', 'Giyim', 'Ev & Yasam', 'Spor', 'Kozmetik'];

export default function Navbar() {
  return (
    <header className="bg-white/80 backdrop-blur border-b border-sand-200">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-brand-500" />
          <div>
            <p className="font-display text-2xl text-ink-900">U-Ticaret</p>
            <p className="text-xs text-ink-500">Sepetini doldur, keyfini sur.</p>
          </div>
        </div>

        <div className="flex w-full flex-1 items-center gap-2 rounded-full border border-sand-200 bg-white px-4 py-2 shadow-soft md:w-auto md:max-w-md">
          <Search className="h-4 w-4 text-ink-500" />
          <input
            className="w-full bg-transparent text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none"
            placeholder="Urun, marka veya kategori ara"
          />
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-full border border-sand-200 px-3 py-2 text-sm text-ink-700">
            <User className="h-4 w-4" />
            Hesabim
          </button>
          <button className="flex items-center gap-2 rounded-full bg-ink-900 px-3 py-2 text-sm text-white">
            <ShoppingCart className="h-4 w-4" />
            Sepet
          </button>
        </div>
      </div>

      <nav className="border-t border-sand-100 bg-white">
        <div className="mx-auto flex max-w-6xl gap-6 overflow-x-auto px-4 py-3 text-sm text-ink-600">
          {categories.map((item) => (
            <button key={item} className="whitespace-nowrap hover:text-brand-500">
              {item}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
