import React from "react";
import RecipeCard from "./RecipeCard.js";
import recipes from "./recipe.js";
import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <div className="recipe-container">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            name={recipe.name}
            cookTime={recipe.cookTime}
            image={recipe.image}
            ingredients={recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}
