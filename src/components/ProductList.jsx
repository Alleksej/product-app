
import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';
const ProductList = () => {
  const { products } = useContext(ProductContext);

  return (

    
 
    <div >
    
<div >
    <h1>List of Products</h1>
      <Link to="/product/add">
        <button >Add Product</button>
      </Link>
      </div>
    {products.map((product) => (
      <div key={product.id} >
        <ProductItem product={product} />
      </div>
    ))}
  </div>
 
);
};
export default ProductList;























