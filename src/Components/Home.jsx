import React from "react";
import home1 from "../assets/home1.png";
import home2 from "../assets/home2.png";

const Home = () => {
  return (
    <div className="pb-20">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 bg-white">
        <div className="flex justify-between items-center p-10">
          <img className="h-96" src={home1} alt="home" />
        </div>
        <div className="flex justify-between items-center p-10">
          <p className="text-balance text-2xl font-mono">
            Welcome to ℚ𝕦𝕚𝕫𝕆𝕟 – your go-to platform for engaging and interactive
            quizzes! Whether you're looking to test your knowledge, challenge
            friends, or simply have fun, ℚ𝕦𝕚𝕫𝕆𝕟 offers a wide variety of quizzes
            across multiple categories.
          </p>
        </div>
      </div>
      <hr></hr>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 bg-white pt-5">
        <div className="flex justify-between items-center px-10">
          <p className="text-balance text-2xl font-mono">
            Dive into a world of learning and entertainment, track your
            progress, and unlock new levels of trivia mastery. Start quizzing
            today and discover how much fun learning can be with ℚ𝕦𝕚𝕫𝕆𝕟!
          </p>
        </div>
        <div className="flex justify-between items-center">
          <img className="h-96 pt-10" src={home2} alt="home" />
        </div>
      </div>
    </div>
  );
};

export default Home;
