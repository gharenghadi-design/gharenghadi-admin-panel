import { Routes, Route, Navigate } from 'react-router-dom'
import { DashboardLayout } from './components/layout/dashboard-layout'
import { DashboardPage } from './pages/dashboard/page'
import { AnalyticsPage } from './pages/analytics/page'
import { OrdersPage } from './pages/orders/page'
import { UsersPage } from './pages/users/page'
import { ProductsPage } from './pages/products/page'
import { CategoriesPage } from './pages/categories/page'
import { BrandsPage } from './pages/brands/page'
import { CouponsPage } from './pages/coupons/page'
import { ReviewsPage } from './pages/reviews/page'
import { ProfilePage } from './pages/profile/page'
import { SettingsPage } from './pages/settings/page'
import { LoginPage } from './pages/auth/LoginPage'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/brands" element={<BrandsPage />} />
        <Route path="/coupons" element={<CouponsPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App

// improve app structure

// improvement 14-2

// fix: handle edge case in data handling [1-19-214034376]

// refactor: extract helper function [2-12-214257708]
