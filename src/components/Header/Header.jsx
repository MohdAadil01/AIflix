import React from "react";
import { LOGO } from "../../assets/image";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-black">
      <div className="logo">
        <img src={LOGO} alt="Netflix Logo" className="w-24" />
      </div>
      <div>
        <Link
          to="/login"
          className="border border-transparent bg-red-600 px-4 py-2 rounded-md text-white text-sm font-semibold hover:bg-red-700"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}

export default Header;
