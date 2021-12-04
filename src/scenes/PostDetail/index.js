import React, { Component } from "react";
import Layout from "../../components/helpers/Layout";
import PostDetail from "../../components/main/PostDetail/PostDetail";

class index extends Component {

    render() {
        return (
            <Layout>
                <section>
                    <PostDetail />
                </section>
            </Layout>
        )
    }
}

export default index;