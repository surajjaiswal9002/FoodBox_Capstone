import React, { useEffect } from "react";
import "./style/HomeScreen.css";
import Product from "../components/Product";
import { useSelector, useDispatch } from "react-redux";

//actions
import { getProducts as listProducts } from "../redux/actions/productAction";

function Productitem() {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  let { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              desc={product.desc}
              price={product.price}
              image={product.image}
              categories={product.categories}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Productitem;
