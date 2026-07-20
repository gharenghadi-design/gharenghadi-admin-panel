import { TrendingUp, TrendingDown, type LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";

interface StatsCardProps {
  label: string;
  value: string;
  growth?: number;
  icon: LucideIcon;
  color: string;
}

export function StatsCard({ label, value, growth, icon: Icon, color }: StatsCardProps) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between">
        <div className={cn("p-2.5 rounded-lg", color)}>
          <Icon className="text-white" size={20} />
        </div>
        {growth !== undefined && (
          <div className={cn("flex items-center gap-1 text-sm font-medium", growth >= 0 ? "text-green-600" : "text-red-600")}>
            {growth >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
            {Math.abs(growth)}%
          </div>
        )}
      </div>
      <p className="text-2xl font-bold text-gray-900 mt-4">{value}</p>
      <p className="text-sm text-gray-500 mt-1">{label}</p>
    </div>
  );
}
