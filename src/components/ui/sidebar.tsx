import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart3,
  ShoppingCart,
  Users,
  Package,
  Tags,
  Gift,
  Star,
  Building2,
  Settings,
  UserCircle,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Bell,
} from "lucide-react";
import { cn } from "../../lib/utils";
import { useState } from "react";
import type { SidebarItem } from "../../types";

const sidebarItems: SidebarItem[] = [
  { label: "Dashboard", icon: "dashboard", path: "/" },
  { label: "Analytics", icon: "analytics", path: "/analytics" },
  { label: "Orders", icon: "orders", path: "/orders" },
  { label: "Users", icon: "users", path: "/users" },
  { label: "Products", icon: "products", path: "/products" },
  { label: "Categories", icon: "categories", path: "/categories" },
  { label: "Brands", icon: "brands", path: "/brands" },
  { label: "Coupons", icon: "coupons", path: "/coupons" },
  { label: "Reviews", icon: "reviews", path: "/reviews" },
  { label: "Profile", icon: "profile", path: "/profile" },
  { label: "Settings", icon: "settings", path: "/settings" },
];

const iconMap: Record<string, React.ReactNode> = {
  dashboard: <LayoutDashboard size={20} />,
  analytics: <BarChart3 size={20} />,
  orders: <ShoppingCart size={20} />,
  users: <Users size={20} />,
  products: <Package size={20} />,
  categories: <Tags size={20} />,
  brands: <Building2 size={20} />,
  coupons: <Gift size={20} />,
  reviews: <Star size={20} />,
  profile: <UserCircle size={20} />,
  settings: <Settings size={20} />,
};

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const [notifications] = useState(3);

  return (
    <aside
      className={cn(
        "h-screen bg-gray-900 text-white flex flex-col transition-all duration-300 fixed left-0 top-0 z-50 overflow-y-auto",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-700 shrink-0">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">A</span>
            </div>
            <span className="text-sm font-bold tracking-wide">Admin Panel</span>
          </div>
        )}
        <button onClick={onToggle} className="p-1.5 rounded-lg hover:bg-gray-700 transition-colors">
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <nav className="flex-1 py-4 space-y-0.5 px-2">
        {sidebarItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm",
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              )
            }
          >
            {iconMap[item.icon]}
            {!collapsed && <span>{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      <div className="p-2 border-t border-gray-700 space-y-0.5 shrink-0">
        <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors text-sm relative">
          <Bell size={20} />
          {!collapsed && <span>Notifications</span>}
          {notifications > 0 && (
            <span className="ml-auto bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {notifications}
            </span>
          )}
        </button>
        <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors text-sm">
          <LogOut size={20} />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
