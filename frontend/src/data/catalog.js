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
  { name: 'Ev & Yaşam', slug: 'ev-and-yasam' },
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
    name: 'Aurora Kulaklık',
    model: 'AUR-500',
    category: 'Elektronik',
    categorySlug: 'elektronik',
    short: 'Yüksek bas, net ses.',
    description:
      'Gün boyu konfor sunan yastıklı tasarım, dengeli bas ve net vokaller ile müzik keyfini yükseltir. Bluetooth bağlantısı ve katlanabilir yapı ile yanında taşıması kolaydır.',
    oldPrice: 1699,
    price: 1299,
    rating: 4.6,
    numReviews: 128,
    reviews: [
      makeReview('Elif', 5, 'Ses kalitesi çok iyi, bas dengeli.', '2026-03-02'),
      makeReview('Mert', 4, 'Konforlu ama keşke kılıfı olsa.', '2026-02-11'),
      makeReview('Ayşe', 5, 'Telefonla eşleşmesi çok hızlı.', '2026-01-19'),
    ],
  },
  {
    id: 'nova-akilli-saat',
    name: 'Nova Akıllı Saat',
    model: 'NOVA-S2',
    category: 'Telefonlar',
    categorySlug: 'telefonlar',
    short: 'Güncel sağlık takibi.',
    description:
      'Adım, uyku ve nabız takibi. Bildirimler, suya dayanıklı gövde ve 7 güne kadar pil ömrü ile her gün kullanıma uygun.',
    price: 1999,
    rating: 4.4,
    numReviews: 92,
    reviews: [
      makeReview('Can', 4, 'Pil ömrü iyi, ekran parlak.', '2026-02-07'),
      makeReview('Zeynep', 5, 'Spor modları yeterli, uygulama kolay.', '2026-01-30'),
    ],
  },
  {
    id: 'zenith-akilli-telefon',
    name: 'Zenith Akıllı Telefon',
    model: 'ZN-12',
    category: 'Telefonlar',
    categorySlug: 'telefonlar',
    short: 'Akıcı ekran, güçlü kamera.',
    description:
      '120Hz ekran, gelişmiş gece modu ve hızlı şarj desteği. Günlük kullanım için dengeli performans sunar.',
    oldPrice: 29999,
    price: 24999,
    rating: 4.5,
    numReviews: 211,
    reviews: [
      makeReview('Fatih', 5, 'Kamera beklentimin üzerinde çıktı.', '2026-04-06'),
      makeReview('Buse', 4, 'Ekran çok akıcı, pil bir gün rahat.', '2026-03-20'),
    ],
  },
  {
    id: 'clearcase-kilif',
    name: 'ClearCase Şeffaf Kılıf',
    model: 'CC-TP',
    category: 'Telefonlar',
    categorySlug: 'telefonlar',
    short: 'Darbelere karşı günlük koruma.',
    description:
      'Sararmaya karşı daha dayanıklı malzeme. İnce yapısı sayesinde elde kalınlık hissi vermez.',
    price: 249,
    rating: 4.1,
    numReviews: 58,
    reviews: [
      makeReview('Ceren', 4, 'Tutuş güzel, tuşlara erişim iyi.', '2026-02-16'),
      makeReview('Serkan', 4, 'Fiyata göre iyi.', '2026-01-25'),
    ],
  },
  {
    id: 'pulse-powerbank',
    name: 'Pulse Powerbank',
    model: 'PULSE-10K',
    category: 'Elektronik',
    categorySlug: 'elektronik',
    short: 'Hızlı şarj, ince tasarım.',
    description:
      '10.000 mAh kapasite, iki çıkış ve hızlı şarj desteği. İnce gövde ile çantada yer kaplamaz.',
    price: 749,
    rating: 4.7,
    numReviews: 64,
    reviews: [
      makeReview('Okan', 5, 'Gerçekten hızlı şarj ediyor.', '2026-04-12'),
      makeReview('Derya', 4, 'Hafif ve kullanışlı.', '2026-02-23'),
    ],
  },
  {
    id: 'echo-bluetooth-hoparlor',
    name: 'Echo Bluetooth Hoparlör',
    model: 'ECHO-BS',
    category: 'Elektronik',
    categorySlug: 'elektronik',
    short: 'Kompakt, yüksek ses.',
    description:
      'Küçük boyutuna rağmen güçlü çıkış. Piknik, sahil ve ev kullanımı için ideal. Tek şarjla uzun süre çalışır.',
    price: 999,
    rating: 4.4,
    numReviews: 87,
    reviews: [
      makeReview('Hilal', 5, 'Ses seviyesi şaşırttı.', '2026-04-09'),
      makeReview('Arda', 4, 'Başarılı ama maksimumda biraz tiz.', '2026-02-21'),
    ],
  },
  {
    id: 'flex-usb-c-kablo',
    name: 'Flex USB-C Kablo',
    model: 'FLX-C1M',
    category: 'Elektronik',
    categorySlug: 'elektronik',
    short: 'Dayanıklı örgü tasarım.',
    description:
      'Örgülü dış kaplama ve güçlendirilmiş başlık. Hızlı şarj ve veri aktarımı için uygundur.',
    price: 149,
    rating: 4.6,
    numReviews: 33,
    reviews: [
      makeReview('Sinem', 5, 'Kopma olmadı, sağlam.', '2026-03-17'),
      makeReview('Yusuf', 4, 'Fiyat/performans iyi.', '2026-01-08'),
    ],
  },
  {
    id: 'savana-sirt-canta',
    name: 'Savana Sırt Çanta',
    model: 'SVN-21L',
    category: 'Spor',
    categorySlug: 'spor',
    short: 'Her mevsime uygun.',
    description:
      'Su itici dış yüzey, rahat omuz askıları ve 21L hacim. Günlük kullanımdan kısa seyahatlere kadar ideal.',
    price: 799,
    rating: 4.3,
    numReviews: 51,
    reviews: [
      makeReview('Naz', 4, 'İç gözleri yeterli, fermuar kaliteli.', '2026-03-09'),
      makeReview('Kerem', 5, 'Sırt desteği çok rahat.', '2026-01-14'),
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
      '750ml kapasite ve kolay taşıma kulpu. Günlük spor ve ofis kullanımına uygundur.',
    price: 229,
    rating: 4.5,
    numReviews: 44,
    reviews: [
      makeReview('Melis', 5, 'Koku yapmadı, kapak iyi.', '2026-04-14'),
      makeReview('Uğur', 4, 'Tasarımı güzel.', '2026-02-05'),
    ],
  },
  {
    id: 'yoga-mat',
    name: 'Yoga Mat',
    model: 'YGM-6MM',
    category: 'Spor',
    categorySlug: 'spor',
    short: 'Kaymaz yüzey, 6mm konfor.',
    description:
      'Kaymaz dokusu ve 6mm kalınlık ile eklem dostu. Evde ve salonda antrenman için uygundur.',
    price: 599,
    rating: 4.3,
    numReviews: 29,
    reviews: [
      makeReview('Deniz', 4, 'Kayma az, kalınlığı ideal.', '2026-03-12'),
      makeReview('Ece', 4, 'Renk güzel, kokusu çabuk gitti.', '2026-01-29'),
    ],
  },
  {
    id: 'linea-kahve-seti',
    name: 'Linea Kahve Seti',
    model: 'LN-6PCS',
    category: 'Ev & Yaşam',
    categorySlug: 'ev-and-yasam',
    short: 'Minimal mutfak stili.',
    description:
      '6 parça kahve seti, günlük kullanıma uygun dayanıklı seramik. Minimal tasarım ile sofraya uyum sağlar.',
    price: 549,
    rating: 4.5,
    numReviews: 39,
    reviews: [
      makeReview('Seda', 5, 'Paketleme çok iyiydi, çok zarif.', '2026-02-18'),
      makeReview('Emre', 4, 'Bardaklar biraz küçük ama güzel.', '2026-02-02'),
    ],
  },
  {
    id: 'luna-masa-lambasi',
    name: 'Luna Masa Lambası',
    model: 'LUNA-LED',
    category: 'Ev & Yaşam',
    categorySlug: 'ev-and-yasam',
    short: 'Sıcak ışık, modern tasarım.',
    description:
      'Sıcak beyaz ışık ve dokunmatik aç/kapa. Çalışma masası ve komodin için ideal.',
    price: 899,
    rating: 4.4,
    numReviews: 22,
    reviews: [
      makeReview('Nihan', 5, 'Odayı çok güzel aydınlattı.', '2026-04-03'),
      makeReview('Onur', 4, 'Malzeme iyi, kablo biraz kısa.', '2026-02-09'),
    ],
  },
  {
    id: 'orderly-cekmece-duzenleyici',
    name: 'Orderly Çekmece Düzenleyici',
    model: 'ORD-SET',
    category: 'Ev & Yaşam',
    categorySlug: 'ev-and-yasam',
    short: 'Modüler parçalar, pratik.',
    description:
      'Modüler parçalar ile çekmeceleri kolayca düzenler. Mutfak, banyo ve dolap için uygundur.',
    price: 379,
    rating: 4.2,
    numReviews: 18,
    reviews: [
      makeReview('Pelin', 4, 'Kurulumu kolay, iş görüyor.', '2026-03-01'),
      makeReview('Hakan', 4, 'Boyutlar iyi, malzeme orta.', '2026-02-13'),
    ],
  },
  {
    id: 'urban-tisort',
    name: 'Urban Tişört',
    model: 'URB-TEE',
    category: 'Giyim',
    categorySlug: 'giyim',
    short: 'Rahat kesim, yumuşak doku.',
    description:
      'Gün boyu rahatlık sunan pamuklu kumaş. Minimal logo detayı ve rahat kesim.',
    price: 349,
    rating: 4.2,
    numReviews: 73,
    reviews: [
      makeReview('Gizem', 4, 'Kumaş yumuşak, kalıp güzel.', '2026-04-01'),
      makeReview('Barış', 4, 'Beden tam oldu, renk aynı geldi.', '2026-03-05'),
    ],
  },
  {
    id: 'coast-sort',
    name: 'Coast Şort',
    model: 'CST-SRT',
    category: 'Giyim',
    categorySlug: 'giyim',
    short: 'Yaza uygun, hafif kumaş.',
    description:
      'Hafif ve nefes alan kumaş. Rahat bel yapısı ile gün boyu konfor.',
    price: 399,
    rating: 4.0,
    numReviews: 41,
    reviews: [
      makeReview('İrem', 4, 'Rengi güzel, kumaş ince.', '2026-04-10'),
      makeReview('Eren', 4, 'Günlük için ideal.', '2026-03-07'),
    ],
  },
  {
    id: 'breeze-hoodie',
    name: 'Breeze Hoodie',
    model: 'BRZ-HDD',
    category: 'Giyim',
    categorySlug: 'giyim',
    short: 'Serin akşamlara uygun.',
    description:
      'Yumuşak dokulu hoodie. Minimal detaylar ve rahat kalıp ile kombinlemesi kolay.',
    price: 899,
    rating: 4.3,
    numReviews: 56,
    reviews: [
      makeReview('Selin', 5, 'Çok rahat, iç astarı yumuşak.', '2026-02-27'),
      makeReview('Alper', 4, 'Beden tam, rengi güzel.', '2026-01-21'),
    ],
  },
  {
    id: 'sunny-gunes-kremi',
    name: 'Sunny Güneş Kremi SPF50+',
    model: 'SUN-SPF50',
    category: 'Kozmetik',
    categorySlug: 'kozmetik',
    short: 'Hafif doku, iz bırakmaz.',
    description:
      'Yüksek koruma SPF50+ ile günlük kullanım için uygun. Hafif yapısı sayesinde ciltte ağırlık yapmaz.',
    oldPrice: 549,
    price: 429,
    rating: 4.8,
    numReviews: 114,
    reviews: [
      makeReview('Aslı', 5, 'Makyaj altında da iyi duruyor.', '2026-04-19'),
      makeReview('Burcu', 5, 'Yağlı his bırakmadı.', '2026-03-28'),
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
      'Günlük nem takviyesi için uygun hafif yapılı serum. Cildi dolgun görünüme destekler.',
    price: 599,
    rating: 4.6,
    numReviews: 67,
    reviews: [
      makeReview('Begüm', 5, 'Ciltte ağırlık yapmadı.', '2026-04-15'),
      makeReview('Sibel', 4, 'Doku hafif, iyi emiliyor.', '2026-03-22'),
    ],
  },
  {
    id: 'silk-dudak-balsami',
    name: 'Silk Dudak Balsamı',
    model: 'SLK-LIP',
    category: 'Kozmetik',
    categorySlug: 'kozmetik',
    short: 'Gün boyu nemlendirme.',
    description:
      'Kuruluğa karşı destek, gün içinde tazelemeye uygun yapı. Hafif parlak bitiş verir.',
    price: 179,
    rating: 4.3,
    numReviews: 24,
    reviews: [
      makeReview('Tuana', 4, 'Kokusu hafif, iyi nemlendiriyor.', '2026-02-26'),
      makeReview('Berk', 4, 'Cebimde taşıyorum, güzel.', '2026-01-11'),
    ],
  },
  {
    id: 'vega-kablosuz-mouse',
    name: 'Vega Kablosuz Mouse',
    model: 'VG-M1',
    category: 'Elektronik',
    categorySlug: 'elektronik',
    short: 'Sessiz tıklama, ergonomik.',
    description:
      'Ergonomik kavrama ve sessiz tuşlar. 2.4GHz alıcı ile gecikmesiz bağlantı, uzun pil ömrü ile gün boyu rahat kullanım sunar.',
    price: 349,
    rating: 4.4,
    numReviews: 47,
    reviews: [
      makeReview('Tolga', 5, 'Eli yormuyor, çok sessiz.', '2026-04-08'),
      makeReview('Aslıhan', 4, 'Bağlantı stabil, kurulumu kolay.', '2026-03-14'),
    ],
  },
  {
    id: 'orbit-mekanik-klavye',
    name: 'Orbit Mekanik Klavye',
    model: 'ORB-K87',
    category: 'Elektronik',
    categorySlug: 'elektronik',
    short: 'Tuşe hissi yüksek, RGB.',
    description:
      'Mekanik anahtarlar ile net tuşe hissi ve RGB aydınlatma. Kompakt yerleşim sayesinde masada az yer kaplar.',
    price: 1149,
    rating: 4.6,
    numReviews: 38,
    reviews: [
      makeReview('Kaan', 5, 'Yazarken his harika, ışıklar şık.', '2026-04-02'),
      makeReview('Defne', 4, 'Sesi biraz var ama kaliteli.', '2026-02-19'),
    ],
  },
  {
    id: 'titan-akilli-telefon',
    name: 'Titan Akıllı Telefon',
    model: 'TTN-7',
    category: 'Telefonlar',
    categorySlug: 'telefonlar',
    short: 'Geniş ekran, güçlü pil.',
    description:
      '6.7 inç ekran, çok çekirdekli işlemci ve büyük pil. Gün boyu kullanımda akıcı performans ve hızlı şarj desteği sunar.',
    price: 18999,
    rating: 4.4,
    numReviews: 96,
    reviews: [
      makeReview('Berkay', 4, 'Pil gerçekten uzun gidiyor.', '2026-04-11'),
      makeReview('Sena', 5, 'Ekran kalitesi çok iyi.', '2026-03-18'),
    ],
  },
  {
    id: 'beam-hizli-sarj-adaptoru',
    name: 'Beam Hızlı Şarj Adaptörü',
    model: 'BM-65W',
    category: 'Telefonlar',
    categorySlug: 'telefonlar',
    short: '65W hızlı şarj, kompakt.',
    description:
      '65W çıkış ile telefon ve dizüstü cihazları hızlıca şarj eder. İki çıkışlı yapısı sayesinde aynı anda iki cihaz desteklenir.',
    price: 599,
    rating: 4.5,
    numReviews: 52,
    reviews: [
      makeReview('Ozan', 5, 'Telefonu çok hızlı dolduruyor.', '2026-04-05'),
      makeReview('Bahar', 4, 'Kompakt, seyahatte ideal.', '2026-02-28'),
    ],
  },
  {
    id: 'guard-ekran-koruyucu',
    name: 'Guard Ekran Koruyucu',
    model: 'GRD-9H',
    category: 'Telefonlar',
    categorySlug: 'telefonlar',
    short: '9H sertlik, çizilmez.',
    description:
      '9H sertlikte temperli cam ile çizilmelere karşı koruma. Hassas dokunmatik uyumu ve kolay kurulum kiti içerir.',
    price: 129,
    rating: 4.2,
    numReviews: 61,
    reviews: [
      makeReview('Eylül', 4, 'Kurulumu kolaydı, kabarcık kalmadı.', '2026-03-23'),
      makeReview('Murat', 4, 'Sağlam, parmak izi tutmuyor.', '2026-02-10'),
    ],
  },
  {
    id: 'classic-gomlek',
    name: 'Classic Gömlek',
    model: 'CLS-SHIRT',
    category: 'Giyim',
    categorySlug: 'giyim',
    short: 'Şık kesim, pamuklu.',
    description:
      'Günlük ve resmi kombinlere uygun pamuklu gömlek. Ütü gerektirmeyen kumaş yapısı ile gün boyu düzgün durur.',
    price: 549,
    rating: 4.3,
    numReviews: 44,
    reviews: [
      makeReview('Cem', 4, 'Kalıbı güzel, kumaş kaliteli.', '2026-04-04'),
      makeReview('Yağmur', 5, 'Rengi soldurmadı, çok şık.', '2026-03-11'),
    ],
  },
  {
    id: 'denim-jean',
    name: 'Denim Jean',
    model: 'DNM-SLIM',
    category: 'Giyim',
    categorySlug: 'giyim',
    short: 'Esnek kumaş, slim kesim.',
    description:
      'Esnek denim kumaş ile gün boyu konfor. Slim kesim ve solmayan renk ile her kombine uyum sağlar.',
    price: 699,
    rating: 4.2,
    numReviews: 58,
    reviews: [
      makeReview('Burak', 4, 'Esnekliği rahat, beden tam.', '2026-03-29'),
      makeReview('Nil', 4, 'Rengi fotoğraftaki gibi.', '2026-02-15'),
    ],
  },
  {
    id: 'comfort-esofman',
    name: 'Comfort Eşofman',
    model: 'CMF-JOG',
    category: 'Giyim',
    categorySlug: 'giyim',
    short: 'Yumuşak, ev ve spor.',
    description:
      'Yumuşak iç dokusu ile ev ve spor kullanımına uygun eşofman. Bel lastiği ve cep detayları ile pratik.',
    price: 459,
    rating: 4.4,
    numReviews: 33,
    reviews: [
      makeReview('Efe', 5, 'İnanılmaz rahat, sıcak tutuyor.', '2026-04-13'),
      makeReview('Dilan', 4, 'Kumaş kaliteli, kalıp güzel.', '2026-03-03'),
    ],
  },
  {
    id: 'aroma-mum-seti',
    name: 'Aroma Mum Seti',
    model: 'ARM-3PCS',
    category: 'Ev & Yaşam',
    categorySlug: 'ev-and-yasam',
    short: 'Doğal koku, uzun yanma.',
    description:
      'Doğal soya wax ile hazırlanmış 3 parça mum seti. Hafif aroması ile ortama huzurlu bir atmosfer katar.',
    price: 329,
    rating: 4.6,
    numReviews: 27,
    reviews: [
      makeReview('Gül', 5, 'Kokusu ağır değil, çok hoş.', '2026-04-07'),
      makeReview('Tarık', 4, 'Uzun süre yanıyor, şık duruyor.', '2026-02-24'),
    ],
  },
  {
    id: 'soft-nevresim-takimi',
    name: 'Soft Nevresim Takımı',
    model: 'SFT-NVR',
    category: 'Ev & Yaşam',
    categorySlug: 'ev-and-yasam',
    short: 'Pamuklu, çift kişilik.',
    description:
      'Yüksek pamuk oranı ile yumuşak doku. Çift kişilik takım, solmayan renkler ve kolay ütülenir kumaş içerir.',
    price: 899,
    rating: 4.5,
    numReviews: 41,
    reviews: [
      makeReview('Esra', 5, 'Teni yormuyor, çok yumuşak.', '2026-03-26'),
      makeReview('Volkan', 4, 'Renk canlı, dikişler sağlam.', '2026-02-08'),
    ],
  },
  {
    id: 'nordic-duvar-saati',
    name: 'Nordic Duvar Saati',
    model: 'NRD-CLK',
    category: 'Ev & Yaşam',
    categorySlug: 'ev-and-yasam',
    short: 'Sessiz mekanizma, minimal.',
    description:
      'Minimal tasarım ve sessiz akar saniye mekanizması. Salon, ofis ve mutfak duvarlarına uyum sağlar.',
    price: 379,
    rating: 4.3,
    numReviews: 19,
    reviews: [
      makeReview('Pınar', 4, 'Tik sesi yok, çok şık.', '2026-04-16'),
      makeReview('Sinan', 4, 'Kurulumu kolay, boyutu ideal.', '2026-03-06'),
    ],
  },
  {
    id: 'sprint-kosu-ayakkabisi',
    name: 'Sprint Koşu Ayakkabısı',
    model: 'SPR-RUN',
    category: 'Spor',
    categorySlug: 'spor',
    short: 'Hafif taban, nefes alır.',
    description:
      'Hafif taban ve nefes alan üst yüzey ile uzun koşularda konfor. Esnek yapısı ayağı sarar ve darbeyi azaltır.',
    price: 1299,
    rating: 4.5,
    numReviews: 73,
    reviews: [
      makeReview('Anıl', 5, 'Çok hafif, ayağı yormuyor.', '2026-04-09'),
      makeReview('Şule', 4, 'Taban konforu iyi, numara tam.', '2026-03-13'),
    ],
  },
  {
    id: 'flex-direnc-bandi-seti',
    name: 'Flex Direnç Bandı Seti',
    model: 'FLX-BAND',
    category: 'Spor',
    categorySlug: 'spor',
    short: '5 seviye, ev antrenmanı.',
    description:
      'Farklı dirençlerde 5 bant ile ev antrenmanına uygun set. Taşıma çantası ve kullanım kılavuzu içerir.',
    price: 299,
    rating: 4.4,
    numReviews: 36,
    reviews: [
      makeReview('Berra', 5, 'Evde çalışmak için birebir.', '2026-04-01'),
      makeReview('Hakan', 4, 'Bantlar sağlam, seviye farkı iyi.', '2026-02-22'),
    ],
  },
  {
    id: 'power-dambil-seti',
    name: 'Power Dambıl Seti',
    model: 'PWR-DB10',
    category: 'Spor',
    categorySlug: 'spor',
    short: 'Ayarlanabilir, 10 kg.',
    description:
      'Ayarlanabilir ağırlık plakaları ile 10 kg değere kadar set. Kaymaz tutuş ve dayanıklı kaplama ile güvenli kullanım.',
    price: 1499,
    rating: 4.6,
    numReviews: 29,
    reviews: [
      makeReview('Emir', 5, 'Ayarı pratik, plakalar sağlam.', '2026-03-30'),
      makeReview('Tuğçe', 4, 'Tutuşu rahat, yeterince ağır.', '2026-02-17'),
    ],
  },
  {
    id: 'glow-tonik',
    name: 'Glow Tonik',
    model: 'GLW-TNC',
    category: 'Kozmetik',
    categorySlug: 'kozmetik',
    short: 'Gözenek bakımı, ferah.',
    description:
      'Cildi temizlik sonrası dengeleyen ferahlatıcı tonik. Düzenli kullanımda gözenek görünümüne destek olur.',
    price: 259,
    rating: 4.4,
    numReviews: 48,
    reviews: [
      makeReview('Melike', 5, 'Cildi ferahlatıyor, hafif.', '2026-04-12'),
      makeReview('Kübra', 4, 'Kurutmuyor, kokusu hoş.', '2026-03-08'),
    ],
  },
  {
    id: 'velvet-ruj',
    name: 'Velvet Ruj',
    model: 'VLV-LIP',
    category: 'Kozmetik',
    categorySlug: 'kozmetik',
    short: 'Mat bitiş, kalıcı.',
    description:
      'Mat bitiş ve yoğun renk ile gün boyu kalıcılık. Dudakları kurutmayan kadifemsi doku sunar.',
    price: 199,
    rating: 4.3,
    numReviews: 55,
    reviews: [
      makeReview('Ece', 4, 'Rengi canlı, kalıcılığı iyi.', '2026-04-06'),
      makeReview('Damla', 5, 'Dudağı kurutmadı, çok beğendim.', '2026-03-15'),
    ],
  },
  {
    id: 'fresh-parfum',
    name: 'Fresh Parfüm',
    model: 'FRS-EDP',
    category: 'Kozmetik',
    categorySlug: 'kozmetik',
    short: 'Ferah koku, kalıcı.',
    description:
      'Ferah ve hafif notalar ile gün boyu eşlik eden parfüm. Dengeli kalıcılığı sayesinde her mevsime uygundur.',
    price: 749,
    rating: 4.5,
    numReviews: 40,
    reviews: [
      makeReview('Selin', 5, 'Kokusu ferah, uzun kalıyor.', '2026-04-03'),
      makeReview('Onur', 4, 'Ağır değil, günlük için ideal.', '2026-02-27'),
    ],
  },
];

export const campaignProducts = products.filter((product) => product.oldPrice);

export const featuredProducts = campaignProducts.length
  ? campaignProducts
  : products.slice(0, 4);
