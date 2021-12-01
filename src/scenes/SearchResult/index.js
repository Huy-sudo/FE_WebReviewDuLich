import { Component } from "react";
import { Layout } from "../../components/helpers/Layout";

class index extends Component {
    
    getUserInput = (value) => {
        
    }

    render() {
        return(
            <Layout onGetUserInput={this.getUserInputHandler}>

            </Layout>
        )

    }
}

