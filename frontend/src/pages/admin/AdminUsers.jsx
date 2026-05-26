import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { api } from '../../lib/api';
import Button from '../../components/ui/Button';

export default function AdminUsers() {
  const currentUser = useSelector((state) => state.auth.user);
  const currentId = currentUser?._id || currentUser?.id;

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get('/users');
        setUsers(res.data.data || []);
      } catch {
        toast.error('Kullanıcılar yüklenemedi.');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleDelete = async (user) => {
    if (!window.confirm(`"${user.name}" kullanıcısı silinsin mi?`)) return;
    try {
      await api.delete(`/users/${user._id}`);
      toast.success('Kullanıcı silindi.');
      setUsers((prev) => prev.filter((item) => item._id !== user._id));
    } catch (error) {
      toast.error(error.response?.data?.message || 'Silme başarısız.');
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl text-ink-900">Admin Kullanıcılar</h1>

      <div className="mt-8 rounded-3xl border border-sand-200 bg-white p-6 shadow-soft">
        <p className="text-sm font-semibold text-ink-900">Kullanıcı listesi</p>
        <div className="mt-5 space-y-3">
          {loading && <p className="text-sm text-ink-500">Yükleniyor...</p>}
          {!loading && users.length === 0 && (
            <p className="text-sm text-ink-500">Kayıtlı kullanıcı bulunamadı.</p>
          )}
          {users.map((user) => (
            <div
              key={user._id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-sand-200 px-4 py-3"
            >
              <div>
                <p className="text-sm font-semibold text-ink-900">
                  {user.name}
                  {user.role === 'admin' && (
                    <span className="ml-2 rounded-full bg-brand-50 px-2 py-0.5 text-xs text-brand-600">admin</span>
                  )}
                </p>
                <p className="text-xs text-ink-500">
                  {user.email}
                  {user.createdAt &&
                    ` • Kayıt: ${new Date(user.createdAt).toLocaleDateString('tr-TR', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                    })}`}
                </p>
              </div>
              <Button
                variant="ghost"
                onClick={() => handleDelete(user)}
                disabled={user._id === currentId}
              >
                {user._id === currentId ? 'Bu sizsiniz' : 'Sil'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
