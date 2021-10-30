import React from "react";

const Button = () => {
  const clickHandler = () => {
    throw new Error("hey error");
  };
  return <button onClick={clickHandler}>Button</button>;
};
export default Button;
