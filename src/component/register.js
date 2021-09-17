import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [regno, setregno] = useState("");
  const changeHandler = (e) => {
    setregno(e.target.value);
  };

  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    if (regno == "selve12345") {
      localStorage.setItem("login", "x");
      history.push("/");
    } else {
      alert("please insert correct reg no.");
    }
  };

  return (
    <div style={{ margin: "30px" }}>
      <form onSubmit={submitHandler}>
        <input
          value={regno}
          onChange={changeHandler}
          placeholder="Enter your registeration number then enter the home page"
          style={{ padding: "10px 20px" }}
        />
        <button style={{ padding: "10px 30px", marginLeft: "20px" }}>
          next
        </button>
      </form>
    </div>
  );
};
export default Register;
