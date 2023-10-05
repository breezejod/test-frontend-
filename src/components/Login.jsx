import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const buttonStyle = {
    padding: "30px",
    border: "2px solid #a855f7",
    backgroundColor: "purple",
    borderRadius: "10px",
    transition: "background-color 0.3s, color 0.3s",
    color: "white",
  };

  const buttonHoverStyle = {
    backgroundColor: "black",
    color: "white",
  };

  return (
    <div className="h-screen text-white bg-black"> {/* Set background to black and text to white */}
      <div className="bg-black h-[10vh]"> {/* Set header background to black */}
        <p className="flex items-start justify-start pt-4 text-2xl font-bold pl-7">
         Work <span className="text-purple-400">ify</span>
        </p>
      </div>
      <div className="flex items-center justify-center mt-40">
        <Link to="/Loginpage">
          <button style={{ ...buttonStyle, ...buttonHoverStyle }}>
            <span className="text-5xl">Enter your space</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
