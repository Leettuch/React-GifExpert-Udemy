import React, { useState } from "react";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setinputValue] = useState("");

  const handleInputChange = (e) => {
    //console.log(e.target.value);
    setinputValue(e.target.value);
  };

  const handleSubtmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [ inputValue, ...cats]);
      setinputValue("");
    }
  };

  return (
    <form onSubmit={handleSubtmit}>
      <h3>{inputValue}</h3>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};
