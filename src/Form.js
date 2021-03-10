import React, { useRef, useState } from "react";

import Input from "./Input";
import InputControlled from "./InputControlled";
import RenderCount from "./RenderCount";
import BreakLine from "../src/BreakLine";

const Form = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState([]);

  const setFormValues = () => {
    if (formRef?.current) {
      const data = new FormData(formRef.current);
      setFormData([...data]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="center">
      <form className="form" ref={formRef} onSubmit={handleSubmit}>
        <RenderCount />
        <p>Form Example without memoization</p>
        <InputControlled name="field1" />
        <Input name="field2" />
        <BreakLine number={2} />
        <button type="submit">submit</button>
        <button onClick={() => setFormValues()}>display</button>
        <BreakLine number={2} />
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </form>
      <style jsx>
        {`
          .center {
          }

          .form {
            margin: 0 auto;
            width: 75%;
            position: relative;
            border: 1px red solid;
          }
        `}
      </style>
    </div>
  );
};

export default Form;
