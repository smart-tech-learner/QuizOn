import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  reset,
  setCategory,
  setComplexity,
  setNoOfQues,
} from "../Redux/QuizSlice";

const UserOptions = () => {
  const navigate = useNavigate();
  const state = useSelector((state) => state.quiz);
  const dispatch = useDispatch();

  const onEnterCustomPrompt = (event) => {
    let payload = "";
    if (state.category === "Custom") {
      payload = { category: state.category, prompt: event.target.value };
    } else {
      payload = { category: state.category, prompt: "" };
    }

    dispatch(setCategory(payload));
  };

  const onSelectQuestionsNumber = (event) => {
    dispatch(setNoOfQues(event.target.value));
  };

  const onSelectLevel = (event) => {
    dispatch(setComplexity(event.target.value));
  };

  const startQuiz = () => {
    if (state.category === "Custom" && state.customPrompt === "") {
      alert("Please enter any topic for the quiz!");
      return;
    }

    if (state.noOfQues === "") {
      alert("Please choose no of questions!");
      return;
    }

    if (state.complexity === "") {
      alert("Please choose complexity!");
      return;
    }

    navigate("/challenge/quiz");
  };

  const onCancel = () => {
    dispatch(reset());
    navigate("/");
    return;
  };

  return (
    <div className="p-10">
      <p className="text-2xl font-bold text-white pt-10">
        Just a couple of questions before we prepare your Quiz...
      </p>
      <div className="p-10 bg-slate-300 mt-10 rounded-lg">
        {state.category === "Custom" && (
          <textarea
            className="px-2 py-2 rounded-lg mb-3"
            rows="3"
            cols="60"
            onChange={() => onEnterCustomPrompt(event)}
            placeholder="type topics that you might want to challenge... "
          />
        )}
        <p className="font-bold">
          How many questions do you want to be challenged?
        </p>
        <input
          type="radio"
          id="10"
          name="total"
          value="10"
          onChange={() => onSelectQuestionsNumber(event)}
        />
        <label htmlFor="10">10</label>
        &nbsp;&nbsp;&nbsp;
        <input
          type="radio"
          id="20"
          name="total"
          value="20"
          onChange={() => onSelectQuestionsNumber(event)}
        />
        <label htmlFor="20">20</label>
        &nbsp;&nbsp;&nbsp;
        <input
          type="radio"
          id="30"
          name="total"
          value="30"
          onChange={() => onSelectQuestionsNumber(event)}
        />
        <label htmlFor="30">30</label>
        <br></br>
        <br></br>
        <p className="font-bold">What level do you want to be challenged?</p>
        <input
          type="radio"
          id="beginner"
          name="level"
          value="beginner"
          onChange={() => onSelectLevel(event)}
        />
        <label htmlFor="beginner">Beginner</label>
        &nbsp;&nbsp;&nbsp;
        <input
          type="radio"
          id="intermediate"
          name="level"
          value="intermediate"
          onChange={() => onSelectLevel(event)}
        />
        <label htmlFor="intermediate">Intermediate</label>
        &nbsp;&nbsp;&nbsp;
        <input
          type="radio"
          id="expert"
          name="level"
          value="expert"
          onChange={() => onSelectLevel(event)}
        />
        <label htmlFor="expert">Expert</label>
        <br></br>
        <div className="pt-5">
          <button
            className="bg-purple-600 rounded-lg text-white font-bold px-3 py-2"
            onClick={startQuiz}
            type="submit"
          >
            Start
          </button>
          &nbsp;
          <Link
            className="bg-slate-500 rounded-lg text-white font-bold px-3 py-2"
            onClick={onCancel}
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserOptions;
