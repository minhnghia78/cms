import React from "react";
import { Search, Bell, MessageSquare, User } from "lucide-react";
import logo from "../assets/voz-logo.png";
import Logo from "./Logo";

interface HeaderProps {
  user?: {
    name: string;
    avatar?: string;
  };
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header className="bg-blue-950 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Logo imgUrl={logo} />
        <div className="flex items-center justify-between border-b border-b-black">
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex space-x-2">
              <a
                href="#"
                className="text-blue-950 px-4 py-2 rounded-t-md text-md font-bold bg-gray-200"
              >
                Forums
              </a>
              <a
                href="#"
                className="text-blue-300 px-4 py-2 rounded-t-md text-md font-semibold"
              >
                Latest
              </a>
            </nav>
          </div>

          {/* Search and User Menu */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="block w-64 pl-10 pr-3 py-2 border border-gray-600 rounded-md leading-5 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {user ? (
              <div className="flex items-center space-x-3">
                <button className="p-2 text-gray-300 hover:text-white relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs flex items-center justify-center">
                    3
                  </span>
                </button>
                <button className="p-2 text-gray-300 hover:text-white">
                  <MessageSquare className="h-5 w-5" />
                </button>
                <div className="flex items-center space-x-2 bg-gray-700 rounded-lg px-3 py-2 hover:bg-gray-600 cursor-pointer">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm font-medium">{user.name}</span>
                </div>
              </div>
            ) : (
              <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
                <User className="h-4 w-4" />
                <span>Sign In</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
