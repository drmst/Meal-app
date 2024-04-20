import "./styles.css";
export const RecipeList = ({ recipes, setIsClicked,setIndex }) => {
  const handleClick = (index) => {
    setIsClicked(true);
    setIndex(index);
  };
  const categoryColor = {
    Beef: "#fdd795",
    Chicken: "#e9f3c7",
    Dessert: "#ffd0c2",
    Lamb: "#ff8d8d",
    Miscellaneous: "#fac3ff",
    Pasta: "#fbdaf5",
    Pork: "#7a7a7a",
    Seafood: "#bff3ff",
    Side: "#ffc6e4",
    Starter: "#ffe699",
    Vegan: "#90ff85",
    Vegetarian: "#d9ffce",
    Breakfast: "#ffdb6c",
    Goat: "#ffaae1",
  };
  return (
    <div>
      <h2 className="recipe-list-title">Search Results</h2>
      <div className="recipe-container">
        <ul className="recipe-list">
          {recipes.map((recipe, index) => (
            <li
              className="recipe-list-item"
              style={{ backgroundColor: categoryColor[recipe.strCategory] }}
              key={recipe.idMeal}
              // Don't use index to select a recipe, use idMeal instead
              onClick={() => handleClick(index)}
            >
              {/* This should be a heading element */}
              <p className="recipe-title"> {recipe.strMeal}</p>
              <img
                className="recipe-image"
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
