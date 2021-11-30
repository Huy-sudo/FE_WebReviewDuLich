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
    constructor(props) {
        super(props);
        const query_params = queryString.parse(window.location.search);
        this.state = {
            initial_filter_values: query_params
        }
    }

    render() {
        let key = 1
        return (
            <div>
                <Layout>
                    <Switch>
                        {router.map(d => {
                            key += 1
                            return <Route exact
                                path={d.path}
                                key={key}
                                component={d.component}
                            // render={(d)=> (d.component) }
                            >
                                {/* <div> d</div> */}

                            </Route>
                        }
                        )}
                        <Redirect from="*" to="/errors/404" />
                    </Switch>
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    // customers: state.Customers
})

const mapDispatchToProps = dispatch => ({
//     getList: (params) => {
//         dispatch(getList(params))
//     },
//     addCustomer: (params) => {
//         dispatch(addCustomer(params))
//     },
//     addPrescription: (data) => {
//         dispatch(addPrescription(data))
//     },
//     deleteCustomer: (id) => {
//         dispatch(deleteCustomer(id))
//     }
})

export default connect(mapStateToProps, mapDispatchToProps)(index)
