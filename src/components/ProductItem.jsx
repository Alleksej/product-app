
import React, { useContext } from 'react';
import {  useParams, Link } from 'react-router-dom';
import { ProductContext, ProductProvider } from './ProductContext';
import classes from "./ProductItem.module.css"

const ProductItem = ({ product }) => {
  const { id, title, price, description,  image } = product;
  const { deleteProduct } = useContext(ProductContext);

  const { products } = useContext(ProductContext);
 
  const handleDelete = () => {
    deleteProduct(id);
  };

 
  
  return (
    <div className={classes.gridContainer}>
         
   
      



      <div className={classes.item}>
        <p style={{ textDecoration: 'underline' }}>Product no. {product.id}</p>
      <h1>{title}</h1>
      <p>({description})</p>       
       <img src={product.images[0]} alt={product.name}  className={classes.img}  />
      <h4>Price: {price} $</h4> 
      
      
      
      <div className={classes.buttons}>
      <Link to={`/product/${product.id}`}>
  <button className={classes.button} >View Details</button>
</Link>
<Link to={`/product/edit/${product.id}`}>
        <button  className={classes.button} >Edit Product</button>
      </Link>
      <button  onClick={handleDelete} className={classes.button} >Delete</button>
      </div>

      
      </div>
    </div>
  );
};

export default ProductItem;




          





























