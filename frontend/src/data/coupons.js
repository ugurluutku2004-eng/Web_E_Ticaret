// Kullanılabilir indirim kuponları.
// rate: indirim oranı (0.15 = %15)
export const coupons = [
  { code: 'JEYKA100', rate: 0.15, label: '%15 indirim', description: 'Tüm sepete geçerli hoş geldin kuponu.' },
  { code: 'RUMELI100', rate: 0.1, label: '%10 indirim', description: 'Seçili dönem fırsat kuponu.' },
];

// Girilen kodu (büyük/küçük harf ve boşluk duyarsız) eşleştirir.
// Bulamazsa null döner.
export const findCoupon = (input) => {
  if (!input) return null;
  const normalized = String(input).trim().toUpperCase();
  return coupons.find((coupon) => coupon.code === normalized) ?? null;
};
