import React from "react";

export default function RecipeCard({ name, cookTime, image, ingredients }) {
  return (
    <div className="recipe-card">
      <h2>{name}</h2>
      <p className="cook-time">{cookTime}</p>
      <img src={image} alt={name} className="recipe-img" />

      <p className="status">Ready to Cook</p>
      <p className="ingredients-title">Ingredients</p>

      <div className="ingredients-list">
        {ingredients.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>

      <button className="recipe-btn">View Recipe</button>
    </div>
  );
}
