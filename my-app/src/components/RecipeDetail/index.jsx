import { useEffect, useState } from "react";
import "./styles.css";

export const RecipeDetail = ({ mealId }) => {
  const MEAL_URL =
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealId;

  const [meal, setMeal] = useState("");

  useEffect(() => {
    fetch(MEAL_URL).then((response) =>
      response.json().then((data) => {
        setMeal(data.meals[0]);
      })
    );
  }, [MEAL_URL]);

  return (
    <div className="meal-container">
      <div className="recipe-summary">
        <h1 className="meal-name">{meal.strMeal}</h1>
        <div className="meal-details">
          <img className="meal-photo" src={meal.strMealThumb} alt="" />
          <div className="ingredients">
            <p className="ingredient-text">Ingredient</p>
            <p className="ingredient-amount">Amount</p>
          </div>
        </div>
      </div>

      <div className="recipe-details">
        <div className="recipe-text">
          <div className="meal-info">
            <div className="meal-info-text">
              <p className="meal-category">{meal.strCategory}</p>
              <p className="meal-area">{meal.strArea}</p>
            </div>
            <p className="meal-tags">{meal.strTags}</p>
          </div>
          <div className="instructions">{meal.strInstructions}</div>
        </div>
        <div className="recipe-photos">photos</div>
      </div>
    </div>
  );
};
