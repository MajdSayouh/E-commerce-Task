import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/apiServices';
import ProductCard from '../components/ProductCard';
import './home.css';

const Home = () => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
      setFilteredProducts(productsData);

      const uniqueCategories = ['All', ...new Set(productsData.map(product => product.category))];
      setCategories(uniqueCategories);
    };
    loadProducts();
  }, []);

  useEffect(() => {
    let filtered = products;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product?.title?.toLowerCase().includes(searchQuery?.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategory, products]);

  return (
    <div className="home-page container mt-5">
      <h2 className="text-center mb-4">Our Products</h2>

      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="col-md-3 mb-2">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Message for no results */}
      {filteredProducts.length === 0 && (
        <p className="text-center text-muted">No products found.</p>
      )}
    </div>
  );
};

export default Home;
