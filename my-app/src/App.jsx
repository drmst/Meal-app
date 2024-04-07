import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { useEffect, useState } from "react";
import { RecipeList } from "./components/RecipeList";
import { BD_SEARCH_BASE_URL } from "./urls";
import { RecipeDetail } from "./components/RecipeDetail";

export const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [index, setIndex] = useState();

  useEffect(() => {
    fetch(BD_SEARCH_BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) return setRecipes(data.meals);
      })
      .catch((error) => {
        console.log(error);
        setRecipes([]);
      });
  }, []);

  return (
    <div className="container">
      <div className="header-container">
        {isClicked ? (
          <header
            onClick={() => setIsClicked(false)}
            className="back-button"
          >
            Back to the list
          </header>
        ) : (
          <header>Recipe Search App</header>
        )}

        <SearchBar setRecipes={setRecipes} setIsClicked={setIsClicked} />
      </div>
      {isClicked ? (
        <RecipeDetail index={index} recipes={recipes} />
      ) : (
        <RecipeList
          recipes={recipes}
          setIsClicked={setIsClicked}
          setIndex={setIndex}
        />
      )}
    </div>
  );
};
