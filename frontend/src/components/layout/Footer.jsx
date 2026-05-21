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
            <li>Hakkimizda</li>
            <li>Yardim Merkezi</li>
            <li>KVKK & Gizlilik</li>
          </ul>
        </div>
        <div className="text-sm text-ink-600">
          <p className="mb-2 font-semibold text-ink-900">Iletisim</p>
          <ul className="space-y-1">
            <li>support@u-ticaret.com</li>
            <li>+90 555 000 00 00</li>
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
