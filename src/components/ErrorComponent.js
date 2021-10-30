import React from "react";

const ErrorComponent = () => {
  return (
    <div
      onClick={() => {
        throw new Error("Not So NiCE Div");
      }}
    >
      Don't Click it will throw error
    </div>
  );
};

export default ErrorComponent;
