import React, { Component } from "react";
import Layout from "../../../components/helpers/Layout";
import SignupForm from "../../../components/main/Authentication/Signup/SignupForm";
import { connect } from "react-redux";
import { signup } from "./action";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        username: "",
        dateOfBirth: "",
        phoneNumber: "",
        email: "",
        password: "",
      },
    };
  }
  getSignupDataHandler = (
    name,
    dateOfBirth = "",
    phoneNumber = "",
    email,
    password
  ) => {
    let value = {
      name: name,
      date_of_birth: dateOfBirth,
      phone_number: phoneNumber,
      email: email,
      password: password,
      isAdmin: 0
    };
    this.props.signup(value);
    console.log(value);
  };

  render() {
    return (
      <Layout>
        <SignupForm loading={this.props.loading} onGetSignUpData={this.getSignupDataHandler} />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.signup,
});

const mapDispatchToProps = (dispatch) => ({
  signup: (params) => {
    dispatch(signup(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
