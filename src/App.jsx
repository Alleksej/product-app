
import React from 'react';
import { Routes, Router, Route} from "react-router-dom"
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import ProductEdit from './components/ProductEdit';
import ProductAdd from './components/ProductAdd';
import { ProductProvider } from './components/ProductContext';
import './App.css';
function App() {
  return (
 
    
    <ProductProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/add" element={<ProductAdd />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/product/edit/:id" element={<ProductEdit />} />
        </Routes>
      </Router>
    </ProductProvider> 
  );
}

export default App;


