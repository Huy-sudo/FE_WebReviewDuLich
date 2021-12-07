import React, { Component } from "react";
import Layout from "../../../components/helpers/Layout";
import { connect } from "react-redux";
import LoginForm from "../../../components/main/Authentication/Login/LoginForm";
import { login, getListUser } from "./action";
import AuthenContext from "../../../components/context/AuthenContext";
import UserDetail from "../../../components/context/UserDetail";
import Cookies from "js-cookie";
class index extends Component {
  componentWillMount = () => {
    const token = Cookies.get("web_token");
    if (!token) this.props.history.push("/login")
    else this.props.history.push("/home");
  }
  constructor(props) {
    super(props);
    this.state = {email: ''};
  }

  getLoginData = (email, password) => {
    let userlogin = { email: email, password: password };
    this.setState({email: email})
    this.props.login(userlogin);
  };

  render() {
    // let isAuthorised = ;
    return (
      <AuthenContext.Consumer>
        {(ctx) => {
          ctx.isLoggedIn = false;
          return (
            <UserDetail.Consumer>
              {(usercontext) => {
                usercontext.email = this.state.email;
                return (
                  <Layout>
                    {<LoginForm onLogin={this.getLoginData} />}
                  </Layout>
                );
              }}
            </UserDetail.Consumer>
          );
        }}
      </AuthenContext.Consumer>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.login,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  login: (params) => {
    dispatch(login(params));
  },
  getListUser: (params) => {
    dispatch(getListUser(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
