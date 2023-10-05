import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const buttonStyle = {
    padding: "50px",
    border: "2px solid #808080",
    backgroundColor: "red",
    borderRadius: "10px",
    transition: "background-color 0.3s, color 0.3s",
    color: "white",
  };

  const buttonHoverStyle = {
    backgroundColor: "white",
    color: "black",
  };

  return (
    <div className="bg-gray-100 h-[90vh]">
      <div className=" bg-gray-200 h-[10vh]">
        <p className="flex items-start justify-start pt-4 text-2xl font-bold pl-7"><span className="text-slate-700">Work</span>ify</p>
      </div>
      <div className="flex items-center justify-center mt-60">
        <Link to="/Loginpage">
          {" "}
          {/* Replace '/other-page' with the actual URL you want to link to */}
          <button style={{ ...buttonStyle, ...buttonHoverStyle }}>
            <span className="text-6xl">Login</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
