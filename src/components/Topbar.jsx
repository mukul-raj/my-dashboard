import {
  Search,
  Star,
  SquareDashed,
  ChevronsRight,
  Sun,
  History,
  Bell,
  LayoutGrid
} from "lucide-react";

export default function Topbar() {
  return (
    <div className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="flex items-center justify-between px-4 md:px-6 h-14">
        <div className="flex items-center gap-3 text-sm">
          <SquareDashed className="h-4 w-4 text-gray-500" />
          <Star className="h-4 w-4 text-gray-400" />
          <span className="text-gray-400">Dashboards</span>
          <ChevronsRight className="h-4 w-4 text-gray-300" />
          <span className="font-medium text-gray-900">Default</span>
        </div>

        <div className="hidden md:block flex-1 mx-6" />

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 rounded-xl bg-gray-100 px-3 py-1.5 text-sm text-gray-500 border border-gray-200">
            <Search className="h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-40 md:w-56 bg-transparent placeholder:text-gray-400 focus:outline-none"
            />
            <kbd className="hidden md:inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-1.5 py-0.5 text-[11px] font-medium text-gray-500 shadow-sm">
              <span className="font-sans">{navigator.platform.includes("Mac") ? "⌘" : "Ctrl"}</span>K
            </kbd>
          </div>

          <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-500" aria-label="Theme">
            <Sun className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-500" aria-label="History">
            <History className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 relative" aria-label="Notifications">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-rose-500" />
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-500" aria-label="Layouts">
            <LayoutGrid className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
