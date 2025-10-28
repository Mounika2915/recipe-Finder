import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MealList from "./components/MealList";

const App = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchMeals = async (ingredient) => {
    if (!ingredient) return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      setMeals(data.meals || []);
    } catch (error) {
      console.error("Error fetching meals:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">🍳 Recipe Finder</h1>
        <p className="app-subtitle">Find recipes by ingredient</p>
      </header>

      <SearchBar onSearch={searchMeals} />

      {loading ? (
        <p className="loading-text">Loading recipes...</p>
      ) : (
        <MealList meals={meals} />
      )}
    </div>
  );
};

export default App;
