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
    color: color || "inherit", // Default to inherit if no color is provided
    backgroundColor: backgroundColor || "transparent", // Default to transparent if no background color is provided
  };
  return (
    <button
      className="primary__btn"
      onClick={onClick}
      style={buttonStyle}
      image={image}
      {...rest}
    >
      {children}
    </button>
  );
};
