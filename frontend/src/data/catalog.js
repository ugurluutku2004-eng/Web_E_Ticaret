const slugify = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9-]/g, '');

export const categories = [
  { name: 'Elektronik', slug: 'elektronik' },
  { name: 'Telefonlar', slug: 'telefonlar' },
  { name: 'Giyim', slug: 'giyim' },
  { name: 'Ev & Yasam', slug: 'ev-and-yasam' },
  { name: 'Spor', slug: 'spor' },
  { name: 'Kozmetik', slug: 'kozmetik' },
];

const makeReview = (name, rating, comment, date) => ({
  id: `${slugify(name)}-${date}`,
  name,
  rating,
  comment,
  date,
});

export const products = [
  {
    id: 'aurora-kulaklik',
    name: 'Aurora Kulaklik',
    model: 'AUR-500',
    category: 'Elektronik',
    categorySlug: 'elektronik',
    short: 'Yuksek bass, net ses.',
    description:
      'Gun boyu konfor sunan yastikli tasarim, dengeli bass ve net vokaller ile muzik keyfini yukseltir. Bluetooth baglantisi ve katlanabilir yapi ile yaninda tasimasi kolaydir.',
    price: 1299,
    rating: 4.6,
    numReviews: 128,
    reviews: [
      makeReview('Elif', 5, 'Ses kalitesi cok iyi, bass dengeli.', '2026-03-02'),
      makeReview('Mert', 4, 'Konforlu ama keske kılıfı olsa.', '2026-02-11'),
      makeReview('Ayse', 5, 'Telefonla eslesmesi cok hizli.', '2026-01-19'),
    ],
  },
  {
    id: 'nova-akilli-saat',
    name: 'Nova Akilli Saat',
    model: 'NOVA-S2',
    category: 'Telefonlar',
    categorySlug: 'telefonlar',
    short: 'Guncel saglik takibi.',
    description:
      'Adim, uyku ve nabiz takibi. Bildirimler, suya dayanikli govde ve 7 güne kadar pil omru ile her gun kullanima uygun.',
    price: 1999,
    rating: 4.4,
    numReviews: 92,
    reviews: [
      makeReview('Can', 4, 'Pil omru iyi, ekran parlak.', '2026-02-07'),
      makeReview('Zeynep', 5, 'Spor modlari yeterli, uygulama kolay.', '2026-01-30'),
    ],
  },
  {
    id: 'zenith-akilli-telefon',
    name: 'Zenith Akilli Telefon',
    model: 'ZN-12',
    category: 'Telefonlar',
    categorySlug: 'telefonlar',
    short: 'Akici ekran, guclu kamera.',
    description:
      '120Hz ekran, gelismis gece modu ve hizli sarj destegi. Gunluk kullanim icin dengeli performans sunar.',
    price: 24999,
    rating: 4.5,
    numReviews: 211,
    reviews: [
      makeReview('Fatih', 5, 'Kamera beklentimin uzerinde cikti.', '2026-04-06'),
      makeReview('Buse', 4, 'Ekran cok akici, pil bir gun rahat.', '2026-03-20'),
    ],
  },
  {
    id: 'clearcase-kilif',
    name: 'ClearCase Seffaf Kilif',
    model: 'CC-TP',
    category: 'Telefonlar',
    categorySlug: 'telefonlar',
    short: 'Darbelere karsi gunluk koruma.',
    description:
      'Sararmaya karsi daha dayanikli malzeme. Ince yapisi sayesinde elde kalinlik hissi vermez.',
    price: 249,
    rating: 4.1,
    numReviews: 58,
    reviews: [
      makeReview('Ceren', 4, 'Tutus guzel, tuslara erisim iyi.', '2026-02-16'),
      makeReview('Serkan', 4, 'Fiyata gore iyi.', '2026-01-25'),
    ],
  },
  {
    id: 'pulse-powerbank',
    name: 'Pulse Powerbank',
    model: 'PULSE-10K',
    category: 'Elektronik',
    categorySlug: 'elektronik',
    short: 'Hizli sarj, ince tasarim.',
    description:
      '10.000 mAh kapasite, iki cikis ve hizli sarj destegi. Ince govde ile cantada yer kaplamaz.',
    price: 749,
    rating: 4.7,
    numReviews: 64,
    reviews: [
      makeReview('Okan', 5, 'Gercekten hizli sarj ediyor.', '2026-04-12'),
      makeReview('Derya', 4, 'Hafif ve kullanisli.', '2026-02-23'),
    ],
  },
  {
    id: 'echo-bluetooth-hoparlor',
    name: 'Echo Bluetooth Hoparlor',
    model: 'ECHO-BS',
    category: 'Elektronik',
    categorySlug: 'elektronik',
    short: 'Kompakt, yuksek ses.',
    description:
      'Kucuk boyutuna ragmen guclu cikis. Piknik, sahil ve ev kullanimi icin ideal. Tek sarjla uzun sure calisir.',
    price: 999,
    rating: 4.4,
    numReviews: 87,
    reviews: [
      makeReview('Hilal', 5, 'Ses seviyesi sasirtti.', '2026-04-09'),
      makeReview('Arda', 4, 'Basarili ama maksimumda biraz tiz.', '2026-02-21'),
    ],
  },
  {
    id: 'flex-usb-c-kablo',
    name: 'Flex USB-C Kablo',
    model: 'FLX-C1M',
    category: 'Elektronik',
    categorySlug: 'elektronik',
    short: 'Dayanikli orgu tasarim.',
    description:
      'Orgulu dis kaplama ve guclendirilmis baslik. Hizli sarj ve veri aktarimi icin uygundur.',
    price: 149,
    rating: 4.6,
    numReviews: 33,
    reviews: [
      makeReview('Sinem', 5, 'Kopma olmadi, saglam.', '2026-03-17'),
      makeReview('Yusuf', 4, 'Fiyat/performans iyi.', '2026-01-08'),
    ],
  },
  {
    id: 'savana-sirt-canta',
    name: 'Savana Sirt Canta',
    model: 'SVN-21L',
    category: 'Spor',
    categorySlug: 'spor',
    short: 'Her mevsime uygun.',
    description:
      'Su itici dis yuzey, rahat omuz askilari ve 21L hacim. Gunluk kullanimdan kisa seyahatlere kadar ideal.',
    price: 799,
    rating: 4.3,
    numReviews: 51,
    reviews: [
      makeReview('Naz', 4, 'Ic gozleri yeterli, fermuar kaliteli.', '2026-03-09'),
      makeReview('Kerem', 5, 'Sirt destegi cok rahat.', '2026-01-14'),
    ],
  },
  {
    id: 'aqua-matara',
    name: 'Aqua Matara',
    model: 'AQUA-750',
    category: 'Spor',
    categorySlug: 'spor',
    short: 'Sızdırmaz kapak, hafif.',
    description:
      '750ml kapasite ve kolay tasima kulpu. Gunluk spor ve ofis kullanimina uygundur.',
    price: 229,
    rating: 4.5,
    numReviews: 44,
    reviews: [
      makeReview('Melis', 5, 'Koku yapmadi, kapak iyi.', '2026-04-14'),
      makeReview('Ugur', 4, 'Tasarimi guzel.', '2026-02-05'),
    ],
  },
  {
    id: 'yoga-mat',
    name: 'Yoga Mat',
    model: 'YGM-6MM',
    category: 'Spor',
    categorySlug: 'spor',
    short: 'Kaymaz yuzey, 6mm konfor.',
    description:
      'Kaymaz dokusu ve 6mm kalinlik ile eklem dostu. Evde ve salonda antrenman icin uygundur.',
    price: 599,
    rating: 4.3,
    numReviews: 29,
    reviews: [
      makeReview('Deniz', 4, 'Kayma az, kalinligi ideal.', '2026-03-12'),
      makeReview('Ece', 4, 'Renk guzel, kokusu cabuk gitti.', '2026-01-29'),
    ],
  },
  {
    id: 'linea-kahve-seti',
    name: 'Linea Kahve Seti',
    model: 'LN-6PCS',
    category: 'Ev & Yasam',
    categorySlug: 'ev-and-yasam',
    short: 'Minimal mutfak stili.',
    description:
      '6 parca kahve seti, gunluk kullanima uygun dayanikli seramik. Minimal tasarim ile sofraya uyum saglar.',
    price: 549,
    rating: 4.5,
    numReviews: 39,
    reviews: [
      makeReview('Seda', 5, 'Paketleme cok iyiydi, cok zarif.', '2026-02-18'),
      makeReview('Emre', 4, 'Bardaklar biraz kucuk ama guzel.', '2026-02-02'),
    ],
  },
  {
    id: 'luna-masa-lambasi',
    name: 'Luna Masa Lambasi',
    model: 'LUNA-LED',
    category: 'Ev & Yasam',
    categorySlug: 'ev-and-yasam',
    short: 'Sicak isik, modern tasarim.',
    description:
      'Sicak beyaz isik ve dokunmatik ac/kapa. Calisma masasi ve komodin icin ideal.',
    price: 899,
    rating: 4.4,
    numReviews: 22,
    reviews: [
      makeReview('Nihan', 5, 'Odayi cok guzel aydinlatti.', '2026-04-03'),
      makeReview('Onur', 4, 'Malzeme iyi, kablo biraz kisa.', '2026-02-09'),
    ],
  },
  {
    id: 'orderly-cekmece-duzenleyici',
    name: 'Orderly Cekmece Duzenleyici',
    model: 'ORD-SET',
    category: 'Ev & Yasam',
    categorySlug: 'ev-and-yasam',
    short: 'Moduler parcalar, pratik.',
    description:
      'Moduler parcalar ile cekmeceleri kolayca duzenler. Mutfak, banyo ve dolap icin uygundur.',
    price: 379,
    rating: 4.2,
    numReviews: 18,
    reviews: [
      makeReview('Pelin', 4, 'Kurulumu kolay, is goruyor.', '2026-03-01'),
      makeReview('Hakan', 4, 'Boyutlar iyi, malzeme orta.', '2026-02-13'),
    ],
  },
  {
    id: 'urban-tisort',
    name: 'Urban Tisort',
    model: 'URB-TEE',
    category: 'Giyim',
    categorySlug: 'giyim',
    short: 'Rahat kesim, yumusak doku.',
    description:
      'Gun boyu rahatlik sunan pamuklu kumas. Minimal logo detayi ve rahat kesim.',
    price: 349,
    rating: 4.2,
    numReviews: 73,
    reviews: [
      makeReview('Gizem', 4, 'Kumas yumusak, kalip guzel.', '2026-04-01'),
      makeReview('Baris', 4, 'Beden tam oldu, renk ayni geldi.', '2026-03-05'),
    ],
  },
  {
    id: 'coast-sort',
    name: 'Coast Sort',
    model: 'CST-SRT',
    category: 'Giyim',
    categorySlug: 'giyim',
    short: 'Yaza uygun, hafif kumas.',
    description:
      'Hafif ve nefes alan kumas. Rahat bel yapisi ile gun boyu konfor.',
    price: 399,
    rating: 4.0,
    numReviews: 41,
    reviews: [
      makeReview('Irem', 4, 'Rengi guzel, kumas ince.', '2026-04-10'),
      makeReview('Eren', 4, 'Gunluk icin ideal.', '2026-03-07'),
    ],
  },
  {
    id: 'breeze-hoodie',
    name: 'Breeze Hoodie',
    model: 'BRZ-HDD',
    category: 'Giyim',
    categorySlug: 'giyim',
    short: 'Serin aksamlara uygun.',
    description:
      'Yumusak dokulu hoodie. Minimal detaylar ve rahat kalip ile kombinlemesi kolay.',
    price: 899,
    rating: 4.3,
    numReviews: 56,
    reviews: [
      makeReview('Selin', 5, 'Cok rahat, ic astari yumusak.', '2026-02-27'),
      makeReview('Alper', 4, 'Beden tam, rengi guzel.', '2026-01-21'),
    ],
  },
  {
    id: 'sunny-gunes-kremi',
    name: 'Sunny Gunes Kremi SPF50+',
    model: 'SUN-SPF50',
    category: 'Kozmetik',
    categorySlug: 'kozmetik',
    short: 'Hafif doku, iz birakmaz.',
    description:
      'Yuksek koruma SPF50+ ile gunluk kullanim icin uygun. Hafif yapisi sayesinde ciltte agirlik yapmaz.',
    price: 429,
    rating: 4.8,
    numReviews: 114,
    reviews: [
      makeReview('Asli', 5, 'Makyaj altinda da iyi duruyor.', '2026-04-19'),
      makeReview('Burcu', 5, 'Yagli his birakmadi.', '2026-03-28'),
    ],
  },
  {
    id: 'pure-hyaluron-serum',
    name: 'Pure Hyaluron Serum',
    model: 'PH-30',
    category: 'Kozmetik',
    categorySlug: 'kozmetik',
    short: 'Nem takviyesi, hafif serum.',
    description:
      'Gunluk nem takviyesi icin uygun hafif yapili serum. Cildi dolgun gorunume destekler.',
    price: 599,
    rating: 4.6,
    numReviews: 67,
    reviews: [
      makeReview('Begum', 5, 'Ciltte agirlik yapmadi.', '2026-04-15'),
      makeReview('Sibel', 4, 'Doku hafif, iyi emiliyor.', '2026-03-22'),
    ],
  },
  {
    id: 'silk-dudak-balsami',
    name: 'Silk Dudak Balsami',
    model: 'SLK-LIP',
    category: 'Kozmetik',
    categorySlug: 'kozmetik',
    short: 'Gun boyu nemlendirme.',
    description:
      'Kuruluga karsi destek, gun icinde tazelemeye uygun yapi. Hafif parlak bitis verir.',
    price: 179,
    rating: 4.3,
    numReviews: 24,
    reviews: [
      makeReview('Tuana', 4, 'Kokusu hafif, iyi nemlendiriyor.', '2026-02-26'),
      makeReview('Berk', 4, 'Cebimde tasiyorum, guzel.', '2026-01-11'),
    ],
  },
];

export const featuredProducts = products.slice(0, 4);
