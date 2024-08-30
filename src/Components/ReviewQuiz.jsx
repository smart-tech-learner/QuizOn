import React from "react";
import { useDispatch, useSelector } from "react-redux";
import right from "../assets/right.png";
import wrong from "../assets/wrong.png";
import { reset } from "../Redux/QuizSlice";
import { useNavigate } from "react-router-dom";

const ReviewQuiz = () => {
  const state = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeReviewQuiz = () => {
    dispatch(reset());
    navigate("/");
    return;
  };

  return (
    <div className="text-black w-full max-w-4xl mx-auto bg-white p-3 mt-10 rounded-lg mb-20">
      <div className="flex justify-between bg-slate-300 p-1">
        <div>
          <div className="flex">
            <p className="font-bold">Category</p>
            &nbsp;
            <p>- {state.category}</p>
          </div>

          {state.category === "Custom" && (
            <div className="flex">
              <p className="font-bold">Topic</p>
              &nbsp;
              <p>- {state.customPrompt}</p>
            </div>
          )}

          <div className="flex">
            <p className="font-bold">Complexity</p>
            &nbsp;
            <p>- {state.complexity}</p>
          </div>

          <div className="flex">
            <p className="font-bold">Score</p>
            &nbsp;
            <p>
              - {state.score}/{state.noOfQues}
            </p>
          </div>
        </div>
        <div>
          <button
            className="px-2 py-2 bg-red-500 font-bold text-white rounded-lg"
            onClick={closeReviewQuiz}
          >
            Close
          </button>
        </div>
      </div>
      <hr></hr>
      <br></br>
      {state.quiz.map((q) => {
        return (
          <div className="pb-5" key={q.id}>
            <p className="font-bold">
              {q.id}. {q.ques}
            </p>

            <div className="px-3">
              <ul>
                {q.opts.map((op, index) => {
                  return (
                    <li
                      key={index}
                      style={
                        op === q.selectedAnswer && q.selectedAnswer === q.ans
                          ? { color: "green", fontWeight: "bold" }
                          : op === q.selectedAnswer &&
                            q.selectedAnswer !== q.ans
                          ? { color: "red", fontWeight: "bold" }
                          : { color: "", fontWeight: "" }
                      }
                    >
                      <div className="flex">
                        - {op} &nbsp;
                        {op === q.selectedAnswer &&
                        q.selectedAnswer === q.ans ? (
                          <img className="h-6" src={right} alt="right" />
                        ) : op === q.selectedAnswer &&
                          q.selectedAnswer !== q.ans ? (
                          <img className="h-6" src={wrong} alt="wrong" />
                        ) : (
                          ""
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {q.selectedAnswer !== q.ans ? (
              <div>
                <br></br>
                <p className="bg-green-300 p-2 font-bold">Answer: {q.ans}</p>
                <br></br>
              </div>
            ) : (
              <br></br>
            )}
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewQuiz;
