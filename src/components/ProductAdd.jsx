import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from './ProductContext';
import classes from "./ProductAdd.module.css"


const ProductAdd = () => {
  const { addProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    const newProduct = {
      title,
      price,
      description,
    };

    fetch('https://dummyjson.com/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.id); 
        navigate('/');
      })
      .catch((error) => {
        console.log('Greška prilikom dodavanja proizvoda:', error);
      });
  };

  return (
    <div>
      <h1 className={classes.h1}>Add Product</h1>
      <form className={classes.form}>
        <label className={classes.label}>
          Title:
          <input type="text" className={classes.input} value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label className={classes.label}>
          Price:
          <input type="number"  className={classes.input} value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <label className={classes.label}>
          Description:
          <textarea  className={classes.textarea} value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
      </form>
      <button onClick={handleAdd} className={classes.button}>Add Product</button>
    </div>
  );
};

export default ProductAdd;


