import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  authContainer,
  errorMsg,
} from "../../commons/styles/common.module.scss";

const RegisterPage = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const password = useRef();
  password.current = watch("password");
  console.log(password);
  return (
    <div className={authContainer}>
      <form>
        <h1>회원가입</h1>
        <label htmlFor="email">Email</label>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          id="email"
          name="email"
          type="email"
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />

        <div className={errorMsg}>
          {errors.email && errors.email.type === "required" && (
            <span>이메일 입력은 필수 사항입니다</span>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <span>이메일 형식이 맞지 않습니다.</span>
          )}
        </div>

        {/* include validation with required or other standard HTML validation rules */}
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          {...register("name", {
            required: true,
            maxLength: 10,
          })}
        />
        <div className={errorMsg}>
          {errors.name && errors.name.type === "required" && (
            <span>이름 입력은 필수 사항입니다</span>
          )}
          {errors.name && errors.name.type === "maxLength" && (
            <span>이름은 10자 이하로 기재해주세요</span>
          )}
        </div>

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          {...register("password", {
            required: true,
            minLength: 8,
          })}
        />

        <div className={errorMsg}>
          {errors.password && errors.password.type === "required" && (
            <span>비밀번호 입력은 필수 사항입니다</span>
          )}
        </div>

        <label htmlFor="passwordConfirm">Password Confirm</label>
        <input
          name="password_confirm"
          id="passwordConfirm"
          type="password"
          {...register("password_confirm", {
            required: true,
            validate: (value) => value === password.current,
          })}
        />

        <div className={errorMsg}>
          {errors.password_confirm &&
            errors.password_confirm.type === "required" && (
              <span>비밀번호 확인 입력은 필수 사항입니다</span>
            )}

          {errors.password_confirm &&
            errors.password_confirm.type === "validate" && (
              <span>비밀번호가 일치 하지 않습니다</span>
            )}
        </div>

        <input type="submit" />
      </form>
      <Link to="/login">이미 아이디가 있다면...</Link>
    </div>
  );
};

export default RegisterPage;
