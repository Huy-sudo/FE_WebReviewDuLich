import Layout from "../../components/helpers/Layout";
import React, { Component } from "react";
import NewPost from "../../components/main/NewPost/NewPost";
import AuthenContext from "../../components/context/AuthenContext";

class index extends Component {
  render() {
    return (
      <AuthenContext.Consumer>
        {(ctx) => {
            ctx.isLoggedIn = true;
          return (
            <Layout>
              <NewPost />
            </Layout>
          );
        }}
      </AuthenContext.Consumer>
    );
  }
}

export default index;
