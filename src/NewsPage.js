import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { news } from "./news";
import "./style.css";
import { IoIosRefresh } from "react-icons/io";
import { TfiAngleLeft } from "react-icons/tfi";
// import Footer from "./components/Footer";

export default function NewsPage() {
  const location = useLocation();
  const { selectedCategories } = location.state || { selectedCategories: [] };

  const filteredNews = news.filter(item => selectedCategories.includes(item.category));

  const navigate = useNavigate();

  const [refresh, setRefresh] = useState(0);

  const goBackHome = () => {
    navigate('/');
  };

  const refreshPage = () => {
    console.log("Refresh page function called");
    setRefresh(refresh + 1);
  };

  return (
    <div>
      <div className="litty">
        <TfiAngleLeft onClick={goBackHome} style={{ cursor: 'pointer' }} />
        <span> Feed</span>
        <IoIosRefresh onClick={refreshPage} style={{ cursor: 'pointer' }} />
      </div>
      <div className="news-container">
        {filteredNews.length > 0 ? (
          filteredNews.map((item, idx) => (
            <div key={idx} className="news-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.heading}</h3>
              <p className="category">{item.category}</p>
              <p>{item.description}</p>
            </div>
          ))
        ) : (
          <p>No news available for the selected categories.</p>
        )}
      </div>
      {/* <Footer/> */}
    </div>
  );
}
