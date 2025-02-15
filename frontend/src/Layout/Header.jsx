import React, { useContext, useState } from "react";
import { Menu, X } from "lucide-react"; // Hamburger & Close Icons
import { UserCircle } from "lucide-react"; // User Avatar Icon
import { userDataContext } from "../Context/UserContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(userDataContext);

  console.log("User in Header:", JSON.stringify(user)); // Debugging
  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#108dc7] to-[#ef8e38] text-white shadow-lg z-50">
      {/* Top Bar with User Info */}
      <div className="bg-red-200 flex justify-end items-center p-2">
        <h1 className="mr-2 font-medium text-gray-800">
          {user?.firstName ? `${user.firstName} ${user.lastName}` : "Guest"}
        </h1>
        <div className="bg-red-500 text-white rounded-full px-3 py-1">
          {user?.firstName ? `${user.firstName[0]}${user.lastName[0]}` : "G"}
        </div>
      </div>

      {/* Main Header Section */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold">🚀 Logo</h1>

        {/* Hamburger Icon for Small Screens */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className={`md:flex space-x-6 text-lg ${isOpen ? "block" : "hidden"} absolute md:relative top-full left-0 w-full md:w-auto bg-gray-900 md:bg-transparent text-center md:text-left`}>
          <ul className="md:flex md:space-x-6">
            <li className="p-3 hover:text-blue-400 cursor-pointer transition duration-300">Home</li>
            <li className="p-3 hover:text-blue-400 cursor-pointer transition duration-300">Protection Panel</li>
            <li className="p-3 hover:text-red-400 cursor-pointer transition duration-300">Logout</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
