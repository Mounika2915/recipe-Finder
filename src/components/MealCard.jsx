import React from "react";

const MealCard = ({ meal }) => {
  return (
    <div className="meal-card">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="meal-image"
        width="100"
        height="100"
      />
      <h3 className="meal-title">{meal.strMeal}</h3>
      <a
        href={`https://www.themealdb.com/meal/${meal.idMeal}`}
        target="_blank"
        rel="noopener noreferrer"
        className="view-recipe-button"
      >
        View Recipe
      </a>
    </div>
  );
};

export default MealCard;
