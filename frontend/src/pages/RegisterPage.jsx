import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import Button from '../components/ui/Button';
import { api } from '../lib/api';
import { setAuth } from '../features/auth/authSlice';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post('/auth/register', { name, email, password });
      dispatch(setAuth({ user: response.data.data, token: response.data.token }));
      toast.success('Kayit basarili');
      navigate('/account', { replace: true });
    } catch (error) {
      const message = error?.response?.data?.message || 'Kayit basarisiz';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl text-ink-900">Kayit Ol</h1>

      <div className="mt-8 max-w-xl rounded-3xl border border-sand-200 bg-white p-6 shadow-soft">
        <p className="text-sm text-ink-600">Hizli kayit ile U-Ticaret hesabini olustur.</p>

        <form className="mt-6 space-y-4" onSubmit={onSubmit}>
          <div>
            <label className="text-sm text-ink-700" htmlFor="name">Ad Soyad</label>
            <input
              id="name"
              type="text"
              required
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
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-sand-200 px-4 py-3 text-sm text-ink-900 focus:outline-none"
              placeholder="ornek@mail.com"
            />
          </div>

          <div>
            <label className="text-sm text-ink-700" htmlFor="password">Sifre</label>
            <input
              id="password"
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-sand-200 px-4 py-3 text-sm text-ink-900 focus:outline-none"
              placeholder="En az 6 karakter"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button disabled={loading} type="submit">
              {loading ? 'Kayit yapiliyor…' : 'Kayit ol'}
            </Button>
            <Button to="/login" variant="ghost">Giris yap</Button>
          </div>
        </form>

        <p className="mt-6 text-sm text-ink-600">
          Zaten hesabin var mi?{' '}
          <Link className="text-brand-600 hover:text-brand-700" to="/login">
            Giris yap
          </Link>
        </p>
      </div>
    </div>
  );
}
