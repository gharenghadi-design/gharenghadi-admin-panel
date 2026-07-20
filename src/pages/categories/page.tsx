import { Plus, MoreHorizontal, Edit2, Trash2 } from "lucide-react";
import { Badge } from "../../components/ui/elements";
import { cn } from "../../lib/utils";

interface Category {
  id: number;
  name: string;
  slug: string;
  products: number;
  color: string;
  status: "active" | "inactive";
}

const mockCategories: Category[] = [
  { id: 1, name: "Electronics", slug: "electronics", products: 45, color: "bg-blue-500", status: "active" },
  { id: 2, name: "Accessories", slug: "accessories", products: 120, color: "bg-emerald-500", status: "active" },
  { id: 3, name: "Home & Garden", slug: "home-garden", products: 32, color: "bg-amber-500", status: "active" },
  { id: 4, name: "Clothing", slug: "clothing", products: 78, color: "bg-purple-500", status: "active" },
  { id: 5, name: "Sports", slug: "sports", products: 23, color: "bg-rose-500", status: "inactive" },
  { id: 6, name: "Books", slug: "books", products: 56, color: "bg-cyan-500", status: "active" },
  { id: 7, name: "Toys", slug: "toys", products: 41, color: "bg-pink-500", status: "inactive" },
  { id: 8, name: "Food & Drinks", slug: "food-drinks", products: 19, color: "bg-orange-500", status: "active" },
];

export function CategoriesPage() {
  const filtered = mockCategories;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Categories</h1>
          <p className="text-gray-500 mt-1">Organize your product categories.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus size={18} />
          Add Category
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filtered.map((cat) => (
          <div key={cat.id} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", cat.color)}>
                <span className="text-white text-lg font-bold">{cat.name[0]}</span>
              </div>
              <button className="p-1 rounded-lg hover:bg-gray-100">
                <MoreHorizontal size={16} className="text-gray-400" />
              </button>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mt-3">{cat.name}</h3>
            <p className="text-sm text-gray-500">{cat.products} products</p>
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50">
              <Badge variant={cat.status === "active" ? "success" : "warning"}>{cat.status}</Badge>
              <div className="flex gap-1">
                <button className="p-1.5 rounded-lg hover:bg-gray-100"><Edit2 size={14} className="text-gray-400" /></button>
                <button className="p-1.5 rounded-lg hover:bg-gray-100"><Trash2 size={14} className="text-gray-400" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// category search

// improvement 9-4

// improvement 14-6
