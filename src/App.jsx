import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import RecipePage from "./components/RecipePage"; // Import the RecipePage component

export const App = () => {
  // Step 1: Initialize State
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Step 3: Handle recipe selection
  const handleRecipeSelection = (recipe) => {
    setSelectedRecipe(recipe); // Set the selected recipe
  };

  return (
    <div className="App">
      {/* Step 2: Conditionally render RecipePage or RecipeListPage */}
      {selectedRecipe ? (
        // Render RecipePage if a recipe is selected
        <RecipePage recipe={selectedRecipe} />
      ) : (
        // Render RecipeListPage and pass the selection handler
        <RecipeListPage handleRecipeSelection={handleRecipeSelection} />
      )}
    </div>
  );
};
