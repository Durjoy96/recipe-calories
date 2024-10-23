import PropTypes from "prop-types";
import PreparingBtn from "./PreparingBtn";

const Row = ({ data, id, preparingRecipeHandler, isBtn }) => {
  const { recipe_name, preparing_time, calories } = data;
  return (
    <tr className="bg-base-200 text-base">
      <th>{id + 1}</th>
      <td>{recipe_name}</td>
      <td>{preparing_time} Minutes</td>
      <td>{calories} Calories</td>
      {isBtn && (
        <td>
          <PreparingBtn
            preparingRecipeHandler={preparingRecipeHandler}
            data={data}
          ></PreparingBtn>
        </td>
      )}
    </tr>
  );
};

Row.propTypes = {
  data: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  preparingRecipeHandler: PropTypes.func.isRequired,
  isBtn: PropTypes.bool.isRequired,
};

export default Row;
