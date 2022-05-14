import React, { useState } from 'react';
import BottomMenu from '../components/BottomMenu';
import Card from '../components/FavoriteRecipes/Card';
import Header from '../components/Header';

function FavoriteRecipes() {
  const [pressedBtn, setBtnPressed] = useState('all');
  const getRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  function showCards() {
    if (getRecipes === null || getRecipes.length === 0) {
      return (
        <div className="foodPage">
          <p>Você não favoritou nenhuma receita</p>
        </div>
      );
    }
    if (pressedBtn === 'all') {
      return (
        <div className="foodPage">
          {' '}
          {getRecipes.map((recipe, index) => (
            <Card
              id={ recipe.id }
              type={ recipe.type }
              nationality={ recipe.nationality }
              category={ recipe.category }
              alcoholicOrNot={ recipe.alcoholicOrNot }
              name={ recipe.name }
              image={ recipe.image }
              key={ recipe.id }
              index={ index }
            />
          ))}
        </div>
      );
    }
    return (getRecipes.filter((recipe) => recipe.type === pressedBtn)
      .map((recipe, index) => (
        <Card
          type={ recipe.type }
          nationality={ recipe.nationality }
          category={ recipe.category }
          alcoholicOrNot={ recipe.alcoholicOrNot }
          name={ recipe.name }
          image={ recipe.image }
          key={ recipe.id }
          index={ index }
          id={ recipe.id }
        />
      )));
  }
  return (
    <section>
      <Header
        titleName="Favorite Recipes"
        searchIconOnScreen={ false }
      />
      <section className="section-btns-filter-favorite-recipes">
        <button
          data-testid="filter-by-all-btn"
          type="button"
          onClick={ () => setBtnPressed('all') }
        >
          All
        </button>
        <button
          data-testid="filter-by-food-btn"
          type="button"
          onClick={ () => setBtnPressed('food') }
        >
          Food
        </button>
        <button
          data-testid="filter-by-drink-btn"
          type="button"
          onClick={ () => setBtnPressed('drink') }
        >
          Drinks
        </button>
      </section>
      <ul className="ul-cards-favorite-recipes">
        { showCards() }
      </ul>
      <BottomMenu />
    </section>
  );
}

export default FavoriteRecipes;
