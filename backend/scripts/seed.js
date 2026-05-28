/**
 * Veritabanı seed script'i.
 * - Belirtilen e-postaya sahip kullanıcıyı admin yapar (yoksa oluşturur).
 * - frontend/src/data/catalog.js içindeki kategorileri ve ürünleri DB'ye yazar.
 *
 * Çalıştırma (backend/ dizininde):
 *   node scripts/seed.js
 * veya
 *   npm run seed
 *
 * Admin e-postasını/şifresini değiştirmek için ortam değişkeni verebilirsin:
 *   SEED_ADMIN_EMAIL=ornek@mail.com SEED_ADMIN_PASSWORD=GizliSifre node scripts/seed.js
 *
 * Script idempotent'tir: tekrar çalıştırmak veriyi çoğaltmaz (slug/ad ile günceller).
 */
require('dotenv').config();
const path = require('path');
const { pathToFileURL } = require('url');
const mongoose = require('mongoose');

const User = require('../src/models/User');
const Category = require('../src/models/Category');
const Product = require('../src/models/Product');

const ADMIN_EMAIL = process.env.SEED_ADMIN_EMAIL || 'admin@u-ticaret.com';
const ADMIN_PASSWORD = process.env.SEED_ADMIN_PASSWORD || 'Admin1234';
const ADMIN_NAME = process.env.SEED_ADMIN_NAME || 'Site Yöneticisi';
const DEFAULT_STOCK = 25;

async function run() {
  if (!process.env.MONGO_URI) {
    console.error('HATA: MONGO_URI tanımlı değil. backend/.env dosyasını kontrol et.');
    process.exit(1);
  }

  await mongoose.connect(process.env.MONGO_URI);
  console.log('MongoDB bağlandı.');

  // 1) Admin kullanıcı
  let admin = await User.findOne({ email: ADMIN_EMAIL });
  if (admin) {
    admin.role = 'admin';
    await admin.save();
    console.log(`Mevcut kullanıcı admin yapıldı: ${ADMIN_EMAIL}`);
  } else {
    admin = await User.create({
      name: ADMIN_NAME,
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD,
      role: 'admin',
    });
    console.log(`Admin oluşturuldu -> e-posta: ${ADMIN_EMAIL}  şifre: ${ADMIN_PASSWORD}`);
  }

  // 2) Katalogu yükle (ESM modül, dinamik import)
  const catalogPath = path.resolve(__dirname, '../../frontend/src/data/catalog.js');
  const catalog = await import(pathToFileURL(catalogPath).href);
  const categories = catalog.categories || [];
  const products = catalog.products || [];

  // 3) Kategoriler (slug ile idempotent)
  const slugToId = {};
  for (const category of categories) {
    const doc = await Category.findOneAndUpdate(
      { slug: category.slug },
      { name: category.name, slug: category.slug, description: category.description || '' },
      { upsert: true, new: true, setDefaultsOnInsert: true },
    );
    slugToId[category.slug] = doc._id;
  }
  console.log(`${categories.length} kategori hazırlandı.`);

  // 4) Ürünler (ad ile idempotent)
  let count = 0;
  for (const product of products) {
    const categoryId = slugToId[product.categorySlug];
    if (!categoryId) {
      console.warn(`Atlandı (kategori bulunamadı): ${product.name}`);
      continue;
    }
    await Product.findOneAndUpdate(
      { name: product.name },
      {
        name: product.name,
        model: product.model || '',
        short: product.short || '',
        description: product.description || product.short || '',
        price: product.price,
        oldPrice: product.oldPrice || 0,
        stock: DEFAULT_STOCK,
        images: product.image ? [product.image] : [],
        category: categoryId,
        seller: admin._id,
        isActive: true,
      },
      { upsert: true, new: true, setDefaultsOnInsert: true },
    );
    count++;
  }
  console.log(`${count} ürün eklendi/güncellendi.`);

  await mongoose.disconnect();
  console.log('Seed tamamlandı.');
  process.exit(0);
}

run().catch((error) => {
  console.error('Seed hatası:', error.message);
  process.exit(1);
});
