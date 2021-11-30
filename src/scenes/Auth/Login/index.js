import React, { Component } from 'react';
import Layout from "../../../components/helpers/Layout";
import { connect } from 'react-redux';
import LoginForm from "../../../components/main/Authentication/Login/LoginForm";
import { login } from "./action";

class index extends Component {

  componentDidMount=()=>{

  }

  getLoginData = (email, password) => {
    let userlogin = { email: email, password: password };
    this.props.login(userlogin);
  }

  render() {
      const {data} = this.props
      return (
          <Layout>
              <LoginForm onLogin={this.getLoginData}/>
          </Layout>
      );
  }
}

const mapStateToProps = (state) => ({
  data: state.login
})

const mapDispatchToProps = dispatch => ({
      login: (params) => {
          dispatch(login(params))
      },
})

export default connect(mapStateToProps, mapDispatchToProps)(index)