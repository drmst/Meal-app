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
          {/* Always add alt text to images! You can use recipe name or similar here */}
          <img className="meal-photo" src={meal.strMealThumb} alt="" />
          <div className="ingredients">
            {/* This should be some kind of heading, not a paragraph */}
            <p>Ingredients</p>
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

      <div className="recipe-details">
        <div className="recipe-text">
          <div className="meal-info">
            <div className="meal-info-text">
              {/* Those two elements could be span or heading (e.g. h5 or h6) elements, but they are certainly not paragraphs */}
              <p className="meal-category">{meal.strCategory}</p>
              <p className="meal-area">{meal.strArea}</p>
            </div>
            {/* This value should be rendered conditionally otherwise a blue dot shown on the screen where there's no tags. */}
            {meal.strTags ? <p className="meal-tags">{meal.strTags}</p> : <></>}
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
