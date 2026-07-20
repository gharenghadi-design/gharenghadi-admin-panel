import { Routes, Route, Navigate } from 'react-router-dom'
import { DashboardLayout } from './components/layout/dashboard-layout'
import { DashboardPage } from './pages/dashboard/page'
import { AnalyticsPage } from './pages/analytics/page'
import { UsersPage } from './pages/users/page'
import { ProductsPage } from './pages/products/page'
import { SettingsPage } from './pages/settings/page'
import { LoginPage } from './pages/auth/LoginPage'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
