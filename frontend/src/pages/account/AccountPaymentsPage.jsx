import { useEffect, useMemo, useState } from 'react';
import { Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

import Button from '../../components/ui/Button';
import { api } from '../../lib/api';

// Kart numarasından yalnızca rakamları alır.
const onlyDigits = (value) => value.replace(/\D/g, '');

export default function AccountPaymentsPage() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [removingId, setRemovingId] = useState(null);
  const [cardName, setCardName] = useState('');
  const [holderName, setHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expMonth, setExpMonth] = useState('');
  const [expYear, setExpYear] = useState('');
  const [cvc, setCvc] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get('/users/cards');
        setCards(res.data.data || []);
      } catch (error) {
        toast.error(error.response?.data?.message || 'Kartlar yüklenemedi');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const hasCards = useMemo(() => cards.length > 0, [cards.length]);

  const onAdd = async (e) => {
    e.preventDefault();
    const digits = onlyDigits(cardNumber);

    if (!cardName.trim()) {
      toast.error('Kart ismi gerekli');
      return;
    }
    if (!holderName.trim()) {
      toast.error('Kart üzerindeki isim gerekli');
      return;
    }
    if (digits.length < 4) {
      toast.error('Geçerli bir kart numarası gir');
      return;
    }
    if (!expMonth || !expYear) {
      toast.error('Son kullanma tarihi gerekli');
      return;
    }
    if (!cvc.trim()) {
      toast.error('CVC gerekli');
      return;
    }

    try {
      setSaving(true);
      const res = await api.post('/users/cards', {
        name: cardName.trim(),
        holderName: holderName.trim(),
        number: digits,
        expMonth: Number(expMonth),
        expYear: Number(expYear),
        cvc: cvc.trim(),
      });
      setCards(res.data.data || []);
      setCardName('');
      setHolderName('');
      setCardNumber('');
      setExpMonth('');
      setExpYear('');
      setCvc('');
      toast.success('Kart eklendi');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Kart eklenemedi');
    } finally {
      setSaving(false);
    }
  };

  const onRemove = async (id) => {
    try {
      setRemovingId(id);
      const res = await api.delete(`/users/cards/${id}`);
      setCards(res.data.data || []);
      toast.success('Kart kaldırıldı');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Kart kaldırılamadı');
    } finally {
      setRemovingId(null);
    }
  };

  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-3xl border border-sand-200 bg-white p-6 shadow-soft">
          <p className="text-xs uppercase tracking-widest text-ink-400">Kayıtlı kartlar</p>

          <div className="mt-4 space-y-3">
            {loading ? (
              <p className="rounded-2xl border border-dashed border-sand-200 p-4 text-sm text-ink-500">
                Yükleniyor...
              </p>
            ) : !hasCards ? (
              <p className="rounded-2xl border border-dashed border-sand-200 p-4 text-sm text-ink-500">
                Kayıtlı kartın yok. Yandaki formdan yeni kart ekleyebilirsin.
              </p>
            ) : (
              cards.map((card) => (
                <div
                  key={card._id}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-sand-200 p-4"
                >
                  <div>
                    <p className="text-sm font-semibold text-ink-900">{card.name}</p>
                    <p className="mt-1 text-xs text-ink-500">
                      {card.brand ? card.brand.toUpperCase() : 'KART'} •••• {card.last4}
                    </p>
                    <p className="mt-1 text-xs text-ink-500">
                      {card.holderName} • {String(card.expMonth).padStart(2, '0')}/{card.expYear}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onRemove(card._id)}
                    disabled={removingId === card._id}
                    className="inline-flex items-center gap-1 rounded-full border border-sand-200 px-3 py-1.5 text-xs font-semibold text-ink-600 transition hover:border-red-300 hover:text-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                    {removingId === card._id ? 'Kaldırılıyor...' : 'Kaldır'}
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
              <label className="text-sm text-ink-700" htmlFor="holderName">Kart üzerindeki isim</label>
              <input
                id="holderName"
                value={holderName}
                onChange={(e) => setHolderName(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-sand-200 px-4 py-3 text-sm text-ink-900 focus:outline-none"
                placeholder="Ad Soyad"
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
            <div className="grid gap-3 sm:grid-cols-3">
              <div>
                <label className="text-sm text-ink-700" htmlFor="expMonth">Ay</label>
                <input
                  id="expMonth"
                  inputMode="numeric"
                  value={expMonth}
                  onChange={(e) => setExpMonth(e.target.value.replace(/\D/g, '').slice(0, 2))}
                  className="mt-2 w-full rounded-2xl border border-sand-200 px-4 py-3 text-sm text-ink-900 focus:outline-none"
                  placeholder="AA"
                />
              </div>
              <div>
                <label className="text-sm text-ink-700" htmlFor="expYear">Yıl</label>
                <input
                  id="expYear"
                  inputMode="numeric"
                  value={expYear}
                  onChange={(e) => setExpYear(e.target.value.replace(/\D/g, '').slice(0, 4))}
                  className="mt-2 w-full rounded-2xl border border-sand-200 px-4 py-3 text-sm text-ink-900 focus:outline-none"
                  placeholder="YYYY"
                />
              </div>
              <div>
                <label className="text-sm text-ink-700" htmlFor="cvc">CVC</label>
                <input
                  id="cvc"
                  inputMode="numeric"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value.replace(/\D/g, '').slice(0, 4))}
                  className="mt-2 w-full rounded-2xl border border-sand-200 px-4 py-3 text-sm text-ink-900 focus:outline-none"
                  placeholder="000"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button type="submit" disabled={saving}>
                {saving ? 'Kaydediliyor...' : 'Kart ekle'}
              </Button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
