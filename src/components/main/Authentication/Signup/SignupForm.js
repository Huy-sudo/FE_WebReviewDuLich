import React, { useReducer } from "react";
import Input from "../../../helpers/Input";
import classes from "./SignupForm.module.css";

function nameReducer(state, action) {
  if (action.type === "SIGNUP_NAMEINPUT") {
    return {
      value: action.value,
      isNameValid: action.isNameValid,
      isInputFocus: action.isInputFocus
    }
  }
  else if (action.type === "SIGNUP_NAMEINPUT_LOSTFOCUS") {
    return {
      value: state.value,
      isNameValid: state.isNameValid,
      isInputFocus: true
    }
  }
  return { value: '', isNameValid: false, isInputFocus: false }
}

function SignupForm() {
  const [username, dispatchUsername] = useReducer(nameReducer, { value: '', isNameValid: false, isInputFocus: false });

  function nameChangeHandler(event) {
    dispatchUsername({
      type: "SIGNUP_NAMEINPUT",
      value: event.target.value,
      isNameValid: event.target.value.trim().length > 0,
      isInputFocus: true
    })
  }
  function nameValidation(event) {
    dispatchUsername({ type: "SIGNUP_NAMEINPUT_LOSTFOCUS" });
  }


  function signupSubmitHandler() { 
    
  }

  let errorName = !username.isNameValid && username.isInputFocus;
  let errorClassNameForEmail = errorName ? 'invalid-name' : 'valid-name';

  return (
    <div className={classes["signup-wrapper"]}>
      <h1>ĐĂNG KÝ</h1>
      <form className={classes["signup-form"]} onSubmit={signupSubmitHandler}>
        <p className={classes.login}>
          Đã có tài khoản? <a href="/">Đăng nhập ngay</a>
        </p>
        <label htmlFor="name">
          Họ và tên <span style={{ color: "red" }}>*</span>
        </label>
        <Input id="name" type="text" value={username.value} onChange={nameChangeHandler} onBlur={nameValidation} />
        <p className={classes[`${errorClassNameForEmail}`]}>Họ tên không được trống</p>
        <label htmlFor="date_of_birth">Ngày tháng năm sinh</label>
        <Input id="date_of_birth" type="date" />
        <label htmlFor="phone_number">Số điện thoại</label>
        <Input id="phone_number" type="text" />
        <label htmlFor="email">
          Email <span style={{ color: "red" }}>*</span>
        </label>
        <Input id="email" type="email" />
        <label htmlFor="password">
          Mật khẩu <span style={{ color: "red" }}>*</span>
        </label>
        <Input id="password" type="password" />
        <label htmlFor="confirm_password">
          Xác nhận mật khẩu <span style={{ color: "red" }}>*</span>
        </label>
        <Input id="confirm_password" type="password" />
        <label htmlFor="agreement">
          Tôi đồng ý với điều khoản sử dụng và dịch vụ{" "}
          <span style={{ color: "red" }}>*</span>
        </label>
        <Input id="agreement" type="checkbox" />
        <Input className={classes.submit} type="submit" value="Đăng ký" />
      </form>
      <div className={classes["policies-wrapper"]}>
        <h2>Điều khoản sử dụng và dịch vụ</h2>
        <div className={classes['policies-content']}>
          <p>
            1. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
            <br />
            1. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
            <br />
            1. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
            <br />
            1. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
            <br />
            1. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
            <br />
            1. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
            <br />
            1. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
            <br />
            1. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
            <br />
            1. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
            <br />
            1. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
            <br />
            1. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
            <br />
            1. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
            <br />
            1. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. <br />
            1. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
            <br />
            1. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
            <br />
            1. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
