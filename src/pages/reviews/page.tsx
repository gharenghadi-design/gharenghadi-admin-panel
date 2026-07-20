import { Star, ThumbsUp, Flag, MoreHorizontal } from "lucide-react";
import { Badge, Avatar } from "../../components/ui/elements";

interface Review {
  id: number;
  product: string;
  user: string;
  rating: number;
  content: string;
  date: string;
  likes: number;
  status: "approved" | "pending" | "rejected";
}

const mockReviews: Review[] = [
  { id: 1, product: "Wireless Headphones", user: "John Doe", rating: 5, content: "Amazing sound quality! Very comfortable for long sessions.", date: "2026-07-15", likes: 12, status: "approved" },
  { id: 2, product: "USB-C Hub", user: "Jane Smith", rating: 4, content: "Works great with my laptop. A bit bulky but functional.", date: "2026-07-14", likes: 8, status: "approved" },
  { id: 3, product: "Mechanical Keyboard", user: "Mike Johnson", rating: 5, content: "Best keyboard I've ever used. The switches are incredible.", date: "2026-07-13", likes: 23, status: "pending" },
  { id: 4, product: "Monitor Stand", user: "Sarah Wilson", rating: 3, content: "Decent stand but could be more stable.", date: "2026-07-12", likes: 3, status: "approved" },
  { id: 5, product: "Webcam HD 4K", user: "Alex Brown", rating: 2, content: "Picture quality is not as advertised. Disappointed.", date: "2026-07-11", likes: 7, status: "pending" },
  { id: 6, product: "Desk Lamp LED", user: "Emily Davis", rating: 4, content: "Great lighting for late night work sessions.", date: "2026-07-10", likes: 5, status: "approved" },
  { id: 7, product: "Wireless Headphones", user: "Chris Lee", rating: 1, content: "Stopped working after a week. Not recommended.", date: "2026-07-09", likes: 15, status: "rejected" },
];

const statusVariants: Record<string, "success" | "warning" | "danger"> = {
  approved: "success",
  pending: "warning",
  rejected: "danger",
};

export function ReviewsPage() {
  const filtered = mockReviews;

  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold text-gray-900">Reviews</h1><p className="text-gray-500 mt-1">Manage product reviews and ratings.</p></div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">Total Reviews</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{mockReviews.length}</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">Average Rating</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{((mockReviews.reduce((s, r) => s + r.rating, 0)) / mockReviews.length).toFixed(1)}</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">Pending Review</p>
          <p className="text-2xl font-bold text-amber-600 mt-1">{mockReviews.filter((r) => r.status === "pending").length}</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">Total Likes</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{mockReviews.reduce((s, r) => s + r.likes, 0)}</p>
        </div>
      </div>

      <div className="space-y-3">
        {filtered.map((review) => (
          <div key={review.id} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <Avatar name={review.user} size="md" />
                <div>
                  <p className="font-semibold text-gray-900">{review.user}</p>
                  <p className="text-xs text-gray-500">on <span className="font-medium text-gray-700">{review.product}</span> · {review.date}</p>
                  <div className="flex items-center gap-0.5 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={14} className={star <= review.rating ? "text-amber-400 fill-amber-400" : "text-gray-200"} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={statusVariants[review.status]}>{review.status}</Badge>
                <button className="p-1.5 rounded-lg hover:bg-gray-100"><MoreHorizontal size={15} className="text-gray-400" /></button>
              </div>
            </div>
            <p className="text-sm text-gray-700 mt-3 ml-12">{review.content}</p>
            <div className="flex items-center gap-4 mt-3 ml-12">
              <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-blue-600">
                <ThumbsUp size={13} /> {review.likes}
              </button>
              <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-red-600">
                <Flag size={13} /> Report
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
