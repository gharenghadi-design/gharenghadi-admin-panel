import { useState } from "react";
import { Search, Eye } from "lucide-react";
import { Badge } from "../../components/ui/elements";

interface Order {
  id: string;
  customer: string;
  email: string;
  product: string;
  amount: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  date: string;
  items: number;
}

const mockOrders: Order[] = [
  { id: "ORD-001", customer: "John Doe", email: "john@example.com", product: "Wireless Headphones", amount: 129.99, status: "delivered", date: "2026-07-15", items: 2 },
  { id: "ORD-002", customer: "Jane Smith", email: "jane@example.com", product: "USB-C Hub", amount: 49.99, status: "shipped", date: "2026-07-16", items: 1 },
  { id: "ORD-003", customer: "Mike Johnson", email: "mike@example.com", product: "Mechanical Keyboard", amount: 199.99, status: "processing", date: "2026-07-17", items: 3 },
  { id: "ORD-004", customer: "Sarah Wilson", email: "sarah@example.com", product: "Monitor Stand", amount: 79.99, status: "pending", date: "2026-07-18", items: 1 },
  { id: "ORD-005", customer: "Alex Brown", email: "alex@example.com", product: "Webcam HD", amount: 89.99, status: "cancelled", date: "2026-07-18", items: 1 },
  { id: "ORD-006", customer: "Emily Davis", email: "emily@example.com", product: "Desk Lamp LED", amount: 39.99, status: "delivered", date: "2026-07-14", items: 2 },
  { id: "ORD-007", customer: "Chris Lee", email: "chris@example.com", product: "Laptop Sleeve", amount: 29.99, status: "shipped", date: "2026-07-19", items: 1 },
  { id: "ORD-008", customer: "Lisa Anderson", email: "lisa@example.com", product: "Mouse Pad XL", amount: 19.99, status: "processing", date: "2026-07-19", items: 4 },
  { id: "ORD-009", customer: "Tom Harris", email: "tom@example.com", product: "Bluetooth Speaker", amount: 59.99, status: "pending", date: "2026-07-20", items: 1 },
  { id: "ORD-010", customer: "Nina White", email: "nina@example.com", product: "Phone Case", amount: 24.99, status: "delivered", date: "2026-07-13", items: 2 },
  { id: "ORD-011", customer: "David Kim", email: "david@example.com", product: "Charger 65W", amount: 34.99, status: "shipped", date: "2026-07-17", items: 1 },
  { id: "ORD-012", customer: "Rachel Green", email: "rachel@example.com", product: "Tablet Stand", amount: 44.99, status: "cancelled", date: "2026-07-16", items: 1 },
];

export function OrdersPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filtered = mockOrders.filter((o) => {
    const matchSearch = o.id.toLowerCase().includes(search.toLowerCase()) || o.customer.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "All" || o.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const totalRevenue = mockOrders.reduce((sum, o) => sum + o.amount, 0);
  const pendingOrders = mockOrders.filter((o) => o.status === "pending").length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
          <p className="text-gray-500 mt-1">Track and manage customer orders.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">Total Orders</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{mockOrders.length}</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">Total Revenue</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">${totalRevenue.toFixed(2)}</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">Pending</p>
          <p className="text-2xl font-bold text-amber-600 mt-1">{pendingOrders}</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">Avg. Order Value</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">${(totalRevenue / mockOrders.length).toFixed(2)}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-100 flex items-center gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search orders..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>All</option>
            <option>pending</option><option>processing</option><option>shipped</option><option>delivered</option><option>cancelled</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b border-gray-100">
                <th className="px-4 py-3 font-medium">Order</th>
                <th className="px-4 py-3 font-medium">Customer</th>
                <th className="px-4 py-3 font-medium">Product</th>
                <th className="px-4 py-3 font-medium">Amount</th>
                <th className="px-4 py-3 font-medium">Items</th>
                <th className="px-4 py-3 font-medium">Date</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((order) => (
                <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">{order.id}</td>
                  <td className="px-4 py-3">
                    <div>
                      <p className="text-gray-900 font-medium">{order.customer}</p>
                      <p className="text-gray-500 text-xs">{order.email}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-700">{order.product}</td>
                  <td className="px-4 py-3 text-gray-900">${order.amount.toFixed(2)}</td>
                  <td className="px-4 py-3 text-gray-700">{order.items}</td>
                  <td className="px-4 py-3 text-gray-500">{order.date}</td>
                  <td className="px-4 py-3">
                    <Badge variant={order.status === "delivered" ? "success" : order.status === "cancelled" ? "danger" : order.status === "pending" ? "warning" : "info"}>
                      {order.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-3">
                    <button className="p-1.5 rounded-lg hover:bg-gray-100">
                      <Eye size={16} className="text-gray-400" />
                    </button>
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

// order filters

// improvement 10-6

// improvement 13-5
