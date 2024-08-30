import React, { useEffect, useState } from "react";
import ScoreCard from "./ScoreCard";
import { useDispatch } from "react-redux";
import { reset, setQuiz, setScore } from "../Redux/QuizSlice";
import { useNavigate } from "react-router-dom";

const Tests = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [quesToLoad, setQuesToLoad] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState();
  const [showScoreCard, setShowScoreCard] = useState(false);

  useEffect(() => {
    const quest = loadQuestion(1);
    setQuesToLoad(quest);
  }, []);

  const loadQuestion = (id) => {
    const ques = props.masterQuiz.find((quiz) => quiz.id === id);
    return ques;
  };

  const onClickPrevious = (id) => {
    if (id - 1 > 0) {
      const quest = loadQuestion(id - 1);
      const ques = props.masterQuiz.find((q) => q.id === id - 1);

      if (ques && ques.selectedAnswer !== "") {
        setSelectedAnswer(ques.selectedAnswer);
      }
      setQuesToLoad(quest);
    }
  };

  const onClickNext = (id) => {
    if (id + 1 <= props.masterQuiz.length) {
      const quest = loadQuestion(id + 1);

      const ques = props.masterQuiz.find((q) => q.id === id + 1);

      if (ques && ques.selectedAnswer !== "") {
        setSelectedAnswer(ques.selectedAnswer);
      } else {
        setSelectedAnswer("");
      }
      setQuesToLoad(quest);
    }
  };

  const onSelectAnswer = (event) => {
    const selAnswer = event.target.value;
    setSelectedAnswer(selAnswer);
    quesToLoad.selectedAnswer = selAnswer;
  };

  const submitQuiz = () => {
    let count = 0;
    props.masterQuiz.map((q) => {
      if (q.selectedAnswer === "") {
        count = count + 1;
      }
    });

    let alertMsg = "";
    if (count > 1) {
      alertMsg = `${count} out of ${props.masterQuiz.length} questions have been left unanswered.\nDo you still want to Submit th quiz?`;
    } else {
      alertMsg = `Are you sure you want to submit the quiz?`;
    }
    if (confirm(alertMsg)) {
      let score = 0;
      props.masterQuiz.map((q) => {
        if (q.selectedAnswer === q.ans) {
          score = score + 1;
        }
      });

      dispatch(setQuiz(props.masterQuiz));
      dispatch(setScore(score));

      setShowScoreCard(true);
    } else {
      console.log("Submission cancelled");
    }
  };

  const onCancel = () => {
    dispatch(reset());
    navigate("/");
    return;
  };

  return (
    <div>
      {!showScoreCard && (
        <div className="w-full max-w-4xl mx-auto bg-gray-300 p-10 mt-20 rounded-lg mb-10">
          <div>
            <p className="text-2xl font-bold">
              {quesToLoad?.id}. {quesToLoad?.ques}
            </p>
            <br></br>
            <input
              type="radio"
              id="opt1"
              name="selectedAnswer"
              value={quesToLoad?.opts?.[0]}
              onChange={() => onSelectAnswer(event)}
              checked={selectedAnswer === quesToLoad?.opts?.[0]}
              required
            />
            &nbsp;
            <label htmlFor="opt1">{quesToLoad?.opts?.[0]}</label>
            <br></br>
            <input
              type="radio"
              id="opt2"
              name="selectedAnswer"
              value={quesToLoad?.opts?.[1]}
              checked={selectedAnswer === quesToLoad?.opts?.[1]}
              onChange={() => onSelectAnswer(event)}
              required
            />
            &nbsp;
            <label htmlFor="opt2">{quesToLoad?.opts?.[1]}</label>
            <br></br>
            <input
              type="radio"
              id="opt3"
              name="selectedAnswer"
              value={quesToLoad?.opts?.[2]}
              checked={selectedAnswer === quesToLoad?.opts?.[2]}
              onChange={() => onSelectAnswer(event)}
              required
            />
            &nbsp;
            <label htmlFor="opt3">{quesToLoad?.opts?.[2]}</label>
            <br></br>
            <input
              type="radio"
              id="opt4"
              name="selectedAnswer"
              value={quesToLoad?.opts?.[3]}
              checked={selectedAnswer === quesToLoad?.opts?.[3]}
              onChange={() => onSelectAnswer(event)}
              required
            />
            &nbsp;
            <label htmlFor="opt4">{quesToLoad?.opts?.[3]}</label>
          </div>
          <div className="border-b-2 border-white pt-10" />
          <div className="pt-5 flex justify-between">
            <div>
              {quesToLoad?.id !== 1 && (
                <button
                  style={
                    quesToLoad?.id === 1
                      ? { backgroundColor: "gray" }
                      : { backgroundColor: "purple" }
                  }
                  className="px-3 py-2 text-white font-bold"
                  onClick={() => onClickPrevious(quesToLoad?.id)}
                >
                  {"<"}Previous
                </button>
              )}
            </div>

            <div>
              {quesToLoad?.id !== props.masterQuiz.length && (
                <button
                  type="submit"
                  style={
                    quesToLoad?.id === props.masterQuiz.length
                      ? { backgroundColor: "gray" }
                      : { backgroundColor: "purple" }
                  }
                  className="px-3 py-2 text-white font-bold"
                  onClick={() => onClickNext(quesToLoad?.id)}
                >
                  Next{">"}
                </button>
              )}
              &nbsp;
              {quesToLoad?.id === props.masterQuiz.length && (
                <button
                  className="bg-purple-500 px-3 py-2 text-white font-bold"
                  onClick={submitQuiz}
                >
                  Submit
                </button>
              )}
              &nbsp;
              <button
                className="bg-red-600 px-3 py-2 text-white font-bold"
                onClick={onCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {showScoreCard && <ScoreCard />}
    </div>
  );
};

export default Tests;
