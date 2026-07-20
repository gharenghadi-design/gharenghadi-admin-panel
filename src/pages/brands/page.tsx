import { useState } from "react";
import { Search, Plus } from "lucide-react";
import { Badge } from "../../components/ui/elements";

interface Brand {
  id: number;
  name: string;
  origin: string;
  products: number;
  revenue: number;
  status: "active" | "inactive";
}

const mockBrands: Brand[] = [
  { id: 1, name: "TechPro", origin: "USA", products: 45, revenue: 125000, status: "active" },
  { id: 2, name: "SoundMax", origin: "Germany", products: 32, revenue: 89000, status: "active" },
  { id: 3, name: "VisionPlus", origin: "Japan", products: 28, revenue: 67000, status: "active" },
  { id: 4, name: "HomeEase", origin: "Sweden", products: 19, revenue: 43000, status: "active" },
  { id: 5, name: "SportEdge", origin: "UK", products: 15, revenue: 31000, status: "inactive" },
  { id: 6, name: "GreenLeaf", origin: "Canada", products: 22, revenue: 52000, status: "active" },
  { id: 7, name: "AquaPure", origin: "France", products: 11, revenue: 24000, status: "inactive" },
  { id: 8, name: "StarLight", origin: "South Korea", products: 37, revenue: 94000, status: "active" },
];

export function BrandsPage() {
  const [search, setSearch] = useState("");

  const filtered = mockBrands.filter((b) => b.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Brands</h1>
          <p className="text-gray-500 mt-1">Manage your brand partnerships.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus size={18} /> Add Brand
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-100">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input type="text" placeholder="Search brands..." value={search} onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {filtered.map((brand) => (
            <div key={brand.id} className="border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{brand.name[0]}</span>
                </div>
                <Badge variant={brand.status === "active" ? "success" : "warning"}>{brand.status}</Badge>
              </div>
              <h3 className="font-semibold text-gray-900 mt-3">{brand.name}</h3>
              <p className="text-xs text-gray-500">{brand.origin} · {brand.products} products</p>
              <p className="text-sm font-medium text-gray-700 mt-2">Revenue: ${brand.revenue.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// brand search

// improvement 12-1

// improvement 15-4

// improvement 19-3

// improvement 20-2

// improvement 22-6

// fix: handle edge case in data handling [1-4-213855096]
