import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { api } from '../../lib/api';
import Button from '../../components/ui/Button';

const formatPrice = (value) =>
  new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(value || 0);

const inputClass =
  'w-full rounded-2xl border border-sand-200 px-4 py-2 text-sm text-ink-900 focus:border-brand-400 focus:outline-none';

const emptyForm = { name: '', description: '', price: '', stock: '', category: '' };

const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/ş/g, 's')
    .replace(/ç/g, 'c')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ö/g, 'o')
    .replace(/ı/g, 'i')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);

  const [catName, setCatName] = useState('');
  const [savingCat, setSavingCat] = useState(false);

  const loadData = async () => {
    setLoading(true);
    try {
      const [prodRes, catRes] = await Promise.all([
        api.get('/products?limit=100'),
        api.get('/categories'),
      ]);
      setProducts(prodRes.data.data || []);
      setCategories(catRes.data.data || []);
    } catch {
      toast.error('Veriler yüklenemedi.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const openCreate = () => {
    setForm({ ...emptyForm, category: categories[0]?._id || '' });
    setEditingId(null);
    setShowForm(true);
  };

  const openEdit = (product) => {
    setForm({
      name: product.name || '',
      description: product.description || '',
      price: product.price ?? '',
      stock: product.stock ?? '',
      category: product.category?._id || product.category || '',
    });
    setEditingId(product._id);
    setShowForm(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.category) {
      toast.error('Ürün adı ve kategori zorunludur.');
      return;
    }
    setSaving(true);
    const payload = {
      name: form.name.trim(),
      description: form.description.trim(),
      price: Number(form.price) || 0,
      stock: Number(form.stock) || 0,
      category: form.category,
    };
    try {
      if (editingId) {
        await api.put(`/products/${editingId}`, payload);
        toast.success('Ürün güncellendi.');
      } else {
        await api.post('/products', payload);
        toast.success('Ürün eklendi.');
      }
      setShowForm(false);
      setForm(emptyForm);
      setEditingId(null);
      loadData();
    } catch (error) {
      toast.error(error.response?.data?.message || 'İşlem başarısız.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (product) => {
    if (!window.confirm(`"${product.name}" ürünü silinsin mi?`)) return;
    try {
      await api.delete(`/products/${product._id}`);
      toast.success('Ürün silindi.');
      setProducts((prev) => prev.filter((item) => item._id !== product._id));
    } catch (error) {
      toast.error(error.response?.data?.message || 'Silme başarısız.');
    }
  };

  const addCategory = async (event) => {
    event.preventDefault();
    const name = catName.trim();
    if (!name) return;
    setSavingCat(true);
    try {
      await api.post('/categories', { name, slug: slugify(name) });
      toast.success('Kategori eklendi.');
      setCatName('');
      loadData();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Kategori eklenemedi.');
    } finally {
      setSavingCat(false);
    }
  };

  const deleteCategory = async (category) => {
    if (!window.confirm(`"${category.name}" kategorisi silinsin mi?`)) return;
    try {
      await api.delete(`/categories/${category._id}`);
      toast.success('Kategori silindi.');
      setCategories((prev) => prev.filter((item) => item._id !== category._id));
    } catch (error) {
      toast.error(error.response?.data?.message || 'Silme başarısız.');
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl text-ink-900">Admin Ürünler</h1>

      <div className="mt-8 rounded-3xl border border-sand-200 bg-white p-6 shadow-soft">
        <p className="text-sm font-semibold text-ink-900">Kategoriler</p>
        <form onSubmit={addCategory} className="mt-3 flex flex-wrap gap-2">
          <input
            className={`${inputClass} max-w-xs`}
            placeholder="Yeni kategori adı"
            value={catName}
            onChange={(event) => setCatName(event.target.value)}
          />
          <Button type="submit" variant="ghost" disabled={savingCat}>
            {savingCat ? 'Ekleniyor...' : 'Kategori ekle'}
          </Button>
        </form>
        <div className="mt-3 flex flex-wrap gap-2">
          {categories.length === 0 && (
            <span className="text-xs text-ink-500">Henüz kategori yok. Ürün eklemek için önce kategori ekleyin.</span>
          )}
          {categories.map((category) => (
            <span
              key={category._id}
              className="inline-flex items-center gap-2 rounded-full border border-sand-200 px-3 py-1 text-xs text-ink-700"
            >
              {category.name}
              <button
                type="button"
                onClick={() => deleteCategory(category)}
                className="text-ink-400 hover:text-red-500"
                aria-label="Kategoriyi sil"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-sand-200 bg-white p-6 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-semibold text-ink-900">Ürün listesi</p>
          <Button onClick={openCreate} disabled={categories.length === 0}>
            Yeni ürün ekle
          </Button>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} className="mt-5 grid gap-3 rounded-2xl bg-sand-50 p-4 md:grid-cols-2">
            <input
              className={inputClass}
              name="name"
              placeholder="Ürün adı"
              value={form.name}
              onChange={handleChange}
            />
            <select className={inputClass} name="category" value={form.category} onChange={handleChange}>
              <option value="">Kategori seç</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
            <input
              className={inputClass}
              name="price"
              type="number"
              min="0"
              placeholder="Fiyat (₺)"
              value={form.price}
              onChange={handleChange}
            />
            <input
              className={inputClass}
              name="stock"
              type="number"
              min="0"
              placeholder="Stok"
              value={form.stock}
              onChange={handleChange}
            />
            <textarea
              className={`${inputClass} md:col-span-2`}
              name="description"
              rows="2"
              placeholder="Açıklama"
              value={form.description}
              onChange={handleChange}
            />
            <div className="flex gap-2 md:col-span-2">
              <Button type="submit" disabled={saving}>
                {saving ? 'Kaydediliyor...' : editingId ? 'Güncelle' : 'Ekle'}
              </Button>
              <Button type="button" variant="ghost" onClick={() => setShowForm(false)}>
                Vazgeç
              </Button>
            </div>
          </form>
        )}

        <div className="mt-5 divide-y divide-sand-100">
          {loading && <p className="py-4 text-sm text-ink-500">Yükleniyor...</p>}
          {!loading && products.length === 0 && (
            <p className="py-4 text-sm text-ink-500">Henüz ürün yok. "Yeni ürün ekle" ile başlayın.</p>
          )}
          {products.map((product) => (
            <div key={product._id} className="flex flex-wrap items-center justify-between gap-3 py-3">
              <div>
                <p className="text-sm font-semibold text-ink-900">{product.name}</p>
                <p className="text-xs text-ink-500">
                  {formatPrice(product.price)} • Stok: {product.stock} • {product.category?.name || 'Kategorisiz'}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" onClick={() => openEdit(product)}>
                  Düzenle
                </Button>
                <Button variant="ghost" onClick={() => handleDelete(product)}>
                  Sil
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
