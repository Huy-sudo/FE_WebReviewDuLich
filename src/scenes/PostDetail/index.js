import React, { Component } from "react";
import Layout from "../../components/helpers/Layout";
import AsideBar from "../../components/main/PostDetail/AsideBar";
import PostDetail from "../../components/main/PostDetail/PostDetail";
import classes from "./PostDetail.module.css";
import { connect } from "react-redux";
import { getDetail, getListComment, postComment, getListPost } from "./action";
import Comment from "../../components/main/PostDetail/Comment";
import AuthenContext from "../../components/context/AuthenContext";
import Cookies from "js-cookie";
import { thisTypeAnnotation } from "@babel/types";
class index extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      data: {},
    }
  };

  componentWillMount() {
    const token = Cookies.get("web_token");
    if (!token) this.props.history.push("/login");
    this.props.getDetail(this.props.match.params?.id);
    let params = { ID_review: this.props.match.params?.id };
    this.props.getListComment(params);
    this.props.getListPost({});
    setTimeout(() => {
      let city = {
        ...this.props.review.data,
          created:
          this.timestampConverter(
            this.props.review.data.created_at
          ).toLocaleDateString() +
          " " +
          this.timestampConverter(
            this.props.review.data.created_at
          ).toLocaleTimeString(),
      };
      this.setState({data: city});
    }, 1500) 
  }
  timestampConverter = (timestamp) => {
    let t = timestamp.slice(0, 16);
    let result = new Date(t);
    return result;
  };

  saveCommentHandler = (content) => {
    let params = {
      ID_review: this.props.match.params?.id,
      ID_user: this.props.user[0].id,
      content: content
    }
    console.log(this.props);
    this.props.postComment(params);
    this.props.getListComment({ID_review: this.props.match.params?.id})
  }

  render() {
 
    
    let comment = this.props.review.comment;
    let listpost = this.props.review.listpost;
    return (
      <AuthenContext.Consumer>
        {(ctx) => {
          ctx.isLoggedIn = true;
          return (
            <Layout>
              <section className={classes.container}>
                <PostDetail data={this.state.data} />
                <AsideBar className={classes.asidebar} data={listpost} />
              </section>
              <section className={classes.comment}>
                <Comment data={comment} onSaveData={this.saveCommentHandler}/>
              </section>
            </Layout>
          );
        }}
      </AuthenContext.Consumer>
    );
  }
}

const mapStateToProps = (state) => ({
  review: state.postdetail,
  user: state.login.user
});

const mapDispatchToProps = (dispatch) => ({
  getDetail: (params) => {
    dispatch(getDetail(params));
  },
  getListComment: (params) => {
    dispatch(getListComment(params));
  },
  postComment: (params) => {
    dispatch(postComment(params));
  },
  getListPost: (params) => {
    dispatch(getListPost(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
