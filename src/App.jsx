import Navbar from "./components/Header/Navbar";
import Recipes from "./components/Recipes-Section/Recipes";
import WantCook from "./components/Cook/WantCook";
import { useState } from "react";
import CurrentlyCooking from "./components/Cook/CurrentlyCooking";

function App() {
  const [recipe, setRecipe] = useState([]);
  const [preparingRecipe, setPreparingRecipe] = useState([]);

  const getRecipeHandler = (data) => {
    const newArr = [...recipe, data];
    setRecipe(newArr);
  };

  const preparingRecipeHandler = (data) => {
    const newArr = [...preparingRecipe, data];
    setPreparingRecipe(newArr);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[60%_40%]">
        <Recipes getRecipeHandler={getRecipeHandler}></Recipes>
        <div className="h-screen border rounded-2xl p-6 space-y-8 sticky top-6 bottom-6 overflow-y-scroll">
          <WantCook
            data={recipe}
            preparingRecipeHandler={preparingRecipeHandler}
          ></WantCook>
          <CurrentlyCooking data={preparingRecipe}></CurrentlyCooking>
        </div>
      </div>
    </>
  );
}

export default App;
