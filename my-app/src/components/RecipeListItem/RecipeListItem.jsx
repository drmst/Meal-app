import "./styles.css";

export const RecipeListItem = ({ recipe, setIsClicked, setMealId }) => {
  const handleClick = (id) => {
    setIsClicked(true);
    setMealId(id);
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
    <>
      <li
        className="recipe-list-item"
        style={{ backgroundColor: categoryColor[recipe.strCategory] }}
        key={recipe.idMeal}
        onClick={() => handleClick(recipe.idMeal)}
      >
        <p className="recipe-title"> {recipe.strMeal}</p>
        <img className="recipe-image" src={recipe.strMealThumb} alt="" />
      </li>
    </>
  );
};
