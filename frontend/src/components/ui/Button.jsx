export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition';
  const styles = {
    primary: 'bg-brand-500 text-white hover:bg-brand-600',
    ghost: 'border border-sand-200 text-ink-700 hover:border-brand-400 hover:text-brand-600',
    dark: 'bg-ink-900 text-white hover:bg-ink-800',
  };

  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
