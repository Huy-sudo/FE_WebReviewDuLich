import { Spin } from "antd";
import React, { useReducer, useState, useEffect } from "react";
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
  } else if (action.type === "RE_ENTERED_PASSWORDINPUT_ONCHANGE") {
    return {
      value: state.value,
      isPasswordSimilar: action.isPasswordSimilar,
      isPasswordConfirmInputFocus: true,
    };
  }
  else
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
  const [isChecked, setIsChecked] = useState(false);

  function consentChangeHandler() {
    setIsChecked((prev) => {
      return !prev;
    });
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
      if (password.length >= 8) {
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
    function matchPassword(password, reEntered) {
      if (reEntered === password) {
        return true;
      }
      return false;
    }
    dispatchPasswordConfirm({
      type: "RE_ENTERED_PASSWORDINPUT_ONCHANGE",
      value: passwordConfirm.value,
      isPasswordSimilar: matchPassword(enteredPassword, passwordConfirm.value),
      isPasswordConfirmInputFocus: true,
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

  const [isLoading, setIsLoading] = useState(false);
  const [isNotFilled, setIsNotFilled] = useState(true);

  function signupSubmitHandler(event) {
    event.preventDefault();
    setIsLoading(true);
    props.onGetSignUpData(
      username.value,
      dateOfBirth,
      phoneNumber,
      userEmail.value,
      userPassword.value
    );
    dispatchUsername({ type: "" });
    dispatchUserEmail({ type: "" });
    dispatchUserPassword({ type: "" });
    setDateOfBirth("");
    setPhoneNumber("");
    dispatchPasswordConfirm({ type: "" });
  }

  useEffect(() => {
    setIsLoading(props.loading);
  }, [props.loading]);

  useEffect(() => {
    if (
      username &&
      userEmail.value &&
      userPassword.value &&
      passwordConfirm.isPasswordSimilar &&
      isChecked
    )
      setIsNotFilled(false);
    else {
      setIsNotFilled(true);
    }
  }, [
    username,
    userEmail.value,
    userPassword.value,
    passwordConfirm.isPasswordSimilar,
    isChecked,
  ]);
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
    <>
      {isLoading ? (
        <Spin spinning={isLoading} className={classes.spinner}></Spin>
      ) : (
        <div className={classes["signup-wrapper"]}>
          <h1>????NG K??</h1>
          <form
            className={classes["signup-form"]}
            onSubmit={signupSubmitHandler}
          >
            <p className={classes.login}>
              ???? c?? t??i kho???n? <a href="/">????ng nh???p ngay</a>
            </p>
            <label htmlFor="name">
              H??? v?? t??n <span style={{ color: "red" }}>*</span>
            </label>
            <Input
              id="name"
              type="text"
              value={username.value}
              onChange={nameChangeHandler}
              onBlur={nameValidation}
            />
            <p className={classes[`${errorClassNameForName}`]}>
              H??? t??n kh??ng ???????c tr???ng
            </p>
            <label htmlFor="date_of_birth">Ng??y th??ng n??m sinh</label>
            <Input
              id="date_of_birth"
              type="date"
              value={dateOfBirth}
              onChange={dateOfBirthHandler}
            />
            <label htmlFor="phone_number">S??? ??i???n tho???i</label>
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
              Email kh??ng h???p l???.
            </p>
            <label htmlFor="password">
              M???t kh???u <span style={{ color: "red" }}>*</span>
            </label>
            <Input
              id="password"
              type="password"
              value={userPassword.value}
              onChange={passwordChangeHandler}
              onBlur={passwordValidation}
            />
            <p className={classes[`${errorClassNameForPassword}`]}>
              M???t kh???u ph???i ch???a ??t nh???t 8 k?? t??? v?? 1 ch??? s???
            </p>
            <label htmlFor="confirm_password">
              X??c nh???n m???t kh???u <span style={{ color: "red" }}>*</span>
            </label>
            <Input
              id="confirm_password"
              type="password"
              onChange={passwordConfirmChangeHandler}
              onBlur={confirmPasswordValidation}
            />
            <p className={classes[`${errorClassNameForConfirmPassword}`]}>
              M???t kh???u kh??ng tr??ng kh???p!
            </p>
            <label htmlFor="agreement">
              T??i ?????ng ?? v???i ??i???u kho???n s??? d???ng v?? d???ch v???{" "}
              <span style={{ color: "red" }}>*</span>
            </label>
            <Input
              className={classes.agreebox}
              id="agreement"
              type="checkbox"
              onChange={consentChangeHandler}
            />
            {!isChecked && (
              <p className={classes.errorChecked}>
                ?????ng ?? v???i ??i???u kho???n c???a ch??ng t??i ????? ti???p t???c
              </p>
            )}
            <Input
              className={isNotFilled ? classes["invalid-submit"] : classes.submit}
              type="submit"
              value="????ng k??"
              disabled={isNotFilled}
            />
          </form>
          <div className={classes["policies-wrapper"]}>
            <h2>??i???u kho???n s??? d???ng v?? d???ch v???</h2>
            <div className={classes["policies-content"]}>
              <p>
                1. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
                <br />
                1. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
                <br />
                1. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
                <br />
                1. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
                <br />
                1. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
                <br />
                1. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
                <br />
                1. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
                <br />
                1. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
                <br />
                1. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
                <br />
                1. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
                <br />
                1. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
                <br />
                1. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
                <br />
                1. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. <br />
                1. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
                <br />
                1. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
                <br />
                1. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
                <br />
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SignupForm;
