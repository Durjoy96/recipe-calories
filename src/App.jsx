import Navbar from "./components/Header/Navbar";
import Recipes from "./components/Recipes-Section/Recipes";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[60%_40%]">
        <Recipes></Recipes>
        <div className="w-full bg-base-200"></div>
      </div>
    </>
  );
}

export default App;
