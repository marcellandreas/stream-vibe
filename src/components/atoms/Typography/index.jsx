import PropTypes from "prop-types";

const Title = ({ level, children, className }) => {
  const Heading = `h${level}`;
  const classes = ` ${
    level === 1
      ? " lg:text-d-h1 md:text-l-h1 text-m-h1"
      : level === 2
      ? "lg:text-d-h2 md:text-l-h2 text-m-h2"
      : level === 3
      ? "lg:text-d-h3 md:text-l-h3 text-m-h3"
      : level === 4
      ? "lg:text-d-h4 md:text-l-h4 text-m-h4"
      : level === 5
      ? "lg:text-d-h5 md:text-l-h5 text-m-h5"
      : ""
  }`;

  return <Heading className={`${className} ${classes}`}>{children}</Heading>;
};

const Paragraph = ({ children, className }) => {
  return (
    <p
      className={` text-m-paragraph md:text-l-paragraph lg:text-d-paragraph ${className}`}
    >
      {children}
    </p>
  );
};

const TextButton = ({ children, className, onClick }) => {
  return (
    <button
      className={` lg:text-[18px] md:text-[16px] text-[12px] ${className}`}
      style={{ lineHeight: "150", fontWeight: 500 }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

TextButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.node.isRequired,
  onClick: PropTypes.node.isRequired,
};

export { Title, TextButton, Paragraph };

Title.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.node.isRequired,
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.node.isRequired,
};

TextButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Title.defaultProps = {
  className: "",
};
Paragraph.defaultProps = {
  className: "",
};
TextButton.defaultProps = {
  className: "",
  onclick: undefined,
};
