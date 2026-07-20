interface Notification {
  id: number;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
  read: boolean;
  timestamp: string;
}

const mockNotifications: Notification[] = [
  { id: 1, title: "New Order", message: "Order #ORD-012 has been placed", type: "info", read: false, timestamp: "2026-07-20T10:30:00" },
  { id: 2, title: "Payment Received", message: "$129.99 payment for order #ORD-001", type: "success", read: false, timestamp: "2026-07-20T09:15:00" },
  { id: 3, title: "Low Stock Alert", message: "Wireless Headphones is running low", type: "warning", read: false, timestamp: "2026-07-20T08:00:00" },
  { id: 4, title: "Review Flagged", message: "A review was flagged for moderation", type: "error", read: true, timestamp: "2026-07-19T22:00:00" },
  { id: 5, title: "New User Registered", message: "James Wilson created an account", type: "info", read: true, timestamp: "2026-07-19T18:45:00" },
];

let listeners: Array<() => void> = [];
let notifications = [...mockNotifications];

export const notificationService = {
  getAll: () => notifications,

  getUnread: () => notifications.filter((n) => !n.read),

  markAsRead: (id: number) => {
    notifications = notifications.map((n) => (n.id === id ? { ...n, read: true } : n));
    listeners.forEach((l) => l());
  },

  markAllAsRead: () => {
    notifications = notifications.map((n) => ({ ...n, read: true }));
    listeners.forEach((l) => l());
  },

  subscribe: (listener: () => void) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
};
