import React from "react";

const Loginpage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="p-8 bg-gray-100 rounded-lg w-80">
        <form action="/api/v1/loginPage" method="POST">
          <h1 className="mb-4 text-2xl font-semibold text-blue-400">Login</h1>

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
            className="px-6 py-2 text-white bg-blue-400 rounded-lg hover:bg-blue-600"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;
