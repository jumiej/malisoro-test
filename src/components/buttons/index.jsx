import React from "react";

export const Button = ({
  children = <>Button</>,
  onClick,
  color,
  backgroundColor,
  rest,
  image,
}) => {
  const buttonStyle = {
    color: color || "inherit",
    backgroundColor: backgroundColor || "transparent",
  };
  return (
    <button
      className="primary__btn"
      onClick={onClick}
      style={buttonStyle}
      {...rest}
    >
      {children}
      {image && <img src={image} alt="icon" style={{ marginLeft: "5px" }} />}
    </button>
  );
};
