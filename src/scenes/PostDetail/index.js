import React, { Component } from "react";
import Layout from "../../components/helpers/Layout";
import AsideBar from "../../components/main/PostDetail/AsideBar";
import PostDetail from "../../components/main/PostDetail/PostDetail";
import classes from "./PostDetail.module.css";
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

export default index;
