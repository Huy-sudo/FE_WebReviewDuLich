import React, { Component } from "react";
import Layout from "../../../components/helpers/Layout";
import { connect } from "react-redux";
import LoginForm from "../../../components/main/Authentication/Login/LoginForm";
import { login, getListUser } from "./action";

class index extends Component {
  componentDidMount = () => {};

  getLoginData = (email, password) => {
    let userlogin = { email: email, password: password };
    this.props.login(userlogin);
    let params = {
      email: email.toString()
    }
    setTimeout(() => {  this.props.getListUser(params) }, 5000);  };
  render() {
    return (
      <Layout>
        <LoginForm onLogin={this.getLoginData} />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.login,
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  login: (params) => {
    dispatch(login(params));
  },
  getListUser: (params) => {
    dispatch(getListUser(params));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
