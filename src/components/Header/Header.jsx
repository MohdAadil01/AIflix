import React from "react";
import { LANG, LOGO } from "../../assets/const.js";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/userSlice/index.js";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; // Import the search icon
import { toggleGPT } from "../../store/GPT/index.js";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const showGptPage = useSelector((state) => state.toggleGPT.showGptPage);

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  const isAuthPage = window.location.pathname === "/auth";

  return (
    <div
      className={`flex justify-between items-center bg-zinc-900 px-8 py-4 ${
        isAuthPage ? "absolute left-0 right-0 bg-transparent" : "bg-zinc-900"
      }`}
    >
      <Link to={"/"} className="logo">
        <img src={LOGO} alt="Netflix Logo" className="w-24" />
      </Link>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <select className="bg-zinc-800 text-white py-2 pl-4 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 appearance-none">
            {LANG.map((lang) => (
              <option
                key={lang.language}
                value={lang.language}
                className="text-zinc-400"
              >
                {lang.language}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="h-4 w-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
        {user ? (
          <div className="flex space-x-4">
            <button
              className="flex items-center border border-transparent bg-purple-600 px-4 py-2 rounded-md text-white text-sm font-semibold hover:bg-purple-700"
              onClick={() => dispatch(toggleGPT())}
            >
              {!showGptPage ? (
                <>
                  <FaSearch className="mr-2" /> Gpt Search
                </>
              ) : (
                "Browse"
              )}
            </button>
            <button
              onClick={logoutHandler}
              className="border border-transparent bg-red-600 px-4 py-2 rounded-md text-white text-sm font-semibold hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <Link
              to="/auth"
              className="border border-transparent bg-red-600 px-4 py-2 rounded-md text-white text-sm font-semibold hover:bg-red-700"
            >
              Sign In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
