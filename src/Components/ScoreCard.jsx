import React from "react";
import score_card from "../assets/score_card.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ScoreCard = () => {
  const state = useSelector((state) => state.quiz);

  return (
    <div className="w-full max-w-2xl mx-auto bg-white mt-20 rounded-lg">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 gap-0">
        <img className="h-full pb-5 pl-2" src={score_card} alt="score_card" />
        <div className="content-center flex justify-center items-center -ml-24">
          <div>
            <p className="text-purple-700 font-bold text-2xl font-mono">
              Hurry!
            </p>
            <p className="text-purple-700 font-bold text-2xl font-mono">
              You scored {state.score} out of {state.noOfQues}
            </p>
            <p>
              <Link to="/challenge/review" className="underline text-blue-600">
                Review quiz
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
