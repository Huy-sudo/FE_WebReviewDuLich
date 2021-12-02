import { Component } from "react";
import { Layout } from "../../components/helpers/Layout";

class index extends Component {
    
    getUserInputHandler = (value) => {
        
    }

    render() {
        return(
            <Layout onGetUserInput={this.getUserInputHandler}>

            </Layout>
        )

    }
}

export default index;
