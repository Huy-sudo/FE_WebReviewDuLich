import React, { useReducer, useState } from "react";
import Input from "../../../helpers/Input";
import classes from "./SignupForm.module.css";

function nameReducer(state, action) {
  if (action.type === "SIGNUP_NAMEINPUT") {
    return {
      value: action.value,
      isNameValid: action.isNameValid,
      isInputFocus: action.isInputFocus,
    };
  } else if (action.type === "SIGNUP_NAMEINPUT_LOSTFOCUS") {
    return {
      value: state.value,
      isNameValid: state.isNameValid,
      isInputFocus: true,
    };
  } else return { value: "", isNameValid: false, isInputFocus: false };
}

function emailReducer(state, action) {
  if (action.type === "LOGIN_EMAILINPUT") {
    return {
      value: action.value,
      isEmailValid: action.isEmailValid,
      isEmailInputFocus: action.isEmailInputFocus,
    };
  } else if (action.type === "LOGIN_EMAILINPUT_LOSTFOCUS") {
    return {
      value: state.value,
      isEmailValid: state.isEmailValid,
      isEmailInputFocus: true,
    };
  }
  return {
    value: "",
    isEmailValid: false,
    isEmailInputFocus: false,
  };
}

function passwordReducer(state, action) {
  if (action.type === "LOGIN_PASSWORDINPUT") {
    return {
      value: action.value,
      isPasswordValid: action.isPasswordValid,
      isPasswordInputFocus: action.isPasswordInputFocus,
    };
  } else if (action.type === "LOGIN_PASSWORDINPUT_LOSTFOCUS") {
    return {
      value: state.value,
      isPasswordValid: state.isPasswordValid,
      isPasswordInputFocus: true,
    };
  } else
    return {
      value: "",
      isPasswordValid: false,
      isPasswordInputFocus: false,
    };
}

function confirmPasswordReducer(state, action) {
  if (action.type === "RE_ENTERED_PASSWORDINPUT") {
    return {
      value: action.value,
      isPasswordSimilar: action.isPasswordSimilar,
      isPasswordConfirmInputFocus: action.isPasswordConfirmInputFocus,
    };
  } else if (action.type === "RE_ENTERED_PASSWORDINPUT_LOSTFOCUS") {
    return {
      value: state.value,
      isPasswordSimilar: state.isPasswordSimilar,
      isPasswordConfirmInputFocus: true,
    };
  } else
    return {
      value: "",
      isPasswordSimilar: false,
      isPasswordConfirmInputFocus: false,
    };
}

function SignupForm(props) {
  const [username, dispatchUsername] = useReducer(nameReducer, {
    value: "",
    isNameValid: false,
    isInputFocus: false,
  });

  function nameChangeHandler(event) {
    dispatchUsername({
      type: "SIGNUP_NAMEINPUT",
      value: event.target.value,
      isNameValid: event.target.value.trim().length > 0,
      isInputFocus: true,
    });
  }
  function nameValidation(event) {
    dispatchUsername({ type: "SIGNUP_NAMEINPUT_LOSTFOCUS" });
  }

  const [dateOfBirth, setDateOfBirth] = useState("");
  function dateOfBirthHandler(event) {
    setDateOfBirth(event.target.value);
  }

  const [phoneNumber, setPhoneNumber] = useState("");
  function phoneNumberHandler(event) {
    setPhoneNumber(event.target.value);
  }

  const [userEmail, dispatchUserEmail] = useReducer(emailReducer, {
    value: "",
    isEmailValid: false,
    isEmailInputFocus: false,
  });
  const [userPassword, dispatchUserPassword] = useReducer(passwordReducer, {
    value: "",
    isPasswordValid: false,
    isPasswordInputFocus: false,
  });
  const [passwordConfirm, dispatchPasswordConfirm] = useReducer(
    confirmPasswordReducer,
    {
      value: "",
      isPasswordSimilar: false,
      isPasswordConfirmInputFocus: false,
    }
  );

  function emailChangeHandler(event) {
    let enteredEmail = event.target.value.trim();
    function validateEmail(email) {
      const result =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //regular expression
      return result.test(email);
    }
    dispatchUserEmail({
      type: "LOGIN_EMAILINPUT",
      value: enteredEmail,
      isEmailValid: validateEmail(enteredEmail),
      isEmailInputFocus: true,
    });
  }
  function emailValidation() {
    dispatchUserEmail({ type: "LOGIN_EMAILINPUT_LOSTFOCUS" });
  }

  function passwordChangeHandler(event) {
    let enteredPassword = event.target.value;
    function validatePassword(password) {
      if (enteredPassword.length >= 8) {
        const result = /[1-9]/;
        return result.test(enteredPassword); //password contains at least a number
      }
      return false;
    }
    dispatchUserPassword({
      type: "LOGIN_PASSWORDINPUT",
      value: enteredPassword,
      isPasswordValid: validatePassword(enteredPassword),
      isPasswordInputFocus: true,
    });
  }

  function passwordValidation() {
    dispatchUserPassword({ type: "LOGIN_PASSWORDINPUT_LOSTFOCUS" });
  }

  function passwordConfirmChangeHandler(event) {
    let enteredPassword = userPassword.value;
    let reEnteredPassword = event.target.value;

    function validatePassword(password, reEntered) {
      if (reEntered === password) {
        return true;
      }
      return false;
    }
    dispatchPasswordConfirm({
      type: "RE_ENTERED_PASSWORDINPUT",
      value: enteredPassword,
      isPasswordSimilar: validatePassword(enteredPassword, reEnteredPassword),
      isPasswordConfirmInputFocus: true,
    });
  }

  function confirmPasswordValidation(event) {
    dispatchPasswordConfirm({ type: "RE_ENTERED_PASSWORDINPUT_LOSTFOCUS" });
  }

  function signupSubmitHandler(event) {
    event.preventDefault();
    props.onGetSignUpData(
      username.value,
      dateOfBirth,
      phoneNumber,
      userEmail.value,
      userPassword.value
    );
    // console.log(
    //   username.value,
    //   dateOfBirth,
    //   phoneNumber,
    //   userEmail.value,
    //   userPassword.value
    // );
    dispatchUsername({ type: "" });
    dispatchUserEmail({ type: "" });
    dispatchUserPassword({ type: "" });
    setDateOfBirth("");
    setPhoneNumber("");
    dispatchPasswordConfirm({ type: "" });
  }

  let errorName = !username.isNameValid && username.isInputFocus;
  let errorClassNameForName = errorName ? "invalid-name" : "valid-name";

  let errorEmail = !userEmail.isEmailValid && userEmail.isEmailInputFocus;
  let errorClassNameForEmail = errorEmail ? "invalid-name" : "valid-name";

  let errorPassword =
    !userPassword.isPasswordValid && userPassword.isPasswordInputFocus;
  let errorClassNameForPassword = errorPassword ? "invalid-name" : "valid-name";

  let errorConfirmPassword =
    !passwordConfirm.isPasswordSimilar &&
    passwordConfirm.isPasswordConfirmInputFocus;
  let errorClassNameForConfirmPassword = errorConfirmPassword
    ? "invalid-name"
    : "valid-name";

  document.getElementById("root").className = classes.signupbackground;
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
        <Input
          id="name"
          type="text"
          value={username.value}
          onChange={nameChangeHandler}
          onBlur={nameValidation}
        />
        <p className={classes[`${errorClassNameForName}`]}>
          Họ tên không được trống
        </p>
        <label htmlFor="date_of_birth">Ngày tháng năm sinh</label>
        <Input
          id="date_of_birth"
          type="date"
          value={dateOfBirth}
          onChange={dateOfBirthHandler}
        />
        <label htmlFor="phone_number">Số điện thoại</label>
        <Input
          id="phone_number"
          type="text"
          value={phoneNumber}
          onChange={phoneNumberHandler}
        />
        <label htmlFor="email">
          Email <span style={{ color: "red" }}>*</span>
        </label>
        <Input
          id="email"
          type="email"
          value={userEmail.value}
          onChange={emailChangeHandler}
          onBlur={emailValidation}
        />
        <p className={classes[`${errorClassNameForEmail}`]}>
          Email không hợp lệ.
        </p>
        <label htmlFor="password">
          Mật khẩu <span style={{ color: "red" }}>*</span>
        </label>
        <Input
          id="password"
          type="password"
          value={userPassword.value}
          onChange={passwordChangeHandler}
          onBlur={passwordValidation}
        />
        <p className={classes[`${errorClassNameForPassword}`]}>
          Mật khẩu phải chứa ít nhất 8 ký tự và 1 chữ số
        </p>
        <label htmlFor="confirm_password">
          Xác nhận mật khẩu <span style={{ color: "red" }}>*</span>
        </label>
        <Input
          id="confirm_password"
          type="password"
          onChange={passwordConfirmChangeHandler}
          onBlur={confirmPasswordValidation}
        />
        <p className={classes[`${errorClassNameForConfirmPassword}`]}>
          Mật khẩu không trùng khớp!
        </p>
        <label htmlFor="agreement">
          Tôi đồng ý với điều khoản sử dụng và dịch vụ{" "}
          <span style={{ color: "red" }}>*</span>
        </label>
        <Input className={classes.agreebox}  id="agreement" type="checkbox" />
        <Input className={classes.submit} type="submit" value="Đăng ký" />
      </form>
      <div className={classes["policies-wrapper"]}>
        <h2>Điều khoản sử dụng và dịch vụ</h2>
        <div className={classes["policies-content"]}>
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

