import React from "react";
import MealCard from "./MealCard";

const MealList = ({ meals }) => {
  if (meals.length === 0) {
    return <p className="no-results">No recipes found 🍽️</p>;
  }

  return (
    <div className="meal-list">
      {meals.map((meal) => (
        <MealCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
};

export default MealList;
