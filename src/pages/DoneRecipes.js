import React, { useState } from 'react';
import BottomMenu from '../components/BottomMenu';
import Card from '../components/DoneRecipes/Card';
import Header from '../components/Header';

function DoneRecipes() {
  const [pressedBtn, setBtnPressed] = useState('all');
  const getRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  function showCards() {
    if (getRecipes === null || getRecipes.length < 1) {
      return (
        <div className="foodPage">
          <p>Você não finalizou nenhuma receita</p>
        </div>
      );
    }
    if (pressedBtn === 'all') {
      return (getRecipes.map((recipe, index) => (
        <Card
          id={ recipe.id }
          category={ recipe.category }
          name={ recipe.name }
          image={ recipe.image }
          doneDate={ recipe.doneDate }
          tags={ recipe.tags }
          key={ recipe.id }
          index={ index }
          type={ recipe.type }
          nationality={ recipe.nationality }
          alcoholicOrNot={ recipe.alcoholicOrNot }
        />
      )));
    }
    return (getRecipes.filter((recipe) => recipe.type === pressedBtn)
      .map((recipe, index) => (
        <Card
          id={ recipe.id }
          category={ recipe.category }
          name={ recipe.name }
          image={ recipe.image }
          doneDate={ recipe.doneDate }
          tags={ recipe.tags }
          key={ recipe.id }
          index={ index }
          type={ recipe.type }
          alcoholicOrNot={ recipe.alcoholicOrNot }
          nationality={ recipe.nationality }
        />
      )));
  }
  return (
    <section>
      <Header
        titleName="Done Recipes"
        searchIconOnScreen={ false }
      />
      <section className="section-btns-filter-done-recipes">
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
      <ul className="ul-cards-done-recipes">
        { showCards() }
      </ul>
      <BottomMenu />
    </section>
  );
}

export default DoneRecipes;
