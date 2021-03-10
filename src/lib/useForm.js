import { useRef, useState, useCallback } from "react";

const useForm = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState([]);
  const [errors, setErrors] = useState({});

  const register = useCallback((refNode) => {
    setFormData((prev) => [...prev, refNode.name]);
  }, []);

  const handleSubmit = (event, callbackfn) => {
    event.preventDefault();
    const fieldsValues = new FormData(event.target);
    const fieldTuples = [...fieldsValues];
    const registeredFields = fieldTuples.filter((item) =>
      formData.includes(item[0])
    );
    callbackfn(registeredFields);
  };

  return {
    handleSubmit,
    formData,
    formRef,
    register,
    errors,
  };
};

export default useForm;
