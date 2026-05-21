import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-sand-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-ink-900">U-Ticaret</p>
          <p className="mt-2 text-sm text-ink-500">
            Sepetini doldur, keyfini sur. Turuncu enerjisiyle alisveris deneyimi.
          </p>
        </div>
        <div className="text-sm text-ink-600">
          <p className="mb-2 font-semibold text-ink-900">Hizli Linkler</p>
          <ul className="space-y-1">
            <li>
              <Link className="hover:text-brand-600" to="/about">Hakkimizda</Link>
            </li>
            <li>
              <Link className="hover:text-brand-600" to="/help">Yardim Merkezi</Link>
            </li>
            <li>
              <Link className="hover:text-brand-600" to="/privacy">KVKK & Gizlilik</Link>
            </li>
          </ul>
        </div>
        <div className="text-sm text-ink-600">
          <p className="mb-2 font-semibold text-ink-900">Iletisim</p>
          <ul className="space-y-1">
            <li>
              <a className="hover:text-brand-600" href="mailto:ugurluutku2004@gmail.com">
                ugurluutku2004@gmail.com
              </a>
            </li>
            <li>
              <a className="hover:text-brand-600" href="tel:+905464732843">
                +90 546 473 28 43
              </a>
            </li>
            <li>Istanbul, TR</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-sand-100 py-4 text-center text-xs text-ink-500">
        2026 U-Ticaret. Tum haklari saklidir.
      </div>
    </footer>
  );
}
