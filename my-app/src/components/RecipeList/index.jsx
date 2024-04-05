import { RecipeListItem } from "../RecipeListItem/RecipeListItem";
import "./styles.css";
export const RecipeList = ({ recipes, setIsClicked, setMealId }) => {
  return (
    <div>
      <h2 className="recipe-list-title">Search Results</h2>
      <div className="recipe-container">
        <ul className="recipe-list">
          {recipes.map((recipe) => (
            <RecipeListItem
              key={recipe.idMeal}
              recipe={recipe}
              setIsClicked={setIsClicked}
              setMealId={setMealId}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
