import { useEffect, useState } from "react";
import "./styles.css";

export const RecipeDetail = ({ mealId }) => {
  const MEAL_URL =
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealId;

  const [meal, setMeal] = useState("");
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch(MEAL_URL).then((response) =>
      response.json().then((data) => {
        setMeal(data.meals[0]);
        const newIngredients = [];
        for (let i = 1; i < 21; i++) {
          const ingredientKey = `strIngredient${i}`;
          const measureKey = `strMeasure${i}`;

          const ingredient = meal[ingredientKey];
          const measure = meal[measureKey];
          if (!ingredient || !measure) {
            break;
          }
          newIngredients.push(`${measure} ${ingredient}`);
        }
        setIngredients(newIngredients);
      }).catch((error) =>console.log(error))
    );
  }, [MEAL_URL, meal]);

  return (
    <div className="meal-container">
      <div className="recipe-summary">
        <h1 className="meal-name">{meal.strMeal}</h1>
        <div className="meal-details">
          <img className="meal-photo" src={meal.strMealThumb} alt="" />
          <div className="ingredients">
            <p>Ingredients</p>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index} className="ingredient">
                  {ingredient}
                </li>
              ))}
            </ul>
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
          {meal && meal.strInstructions && (
            <div className="instructions">
              {meal.strInstructions.split(".").map((sentence) => (
                <p>{sentence}.</p>
              ))}
            </div>
          )}
        </div>
        <div className="recipe-photos">photos</div>
      </div>
    </div>
  );
};
