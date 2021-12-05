import Button from "@restart/ui/esm/Button";
import axios from "axios";
import React, {  useState } from "react";
import { useHistory } from "react-router";
import "./Style/SignIn.css";

function Admin() {
  const [a_mail, setEmail] = useState("");
  const [a_password, setPassword] = useState("");
  const history = useHistory();

  function handleSubmit() {
    const item = { a_mail, a_password };

    axios
      .post("admins/adminAdd", item)
      .then((res) => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res));
        history.push("/GetproductList");
        window.location.reload(true);
        // localStorage.setItem("token",res.token);
      })
      .catch((err) => {
        alert(" Bad Credintial" + err);
        console.log(err);
      });
  }

  return (
    <div className="form-signin">
      <h1 className="h3 mb-3 font-weight-normal">Admin Sign In</h1>
      <label for="inputEmail" className="sr-only">
        Email address
      </label>
      <input
        onChange={(event) => setEmail(event.target.value)}
        type="email"
        id="inputEmail"
        className="form-control"
        placeholder="Email address"
        required
        autofocus
      />
      <label for="inputPassword" className="sr-only">
        Password
      </label>
      <input
        onChange={(event) => setPassword(event.target.value)}
        type="password"
        id="inputPassword"
        className="form-control"
        placeholder="Password"
        required
      />
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <Button
        // onClick={loginApi}
        className="btn btn-lg btn-primary btn-block"
        type="submit"
        onClick={handleSubmit}
      >
        Sign in
      </Button>
    </div>
  );
}

export default Admin;
