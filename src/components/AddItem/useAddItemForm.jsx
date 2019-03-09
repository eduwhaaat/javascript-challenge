import { useState } from "react";

const useAddItemForm = callback => {
  const initialFormState = {
    name: "",
    amount: 1,
    fridge: "Fridge 1"
  };

  const [formData, setFormData] = useState(initialFormState);

  const updateFormData = event =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

  const handleSubmit = event => {
    if (event) event.preventDefault();
    callback();
    setFormData(initialFormState);
  };

  return {
    updateFormData,
    handleSubmit,
    formData
  };
};

export default useAddItemForm;
