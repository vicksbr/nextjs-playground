import React from "react";

import useForm from "./lib/useForm";

const OtherForm = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={(event) => handleSubmit(event, onSubmit)}>
      <input
        size={10}
        type="text"
        placeholder="name"
        defaultValue=""
        name="name"
        ref={register}
      ></input>
      <input
        size={10}
        type="text"
        placeholder="email"
        defaultValue=""
        name="email"
        ref={register}
      ></input>
      <input
        size={10}
        type="password"
        placeholder="password"
        name="password"
        defaultValue=""
        ref={register}
      ></input>
      <button type="submit">submit form</button>
    </form>
  );
};

export default OtherForm;
