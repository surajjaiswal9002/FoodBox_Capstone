import axios from "axios";

export const searchProducts = async (name) => {
  let url;
  if (name !== "all") {
    url = `http://localhost:8080/products/searchbyname/${name}`;
  }
  else {
    url = `http://localhost:8080/products/searchbycategories/all`
  }
  try {
    const res = await axios.get(
      url
    );
    return res.data;
  } catch (error) {
    console.log(error)
  }
};

