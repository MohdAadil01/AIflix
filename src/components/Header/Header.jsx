import React from "react";
import { LOGO } from "../../assets/image";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/userSlice.js";
import { useNavigate } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };
  console.log(user);
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-black">
      <Link to={"/"} className="logo">
        <img src={LOGO} alt="Netflix Logo" className="w-24" />
      </Link>
      {user ? (
        <div>
          <div>
            <button
              onClick={logoutHandler}
              className="border border-transparent bg-red-600 px-4 py-2 rounded-md text-white text-sm font-semibold hover:bg-red-700"
            >
              Logout
            </button>
          </div>
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
  );
}

export default Header;
