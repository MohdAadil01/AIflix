import React from "react";
import { LOGO } from "../../assets/image";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-black">
      <Link to={"/"} className="logo">
        <img src={LOGO} alt="Netflix Logo" className="w-24" />
      </Link>
      <div>
        <Link
          to="/auth"
          className="border border-transparent bg-red-600 px-4 py-2 rounded-md text-white text-sm font-semibold hover:bg-red-700"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}

export default Header;
