import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import PrivateRoute from './components/routing/PrivateRoute';
import AdminRoute from './components/routing/AdminRoute';

import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import OrderDetailPage from './pages/OrderDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import CategoryPage from './pages/categories/CategoryPage';
import AccountLayout from './pages/account/AccountLayout';
import AccountSettingsPage from './pages/account/AccountSettingsPage';
import AccountOrdersPage from './pages/account/AccountOrdersPage';
import AccountPaymentsPage from './pages/account/AccountPaymentsPage';
import CouponsPage from './pages/account/CouponsPage';

import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProducts from './pages/admin/AdminProducts';
import AdminOrders from './pages/admin/AdminOrders';
import AdminUsers from './pages/admin/AdminUsers';

import AboutPage from './pages/static/AboutPage';
import HelpPage from './pages/static/HelpPage';
import PrivacyPage from './pages/static/PrivacyPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />

        <Route element={<PrivateRoute />}>
          <Route path="/account" element={<AccountLayout />}>
            <Route index element={<Navigate to="/account/settings" replace />} />
            <Route path="settings" element={<AccountSettingsPage />} />
            <Route path="orders" element={<AccountOrdersPage />} />
            <Route path="payments" element={<AccountPaymentsPage />} />
            <Route path="coupons" element={<CouponsPage />} />
          </Route>
          <Route path="/account/orders/:id" element={<OrderDetailPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        <Route element={<AdminRoute />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/users" element={<AdminUsers />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
