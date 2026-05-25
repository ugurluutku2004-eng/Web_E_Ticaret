import { Cpu, Smartphone, Shirt, Sofa, Dumbbell, Sparkles, Tag } from 'lucide-react';

// Kategori slug -> lucide ikon eşlemesi. Bilinmeyen slug için Tag (genel) döner.
const iconBySlug = {
  elektronik: Cpu,
  telefonlar: Smartphone,
  giyim: Shirt,
  'ev-and-yasam': Sofa,
  spor: Dumbbell,
  kozmetik: Sparkles,
};

export const getCategoryIcon = (slug) => iconBySlug[slug] ?? Tag;

export default iconBySlug;
