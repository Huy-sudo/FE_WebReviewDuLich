import React, { useReducer, useEffect, useState } from "react"; //side effect
import classes from "./LoginForm.module.css";

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
      isEmailInputFocus: state.isEmailInputFocus
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
      isPasswordInputFocus: state.isPasswordInputFocus
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
    dispatchUserEmail({ type: "LOGIN_EMAILINPUT_LOSTFOCUS", isEmailInputFocus: false });
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
    dispatchUserPassword({ type: "LOGIN_PASSWORDINPUT_LOSTFOCUS", isPasswordInputFocus: false });
  }

  function formValidation(emailValid, passwordValid) {
    setIsFormValid(emailValid && passwordValid);
  }

  function submitHandler(event) {
    //sending Request
    event.preventDefault();
    props.onGetData(userEmail.value, userPassword.value);
    //After submitting, empty the value of inputs
    //setUserEmail('');
    //setUserPassword("");
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      formValidation(userEmail.isEmailValid, userPassword.isPasswordValid);
      console.log("Validating form");
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(timeout);
    };
  }, [userEmail, userPassword]);

  const errorEmail = !userEmail.isEmailValid && userEmail.isEmailInputFocus;
  const errorClassNameForEmail = errorEmail ? 'invalid-email' : 'valid-email';

  const errorPassword = !userPassword.isPasswordValid && userPassword.isPasswordInputFocus;
  const errorClassnameForPassword = errorPassword ? 'invalid-password' : 'valid-password';
  
  return (
    <div className={classes.formbackground}>
      <h1>ĐĂNG NHẬP</h1>
      <form onSubmit={submitHandler}>
        <input
          placeholder="Nhập email"
          type="email"
          value={userEmail.value}
          onChange={emailChangeHandler}
          onBlur={emailValidation}
        />
        <p className={classes[`${errorClassNameForEmail}`]}>Email is invalid. Please try again!</p>
        <input
          placeholder="Nhập mật khẩu"
          type="password"
          value={userPassword.value}
          onChange={passwordChangeHandler}
          onBlur={passwordValidation}
        />
        <p className={classes[`${errorClassnameForPassword}`]}>Password must at least have 8 characters and 1 number.</p>
        <div className={classes.rememberpassword}>
          <input type="checkbox" id="remember_password"/>
          <label htmlFor="remember_password">Remeber password?</label>
        </div>
        {isFormValid ? (
          <input className={classes.submit} type="submit" value="Đăng nhập" />
        ) : (
          <input className={classes.submit_disabled} type="submit" value="Đăng nhập" disabled={true} />
        )}
      </form>
    </div>
  );
}

export default LoginForm;
