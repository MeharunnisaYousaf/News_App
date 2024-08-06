import React, { useState } from "react";
import "./style.css";
import { categories } from "./categories";
import Header from "./components/Header";
import { CiBookmark } from "react-icons/ci";
import { IoIosTrendingUp } from "react-icons/io";
import { TiTick } from "react-icons/ti";


export default function CategorySelection() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryClick = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };



  return (
    <div>
      <Header selectedCategories={selectedCategories} />
      <br />
      <div className="bookmarks">
        <div className="col-1">
          <CiBookmark style={{ width: '70px', height: '70px', marginTop: '10px' }} />

          <h5 style={{ padding: '5px' }}>BOOKMARKS</h5>
        </div>
        <div className="col-2">
          <IoIosTrendingUp style={{ width: '70px', height: '70px', marginTop: '10px' }} />
          <h5 style={{ padding: '5px' }}>TRENDING</h5>
        </div>
      </div>
      <br />
      <h3>Categories</h3>
      <div className="category-container">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className={`category-item ${selectedCategories.includes(category.name) ? "selected" : ""}`}
            onClick={() => handleCategoryClick(category.name)}
          >
            <img src={category.image} alt={category.name} />
            <p className="category-name">{category.name}</p>
            {selectedCategories.includes(category.name) && <div className="tick-mark"><TiTick style={{ fontSize: '30px' }} /></div>}
          </div>
        ))}
      </div>


    </div>
  );
}
