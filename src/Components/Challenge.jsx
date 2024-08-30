import React, { useEffect, useState } from "react";
import { generateResponseForPrompts } from "./GenerativeAI";
import Tests from "./Tests";
import loading from "../assets/loading.svg";
import { getStringInBetween } from "../Utils/Utils";
import { useSelector } from "react-redux";

const Challenge = () => {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const state = useSelector((state) => state.quiz);
  const [quizLoading, setQuizLoading] = useState(true);

  useEffect(() => {
    async function fetchQuizQuestions() {
      const noOfQues = state.noOfQues;
      let topic = "";

      if (state.category === "Custom") {
        topic = state.customPrompt;
      } else {
        topic = state.category;
      }

      prompt = `generate ${noOfQues} quiz questions related to ${topic} with ${state.complexity} level complexity with each question should be enclosed between <ques> and </ques>. Have 4 options with option section enclosed between <options> and </options> which will include all the 4 options and each option enclosed between <op1> and </op1>, similary others to be like <op2></op2> ans soo on and have only the option inside without any numbering or a,b,c, d etc., like wise for the remaining have op2, op3, op4 etc. also the correct answer with answer enclosed between <ans> and </ans> with no text formatting. Only plain text. do not have anything like end tags. each quiz questions to be enclosed between <q1> and </q1> t... like wise <q2> and </q2> for others.`;

      const response = await generateResponseForPrompts(prompt);

      const quizQuestArray = [];

      for (let i = 1; i <= noOfQues; i++) {
        quizQuestArray.push(
          getStringInBetween(`<q${i}>`, `</q${i}>`, response)
        );
      }

      let masterQuiz = [];
      quizQuestArray.map((q) => {
        const question = getStringInBetween("<ques>", "</ques>", q);

        const optionsArray = [];
        const options = getStringInBetween("<options>", "</options>", q);
        optionsArray.push(getStringInBetween("<op1>", "</op1>", options));
        optionsArray.push(getStringInBetween("<op2>", "</op2>", options));
        optionsArray.push(getStringInBetween("<op3>", "</op3>", options));
        optionsArray.push(getStringInBetween("<op4>", "</op4>", options));

        const answer = getStringInBetween("<ans>", "</ans>", q);

        const quiz = {
          id: masterQuiz.length + 1,
          ques: question,
          opts: optionsArray,
          ans: answer,
          selectedAnswer: "",
        };
        masterQuiz.push(quiz);
      });

      setQuizQuestions([...masterQuiz]);
      setQuizLoading(false);
    }
    fetchQuizQuestions();
  }, []);
  return (
    <div>
      {quizLoading ? (
        <div className="w-full max-w-2xl mx-auto flex justify-center items-center border border-purple-400 pt-10 pb-10 mt-16 bg-purple-300 rounded-lg">
          <div className="grid grid-cols-2">
            <div className="flex justify-center items-center">
              <div className="font-bold text-2xl">
                <p>Loading your quiz</p>
                <p> Please wait.....</p>
              </div>
            </div>
            <div>
              <img className="h-96 pb-20" src={loading} alt="loading" />
            </div>
          </div>
        </div>
      ) : (
        <Tests masterQuiz={quizQuestions} />
      )}
    </div>
  );
};

export default Challenge;
