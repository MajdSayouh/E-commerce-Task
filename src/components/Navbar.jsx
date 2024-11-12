import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated, signOut } from '../services/auth';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
// import { signOut } from '../services/auth';

const Navbar = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.items);
  const userLoggedIn = isAuthenticated();

  const handleSignOut = () => {
    signOut();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">E-Commerce</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart <FaShoppingCart />
                {cartItems.length > 0 && (
                  <span className="badge bg-light text-dark ms-1">{cartItems.length}</span>
                )}
              </Link>
            </li>
            {userLoggedIn ? (
              <li className="nav-item">
                <button onClick={handleSignOut} className="btn btn-link nav-link">Sign Out</button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Sign In</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
