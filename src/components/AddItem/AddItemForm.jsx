import React from 'react';
import useAddItemForm from "./useAddItemForm";

const AddItemForm = props => {
  const { formData,handleSubmit, updateFormData } = useAddItemForm(add);

  function add() {
    props.addItem(formData);
    // console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={formData.name}
        onChange={e => updateFormData(e)}
        placeholder="Name"
        type="text"
        name="name"
        required
      />
      <input
        value={formData.amount}
        min={1}
        onChange={e => updateFormData(e)}
        placeholder="amount"
        type="number"
        name="amount"
        required
      />
     <label>
        Pick your Fridge:
        <select value={formData.fridge} 
        onChange={e => updateFormData(e)}  name="fridge">
          <option value="Fridge 1">Fridge 1</option>
          <option value="Fridge 2">Fridge 2</option>
        </select>
      </label>

      <button type="submit">Add {props.name}</button>
    </form>
  );
}


  
export default AddItemForm;