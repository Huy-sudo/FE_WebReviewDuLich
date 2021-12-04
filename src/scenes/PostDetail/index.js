import React, { Component } from "react";
import Layout from "../../components/helpers/Layout";
import AsideBar from "../../components/main/PostDetail/AsideBar";
import PostDetail from "../../components/main/PostDetail/PostDetail";
import classes from "./PostDetail.module.css";
class index extends Component {
  render() {
    return (
      <Layout>
        <section className={classes.container}>
          <PostDetail />
          <AsideBar className={classes.asidebar}/>
        </section>
      </Layout>
    );
  }
}

export default index;
