import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header({ selectedCategories }) {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate('/news', { state: { selectedCategories } });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    
  };

  return (
    <div className='header'>
      <div className="row">
        <i className="fa-solid fa-gear icon" style={{ color: '#000000', fontSize: '24px' }}></i>
        <span style={{fontSize:'20px'}}>Discover</span>
        <div
          onClick={handleProceed}
          style={{ textDecoration: 'none', color: 'black', fontSize: '20px', cursor: 'pointer' }}
        >
          Feed <i className="fa-solid fa-greater-than" style={{ color: '#000000' }}></i>
        </div>
      </div>
      <div className="search-container">
        <form onSubmit={handleSearch} style={{ width: '100%', position: 'relative' }}>
          <input 
            type="text" 
            placeholder="Search" 
            className="search-input" 
          />
           <i className="fa-solid fa-magnifying-glass search-icon" style={{color:'#000000'}}></i>

        </form>
      </div>
    </div>
  );
}

export default Header;
