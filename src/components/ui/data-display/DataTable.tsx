import { useState, useMemo } from "react";
import { ChevronUp, ChevronDown, ChevronsUpDown, Search } from "lucide-react";
import { cn } from "../../../lib/utils";

interface Column<T> {
  key: string;
  label: string;
  sortable?: boolean;
  render?: (item: T) => React.ReactNode;
  className?: string;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  searchable?: boolean;
  searchKeys?: string[];
  pageSize?: number;
  onRowClick?: (item: T) => void;
}

export function DataTable<T extends Record<string, any>>({
  columns,
  data,
  searchable,
  searchKeys,
  pageSize = 10,
  onRowClick,
}: DataTableProps<T>) {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [page, setPage] = useState(0);

  const filtered = useMemo(() => {
    if (!search || !searchKeys) return data;
    return data.filter((item) =>
      searchKeys.some((key) =>
        String(item[key]).toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [data, search, searchKeys]);

  const sorted = useMemo(() => {
    if (!sortKey) return filtered;
    return [...filtered].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      const cmp = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
      return sortDir === "asc" ? cmp : -cmp;
    });
  }, [filtered, sortKey, sortDir]);

  const totalPages = Math.ceil(sorted.length / pageSize);
  const pageData = sorted.slice(page * pageSize, (page + 1) * pageSize);

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      {searchable && (
        <div className="p-4 border-b border-gray-100">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(0); }}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 border-b border-gray-100">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={cn("px-4 py-3 font-medium", col.sortable && "cursor-pointer select-none hover:text-gray-700", col.className)}
                  onClick={() => col.sortable && handleSort(col.key)}
                >
                  <div className="flex items-center gap-1">
                    {col.label}
                    {col.sortable && (
                      sortKey === col.key ? (
                        sortDir === "asc" ? <ChevronUp size={14} /> : <ChevronDown size={14} />
                      ) : (
                        <ChevronsUpDown size={14} className="opacity-40" />
                      )
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pageData.map((item, i) => (
              <tr
                key={i}
                className={cn("border-b border-gray-50", onRowClick && "cursor-pointer hover:bg-gray-50")}
                onClick={() => onRowClick?.(item)}
              >
                {columns.map((col) => (
                  <td key={col.key} className={cn("px-4 py-3", col.className)}>
                    {col.render ? col.render(item) : item[col.key]}
                  </td>
                ))}
              </tr>
            ))}
            {pageData.length === 0 && (
              <tr>
                <td colSpan={columns.length} className="px-4 py-8 text-center text-gray-400">
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {totalPages > 1 && (
        <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
          <span className="text-sm text-gray-500">
            Page {page + 1} of {totalPages}
          </span>
          <div className="flex gap-1">
            <button
              disabled={page === 0}
              onClick={() => setPage((p) => p - 1)}
              className="px-3 py-1 text-sm border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-40"
            >
              Previous
            </button>
            <button
              disabled={page >= totalPages - 1}
              onClick={() => setPage((p) => p + 1)}
              className="px-3 py-1 text-sm border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
