import React from "react";

const Button = (props) => {
  const { title, handleClick, buttonClass } = props;
  return (
    <button onClick={handleClick} className={buttonClass}>
      {title}
    </button>
  );
};

export default Button;
