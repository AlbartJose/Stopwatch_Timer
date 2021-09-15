import React, { useState } from "react";

var initValue = {
  name: "",
  email: "",
  age: "",
  isMarried: null,
};

export const Form = () => {
  const [formData, setFormData] = useState(initValue);
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input onChange={handleChange} type="text" name="name"></input>
      </label>
      <label>
        email
        <input onChange={handleChange} type="text" name="email"></input>
      </label>
      <label>
        Age
        <input onChange={handleChange} type="number" name="age"></input>
      </label>
      <label>
        Married
        <input onChange={handleChange} type="checkbox" name="isMarried"></input>
      </label>
      <label>Continent: </label>
      <select onChange={handleChange} name="continent">
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Europe">Europe</option>
        <option value="Australia">Australia</option>
      </select>
      <input type="submit" value="submit"></input>
    </form>
  );
};
