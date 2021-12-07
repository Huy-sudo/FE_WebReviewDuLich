import Layout from "../../components/helpers/Layout";
import React, { Component } from "react";
import TopReview from "../../components/main/Chart/TopReview";
import Cookies from "js-cookie";
class index extends Component {
  componentWillMount = () => {
    const token = Cookies.get("web_token");
    if (!token) this.props.history.push("/login");
  };
  render() {
    return (
      <Layout>
        <TopReview />
      </Layout>
    );
  }
}

export default index;
