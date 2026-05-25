# Web E-Ticaret

BLG330 Web Programlama dersi dönem projesi. MERN (MongoDB, Express, React, Node.js) kullanılarak yapılmış bir e-ticaret uygulaması.

## Özellikler

- Kullanıcı kaydı ve girişi (JWT ile kimlik doğrulama)
- Ürün listeleme, arama ve kategoriye göre filtreleme
- Sepet ve sipariş oluşturma
- Kupon kullanımı
- Hesap yönetimi (siparişler, adres, ödeme yöntemleri)
- Admin paneli (ürün, sipariş ve kullanıcı yönetimi)

## Kullanılan Teknolojiler

- Frontend: React, Vite, Redux Toolkit, React Router, Tailwind CSS, Axios
- Backend: Node.js, Express, MongoDB, Mongoose, JWT, bcrypt

## Canlı Adresler

- Frontend: https://project-ryg3l.vercel.app
- Backend: https://web-e-ticaret.onrender.com

## Kurulum

Backend:

```
cd backend
npm install
npm run dev
```

Frontend:

```
cd frontend
npm install
npm run dev
```

Gerekli ortam değişkenleri `backend/.env.example` ve `frontend/.env.example` dosyalarında belirtilmiştir. Bu dosyaları `.env` olarak kopyalayıp kendi değerlerinizi girin.
