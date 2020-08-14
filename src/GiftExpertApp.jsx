import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import PropTypes from "prop-types";
import { GifGrid } from "./components/GifGrid";
const GiftExpertApp = () => {
  //const categories = ["One Punch", "Samurai X", "Naruto"];
  const [categories, setCategories] = useState(["Naruto"]);

  //Añadir mas elementos al arreglo
  /*  const handleCategoryAdd = () => {
    //1.
    //Al final del arreglo
    //setcategories([...categories, "Werever"]);
    //Primero en el arreglo
    //setcategories(["Werever", ...categories]);
    //2.
    setcategories((cats) => [...categories, "SI"]);
  }; */

  return (
    <>
      <h2>GiftExpertApp</h2>
      <hr />
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid category={category} key={category} />
        ))}
      </ol>
    </>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default GiftExpertApp;
