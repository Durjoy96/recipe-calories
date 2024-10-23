import { useEffect, useState } from "react";
import Recipe from "./Recipe";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  });
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {recipes.map((item, idx) => (
        <Recipe key={idx} data={item}></Recipe>
      ))}
    </div>
  );
};

export default Recipes;
