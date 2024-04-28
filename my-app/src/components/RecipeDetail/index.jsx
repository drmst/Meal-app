import "./styles.css";

// You don't need to pass all the recipes to this component, just pass the recipes[index] directly from the App.jsx
export const RecipeDetail = ({ index, recipes }) => {
  const meal = recipes[index];

  const ingredients = [];
  // Your code would be more readable if you use functional programming methods (e.g. map fucntion in this case) instead using a loop
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
       
          <img className="meal-photo" src={meal.strMealThumb} alt={meal.strMeal} />
          <div className="ingredients">
        
            <h2>Ingredients</h2>
            <ul>
              {ingredients.map((ingredient, index) => (
                // Index is just a position of an element in the array which is not atable. It's preferable to use more stable identifiers as key, e.g. you can use 'ingredient' value directly: <li key={ingredient} className="ingredient">
                <li key={index} className="ingredient">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      ingredient
      <div className="recipe-details">
        <div className="recipe-text">
          <div className="meal-info">
            <div className="meal-info-text">
             
              <h5 className="meal-category">{meal.strCategory}</h5>
              <h5 className="meal-area">{meal.strArea}</h5>
            </div>
          
            {meal.strTags ? <h5 className="meal-tags">{meal.strTags}</h5> : <></>}
          </div>
          {meal && meal.strInstructions && (
            <div className="instructions">
              {meal.strInstructions.split(".").map((sentence, i) => (
                <p key={i}>{sentence}.</p>
              ))}
            </div>
          )}
        </div>
        {/* Would be good to add content in this section too */}
        <div className="recipe-photos">photos and videos</div>
      </div>
    </div>
  );
};
