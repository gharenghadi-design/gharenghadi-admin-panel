import { useState } from "react";
import { Outlet } from "react-router-dom";
import { cn } from "../../lib/utils";
import { Sidebar } from "../ui/sidebar";

export function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed(!collapsed)}
      />
      <main
        className={cn(
          "transition-all duration-300 p-6",
          collapsed ? "ml-16" : "ml-64"
        )}
      >
        <Outlet />
      </main>
    </div>
  );
}
