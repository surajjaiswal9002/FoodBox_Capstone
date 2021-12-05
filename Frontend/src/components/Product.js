import React from "react";
import "./Style/Product.css";

import { Link } from "react-router-dom";

function Product({ image, name, id, price, desc, categories }) {
  return (
    <div className="product">
      <img src={image} alt={name} />

      <div className="product__info">
        <p className="info__name">{name}</p>

        <p className="info__description">{desc}...</p>
        <p className="info__description">{categories}</p>

        <p className="info__price">₹{price}</p>

        <Link to={`/products/${id}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
}

export default Product;
