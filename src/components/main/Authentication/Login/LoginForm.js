import React, { useReducer, useEffect, useState } from "react"; //side effect
import classes from "./LoginForm.module.css";
import Input from "../../../helpers/Input";

function emailReducer(state, action) {
  if (action.type === "LOGIN_EMAILINPUT") {
    return {
      value: action.value,
      isEmailValid: action.isEmailValid,
      isEmailInputFocus: action.isEmailInputFocus
    };
  } else if (action.type === "LOGIN_EMAILINPUT_LOSTFOCUS") {
    return {
      value: state.value,
      isEmailValid: state.isEmailValid,
      isEmailInputFocus: true
    };
  } else
    return {
      value: "",
      isEmailValid: false,
      isEmailInputFocus: false
    };
}

function passwordReducer(state, action) {
  if (action.type === "LOGIN_PASSWORDINPUT") {
    return {
      value: action.value,
      isPasswordValid: action.isPasswordValid,
      isPasswordInputFocus: action.isPasswordInputFocus
    };
  } else if (action.type === "LOGIN_PASSWORDINPUT_LOSTFOCUS") {
    return {
      value: state.value,
      isPasswordValid: state.isPasswordValid,
      isPasswordInputFocus: true
    };
  } else
    return {
      value: "",
      isPasswordValid: false,
      isPasswordInputFocus: false
    };
}

function LoginForm(props) {
  // const [userEmail, setUserEmail] = useState('');
  // const [userPassword, setUserPassword] = useState('');
  const [userEmail, dispatchUserEmail] = useReducer(emailReducer, {
    value: "",
    isEmailValid: false,
    isEmailInputFocus: false
  });

  const [userPassword, dispatchUserPassword] = useReducer(passwordReducer, {
    value: "",
    isPasswordValid: false,
    isPasswordInputFocus: false
  });

  const [isFormValid, setIsFormValid] = useState(false);

  function emailChangeHandler(event) {
    let enteredEmail = event.target.value.trim();
    function validateEmail(email) {
      //validate email. source: stackoverflow =)). try: not yet
      const result =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //regular expression
      return result.test(email);
    }
    dispatchUserEmail({
      type: "LOGIN_EMAILINPUT",
      value: enteredEmail,
      isEmailValid: validateEmail(enteredEmail),
      isEmailInputFocus: true
    });
  }

  function emailValidation() {
    dispatchUserEmail({ type: "LOGIN_EMAILINPUT_LOSTFOCUS" });
  }

  function passwordChangeHandler(event) {
    let enteredPassword = event.target.value;
    function validatePassword(password) {
      if (enteredPassword.length > 8) {
        //minimun length >= 8
        return true; //password contains at least a number
      }
      return false;
    }
    dispatchUserPassword({
      type: "LOGIN_PASSWORDINPUT",
      value: enteredPassword,
      isPasswordValid: validatePassword(enteredPassword),
      isPasswordInputFocus: true
    });
    //setUserPassword(event.target.value);
  }

  function passwordValidation(event) {
    dispatchUserPassword({ type: "LOGIN_PASSWORDINPUT_LOSTFOCUS" });
  }

  function formValidation(emailValid, passwordValid) {
    setIsFormValid(emailValid && passwordValid);
  }

  function submitHandler(event) {
    //sending Request
    event.preventDefault(); //just for temporarily
    dispatchUserEmail();
    dispatchUserPassword();
  }

  useEffect(() => {
    let timeout = setTimeout(() => {
      formValidation(userEmail.isEmailValid, userPassword.isPasswordValid);
      console.log("Validating form");
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(timeout);
    };
  }, [userEmail, userPassword]);

  let errorEmail = !userEmail.isEmailValid && userEmail.isEmailInputFocus;
  let errorClassNameForEmail = errorEmail ? 'invalid-email' : 'valid-email';

  let errorPassword = !userPassword.isPasswordValid && userPassword.isPasswordInputFocus;
  let errorClassnameForPassword = errorPassword ? 'invalid-password' : 'valid-password';
  
  return (
    <div className={classes.formbackground}>
      <h1>ĐĂNG NHẬP</h1>
      <form onSubmit={submitHandler}>
        <Input
          placeholder="Nhập email"
          type="email"
          value={userEmail.value}
          onChange={emailChangeHandler}
          onBlur={emailValidation}
        />
        <p className={classes[`${errorClassNameForEmail}`]}>Email is invalid. Please try again!</p>
        <Input
          placeholder="Nhập mật khẩu"
          type="password"
          value={userPassword.value}
          onChange={passwordChangeHandler}
          onBlur={passwordValidation}
        />
        <p className={classes[`${errorClassnameForPassword}`]}>Password must at least have 8 characters and 1 number.</p>
        <div className={classes.rememberpassword}>
          <Input type="checkbox" id="remember_password"/>
          <label htmlFor="remember_password">Remeber password?</label>
          <a href="/">Quên mật khẩu</a>
        </div>
        {isFormValid ? (
          <Input className={classes.submit} type="submit" value="Đăng nhập" />
        ) : (
          <Input className={classes.submit_disabled} type="submit" value="Đăng nhập" disabled={true} />
        )}
      </form>

    </div>
  );
}

export default LoginForm;
