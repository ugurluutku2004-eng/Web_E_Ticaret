import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import Button from '../components/ui/Button';
import { api } from '../lib/api';
import { logout, setAuth } from '../features/auth/authSlice';

export default function ProfilePage() {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadMe = async () => {
      if (!token) return;
      setLoading(true);
      try {
        const response = await api.get('/auth/me');
        dispatch(setAuth({ user: response.data.data, token }));
      } catch (error) {
        toast.error('Oturum doğrulanamadı, tekrar giriş yap');
        dispatch(logout());
      } finally {
        setLoading(false);
      }
    };

    loadMe();
  }, [dispatch, token]);

  const onLogout = () => {
    dispatch(logout());
    toast.success('Çıkış yapıldı');
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl text-ink-900">Profil</h1>

      <div className="mt-8 max-w-2xl rounded-3xl border border-sand-200 bg-white p-6 shadow-soft">
        {loading ? (
          <p className="text-sm text-ink-600">Profil yükleniyor…</p>
        ) : (
          <>
            <p className="text-sm text-ink-600">Hesap bilgileriniz:</p>
            <div className="mt-4 grid gap-3">
              <div className="flex items-center justify-between gap-4 rounded-2xl bg-sand-50 px-4 py-3">
                <span className="text-sm text-ink-500">Ad</span>
                <span className="text-sm font-semibold text-ink-900">{user?.name ?? '-'}</span>
              </div>
              <div className="flex items-center justify-between gap-4 rounded-2xl bg-sand-50 px-4 py-3">
                <span className="text-sm text-ink-500">E-posta</span>
                <span className="text-sm font-semibold text-ink-900">{user?.email ?? '-'}</span>
              </div>
              <div className="flex items-center justify-between gap-4 rounded-2xl bg-sand-50 px-4 py-3">
                <span className="text-sm text-ink-500">Rol</span>
                <span className="text-sm font-semibold text-ink-900">{user?.role ?? 'user'}</span>
              </div>
            </div>
          </>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          <Button to="/account" variant="ghost">Hesap merkezi</Button>
          <Button to="/account/orders" variant="ghost">Siparişlerim</Button>
          <Button onClick={onLogout} variant="dark">Çıkış yap</Button>
        </div>

        <p className="mt-6 text-sm text-ink-600">
          Giriş yapmadıysan{' '}
          <Link className="text-brand-600 hover:text-brand-700" to="/login">
            Giriş
          </Link>{' '}
          veya{' '}
          <Link className="text-brand-600 hover:text-brand-700" to="/register">
            Kayıt
          </Link>{' '}
          sayfasını kullanabilirsin.
        </p>
      </div>
    </div>
  );
}
