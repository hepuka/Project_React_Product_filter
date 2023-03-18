import React from "react";
import "./Categories.css";

/*a kategória első betűjét naggyá teszi a többit hozzárakja*/

const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="--flex-center">
      {categories.map((item, index) => {
        return (
          <button
            type="button"
            className="btn --btn --btn-secondary"
            key={index}
            onClick={() => filterItems(item)}
          >
            {capitalize(item)}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
