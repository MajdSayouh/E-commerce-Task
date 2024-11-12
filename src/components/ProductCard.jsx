import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cartActions';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="card product-card h-100 shadow-sm">
      <img
        src={product.image}
        className="card-img-top product-image"
        alt={product.title}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text text-muted">${product.price}</p>
        <button
          onClick={handleAddToCart}
          className="btn btn-primary mt-auto w-100"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
