import Navbar from "./components/Header/Navbar";
import Recipes from "./components/Recipes-Section/Recipes";
import WantCook from "./components/Cook/WantCook";
import { useState } from "react";

function App() {
  const [recipe, setRecipe] = useState([]);

  const getRecipeHandler = (data) => {
    const newArr = [...recipe, data];
    setRecipe(newArr);
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[60%_40%]">
        <Recipes getRecipeHandler={getRecipeHandler}></Recipes>
        <div className="h-screen border rounded-2xl p-6 sticky top-6">
          <WantCook data={recipe}></WantCook>
        </div>
      </div>
    </>
  );
}

export default App;
