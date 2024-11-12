import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../store/actions/cartActions';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {

  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const total = cartItems.reduce((acc, item) => acc + (Number(item.price) || 0) * (Number(item.quantity) || 1), 0);

  return (
    <div className="cart-page container mt-5">
      <h2 className="text-center mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="cart-list">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item row mb-3">
              <div className="col-3">
                <img src={item.image} alt={item.name} className="img-thumbnail" />
              </div>
              <div className="col-6">
                <h5>{item.name}</h5>
                <p className="text-muted">${item.price.toFixed(2)}</p>

              </div>
              <div className="col-3 text-end">
                <button
                  onClick={() => handleRemove(item.id)}
                  className="btn btn-danger btn-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-summary text-end mt-4">
            <h4>Total: ${total.toFixed(2)}</h4>
            <Link className="btn btn-primary mt-2" to={'/checkout'} >Proceed to Checkout</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
