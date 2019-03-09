import React, { Component } from "react";

class AddItemComponentForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      amount: 1,
      fridge: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    alert("An essay was submitted: " + this.state.value);
    event.preventDefault();
  }
  render() {
    const { name, amount, fridge } = this.state;
    return (
      <form>
        <input
          value={name}
          onChange={this.handleInputChange}
          placeholder="Name"
          type="text"
          name="name"
          required
        />
        <input
          value={amount}
          min={1}
          onChange={this.handleInputChange}
          placeholder="amount"
          type="number"
          name="amount"
          required
        />
       <label>
          Pick your Fridge:
          <select value={fridge} onChange={this.handleInputChange}  name="fridge">
            <option value="Fridge 1">Fridge 1</option>
            <option value="Fridge 2">Fridge 2</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default AddItemComponentForm;


  
