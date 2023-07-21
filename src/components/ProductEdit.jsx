

import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductContext } from './ProductContext';
import classes from "./ProductEdit.module.css"

const ProductEdit = () => {
  const { id } = useParams();
  const { products, updateProduct } = useContext(ProductContext);  //products = items
  const navigate = useNavigate();

  const productId = parseInt(id, 10);
const product = products.find((product) => product.id === productId);


  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);

  const handleEdit = () => {
    const updatedProduct = {
      title,
      price,
      description,
    };

    updateProduct(updatedProduct);

    fetch(`https://dummyjson.com/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.id); 
        navigate('/');
      })
      .catch((error) => {
        console.log('Greška prilikom ažuriranja proizvoda:', error);
      });
  };

  return (
    <div>
      <h1 className={classes.h1}>Edit Product</h1>
      <form className={classes.form}>
        <label className={classes.label}>
          Title:
          <input type="text" className={classes.input}  value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label className={classes.label}>
          Price:
          <input type="number"  className={classes.input} value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <label className={classes.label}>
          Description:
          <textarea className={classes.textarea} value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
      </form>
      <button onClick={handleEdit} className={classes.button}>Edit Product</button>
    </div>
  );
};

export default ProductEdit;



