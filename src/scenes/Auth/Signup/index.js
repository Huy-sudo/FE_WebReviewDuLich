import React, { useState } from "react";
import Layout from "../../../components/helpers/Layout";
import SignupForm from "../../../components/main/Authentication/Signup/SignupForm";

function Signup() {
  const [newUser, setNewUser] = useState({
    username: "",
    dateOfBirth: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  function getSignupDataHandler(
    name,
    dateOfBirth = "",
    phoneNumber = "",
    email,
    password
  ) {
    setNewUser({
      username: name,
      dateOfBirth: dateOfBirth,
      phoneNumber: phoneNumber,
      email: email,
      password: password,
    });
  }
  console.log(newUser);
  return (
    <Layout>
      <SignupForm onGetSignUpData={getSignupDataHandler} />
    </Layout>
  );
}

export default Signup;
