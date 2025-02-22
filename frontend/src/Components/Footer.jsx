import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Agar user page ke end tak scroll kare to footer dikhega
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      className={`fixed bottom-0 right-0 w-full mt-7 bg-gradient-to-r from-gray-900 to-gray-700 text-white py-4 transition-transform duration-500 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left Side - Text */}
        <h1 className="text-lg font-semibold">Guardian Lens - All Rights Reserved © 2025</h1>

        {/* Right Side - Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white transition">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="hover:text-white transition">
            <FaTwitter size={20} />
          </a>
          <a href="https://github.com/Maryam593/GuardianLens.git" target="_blank" className="hover:text-white transition">
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
