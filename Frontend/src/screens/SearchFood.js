import React, { useEffect, useState } from "react";
import "./style/HomeScreen.css";
import Product from "../components/Product";

//actions
import { useParams } from "react-router";
import { searchProducts } from "../redux/Apicall";
function SearchFood() {
  const { search, categories } = useParams();
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      let data;
      if (search) {
        data = await searchProducts(search);
      } else {
        data = await searchProducts(categories);
      }
      setProduct(data);
    };
    fetchApi();
  }, [search, categories]);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            desc={product.desc}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchFood;
