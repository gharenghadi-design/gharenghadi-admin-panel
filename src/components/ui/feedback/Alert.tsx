import { AlertCircle, Info, AlertTriangle, CheckCircle } from "lucide-react";
import { cn } from "../../../lib/utils";

interface AlertProps {
 children: React.ReactNode;
 variant?: "info" | "success" | "warning" | "error";
 title?: string;
 className?: string;
}

const variants = {
 info: "bg-blue-50 border-blue-200 text-blue-800",
 success: "bg-green-50 border-green-200 text-green-800",
 warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
 error: "bg-red-50 border-red-200 text-red-800",
};

const icons = {
 info: Info,
 success: CheckCircle,
 warning: AlertTriangle,
 error: AlertCircle,
};

export function Alert({ children, variant = "info", title, className }: AlertProps) {
 const Icon = icons[variant];
 return (
  <div className={cn("flex items-start gap-3 p-4 rounded-lg border", variants[variant], className)}>
   <Icon size={18} className="mt-0.5 shrink-0" />
   <div>
    {title && <p className="font-medium text-sm mb-0.5">{title}</p>}
    <div className="text-sm opacity-90">{children}</div>
   </div>
  </div>
 );
}

// improvement 15-1

// improvement 16-5

// improvement 19-5

// improvement 22-3
