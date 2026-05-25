import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import Button from '../components/ui/Button';
import { api } from '../lib/api';
import { setAuth } from '../features/auth/authSlice';

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from?.pathname || '/account';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post('/auth/login', { email, password });
      dispatch(setAuth({ user: response.data.data, token: response.data.token }));
      toast.success('Giriş başarılı');
      navigate(redirectTo, { replace: true });
    } catch (error) {
      const message = error?.response?.data?.message || 'Giriş başarısız';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl text-ink-900">Giriş</h1>

      <div className="mt-8 max-w-xl rounded-3xl border border-sand-200 bg-white p-6 shadow-soft">
        <p className="text-sm text-ink-600">Hesabına giriş yap ve sepet/ödeme işlemlerine devam et.</p>

        <form className="mt-6 space-y-4" onSubmit={onSubmit}>
          <div>
            <label className="text-sm text-ink-700" htmlFor="email">E-posta</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-sand-200 px-4 py-3 text-sm text-ink-900 focus:outline-none"
              placeholder="örnek@mail.com"
            />
          </div>

          <div>
            <label className="text-sm text-ink-700" htmlFor="password">Şifre</label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-sand-200 px-4 py-3 text-sm text-ink-900 focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button disabled={loading} type="submit">
              {loading ? 'Giriş yapılıyor…' : 'Giriş yap'}
            </Button>
            <Button to="/products" variant="ghost">Ürünlere devam et</Button>
          </div>
        </form>

        <p className="mt-6 text-sm text-ink-600">
          Hesabın yok mu?{' '}
          <Link className="text-brand-600 hover:text-brand-700" to="/register">
            Kayıt ol
          </Link>
        </p>
      </div>
    </div>
  );
}
