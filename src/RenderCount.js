import React from "react";

const RenderCount = () => {
  const renders = React.useRef(0);
  return (
    <>
      <i className="circle">{++renders.current}</i>
      <style jsx>{`
        .circle {
          position: absolute;
          top: 0;
          right: 0;
          font-style: normal;
          text-align: center;
          height: 30px;
          width: 30px;
          line-height: 30px;
          border-radius: 15px;
          border: 1px solid #ddd;
          background: #eee;
        }
      `}</style>
    </>
  );
};

export default RenderCount;
