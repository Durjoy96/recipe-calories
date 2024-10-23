import PropTypes from "prop-types";

const Button = ({ text }) => {
  return (
    <>
      <button className="px-6 py-3 bg-primary text-lg font-medium text-primary-content rounded-full">
        {text}
      </button>
    </>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
