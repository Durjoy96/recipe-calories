import PropTypes from "prop-types";

const PageLink = ({ text }) => {
  return (
    <a
      className="text-base font-normal text-base-content-secondary hover:text-base-content"
      href=""
    >
      {text}
    </a>
  );
};

PageLink.propTypes = {
    text : PropTypes.string.isRequired,
}

export default PageLink;
