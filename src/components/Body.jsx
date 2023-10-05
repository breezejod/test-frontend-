import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Timer = () => {
  const [startTime, setStartTime] = useState(
    localStorage.getItem("startTime") || Date.now()
  );
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const currentTime = Date.now();
      const elapsedTime = Math.floor((currentTime - startTime) / 1000); // Calculate elapsed time in seconds
      setElapsedTime(elapsedTime);
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [startTime]);

  useEffect(() => {
    localStorage.setItem("startTime", startTime.toString());
  }, [startTime]);

  // Add an event listener to reset the timer on page reload
  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      localStorage.removeItem("startTime");
    });
  }, []);

  return (
    <div className="absolute text-white top-4 right-4">
      <span className="text-purple-300">Time on site: </span>{elapsedTime} seconds
    </div>
  );
};

const Body = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-purple-500">
      <Timer /> {/* Add the Timer component */}
      <h1 className="mb-8 text-4xl font-bold sm:text-6xl lg:text-7xl">
        Welcome to Work<span className="text-purple-200">ify</span>
      </h1>
      <p className="mb-8 text-xl text-purple-900 sm:text-2xl lg:text-3xl">
        Your ultimate platform for productivity and collaboration.
      </p>
      <div className="flex space-x-4">
        <Link to="/Login">
          <button className="px-6 py-3 font-semibold text-white bg-purple-600 rounded-md hover:bg-purple-400">
            Get Started
          </button>
        </Link>
        <button className="px-6 py-3 font-semibold text-white bg-black rounded-md hover:bg-gray-700">
          ------
        </button>
        <Link to="/Documentation">
          <button className="px-6 py-3 font-semibold text-white border rounded-md ">
            Documentation
          </button>
        </Link>
      </div>
      <hr className="w-3/4 border-t border-purple-300 mt-11" />
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
