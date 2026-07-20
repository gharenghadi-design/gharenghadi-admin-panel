export interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "editor" | "viewer";
  status: "active" | "inactive";
  joinedAt: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: "active" | "draft" | "archived";
}

export interface DashboardStats {
  totalUsers: number;
  totalProducts: number;
  totalOrders: number;
  revenue: number;
  usersGrowth: number;
  productsGrowth: number;
  ordersGrowth: number;
  revenueGrowth: number;
}

export interface SidebarItem {
  label: string;
  icon: string;
  path: string;
}
