import "./styles.css";
export const RecipeList = ({ recipes, setIsClicked }) => {
  return (
    <div>
      <h2>Search Results</h2>
      <ul className="recipe-list">
        {recipes.map((recipe) => (
          <li key={recipe.idMeal} onClick={() => setIsClicked(true)}>
            <p> {recipe.strMeal}</p>
            <img src={recipe.strMealThumb} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};
