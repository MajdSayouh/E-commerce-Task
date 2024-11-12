import React from 'react';
import { useSelector } from 'react-redux';
import './Checkout.css';
// import { Alert } from 'bootstrap';

const Checkout = () => {

  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="checkout-page container mt-5">
      <h2 className="text-center mb-4">Checkout</h2>
      <div className="row">
        <div className="col-md-6">
          <h4>Billing Details</h4>
          <form>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <input type="text" className="form-control" placeholder="Enter your address" />
            </div>
            <div className="mb-3">
              <label className="form-label">City</label>
              <input type="text" className="form-control" placeholder="City" />
            </div>
            <div className="mb-3">
              <label className="form-label">Postal Code</label>
              <input type="text" className="form-control" placeholder="Postal Code" />
            </div>
          </form>
        </div>

        <div className="col-md-6">
        <h4>Order Summary</h4>
        <div className="order-summary">
          {cartItems.map((item) => (
            <div key={item.id} className="d-flex justify-content-between mb-3">
              <span>
                {item.name} (x{item.quantity || 1})
              </span>
              <span>
                ${((Number(item.price) || 0) * (Number(item.quantity) || 1)).toFixed(2)}
              </span>
            </div>
          ))}
          <hr />
          <div className="d-flex justify-content-between">
            <h5>Total</h5>
            <h5>${cartItems.reduce((acc, item) => acc + (Number(item.price) || 0) * (Number(item.quantity) || 1), 0).toFixed(2)}</h5>
          </div>
          <button className="btn btn-success btn-lg mt-4 w-100" onClick={()=>alert('order completed')}>Place Order</button>
        </div>
      </div>
      
      </div>
    </div>
  );
};

export default Checkout;
