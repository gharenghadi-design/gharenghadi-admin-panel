import { useState } from "react";
import { Search, Plus, MoreHorizontal } from "lucide-react";
import { cn, formatDate } from "../../lib/utils";
import type { User } from "../../types";

const mockUsers: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "admin", status: "active", joinedAt: "2025-01-15" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "editor", status: "active", joinedAt: "2025-02-20" },
  { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "viewer", status: "inactive", joinedAt: "2025-03-10" },
  { id: 4, name: "Sarah Wilson", email: "sarah@example.com", role: "editor", status: "active", joinedAt: "2025-04-05" },
  { id: 5, name: "Alex Brown", email: "alex@example.com", role: "viewer", status: "active", joinedAt: "2025-05-12" },
  { id: 6, name: "Emily Davis", email: "emily@example.com", role: "admin", status: "active", joinedAt: "2025-06-01" },
  { id: 7, name: "Chris Lee", email: "chris@example.com", role: "viewer", status: "inactive", joinedAt: "2025-06-15" },
  { id: 8, name: "Lisa Anderson", email: "lisa@example.com", role: "editor", status: "active", joinedAt: "2025-07-20" },
];

const roleColors: Record<string, string> = {
  admin: "bg-purple-100 text-purple-700",
  editor: "bg-blue-100 text-blue-700",
  viewer: "bg-gray-100 text-gray-700",
};

export function UsersPage() {
  const [search, setSearch] = useState("");

  const filtered = mockUsers.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Users</h1>
          <p className="text-gray-500 mt-1">Manage your team members.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus size={18} />
          Add User
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-100">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b border-gray-100">
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Email</th>
                <th className="px-4 py-3 font-medium">Role</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Joined</th>
                <th className="px-4 py-3 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((user) => (
                <tr key={user.id} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">{user.name}</td>
                  <td className="px-4 py-3 text-gray-700">{user.email}</td>
                  <td className="px-4 py-3">
                    <span className={cn("px-2.5 py-1 rounded-full text-xs font-medium capitalize", roleColors[user.role])}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={cn(
                      "inline-flex items-center gap-1.5",
                      user.status === "active" ? "text-green-600" : "text-gray-400"
                    )}>
                      <span className={cn("w-2 h-2 rounded-full", user.status === "active" ? "bg-green-500" : "bg-gray-300")} />
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-700">{formatDate(user.joinedAt)}</td>
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

// cycle 0 update - 2026-07-20 21:10:29
