import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const monthlyRevenue = [
  { month: "Jan", revenue: 12000, orders: 180 },
  { month: "Feb", revenue: 15000, orders: 220 },
  { month: "Mar", revenue: 11000, orders: 190 },
  { month: "Apr", revenue: 18000, orders: 260 },
  { month: "May", revenue: 22000, orders: 310 },
  { month: "Jun", revenue: 19000, orders: 280 },
  { month: "Jul", revenue: 25000, orders: 350 },
  { month: "Aug", revenue: 21000, orders: 290 },
  { month: "Sep", revenue: 28000, orders: 380 },
  { month: "Oct", revenue: 24000, orders: 320 },
  { month: "Nov", revenue: 30000, orders: 410 },
  { month: "Dec", revenue: 35000, orders: 450 },
];

const categoryData = [
  { name: "Electronics", value: 45 },
  { name: "Accessories", value: 30 },
  { name: "Home", value: 15 },
  { name: "Clothing", value: 10 },
];

const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"];

const topProducts = [
  { name: "Wireless Headphones", sales: 342, revenue: 44358 },
  { name: "USB-C Hub", sales: 289, revenue: 14450 },
  { name: "Monitor Stand", sales: 201, revenue: 16080 },
  { name: "Webcam HD 4K", sales: 178, revenue: 16020 },
  { name: "Mechanical Keyboard", sales: 156, revenue: 31200 },
];

export function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-500 mt-1">Track your business performance.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Monthly Revenue</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyRevenue}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="revenue" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Trends</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyRevenue}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line type="monotone" dataKey="orders" stroke="#10B981" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Sales by Category</h2>
          <div className="h-72 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={categoryData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={4} dataKey="value">
                  {categoryData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-4 mt-2">
            {categoryData.map((item, index) => (
              <div key={item.name} className="flex items-center gap-1.5 text-sm">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }} />
                <span className="text-gray-600">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Top Products</h2>
          <div className="space-y-3">
            {topProducts.map((product, index) => (
              <div key={product.name} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-400 w-5">#{index + 1}</span>
                  <span className="text-sm font-medium text-gray-900">{product.name}</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{product.sales} sales</p>
                  <p className="text-xs text-gray-500">${product.revenue.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// charts update

// improvement 11-5

// improvement 13-1
