import React, { useContext, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { userDataContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AvatarCard from "./Card/AvatarCard";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user,setUser } = useContext(userDataContext);
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token"); 
  
      if (!token) {
        alert("You are not logged in!");
        return;
      }
  
      const response = await axios.get("http://localhost:3000/ByeByeSurvivour", {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      if (response.status === 200) {
        localStorage.removeItem("token"); 
        localStorage.clear()
        setUser(null)
        navigate("/auth/sign-up");
      }
    } catch (error) {
      console.log("Logout Error:", error);
      alert("Cannot logout at the moment");
    }
  };
  
  
  useEffect(() => {
    console.log("user data", user);
  }, [user]);
  console.log("User in Header:", user);
  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#108dc7] to-[#ef8e38] text-white shadow-lg z-50">
    <AvatarCard user = {user}/>
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold">Guardian Lens!</h1>

        {/* Hamburger Icon for Small Screens */}

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <nav
          className={`md:flex space-x-6 text-lg ${
            isOpen ? "block" : "hidden"
          } absolute md:relative top-full left-0 w-full md:w-auto bg-gray-900 md:bg-transparent text-center md:text-left`}
        >
          <ul className="md:flex md:space-x-6">
            <li className="p-3  cursor-pointer transition duration-300">
              Home
            </li>
            <li className="p-3  cursor-pointer transition duration-300">
              Protection Panel
            </li>
            <li className="p-3 cursor-pointer transition duration-300" onClick={handleLogout}>
              Logout
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
