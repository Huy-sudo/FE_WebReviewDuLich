import React, { Component } from "react";
import Layout from "../../components/helpers/Layout";
import AsideBar from "../../components/main/PostDetail/AsideBar";
import PostDetail from "../../components/main/PostDetail/PostDetail";
import classes from "./PostDetail.module.css";
import { connect } from "react-redux";
import {getList } from "./action"
import Comment from "../../components/main/PostDetail/Comment"
class index extends Component {

  render() {
    return (
      <Layout>
        <section className={classes.container}>
          <PostDetail />
          <AsideBar className={classes.asidebar}/>
        </section>
        <section className={classes.comment}>
        <Comment />
        </section>
      </Layout>
    );
  }
}


const mapStateToProps = (state) => ({
  reviews: state.Reviews,
});

const mapDispatchToProps = (dispatch) => ({
  getList: (params) => {
    dispatch(getList(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(index)
