import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Package,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "../../lib/utils";
import type { SidebarItem } from "../../types";

const sidebarItems: SidebarItem[] = [
  { label: "Dashboard", icon: "dashboard", path: "/" },
  { label: "Analytics", icon: "analytics", path: "/analytics" },
  { label: "Users", icon: "users", path: "/users" },
  { label: "Products", icon: "products", path: "/products" },
  { label: "Settings", icon: "settings", path: "/settings" },
];

const iconMap: Record<string, React.ReactNode> = {
  dashboard: <LayoutDashboard size={20} />,
  analytics: <LayoutDashboard size={20} />,
  users: <Users size={20} />,
  products: <Package size={20} />,
  settings: <Settings size={20} />,
};

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  return (
    <aside
      className={cn(
        "h-screen bg-gray-900 text-white flex flex-col transition-all duration-300 fixed left-0 top-0 z-50",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {!collapsed && (
          <span className="text-lg font-bold tracking-wide">Admin Panel</span>
        )}
        <button
          onClick={onToggle}
          className="p-1.5 rounded-lg hover:bg-gray-700 transition-colors"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <nav className="flex-1 py-4 space-y-1 px-2">
        {sidebarItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
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

      <div className="p-2 border-t border-gray-700">
        <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
          <LogOut size={20} />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
