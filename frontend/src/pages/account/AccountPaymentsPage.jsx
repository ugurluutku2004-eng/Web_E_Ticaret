import { useState } from 'react';
import toast from 'react-hot-toast';

import Button from '../../components/ui/Button';

export default function AccountPaymentsPage() {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  const onAdd = (e) => {
    e.preventDefault();
    toast.success('Kart eklendi (demo)');
    setCardName('');
    setCardNumber('');
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-xs uppercase tracking-widest text-brand-500">Odeme</p>
      <h1 className="mt-2 font-display text-4xl text-ink-900">Odeme Secenekleri</h1>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <section className="rounded-3xl border border-sand-200 bg-white p-6 shadow-soft">
          <p className="text-xs uppercase tracking-widest text-ink-400">Kayitli kartlar</p>

          <div className="mt-4 space-y-3">
            <div className="rounded-2xl border border-sand-200 p-4">
              <p className="text-sm font-semibold text-ink-900">Kisisel Kart</p>
              <p className="mt-1 text-xs text-ink-500">•••• •••• •••• 2487</p>
            </div>
            <div className="rounded-2xl border border-sand-200 p-4">
              <p className="text-sm font-semibold text-ink-900">Yedek Kart</p>
              <p className="mt-1 text-xs text-ink-500">•••• •••• •••• 9012</p>
            </div>
          </div>

          <p className="mt-6 text-xs text-ink-500">Kartlar demo olarak listelenir.</p>
        </section>

        <section className="rounded-3xl border border-sand-200 bg-white p-6 shadow-soft">
          <p className="text-xs uppercase tracking-widest text-ink-400">Yeni kart ekle</p>

          <form className="mt-4 space-y-4" onSubmit={onAdd}>
            <div>
              <label className="text-sm text-ink-700" htmlFor="cardName">Kart ismi</label>
              <input
                id="cardName"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-sand-200 px-4 py-3 text-sm text-ink-900 focus:outline-none"
                placeholder="Orn: Maas Kartim"
              />
            </div>
            <div>
              <label className="text-sm text-ink-700" htmlFor="cardNumber">Kart numarasi</label>
              <input
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-sand-200 px-4 py-3 text-sm text-ink-900 focus:outline-none"
                placeholder="0000 0000 0000 0000"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <Button type="submit">Kart ekle</Button>
              <Button to="/account" variant="ghost">Hesap merkezine don</Button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
