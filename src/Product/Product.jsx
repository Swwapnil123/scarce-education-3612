 import "./Product.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
//https://cdn.dribbble.com/users/114038/screenshots/3674970/product_card_design_2x.png
//https://fakestoreapi.com/products
export default function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=28")
      .then((respond, error) => {
        setProductList(respond.data);
      });
  }, []);

  const renderPRoducts = () => {
    return productList.map((item, index) => {
      return (
        <div className="item-box" key={item.id}>
          <img className="item-box__img" src={item.image} alt="Product" />
          <h3 className="item-box__h3">{item.category}</h3>
          <p className="item-box__p ">{item.title}</p>
          <p className="item-box__price">{item.price}</p>
          <button className="item-box__button">Add to cart</button>
        </div>
      );
    });
  };
  return (
    <>
      <section>{productList.length && renderPRoducts()}</section>
    </>
  );
}
