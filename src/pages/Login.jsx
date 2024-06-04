import React, { useState } from "react";
import { BACKGROUND_IMAGE } from "../assets/image";
import { Link } from "react-router-dom";

function Login() {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const submitFormHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className={`flex items-center justify-center min-h-screen bg-cover bg-center`}
      style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}
    >
      <div className="bg-black bg-opacity-75 p-8 rounded-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-white mb-6">
          {isLoginPage ? "Sign In" : "Sign Up"}
        </h1>
        <form className="space-y-4" onSubmit={submitFormHandler}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-500 text-white"
          />
          {!isLoginPage && (
            <input
              type="text"
              placeholder="Email"
              className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-500 text-white"
            />
          )}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-500 text-white"
          />
          <button
            type="submit"
            className="w-full p-3 rounded-md bg-red-600 text-white font-bold hover:bg-red-700"
          >
            Sign In
          </button>
          {isLoginPage && (
            <>
              {" "}
              <p className="text-center text-gray-400">OR</p>
              <button
                type="button"
                className="w-full p-3 rounded-md bg-gray-600 text-white font-bold hover:bg-gray-700"
              >
                Use a sign-in code
              </button>
            </>
          )}
        </form>
        <p className="text-gray-400 mt-4">
          {isLoginPage ? "New to Netflix?" : "Already have an account?"}{" "}
          <button
            className="text-white hover:underline"
            onClick={() => setIsLoginPage((prev) => !prev)}
          >
            {!isLoginPage ? "Sign in now" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
