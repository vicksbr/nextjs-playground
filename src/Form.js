import React, { useRef, useState, useEffect, useCallback } from "react";

import RenderCount from "./RenderCount";
import useStateRef from "./lib/useStateRef";

const Input = React.memo(({ name }) => {
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
});

const InputControlled = React.memo(({ name }) => {
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
});

const handleSubmit = (e, formsRef) => {
  e.preventDefault();
  if (!formsRef) return;
  const data = new FormData(e.target);
  const fieldTuples = [...data];
  const registeredFields = fieldTuples.filter((item) =>
    formsRef.includes(item[0])
  );
  console.log("registered fields", registeredFields);
};

const Form = React.memo(() => {
  const formRef = useRef(null);
  const [formsRef, setFormRefs] = useState([]);

  const displayFormData = (e) => {
    if (formRef.current) {
      const data = new FormData(formRef.current);
      console.log([...data]);
    }
  };

  const registeredRefs = useCallback((refNode) => {
    setFormRefs((prev) => [...prev, refNode.name]);
  }, []);

  return (
    <form
      className="form"
      onSubmit={(e) => handleSubmit(e, formsRef)}
      ref={formRef}
    >
      <RenderCount />
      <p>Form</p>
      <Input name="field1" />
      <InputControlled name="field2" />
      <input name="field3" ref={registeredRefs} />
      <input name="field4" ref={registeredRefs} />
      <button type="submit">submit</button>
      <button onClick={displayFormData}>display</button>
      <style jsx>
        {`
          .form {
            width: 50%;
            position: relative;
            border: 1px red solid;
          }
        `}
      </style>
    </form>
  );
});

export default Form;
