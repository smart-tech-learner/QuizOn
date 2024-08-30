import React from "react";
import score_card from "../assets/score_card.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ScoreCard = () => {
  const state = useSelector((state) => state.quiz);

  return (
    <div className="w-full max-w-xl mx-auto bg-white mt-10 rounded-lg mb-10">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 gap-0 p-2">
        <div className="content-center flex justify-center items-center">
          <div className="grid">
            <p className="text-purple-700 font-bold text-2xl font-mono text-center">
              Hurry!
            </p>
            <p className="text-purple-700 font-bold text-xl font-mono text-center">
              You scored {state.score} out of {state.noOfQues}
            </p>
            <p className="text-center font-bold">
              <Link to="/challenge/review" className="underline text-blue-600">
                Review submission
              </Link>
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img className="h-full pb-10" src={score_card} alt="score_card" />
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
