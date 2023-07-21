
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from './ProductContext';
import classes from "./ProductDetails.module.css"


const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

 
 const productId = parseInt(id, 10);
 const product = products.find((product) => product.id === productId);


  if (!product) {
    return <div>Loading...</div>;
  }

  const { title, description, price } = product;

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={product.images[0]} alt={product.name}  className={classes.img}  />
      <h3>{price}</h3>
    </div>
  );
};

export default ProductDetails;

























