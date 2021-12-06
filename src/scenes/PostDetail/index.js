import React, { Component } from "react";
import Layout from "../../components/helpers/Layout";
import AsideBar from "../../components/main/PostDetail/AsideBar";
import PostDetail from "../../components/main/PostDetail/PostDetail";
import classes from "./PostDetail.module.css";
import { connect } from "react-redux";
import { getDetail, getListComment, postComment } from "./action"
import Comment from "../../components/main/PostDetail/Comment"
import AuthenContext from "../../components/context/AuthenContext";
class index extends Component {

  componentWillMount() {
    this.props.getDetail(this.props.match.params?.id);
    let params = { ID_review: this.props.match.params?.id}
    this.props.getListComment(params);
  }

  render() {
    return (
      <AuthenContext.Consumer>
      {ctx => {
        ctx.isLoggedIn = true;
        return (<Layout>
        <section className={classes.container}>
          <PostDetail data={this.props.review}/>
          <AsideBar className={classes.asidebar}/>
        </section>
        <section className={classes.comment}>
        <Comment data={this.props.review.comment}/>
        </section>
      </Layout>)
      }}
      
      </AuthenContext.Consumer>
    );
  }
}


const mapStateToProps = (state) => ({
  review: state.postdetail,
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

  }
});

export default connect(mapStateToProps, mapDispatchToProps)(index)
