import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
import PropTypes from "prop-types";
import Button from "./Button";

const Recipe = ({ data }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = data;
  return (
    <div className="p-6 border rounded-2xl">
      <div className="h-[200px]">
        <img
          className="h-full w-full object-cover rounded-2xl"
          src={recipe_image}
          alt={recipe_name}
        />
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-card-base-content">
          {recipe_name}
        </h2>
        <p className="text-base font-normal text-card-base-content-secondary mt-4">
          {short_description}
        </p>
      </div>
      <div className="mt-4">
        <hr />
        <h4 className="text-lg font-medium text-card-base-content mt-6">
          Ingredients: {ingredients.length}
        </h4>
        <ul className="list-disc list-inside text-card-base-content-secondary mt-4">
          {ingredients.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <hr className="mt-4" />
      </div>
      <div className="flex items-center gap-6 my-6">
        <span className="flex items-center gap-2 text-base text-card-base-content-secondary">
          <CiClock2 className="w-6 h-6 stroke-0" /> {preparing_time} minutes
        </span>
        <span className="flex items-center gap-2 text-base text-card-base-content-secondary">
          <AiOutlineFire className="w-6 h-6 stroke-0" /> {calories}
        </span>
      </div>
      <Button text="Want to Cook"></Button>
    </div>
  );
};

Recipe.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Recipe;
