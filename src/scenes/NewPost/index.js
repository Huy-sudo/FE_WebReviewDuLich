import Layout from "../../components/helpers/Layout";
import React, { Component } from "react";
import NewPost from "../../components/main/NewPost/NewPost";
import AuthenContext from "../../components/context/AuthenContext";

class index extends Component {

  getNewPost = (postname, placename, content, rating, imgsrc) => {
    //post is the data getting from NewPost
  }
  render() {
    return (
      <AuthenContext.Consumer>
        {(ctx) => {
            ctx.isLoggedIn = true;
          return (
            <Layout>
              <NewPost onSaveData={this.getNewPost}/>
            </Layout>
          );
        }}
      </AuthenContext.Consumer>
    );
  }
}

export default index;
