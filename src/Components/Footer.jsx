import React from "react";
import gemini_logo from "../assets/Google_Gemini_logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black pt-1 text-white w-screen pb-6">
      <div className="flex justify-center items-center">
        <div>
          <div className="flex justify-center">
            <p className="text-center">ℚ𝕦𝕚𝕫𝕆𝕟 is powered by </p>&nbsp;
            <a
              className="-pt-1"
              href="https://gemini.google.com/app"
              target="_blank"
            >
              <img className="h-5" src={gemini_logo} alt="gemini_logo" />
            </a>
          </div>

          <p className="text-center">
            May display inaccurate info, including about people, so double-check
            its responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
