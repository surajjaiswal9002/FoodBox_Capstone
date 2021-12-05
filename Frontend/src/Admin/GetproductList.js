import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

function GetproductList() {
  const [products, setProduct] = useState([]);

  const apiGet = async () => {
    const response = await fetch("http://localhost:8080/products/all");
    setProduct(await response.json());
  };

  useEffect(() => {
    apiGet();
  }, []);

  return (
    <>
      <h2>Admin Manage Products:</h2>
      <Link to="/Addproduct">
        <Button variant="primary">Add Product </Button>
      </Link>{" "}
      |<Button variant="warning">Edit</Button> |
      <Button variant="danger">Delete</Button>
      <Table>
        <thead>
          <tr>
            <th>Sl.No</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image</th>
            <th>Stock</th>
            <th>Category</th>
          </tr>
        </thead>

        <tbody>
          {products.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.desc}</td>
                <td>{data.image}</td>
                <td>{data.price}</td>
                <td>{data.stocks}</td>
                <td>{data.categories}</td>

                <td>
                  <Button variant="warning">Edit</Button>
                </td>
                <td>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            );
          })}
          ;
        </tbody>
      </Table>
    </>
  );
}

export default GetproductList;
