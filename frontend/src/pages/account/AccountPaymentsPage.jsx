import { useState } from 'react';
import { Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

import Button from '../../components/ui/Button';

const initialCards = [
  { id: 'card-1', name: 'Kişisel Kart', last4: '2487' },
  { id: 'card-2', name: 'Yedek Kart', last4: '9012' },
];

// Kart numarasından yalnızca rakamları alır.
const onlyDigits = (value) => value.replace(/\D/g, '');

export default function AccountPaymentsPage() {
  const [cards, setCards] = useState(initialCards);
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  const onAdd = (e) => {
    e.preventDefault();
    const digits = onlyDigits(cardNumber);

    if (!cardName.trim()) {
      toast.error('Kart ismi gerekli');
      return;
    }
    if (digits.length < 4) {
      toast.error('Geçerli bir kart numarası gir');
      return;
    }

    const newCard = {
      id: `card-${Date.now()}`,
      name: cardName.trim(),
      last4: digits.slice(-4),
    };
    setCards((prev) => [...prev, newCard]);
    setCardName('');
    setCardNumber('');
    toast.success('Kart eklendi');
  };

  const onRemove = (id) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
    toast.success('Kart kaldırıldı');
  };

  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-3xl border border-sand-200 bg-white p-6 shadow-soft">
          <p className="text-xs uppercase tracking-widest text-ink-400">Kayıtlı kartlar</p>

          <div className="mt-4 space-y-3">
            {cards.length === 0 ? (
              <p className="rounded-2xl border border-dashed border-sand-200 p-4 text-sm text-ink-500">
                Kayıtlı kartın yok. Yandaki formdan yeni kart ekleyebilirsin.
              </p>
            ) : (
              cards.map((card) => (
                <div
                  key={card.id}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-sand-200 p-4"
                >
                  <div>
                    <p className="text-sm font-semibold text-ink-900">{card.name}</p>
                    <p className="mt-1 text-xs text-ink-500">•••• •••• •••• {card.last4}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onRemove(card.id)}
                    className="inline-flex items-center gap-1 rounded-full border border-sand-200 px-3 py-1.5 text-xs font-semibold text-ink-600 transition hover:border-red-300 hover:text-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                    Kaldır
                  </button>
                </div>
              ))
            )}
          </div>
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
                placeholder="Örn: Maaş Kartım"
              />
            </div>
            <div>
              <label className="text-sm text-ink-700" htmlFor="cardNumber">Kart numarası</label>
              <input
                id="cardNumber"
                inputMode="numeric"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-sand-200 px-4 py-3 text-sm text-ink-900 focus:outline-none"
                placeholder="0000 0000 0000 0000"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <Button type="submit">Kart ekle</Button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
