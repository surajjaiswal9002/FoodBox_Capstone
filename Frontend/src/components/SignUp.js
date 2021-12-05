import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import "./Style/SignUp.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [uname, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [pwd, setPassword] = useState(" ");
  const [umobile, setMobile] = useState(" ");
  const history = useHistory();

  function handleSubmit() {
    const item = { uname, email, pwd, umobile };
    console.log(item);

    axios
      .post("register", item)
      .then((res) => {
        console.log(res);
        history.push("/");
        window.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="form-signup">
      <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputName" className="sr-only">
        Name
      </label>
      <input
        type="email"
        id="inputtext"
        className="form-control"
        placeholder="Name"
        required
        autofocus
        value={uname}
        onChange={(e) => setName(e.target.value)}
      />
      <label for="inputEmail" className="sr-only">
        Email address
      </label>
      <input
        type="email"
        id="inputtext"
        className="form-control"
        placeholder="Email"
        required
        autofocus
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label for="inputPassword" className="sr-only">
        Password
      </label>
      <input
        type="password"
        id="inputPassword"
        className="form-control"
        placeholder="Password"
        required
        value={pwd}
        onChange={(e) => setPassword(e.target.value)}
      />

      <label for="inputName" className="sr-only">
        Mobile-no
      </label>
      <input
        type="number"
        id="inputNumber"
        className="form-control"
        placeholder="Enter Mobile Number"
        value={umobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <Button
        className="btn btn-lg btn-primary btn-block"
        type="submit"
        // onClick={signup}
        onClick={handleSubmit}
      >
        Sign-Up
      </Button>
    </div>
  );
}

export default SignUp;
