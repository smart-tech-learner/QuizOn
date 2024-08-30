import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  customPrompt: "",
  noOfQues: "",
  complexity: "",
  quiz: "",
  score: "",
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      return {
        ...state,
        category: action.payload.category,
        customPrompt: action.payload.prompt,
      };
    },
    setNoOfQues: (state, action) => {
      return { ...state, noOfQues: action.payload };
    },
    setComplexity: (state, action) => {
      return { ...state, complexity: action.payload };
    },
    setQuiz: (state, action) => {
      return { ...state, quiz: action.payload };
    },
    setScore: (state, action) => {
      return { ...state, score: action.payload };
    },
    reset: (state, action) => {
      state.category = "";
      state.customPrompt = "";
      state.noOfQues = "";
      state.complexity = "";
      state.quiz = "";
      state.score = "";
    },
  },
});

export const {
  setCategory,
  setNoOfQues,
  setComplexity,
  setQuiz,
  setScore,
  reset,
} = quizSlice.actions;

export default quizSlice.reducer;
