import { cn } from "../../../lib/utils";

interface ToggleProps {
  label?: string;
  description?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function Toggle({ label, description, checked, onChange }: ToggleProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        {label && <p className="text-sm font-medium text-gray-900">{label}</p>}
        {description && <p className="text-xs text-gray-500">{description}</p>}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={cn(
          "relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
          checked ? "bg-blue-600" : "bg-gray-200"
        )}
      >
        <span className={cn("pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow transform ring-0 transition-transform", checked ? "translate-x-4" : "translate-x-0")} />
      </button>
    </div>
  );
}
