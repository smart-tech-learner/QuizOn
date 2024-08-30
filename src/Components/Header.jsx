import React from "react";
import logo from "../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const onClickHeader = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-between bg-black px-2">
      <div className="flex" onClick={onClickHeader}>
        <img className="h-20 " src={logo} alt="logo" />
        <div className="grid">
          <p className="text-2xl pt-3 font-bold text-white">ℚ𝕦𝕚𝕫𝕆𝕟</p>
          <p className="font-light -mt-4 text-white">Challenge yourself</p>
        </div>
      </div>
      {location.pathname === "/" && (
        <div className="pt-8">
          <Link
            className="bg-purple-600 py-3 p-2 text-white rounded-lg font-bold mr-5"
            to="/challenge/categories"
          >
            Start Now
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
