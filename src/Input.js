import React from "react";

import RenderCount from "./RenderCount";

const Input = ({ name }) => {
  return (
    <div className="wrapper">
      <input className="input" size={10} name={name} />
      <RenderCount />
      <style jsx>
        {`
          .wrapper {
            position: relative;
            width: fit-content;
          }

          .input {
            height: 25px;
            width: 300px;
          }
        `}
      </style>
    </div>
  );
};

export default Input;
