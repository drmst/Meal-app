import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { useEffect, useState } from "react";
import { RecipeList } from "./components/RecipeList";
import { BD_SEARCH_BASE_URL } from "./urls";
import { RecipeDetail } from "./components/RecipeDetail";

export const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [mealId, setMealId] = useState();

  useEffect(() => {
    fetch(BD_SEARCH_BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) return setRecipes(data.meals);
      })
      .catch((error) => setRecipes([]));
  }, []);

  return (
    <div className="container">
      <header>Recipe Search App</header>
      <SearchBar setRecipes={setRecipes} setIsClicked={setIsClicked} />
      {isClicked ? (
        <RecipeDetail mealId={mealId} />
      ) : (
        <RecipeList
          recipes={recipes}
          setIsClicked={setIsClicked}
          setMealId={setMealId}
        />
      )}
    </div>
  );
};
