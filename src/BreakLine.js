import React from "react";

const BreakLine = ({ number }) => {
  return (
    <>
      {Array.from(Array(number), (_, i) => (
        <br key={i}></br>
      ))}
    </>
  );
};

export default BreakLine;
