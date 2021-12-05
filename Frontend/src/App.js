import React, { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import Header from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import GetproductList from "./Admin/GetproductList";
import Admin from "./components/Admin";
import Contact from "./components/Contact/Contact";
import Profile from "./components/Profile";

// Screens
import Productitem from "./screens/Productitem";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import SearchFood from "./screens/SearchFood";
import Home from "./screens/Home";
import AddProduct from "./Admin/AddProduct";
//import Updateproduct from "./Admin/Updateproduct";


function App() {
  const [sideToggle, setSideToggle] = useState(false);

  // const state ={};

  // useEffect(()=> {

  //     const config={
  //         headers:{
  //             Authorization:'Bearer' + localStorage.getItem('token')
  //         }
  //     }
  //     axios.get('user', config)
  //         .then(res=>{
  //             console.log(res)
  //            thisstate({user: res.data})
  //         },
  //         err=>{
  //             console.log(err)
  //         }
  //         )
  // });

  return (
    <Router>
      <Header click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products/all" component={Productitem} />
          <Route exact path="/products/search/:search" component={SearchFood} />
          <Route
            exact
            path="/products/search/:Categories"
            component={SearchFood}
          />
          {/* <Route exact path="/products/categories:categories" component={ProductScreen} /> */}
          <Route exact path="/products/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/GetproductList" component={GetproductList} />
          <Route exact path="/Addproduct" component={AddProduct} />
          {/* <Route exact path="/AddProduct" component={Updateproduct} /> */}
        </Switch>
      </main>
    </Router>
  );
}

export default App;
