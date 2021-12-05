import React from "react";

function Updateproduct() {
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [image, setImage] = useState("");
//   const [desc, setDesc] = useState("");
//   const [stocks, setStocks] = useState("");
//   const [categories, setCategories] = useState("");

  return (
    <div className="col-sm-6 offset-sm-3">
      <h2>Add Product</h2>
      <br />
      <input type="text" className="form-control" placeholder="name" />
      <br />
      <input type="number" className="form-control" placeholder="price" />
      <br />
      <input type="file" className="form-control" placeholder="image Path" />
      <br />
      <input type="text" className="form-control" placeholder="desc" />
      <br />
      <input type="number" className="form-control" placeholder="stocks" />
      <br />
      <input type="text" className="form-control" placeholder="categories" />
      <br />
      <button type="button" className="btn btn-primary">
        Update product
      </button>
    </div>
  );
}

export default Updateproduct;
