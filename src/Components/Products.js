import React from 'react';
import "./products.css";
import { useState } from 'react';



const Products = () => {
    const [selectedSize, setSelectedSize] = useState('S');
    const [selectedPrice, setSelectedPrice] = useState(899);
    const [selectedQty, setSelectedQty] = useState(1);
  
  
    const handleQtyChange = (e) => {
      setSelectedQty(e.target.value);
    };
    return (
   <> <div className='heading'>
      <h1>Products Page</h1>
      <p>Browse our list of products here.</p>
    </div>
    <div className="product-page">
    <div className="product-image-container">
      <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-7inch-black?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2L2xJT1MvUkQrVjRwaXNCNlgyUGhDdU9MekhWSGZtV1pvV240QzNuTk80VXpBSHlqQStCOGVBOUJkSkVqU0hLTkJ3RC8ybEJhSjFVM3VwK3JSSzN2NjRmbW94YnYxc1YvNXZ4emJGL0IxNFp3PT0=&traceId=1" alt="Product Image" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUERsvgGvwn7koz-j5g90k0rNHMPSikdwTBg&s" alt="Product Image" />
    </div>
    <div className="product-details">
      <h1>Product Name</h1>
      <p>Price: ${selectedPrice}</p>
      
      <label htmlFor="qty-select">Quantity:</label>
      <select id="qty-select" value={selectedQty} onChange={handleQtyChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button>Add to Cart</button>
    </div>
  </div>
  </>
    );
};

export default Products;