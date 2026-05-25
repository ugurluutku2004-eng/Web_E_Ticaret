import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LogOut } from 'lucide-react';
import toast from 'react-hot-toast';

import { logout } from '../../features/auth/authSlice';

const tabs = [
  { to: '/account/settings', label: 'Hesap Ayarları' },
  { to: '/account/orders', label: 'Siparişlerim' },
  { to: '/account/payments', label: 'Ödeme Yöntemleri' },
  { to: '/account/coupons', label: 'Kuponlar' },
];

export default function AccountLayout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    toast.success('Çıkış yapıldı');
    navigate('/', { replace: true });
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-xs uppercase tracking-widest text-brand-500">Hesabım</p>
      <h1 className="mt-2 font-display text-4xl text-ink-900">
        Merhaba, {user?.name ?? 'misafir'}
      </h1>
      <p className="mt-3 text-sm text-ink-500">
        Hesap ayarlarını, siparişlerini, ödeme yöntemlerini ve kuponlarını buradan yönet.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-b border-sand-200 pb-4">
        <nav className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <NavLink
              key={tab.to}
              to={tab.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-ink-900 text-white'
                    : 'border border-sand-200 text-ink-700 hover:border-brand-400 hover:text-brand-600'
                }`
              }
            >
              {tab.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={onLogout}
          className="inline-flex items-center gap-2 rounded-full border border-sand-200 px-4 py-2 text-sm font-semibold text-ink-700 transition hover:border-red-300 hover:text-red-600"
        >
          <LogOut className="h-4 w-4" />
          Çıkış yap
        </button>
      </div>

      <div className="mt-8">
        <Outlet />
      </div>
    </div>
  );
}
