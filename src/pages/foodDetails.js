import React, { useContext, useEffect } from 'react';
import propTypes from 'prop-types';
import RecipeDetails from '../components/recipesDetails/recipeDetails';
import Context from '../context/Context';
import fetchRecipesAPI from '../services/fetchRecipesAPI';
// import RecomentationRecipe from '../components/recipesDetails/recomendationRecipe';
import StartContinueFinishButton from
'../components/recipesDetails/startContinueFinishButton';
import BottomMenu from '../components/BottomMenu';
// import Header from '../components/Header';

function FoodDetails({ match, pageName }) {
  const { idRecipe } = match.params;
  const {
    foodDetails,
    setfoodDetails,
    // allFoodRecipes,
    // setAllFoodRecipes,
  } = useContext(Context);

  useEffect(() => {
    fetchRecipesAPI(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idRecipe}`)
      .then((data) => setfoodDetails(data));
  }, []);

  const { meals } = foodDetails;
  // const urlDrinkRecipes = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const recipeType = 'food';

  return (
    <section className="foodDetails">
      <div className="sec">
        {meals && meals.map((food) => (
          <RecipeDetails key={ food.idMeal } recipe={ food } page={ pageName } />
        )) }
        {/* <RecomentationRecipe
          urlRecipesApi={ urlDrinkRecipes }
          stateContext={ allFoodRecipes }
          setStateContext={ setAllFoodRecipes }
        /> */}
        {meals && StartContinueFinishButton(meals, recipeType, pageName)}
      </div>
      <BottomMenu />
    </section>
  );
}

FoodDetails.propTypes = {
  slug: propTypes.string,
}.isRequired;

export default FoodDetails;
