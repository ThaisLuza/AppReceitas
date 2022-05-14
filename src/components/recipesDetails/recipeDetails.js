import React from 'react';
import propTypes from 'prop-types';
import RecipeCard from './recipeCard';
import FavoriteButton from './favoriteButton';
import ShareButton from './shareButton';
import IngredientList from './ingredientList';
import IngredientListCheck from './ingredientListCheck';

function RecipeDetails({ recipe, page, recipeType }) {
  return (
    <section>
      <RecipeCard
        title={ recipe.strMeal || recipe.strDrink }
        image={ recipe.strMealThumb || recipe.strDrinkThumb }
        category={ recipe.strAlcoholic || recipe.strCategory }
      />
      <div className="foodPage">
        <div style={ { display: 'flex' } }>
          <FavoriteButton recipe={ recipe } />
          <ShareButton />
        </div>
        {page === 'details'
          ? <IngredientList recipe={ recipe } />
          : <IngredientListCheck recipe={ recipe } recipeType={ recipeType } />}
        <h4>
          Instruções
        </h4>
        <p data-testid="instructions">
          {recipe.strInstructions}
        </p>
        {recipe.strYoutube && (
          <iframe
            data-testid="video"
            title={ recipe.strMeal }
            width="360"
            height="280"
            src={ recipe.strYoutube.replace('watch?v=', 'embed/') }
          />
        )}
      </div>
    </section>
  );
}

RecipeDetails.propTypes = {
  recipe: propTypes.objectOf(propTypes.string),
}.isRequired;

export default RecipeDetails;
