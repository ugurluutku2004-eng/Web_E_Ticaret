import Button from '../../components/ui/Button';
import toast from 'react-hot-toast';

export default function AdminUsers() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl text-ink-900">Admin Kullanicilar</h1>

      <div className="mt-8 rounded-3xl border border-sand-200 bg-white p-6 shadow-soft">
        <p className="text-sm text-ink-600">Kullanici listesi (demo)</p>
        <div className="mt-5 space-y-3">
          {[
            { name: 'Demo Admin', email: 'admin@u-ticaret.com', role: 'admin' },
            { name: 'Demo User', email: 'user@u-ticaret.com', role: 'user' },
          ].map((entry) => (
            <div key={entry.email} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-sand-200 px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-ink-900">{entry.name}</p>
                <p className="text-xs text-ink-500">{entry.email} • {entry.role}</p>
              </div>
              <Button
                variant="ghost"
                onClick={() => toast('Demo: Kullanici guncelleme aksiyonu henuz baglanmadi.')}
              >
                Guncelle
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
