import React, { useState } from "react";
import { connect } from "react-redux";
import useApi from "../hooks";
import { SET_TOKEN } from "../store/reducers/authReducer";

import "./styles/style.css";

const Login = (props) => {
  console.log(">>>LOGIN PROPS", props);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const api = useApi();

  const onClickLoginBtn = () => {
    const postData = {
      email,
      password,
    };
    api
      .post("auth/login", postData)
      .then((response) => {
        console.log(">>>LOGIN RESPONSE", response);
        window.location.href = "#/";
        window.location.reload();
        if (response.data.status === "success") {
          localStorage.setItem("token", response.data.data.token);
          const action = {
            type: SET_TOKEN,
            payload: {
              token: response.data.data.token,
            },
          };
          props.dispatch(action);
        }
      })
      .catch((err) => {
        console.log(">>>LOGIN ERR", err);
        alert(err.response.data.errorMessage);
      });
  };

  return (
    <div id="maincontainer">
      <div class="formcontainer">
        <div class="imgcontainer">
          <img src="user.png" alt="" />
        </div>
        <div class="inputcontainer">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="inputcontainer">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div class="btncontainer">
          <button type="button" onClick={onClickLoginBtn}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(">>>LOGIN STATE", state);
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(Login);
