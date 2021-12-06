import { Component } from "react";
import { Layout } from "../../components/helpers/Layout";
import Cookies from "js-cookie";
class index extends Component {
  componentWillMount = () => {
    const token = Cookies.get("web_token");
    if (!token) this.props.history.push("/login");
  };
  getUserInputHandler = (value) => {};

  render() {
    return <Layout onGetUserInput={this.getUserInputHandler}></Layout>;
  }
}

export default index;
