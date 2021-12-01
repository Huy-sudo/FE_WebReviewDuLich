import React, { Component } from 'react';
import { Button, Spin, Alert, Modal } from 'antd';
import { connect } from 'react-redux'
import Layout from '../Admin/Layout/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Route, Switch, Redirect } from 'react-router-dom';
import queryString from 'query-string'
import router from '../../routes'
class index extends Component {
    render() {
        return (
            <div>
                <Layout>
                </Layout>
            </div>
        );
    }
}

export default index
