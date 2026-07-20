import { useState } from "react";
import { Search, Plus, MoreHorizontal } from "lucide-react";
import { cn } from "../../lib/utils";
import type { Product } from "../../types";

const mockProducts: Product[] = [
  { id: 1, name: "Wireless Headphones", category: "Electronics", price: 129.99, stock: 45, status: "active" },
  { id: 2, name: "USB-C Hub 7-in-1", category: "Accessories", price: 49.99, stock: 120, status: "active" },
  { id: 3, name: "Mechanical Keyboard", category: "Electronics", price: 199.99, stock: 0, status: "draft" },
  { id: 4, name: "Monitor Stand", category: "Accessories", price: 79.99, stock: 67, status: "active" },
  { id: 5, name: "Webcam HD 4K", category: "Electronics", price: 89.99, stock: 23, status: "active" },
  { id: 6, name: "Desk Lamp LED", category: "Home", price: 39.99, stock: 0, status: "archived" },
  { id: 7, name: "Laptop Sleeve", category: "Accessories", price: 29.99, stock: 89, status: "active" },
  { id: 8, name: "Mouse Pad XL", category: "Accessories", price: 19.99, stock: 150, status: "draft" },
];

const statusColors: Record<string, string> = {
  active: "bg-green-100 text-green-700",
  draft: "bg-yellow-100 text-yellow-700",
  archived: "bg-gray-100 text-gray-700",
};

const categories = [...new Set(mockProducts.map((p) => p.category))];

export function ProductsPage() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const filtered = mockProducts.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = categoryFilter === "All" || p.category === categoryFilter;
    return matchSearch && matchCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Products</h1>
          <p className="text-gray-500 mt-1">Manage your product catalog.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus size={18} />
          Add Product
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-100 flex items-center gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          >
            <option>All</option>
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b border-gray-100">
                <th className="px-4 py-3 font-medium">Product</th>
                <th className="px-4 py-3 font-medium">Category</th>
                <th className="px-4 py-3 font-medium">Price</th>
                <th className="px-4 py-3 font-medium">Stock</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((product) => (
                <tr key={product.id} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">{product.name}</td>
                  <td className="px-4 py-3 text-gray-700">{product.category}</td>
                  <td className="px-4 py-3 text-gray-900">${product.price.toFixed(2)}</td>
                  <td className="px-4 py-3">
                    <span className={cn(product.stock === 0 ? "text-red-500 font-medium" : "text-gray-700")}>
                      {product.stock === 0 ? "Out of stock" : product.stock}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={cn("px-2.5 py-1 rounded-full text-xs font-medium capitalize", statusColors[product.status])}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                      <MoreHorizontal size={16} className="text-gray-400" />
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

// improvement 14-1

// improvement 14-5

// improvement 22-4

// refactor: improve code readability [1-14-213956356]
