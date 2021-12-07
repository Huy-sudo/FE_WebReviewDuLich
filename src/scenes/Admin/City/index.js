import React, { Component } from 'react';
import { Button, Spin, Alert, Modal } from 'antd';
import { connect } from 'react-redux'
import Layout from '../Layout/layout'
import DataTable from './components/DataTable'
import FormFilter from './components/FormFilter'
import FormUpdateCity from './components/FormUpdateCity'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import queryString from 'query-string'
import { createCity, getList, updateCity } from './action';
import classes from "./index.module.css";
class index extends Component {
    constructor(props) {
        super(props);
        const query_params = queryString.parse(window.location.search);
        this.state = {
            showForm: false,
            initial_filter_values: query_params,
            idCity: 0
        }
    }

    componentDidMount = () => {
        this.handleSubmitFilter(this.state.initial_filter_values)
    }

    handleSubmitFilter = ({ ...values }) => {
        let params = {
            ...values,
            status:1
        }
        this.props.history.replace(window.location.pathname + '?' + queryString.stringify(params));
        this.props.getList(params)
    }

    handleShowForm = (value) => {
        this.setState({ showForm: value || false })
    }

    handleCloseModal = (value) => {
        this.setState({ showForm: false })
    }

    handleUpdateCity = (value) => {
        let id = this.state.idCity;
        this.setState({ showForm: false })
        console.log(value);
        let params = value;
        this.props.updateCity(id, params)
    }

    openModal = (values) => {
        this.handleShowForm(true);
        this.state.idCity = values;
    }

    render() {
        const { initialValue, showForm, values, idCity } = this.state;
        return (
            <div>
                <Layout>
                    <div className='container-fluid mb-3 text-left py-2'>
                        <span className='h5 font-weight-bold '>City</span>
                    </div>
                    <FormFilter
                        onSubmit={this.handleSubmitFilter}
                    />
                    <DataTable
                        dataSource={this.props.city.data || []}
                        loading={this.props.city.loading}
                        updateCity={this.openModal}
                    />
                    <Modal
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
                            onSubmit={this.handleUpdateCity}
                            handleShowForm={this.handleShowForm}
                        />
                    </Modal>
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    city: state.city
})

const mapDispatchToProps = dispatch => ({
    getList: (params) => {
        dispatch(getList(params))
    },
    updateCity: (id, params) => {
        dispatch(updateCity(id, params))
    },
    createCity: (params) => {
        dispatch(createCity(params))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(index)
