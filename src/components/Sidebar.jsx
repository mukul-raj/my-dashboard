import {
  BookOpen,
  Briefcase,
  Building,
  ChevronDown,
  ChevronRight,
  File,
  FileText,
  FolderKanban,
  LayoutDashboard,
  Rss,
  Settings,
  Share2,
  ShoppingCart,
  User,
  Users,
} from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [isUserOpen, setIsUserOpen] = useState(true);

  return (
    <div className="w-64 bg-white border-r flex flex-col justify-between">
      <div className="p-4">
        <h1 className="text-xl font-bold mb-6">ByeWind</h1>

        <div className="mb-6">
          <p className="text-xs font-semibold text-gray-500 mb-2">Favorites</p>
          <ul className="space-y-1 text-sm">
            <li className="cursor-pointer hover:text-black">Overview</li>
            <li className="cursor-pointer hover:text-black">Projects</li>
          </ul>
        </div>

        <div className="mb-6">
          <p className="text-xs font-semibold text-gray-500 mb-2">Dashboards</p>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center p-2 rounded-lg bg-gray-100 cursor-pointer">
              <LayoutDashboard className="w-4 h-4 mr-2" /> Default
            </li>
            <li className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <ShoppingCart className="w-4 h-4 mr-2" /> eCommerce
            </li>
            <li className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <FolderKanban className="w-4 h-4 mr-2" /> Projects
            </li>
            <li className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <BookOpen className="w-4 h-4 mr-2" /> Online Courses
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <p className="text-xs font-semibold text-gray-500 mb-2">Pages</p>
          <ul className="space-y-1 text-sm">

            <li>
              <button
                onClick={() => setIsUserOpen(!isUserOpen)}
                className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-gray-100"
              >
                <span className="flex items-center">
                  <User className="w-4 h-4 mr-2" /> User Profile
                </span>
                {isUserOpen ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>

              {isUserOpen && (
                <ul className="ml-6 mt-2 space-y-1 text-gray-600">
                  <li className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <FileText className="w-4 h-4 mr-2" /> Overview
                  </li>
                  <li className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <Briefcase className="w-4 h-4 mr-2" /> Projects
                  </li>
                  <li className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <File className="w-4 h-4 mr-2" /> Campaigns
                  </li>
                  <li className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <File className="w-4 h-4 mr-2" /> Documents
                  </li>
                  <li className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <Users className="w-4 h-4 mr-2" /> Followers
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <ul className="space-y-1 text-sm">
            <li className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <Settings className="w-4 h-4 mr-2" /> Account
            </li>
            <li className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <Building className="w-4 h-4 mr-2" /> Corporate
            </li>
            <li className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <Rss className="w-4 h-4 mr-2" /> Blog
            </li>
            <li className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <Share2 className="w-4 h-4 mr-2" /> Social
            </li>
          </ul>
        </div>
      </div>

      <div className="p-4 border-t">
        <p className="text-sm font-semibold text-gray-500">snowui</p>
      </div>
    </div>
  );
}
