import React, { useState } from "react";
import all_categories from "../assets/categories/all_categories.jpeg";
import movies from "../assets/categories/movies.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { reset, setCategory } from "../Redux/QuizSlice";

const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showTestsSection, setShowTestsSection] = useState(false);

  const categories = [
    { id: 1, category: "All Categories", image: all_categories },
    { id: 2, category: "Movies", image: movies },
    { id: 3, category: "Music", image: "" },
    { id: 4, category: "Television", image: "" },
    { id: 5, category: "News and Celebrity", image: "" },
    { id: 6, category: "Toys & Games", image: "" },
    { id: 7, category: "General Knowledge", image: "" },
    { id: 8, category: "Slogan and Business", image: "" },
    { id: 9, category: "Sports", image: "" },
    { id: 10, category: "Geography", image: "" },
    { id: 11, category: "History", image: "" },
    { id: 12, category: "Literature", image: "" },
    { id: 13, category: "Religion", image: "" },
    { id: 14, category: "Science & Maths", image: "" },
    { id: 15, category: "Custom", image: "" },
  ];

  const onSelectCategory = (category) => {
    dispatch(reset());
    const payload = { category: category, prompt: "" };
    dispatch(setCategory(payload));
    navigate("/challenge/userOptions");
  };
  return (
    <div>
      {!showTestsSection && (
        <div className="pt-10 px-10 pb-24">
          <p className="font-bold font-serif text-2xl text-white">
            Choose category and challenge yourself !
          </p>
          <br></br>
          <div className="grid lg:grid-cols-5 gap-2 md:grid-cols-4 sm:grid-cols-1 cursor-pointer">
            {categories.map((category) => {
              return (
                <div
                  key={category.id}
                  onClick={() => onSelectCategory(category.category)}
                  className="p-2 px-10 py-20 bg-slate-300 rounded-lg"
                  // style={{
                  //   backgroundImage: `url(${category.image})`,
                  //   backgroundRepeat: "no-repeat",
                  // }}
                >
                  <p className="text-center font-bold text-balance text-2xl shadow-lg">
                    {category.category}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
