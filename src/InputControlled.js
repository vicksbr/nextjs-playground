import React, { useState } from "react";

import RenderCount from "./RenderCount";

const InputControlled = ({ name }) => {
  const [inputValue, setValue] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setValue(value);
  };

  return (
    <div className="wrapper">
      <input
        className="input"
        size={10}
        type="text"
        name={name}
        value={inputValue}
        onChange={handleChange}
      />
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

export default InputControlled;
