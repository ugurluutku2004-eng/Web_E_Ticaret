import { Outlet } from 'react-router-dom';
import PromoBar from './PromoBar';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-sand-50 text-ink-900">
      <PromoBar />
      <Navbar />
      <main className="bg-sunset">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
