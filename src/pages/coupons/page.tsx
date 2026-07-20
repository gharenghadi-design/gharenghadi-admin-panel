import { useState } from "react";
import { Search, Gift, Copy, MoreHorizontal } from "lucide-react";
import { Badge, Button } from "../../components/ui/elements";

interface Coupon {
  id: number;
  code: string;
  discount: string;
  type: "percentage" | "fixed";
  usage: number;
  maxUsage: number;
  expiresAt: string;
  status: "active" | "expired" | "scheduled";
}

const mockCoupons: Coupon[] = [
  { id: 1, code: "WELCOME20", discount: "20%", type: "percentage", usage: 145, maxUsage: 500, expiresAt: "2026-12-31", status: "active" },
  { id: 2, code: "SAVE10", discount: "$10", type: "fixed", usage: 89, maxUsage: 200, expiresAt: "2026-09-30", status: "active" },
  { id: 3, code: "SUMMER25", discount: "25%", type: "percentage", usage: 234, maxUsage: 300, expiresAt: "2026-08-31", status: "active" },
  { id: 4, code: "FLASH50", discount: "50%", type: "percentage", usage: 300, maxUsage: 300, expiresAt: "2026-07-15", status: "expired" },
  { id: 5, code: "FREESHIP", discount: "$15", type: "fixed", usage: 67, maxUsage: 150, expiresAt: "2026-10-31", status: "active" },
  { id: 6, code: "VIP30", discount: "30%", type: "percentage", usage: 12, maxUsage: 100, expiresAt: "2026-11-30", status: "scheduled" },
];

const statusVariants: Record<string, "success" | "danger" | "warning"> = {
  active: "success",
  expired: "danger",
  scheduled: "warning",
};

export function CouponsPage() {
  const [search, setSearch] = useState("");

  const filtered = mockCoupons.filter((c) => c.code.toLowerCase().includes(search.toLowerCase()));

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Coupons</h1>
          <p className="text-gray-500 mt-1">Manage discount coupons and promotions.</p>
        </div>
        <Button icon={<Gift size={18} />}>Create Coupon</Button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-100">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input type="text" placeholder="Search coupons..." value={search} onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
        <div className="divide-y divide-gray-50">
          {filtered.map((coupon) => (
            <div key={coupon.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
              <div className="flex items-center gap-4">
                <div className="px-3 py-2 bg-blue-50 border border-dashed border-blue-300 rounded-lg">
                  <code className="text-sm font-mono font-bold text-blue-700">{coupon.code}</code>
                </div>
                <div>
                  <p className="font-semibold text-lg text-gray-900">{coupon.discount}</p>
                  <p className="text-xs text-gray-500">Used {coupon.usage}/{coupon.maxUsage} · Expires {coupon.expiresAt}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant={statusVariants[coupon.status]}>{coupon.status}</Badge>
                <button onClick={() => copyCode(coupon.code)} className="p-1.5 rounded-lg hover:bg-gray-100">
                  <Copy size={15} className="text-gray-400" />
                </button>
                <button className="p-1.5 rounded-lg hover:bg-gray-100">
                  <MoreHorizontal size={15} className="text-gray-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// coupon filters

// improvement 9-2

// improvement 12-6

// improvement 15-5
