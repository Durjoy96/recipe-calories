import PropTypes from "prop-types";

const Button = ({ text, getRecipeHandler, data }) => {
  return (
    <>
      <button
        onClick={() => getRecipeHandler(data)}
        className="px-6 py-3 bg-primary text-lg font-medium text-primary-content rounded-full  hover:bg-primary/80 hover:text-primary-content/80"
      >
        {text}
      </button>
    </>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  getRecipeHandler: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default Button;
