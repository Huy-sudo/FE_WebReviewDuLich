import Layout from "../../components/helpers/Layout";
import React, { Component } from "react";
import NewPost from "../../components/main/NewPost/NewPost";
import AuthenContext from "../../components/context/AuthenContext";
import { postPost } from "./action";
import { connect } from "react-redux";
import Cookies from "js-cookie";
class index extends Component {

  componentWillMount = () => {
    const token = Cookies.get("web_token");
    if (!token) this.props.history.push("/login");
  };

  getNewPost = (postname, placename, content, rating, imgsrc) => {
    //post is the data getting from NewPost
  };

  render() {
    console.log(this.props.city);
    return (
      <AuthenContext.Consumer>
        {(ctx) => {
          ctx.isLoggedIn = true;
          return (
            <Layout>
              <NewPost onSaveData={this.getNewPost} postPost={this.props.postPost} cityData={this.props.city}/>
            </Layout>
          );
        }}
      </AuthenContext.Consumer>
    );
  }
}

const mapStateToProps = (state) => ({
  city: state.reviewPage
});

const mapDispatchToProps = (dispatch) => ({
  postPost: (params) => {
    dispatch(postPost(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
