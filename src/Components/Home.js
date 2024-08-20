import React from 'react';
import './home.css';

const Home = () => {
    return (
        <div >
          <div className='homePage'>  <h1>Home Page</h1>
          <h2>Product Categories</h2></div>

            <ul  >
                <li className='liC' >Electronics</li>
                <li className='liC'>Clothing</li>
                <li className='liC'>Home & Kitchen</li>
                <li className='liC'>Books</li>
                <li>Sports & Outdoors</li>
            </ul>
         <img className='img' src="https://4kwallpapers.com/images/walls/thumbs_3t/1546.jpg" alt='Flag' onClick={()=>alert("Happy Independence Day Bharat")}/>
        </div>
        
    );
};

export default Home; 
