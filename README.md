# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



# E-Commerce Frontend Application

## Overview
This is a React.js frontend e-commerce application. It allows users to browse products, add items to a cart, view their order summary, and proceed through a simulated checkout process. The app uses Redux for global state management and Bootstrap for responsive styling.

## Features
- **Product Display**: Browse and view products with images, descriptions, and prices.
- **Shopping Cart**: Add products to the cart, and view the cart total.
- **Order Summary and Checkout**: Enter billing details, review the order summary, and submit a fake payment.
- **Global State Management**: Uses Redux to manage cart state across the app.

## Technology Stack
- **Frontend**: React.js, Bootstrap. axios
- **State Management**: Redux 

## Live Demo: 
[Live Demo]((https://majdsayouh.github.io/E-commerce-Task/))

## Getting Started

### Prerequisites
- Ensure you have **Node.js** and **npm** installed.

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/MajdSayouh/E-commerce-Task
   cd ecommerce-frontend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Development Server**
   Start the app locally by running:
   ```bash
   npm start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

4. **Build for Production**
   Create an optimized production build:
   ```bash
   npm run build
   ```
   The optimized build will be in the `build/` directory.

### Accessing the Live Version
If the project is deployed, you can access the live version here:
[Your Live App](https://your-app-url.com)

## Project Structure
```
src/
|-- actions/
|   |-- cartActions.js            # Redux actions for cart functionality
|-- components/
|   |-- Navbar.js                 # Navbar component
|   |-- ProductCard.js            # Product card component for home page
|-- pages/
|   |-- Home.js                   # Home page displaying product listings
|   |-- Cart.js                   # Cart page for cart items and total calculation
|   |-- Checkout.js               # Checkout page for order summary and billing form
|-- reducers/
|   |-- cartReducer.js            # Redux reducer for cart actions
|-- App.js                        # Main application component
|-- index.js                      # Application entry point
```

## Usage
1. **Browse Products**: Start on the home page to view available products, filter them by Search query or category.
2. **Add to Cart**: Add items to the cart and adjust quantities on the cart page.
3. **Checkout**: Enter billing details and view the final order summary on the checkout page.

## Notes for Developers

### State Management
- **Redux**: The app uses Redux for state management to handle the cart globally.
  - Actions: `cartActions.js` includes actions for adding/removing items.
  - Reducers: `cartReducer.js` processes cart updates.

### Styling
- **Bootstrap**: Used for consistent, responsive styling across the application.

## Future Enhancements
- **User Authentication**: Add sign-in and sign-up functionality.
- **Real Payment Gateway**: Integrate a payment processor (e.g., Stripe or PayPal).
- **Backend Integration**: Connect to a backend API to fetch products and handle order processing.

---

### GitHub Repository

This project is hosted on GitHub, and you can find the complete source code at:
[GitHub Repository Link]([https://github.com/yourusername/ecommerce-frontend](https://github.com/MajdSayouh/E-commerce-Task))

---

This `README` provides a clear guide on setup, usage, and access to a live version. Be sure to replace the placeholders with your actual links.
