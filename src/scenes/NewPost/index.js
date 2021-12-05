import Layout from "../../components/helpers/Layout";
import React, { Component } from "react";
import NewPost from "../../components/main/NewPost/NewPost";

class index extends Component {
    render() {
        return(
            <Layout>
                <NewPost />
            </Layout>
        )
    }
}

export default index;