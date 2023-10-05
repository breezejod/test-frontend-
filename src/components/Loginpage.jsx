import React from "react";

const Loginpage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="p-8 bg-purple-700 rounded-lg w-80">
        <form action="/api/v1/loginPage">
          <h1 className="mb-4 text-2xl font-semibold text-black">Login</h1>

          <input
            type="text"
            id="name"
            name="username"
            placeholder="Name"
            className="w-full px-4 py-2 mb-4 bg-gray-300 rounded-lg"
          />

          <input
            type="email"
            id="email"
            name="email"   
            placeholder="Email"
            className="w-full px-4 py-2 mb-4 bg-gray-300 rounded-lg"
          />

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 mb-4 bg-gray-300 rounded-lg"
          />

          <button
            type="submit"
            className="px-6 py-2 text-black bg-purple-200 rounded-lg hover:text-black hover:bg-purple-200"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;
