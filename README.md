# Web E-Ticaret

BLG330 Web Programlama dersi dönem projesi. MERN (MongoDB, Express, React, Node.js) yığını ile geliştirilmiş tam yığın bir e-ticaret uygulamasıdır.

## Özellikler

- JWT tabanlı kullanıcı kaydı ve girişi (bcrypt ile şifre hash)
- Ürün listeleme, arama ve kategoriye göre filtreleme
- Sepet, sipariş oluşturma ve sipariş durumu takibi
- Kupon kullanımı
- Hesap yönetimi (siparişler, profil, adres, ödeme yöntemleri)
- Admin paneli: ürün/kategori/sipariş/kullanıcı yönetimi (rol bazlı erişim)
- Responsive (mobil uyumlu) arayüz

## Kullanılan Teknolojiler

**Frontend:** React, Vite, Redux Toolkit, React Router, Tailwind CSS, Axios
**Backend:** Node.js, Express, MongoDB Atlas, Mongoose, JSON Web Token (JWT), bcrypt

## Mimari

```
React (Vite SPA)  ──>  Express REST API  ──>  MongoDB Atlas
```

- Frontend Redux Toolkit ile `auth`, `cart`, `orders`, `products` slice'larını yönetir.
- Axios interceptor her isteğe `Authorization: Bearer <token>` başlığı ekler.
- Backend `protect` middleware ile token doğrulaması, `admin` middleware ile rol kontrolü yapar.

## Canlı Adresler

- Frontend: https://project-ryg3l.vercel.app
- Backend: https://web-e-ticaret.onrender.com

## Klasör Yapısı

```
web_projem_local/
├── backend/        Express + Mongoose REST API
│   ├── src/        controllers, models, routes, middleware
│   ├── scripts/    seed.js (örnek veri ve admin oluşturma)
│   └── uploads/    yüklenen dosyalar
└── frontend/       React + Vite SPA
    └── src/        pages, components, features (Redux), lib (axios)
```

## Kurulum

**Backend:**

```
cd backend
npm install
npm run dev      # http://localhost:5000
```

**Frontend:**

```
cd frontend
npm install
npm run dev      # http://localhost:5173
```

## Ortam Değişkenleri

`.env.example` dosyalarını `.env` olarak kopyalayıp kendi değerlerinizi girin.

**backend/.env**

```
PORT=5000
MONGO_URI=<MongoDB bağlantı adresi>
JWT_SECRET=<gizli anahtar>
CLIENT_URL=http://localhost:5173
```

**frontend/.env**

```
VITE_API_URL=http://localhost:5000/api
```

## Örnek Veri ve Admin Hesabı

Geliştirme veritabanını 6 kategori ve 36 ürünle doldurmak için:

```
cd backend
npm run seed
```

Belirli bir kullanıcıyı admin yapmak için (PowerShell):

```
$env:SEED_ADMIN_EMAIL="kullanici@ornek.com"; npm run seed
```

## Doğrulama Testleri

- `GET /api/health` → 200 OK
- `POST /api/auth/register` ve `POST /api/auth/login` sonrası `GET /api/auth/me` token doğrulaması yapar.
- Admin rolüyle ürün ve kategori CRUD uç noktaları çalışır (`/api/admin/...`).
- Frontend mobil çözünürlüklerde düzgün görüntülenir.
