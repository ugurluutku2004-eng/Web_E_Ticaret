import { useState } from 'react';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import Button from '../../components/ui/Button';

export default function AccountSettingsPage() {
  const { user } = useSelector((state) => state.auth);
  const [name, setName] = useState(user?.name ?? '');
  const [email, setEmail] = useState(user?.email ?? '');
  const [password, setPassword] = useState('');

  const onSave = (e) => {
    e.preventDefault();
    toast.success('Bilgilerin kaydedildi');
    setPassword('');
  };

  return (
    <div>
      <div className="max-w-2xl rounded-3xl border border-sand-200 bg-white p-6 shadow-soft">
        <form className="space-y-4" onSubmit={onSave}>
          <div>
            <label className="text-sm text-ink-700" htmlFor="name">Ad Soyad</label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-sand-200 px-4 py-3 text-sm text-ink-900 focus:outline-none"
              placeholder="Ad Soyad"
            />
          </div>

          <div>
            <label className="text-sm text-ink-700" htmlFor="email">E-posta</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-sand-200 px-4 py-3 text-sm text-ink-900 focus:outline-none"
              placeholder="örnek@mail.com"
            />
          </div>

          <div>
            <label className="text-sm text-ink-700" htmlFor="password">Şifre değiştir</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-sand-200 px-4 py-3 text-sm text-ink-900 focus:outline-none"
              placeholder="Yeni şifre (opsiyonel)"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <Button type="submit">Kaydet</Button>
          </div>
        </form>

        <p className="mt-6 text-xs text-ink-500">
          Bilgilerini güncelledikten sonra "Kaydet" butonuna basman yeterli.
        </p>
      </div>
    </div>
  );
}
