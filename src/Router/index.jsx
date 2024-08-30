import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Tests from "../Components/Tests";
import Home from "../Components/Home";
import Categories from "../Components/Categories";
import Challenge from "../Components/Challenge";
import ScoreCard from "../Components/ScoreCard";
import UserOptions from "../Components/UserOptions";
import ReviewQuiz from "../Components/ReviewQuiz";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/challenge/categories",
        element: <Categories />,
      },
      {
        path: "/challenge/userOptions",
        element: <UserOptions />,
      },
      {
        path: "/challenge/quiz",
        element: <Challenge />,
      },
      {
        path: "/challenge/review",
        element: <ReviewQuiz />,
      },
    ],
  },

  {
    path: "/tests",
    element: <Tests />,
  },
]);

export default router;
