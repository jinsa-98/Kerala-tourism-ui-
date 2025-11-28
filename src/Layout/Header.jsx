import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

        {/* <img
          src="/logo.png"
          className="h-10 cursor-pointer"
          onClick={() => navigate("/")}
        /> */}

        <nav className="hidden md:flex space-x-6 font-medium">
          <button onClick={() => navigate("/places")} className="hover:text-green-700">Places</button>
          <button onClick={() => navigate("/things-to-do")} className="hover:text-green-700">Things to Do</button>
          <button onClick={() => navigate("/explore")} className="hover:text-green-700">Explore</button>
        </nav>

      </div>
    </header>
  );
}

export default Header;
