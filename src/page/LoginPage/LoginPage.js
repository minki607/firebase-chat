import React from "react";
import { Link } from "react-router-dom";
import { authContainer } from "../../commons/styles/common.module.scss";

const LoginPage = () => {
  return (
    <div className={authContainer}>
      <form>
        <h1>로그인</h1>
        <label>Email</label>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" />

        {/* include validation with required or other standard HTML validation rules */}
        <label>Password</label>
        <input />
        <input type="submit" />
      </form>
      <Link to="/register">아이디가 없다면...</Link>
    </div>
  );
};

export default LoginPage;
