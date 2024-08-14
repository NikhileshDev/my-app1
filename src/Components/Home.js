import React from 'react';
import './home.css';

const Home = () => {
    return (
        <div>
          <div className='homePage'>  <h1>Home Page</h1>
          <h2>Product Categories</h2></div>

            <ul  >
                <li className='liC' >Electronics</li>
                <li className='liC'>Clothing</li>
                <li className='liC'>Home & Kitchen</li>
                <li className='liC'>Books</li>
                <li>Sports & Outdoors</li>
            </ul>
         <img src="https://plus.unsplash.com/premium_photo-1701534008693-0eee0632d47a?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='' onClick={()=>alert("Thank you")}/>
        </div>
        
    );
};

export default Home; 
