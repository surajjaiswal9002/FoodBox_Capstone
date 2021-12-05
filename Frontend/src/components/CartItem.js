import React from "react";
import { Link } from "react-router-dom";
import "./Style/CartItem.css";

function CartItem({ item, qtyChangeHandler, removeHandler }) {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={item.image} alt={item.name} />
      </div>

      <Link to={`/product/${11}`} className="cartItem__name">
        <p> {item.name} </p>
      </Link>

      <p className="cartitem__price">₹{item.price}</p>

      <select
        className="cartItem__select"
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
      >
        {[...Array(item.stocks).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>

      <button
        type="button"
        className="cartItem__deleteBtn"
        onClick={() => removeHandler(item.product)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}
export default CartItem;
