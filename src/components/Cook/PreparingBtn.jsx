import PropTypes from "prop-types";

const PreparingBtn = ({ preparingRecipeHandler, data }) => {
  return (
    <>
      <button
        onClick={() => preparingRecipeHandler(data)}
        className="px-4 py-1 bg-primary text-base font-medium text-primary-content rounded-full hover:bg-primary/80 hover:text-primary-content/80"
      >
        Preparing
      </button>
    </>
  );
};

PreparingBtn.propTypes = {
  data: PropTypes.object.isRequired,
  preparingRecipeHandler: PropTypes.func.isRequired,
};

export default PreparingBtn;
