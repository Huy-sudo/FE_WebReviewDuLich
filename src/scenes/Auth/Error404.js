import { Result, Button } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Layout from "../../components/helpers/Layout"

class Error404 extends Component {
    render() {
        return (
            <div>
                <Result
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
                    extra={<Button type="primary" ><Link to={`/home`} > Back Home</Link></Button>}
                />
            </div>
        );
    }
}

export default Error404;
