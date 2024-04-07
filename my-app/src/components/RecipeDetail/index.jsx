import "./styles.css";

export const RecipeDetail = ({ index, recipes }) => {
  const meal = recipes[index];

  const ingredients = [];
  for (let i = 1; i < 21; i++) {
    const ingredientKey = `strIngredient${i}`;
    const measureKey = `strMeasure${i}`;

    const ingredient = meal[ingredientKey];
    const measure = meal[measureKey];
    if (!ingredient || !measure) {
      break;
    }
    ingredients.push(`${measure} ${ingredient}`);
  }

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
              {meal.strInstructions.split(".").map((sentence, i) => (
                <p key={i}>{sentence}.</p>
              ))}
            </div>
          )}
        </div>
        <div className="recipe-photos">photos and videos</div>
      </div>
    </div>
  );
};
