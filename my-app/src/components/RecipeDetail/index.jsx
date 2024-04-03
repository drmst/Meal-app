import React, { useEffect, useState } from "react";

export const RecipeDetail = ({ mealId }) => {
  const MEAL_URL =
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealId;

  const [meal, setMeal] = useState("");
  useEffect(() => {
    fetch(MEAL_URL).then((response) =>
      response.json().then((data) => setMeal(data.meals[0]))
    );
  }, [MEAL_URL]);

  return <p>{meal.strMeal}</p>;
};
