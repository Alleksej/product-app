
import React, { createContext, useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import classes from "./ProductContext.module.css"
import { Link } from 'react-router-dom';



export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [counter, setCounter] = useState(9);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');

        if (response.ok) {
          const data = await response.json();
          console.log('Uspješno dohvaćeni podaci:', data);

          setProducts(data.products);
        } else {
          console.log('Dohvaćanje podataka nije uspjelo. Status:', response.status);
        }
      } catch (error) {
        console.log('Greška prilikom dohvaćanja proizvoda:', error);
      }
    };

    fetchProducts();
  }, []);



  const addProduct = (item) => {
    setProducts([...products, ]);
  };





 const deleteProduct = (id) => {
  fetch(`https://dummyjson.com/products/${id}`, {
    method: 'DELETE',
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.id);
      setProducts(products.filter((product) => product.id !== id));
      
    })
    .catch((error) => {
      console.log('Greška prilikom brisanja proizvoda:', error);
    });
};




  const updateProduct = (product) => {
    setProducts(
      products.map((item) =>
        item.id === product.id ? { ...item, ...product } : item
      )
    );
  };





  const displayedProducts = Array.isArray(products) ? products.slice(0, counter) : [];
 

  
 return (
  <ProductContext.Provider value={{ products, addProduct, deleteProduct, updateProduct }}>
    {products.length === 0 ? (
        <div>Loading spinner...</div>
      ) : (
        <>
        <div className={classes.div}>
          <h1 className={classes.h1}>List of Products</h1>
      <Link to="/product/add">
        <button className={classes.button}  >Add Product</button>
      </Link>
      </div>
<div className={classes.products}>
          {displayedProducts.map((item) => (
            <ProductItem key={item.id} product={item} />
          ))}
</div>
          <div className={classes.div1}>
          {counter < products.length && (
            <button className={classes.button} onClick={() => setCounter((prevCounter) => prevCounter + 9)}>
              Load more
            </button>
          )}</div>
          
        </>
      )}
  </ProductContext.Provider>
);
};





























