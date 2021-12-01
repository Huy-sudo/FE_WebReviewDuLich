import React, { Component } from 'react';
import { Button, Spin, Alert, Modal } from 'antd';
import { connect } from 'react-redux'
import Layout from '../Layout/layout'
import DataTable from './components/DataTable'
import { getList, updateUser, deleteUser } from './action'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import queryString from 'query-string'
class index extends Component {
    constructor(props) {
        super(props);
        const query_params = queryString.parse(window.location.search);
        this.state = {
            initial_filter_values: query_params
        }
    }

    componentDidMount = () => {
        this.handleSubmitFilter(this.state.initial_filter_values)
    }

    // handleSubmitFilter = ({ ...values }) => {
    //     let params = {
    //         ...values,
    //         status: 1
    //     }
    //     this.props.history.replace(window.location.pathname + '?' + queryString.stringify(params));
    //     this.props.getList(params)
    // }

    updateUser = (value) => {
        let id = value
        let data = {
            ...value,
        }
        this.props.updateUser(id, data)
    }

    deleteUser = (value) => {
        this.props.deleteUser(value)
    }

    render() {
        const { users } = this.props
        return (
            <div>
                <Layout>
                    <div className='container-fluid mb-3 text-left py-2'>
                        <span className='h5 font-weight-bold '>Users</span>
                    </div>
                    {/* <FormFilter
                        onSubmit={this.handleSubmitFilter}
                    /> */}
                    <DataTable
                        dataSource={users.data || []}
                        loading={users.loading}
                        updateUser={this.updateUser}
                        deleteUser={this.deleteUser}
                    />
                    {/* <Modal
                        title="Cập nhật thành phố"
                        visible={showForm}
                        closable={false}
                        onCancel={this.handleCloseModal}
                        footer={null}
                    >
                        <FormUpdateCity
                            destroyOnClose={true}
                            keyboard={true}
                            maskClosable={true}
                            onCancel={() => this.handleShowForm(false)}
                            city={city.data}
                            onSubmit={this.handleUpdateCity(idCity)}
                            handleShowForm={this.handleShowForm}
                        />
                    </Modal> */}
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    users: state.Users
})

const mapDispatchToProps = dispatch => ({
    getList: (params) => {
        dispatch(getList(params))
    },
    updateUser: (id, params) => {
        dispatch(updateUser(id, params))
    },
    deleteUser: (id) => {
        dispatch(deleteUser(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(index)
