import axios from "axios";
import React, { useState } from "react";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [stocks, setStocks] = useState("");
  const [categories, setCategories] = useState("");

  function addProduct() {
    const item = { name, price, stocks, image, desc, categories };
    console.log(item);

    axios
      .post("http://localhost:8080/products/add", item)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="col-sm-6 offset-sm-3">
      <h2>Add Product</h2>
      <br />
      <input
        type="text"
        className="form-control"
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />
      <br />
      <input
        type="number"
        className="form-control"
        onChange={(e) => setPrice(e.target.value)}
        placeholder="price"
      />
      <br />
      <input
        type="file"
        className="form-control"
        onChange={(e) => setImage(e.target.value)}
        placeholder="image Path"
      />
      <br />
      <input
        type="text"
        className="form-control"
        onChange={(e) => setDesc(e.target.value)}
        placeholder="desc"
      />
      <br />
      <input
        type="number"
        className="form-control"
        onChange={(e) => setStocks(e.target.value)}
        placeholder="stocks"
      />
      <br />
      <input
        type="text"
        className="form-control"
        onChange={(e) => setCategories(e.target.value)}
        placeholder="categories"
      />
      <br />
      <button type="button" className="btn btn-primary" onClick={addProduct}>
        Add Prodcut
      </button>
    </div>
  );
}

export default AddProduct;
