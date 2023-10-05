import React from "react";
import { Link } from "react-router-dom";
const Body = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-purple-500">
      <h1 className="mb-8 text-4xl font-bold sm:text-6xl lg:text-7xl">
        Welcome to Workify
      </h1>
      <p className="mb-8 text-xl text-purple-900 sm:text-2xl lg:text-3xl">
        Your ultimate platform for productivity and collaboration.
      </p>
      <div className="flex space-x-4">
        <Link to="/Login">
          <button className="px-6 py-3 font-semibold text-white bg-purple-400 rounded-md hover:bg-purple-600">
            Get Started
          </button>
        </Link>
        <button className="px-6 py-3 font-semibold text-white bg-black rounded-md hover:bg-gray-700">
          Learn More
        </button>
        <Link to="/Documentation">
          <button className="px-6 py-3 font-semibold text-white border rounded-md ">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};
const LandingPage = () => {
  return (
    <div className="bg-black">
      <Body />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
