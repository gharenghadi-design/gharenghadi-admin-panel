import { Users, Package, ShoppingCart, DollarSign, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "../../lib/utils";
import type { DashboardStats } from "../../types";

const stats: DashboardStats = {
  totalUsers: 2845,
  totalProducts: 156,
  totalOrders: 842,
  revenue: 48250,
  usersGrowth: 12.5,
  productsGrowth: -3.2,
  ordersGrowth: 8.1,
  revenueGrowth: 15.3,
};

const statCards = [
  {
    label: "Total Users",
    value: stats.totalUsers.toLocaleString(),
    growth: stats.usersGrowth,
    icon: Users,
    color: "bg-blue-500",
  },
  {
    label: "Total Products",
    value: stats.totalProducts.toLocaleString(),
    growth: stats.productsGrowth,
    icon: Package,
    color: "bg-emerald-500",
  },
  {
    label: "Total Orders",
    value: stats.totalOrders.toLocaleString(),
    growth: stats.ordersGrowth,
    icon: ShoppingCart,
    color: "bg-amber-500",
  },
  {
    label: "Revenue",
    value: `$${stats.revenue.toLocaleString()}`,
    growth: stats.revenueGrowth,
    icon: DollarSign,
    color: "bg-purple-500",
  },
];

const recentOrders = [
  { id: "#ORD-001", customer: "John Doe", product: "Wireless Headphones", amount: 129.99, status: "completed" },
  { id: "#ORD-002", customer: "Jane Smith", product: "USB-C Hub", amount: 49.99, status: "processing" },
  { id: "#ORD-003", customer: "Mike Johnson", product: "Mechanical Keyboard", amount: 199.99, status: "completed" },
  { id: "#ORD-004", customer: "Sarah Wilson", product: "Monitor Stand", amount: 79.99, status: "pending" },
  { id: "#ORD-005", customer: "Alex Brown", product: "Webcam HD", amount: 89.99, status: "completed" },
];

const statusColors: Record<string, string> = {
  completed: "bg-green-100 text-green-700",
  processing: "bg-blue-100 text-blue-700",
  pending: "bg-yellow-100 text-yellow-700",
};

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome back! Here's what's happening.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card) => (
          <div key={card.label} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div className={cn("p-2.5 rounded-lg", card.color)}>
                <card.icon className="text-white" size={20} />
              </div>
              <div className={cn(
                "flex items-center gap-1 text-sm font-medium",
                card.growth >= 0 ? "text-green-600" : "text-red-600"
              )}>
                {card.growth >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                {Math.abs(card.growth)}%
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-4">{card.value}</p>
            <p className="text-sm text-gray-500 mt-1">{card.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="px-5 py-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b border-gray-100">
                <th className="px-5 py-3 font-medium">Order ID</th>
                <th className="px-5 py-3 font-medium">Customer</th>
                <th className="px-5 py-3 font-medium">Product</th>
                <th className="px-5 py-3 font-medium">Amount</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="px-5 py-3 font-medium text-gray-900">{order.id}</td>
                  <td className="px-5 py-3 text-gray-700">{order.customer}</td>
                  <td className="px-5 py-3 text-gray-700">{order.product}</td>
                  <td className="px-5 py-3 text-gray-900">${order.amount.toFixed(2)}</td>
                  <td className="px-5 py-3">
                    <span className={cn("px-2.5 py-1 rounded-full text-xs font-medium capitalize", statusColors[order.status])}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// add loading states

// improvement 18-5
