import React from 'react';
import { useCart } from './CartContext';

const ProductList = () => {
  const { dispatch } = useCart();

  // Assuming you fetched the product data from an API
  const products = [
    {
      "id": 1,
      "title": "iPhone 9",
      "price": 549,
      "stock": 94,
      "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    },
    {
      "id": 2,
      "title": "iPhone X",
      "price": 899,
      "stock": 34,
      "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
    },
    {
      "id": 3,
      "title": "Samsung Universe 9",
      "price": 1249,
      "stock": 36,
      "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg"
    },
    {
      "id": 4,
      "title": "OPPOF19",
      "price": 280,
      "stock": 123,
      "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
    },
    {
      "id": 5,
      "title": "Huawei P30",
      "price": 499,
      "stock": 32,
      "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg"
    }
    // ... (repeat for other products)
  ];

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div>
      <h2>Product List</h2>
      <div className="product-container">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} className="product-image" />
            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">${product.price}</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;