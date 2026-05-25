export default function PromoBar() {
  return (
    <div className="bg-brand-500 text-white text-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
        <span>U-Ticaret: Sepetini doldur, keyfini sür.</span>
        <span className="hidden md:inline">200 TL üzeri ücretsiz kargo</span>
      </div>
    </div>
  );
}
