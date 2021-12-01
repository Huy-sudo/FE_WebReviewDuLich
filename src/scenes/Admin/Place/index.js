import React, { Component } from 'react';
import { Button, Spin, Alert, Modal } from 'antd';
import { connect } from 'react-redux'
import FormFilter from './components/FormFilter'
import Layout from '../Layout/layout'
import DataTable from './components/DataTable'
// import FormCreatePlace from './components/FormCreatePlace'
import { getList, createPlace, updatePlace, deletePlace, getListCity } from './action'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import queryString from 'query-string'
class index extends Component {
    constructor(props) {
        super(props);
        const query_params = queryString.parse(window.location.search);
        this.state = {
            showForm: false,
            initial_filter_values: query_params
        }
    }
    
    componentDidMount=()=>{
        this.handleSubmitFilter(this.state.initial_filter_values)
    }

    handleSubmitFilter = ({  ...values }) => {
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

    handleCreatePlace = (value) => {
        this.props.createPlace(value)
        this.setState({ showForm: false })
    }
  
    createPlace = (value) => {
        let data = {
            ...value,
        }
        this.props.createPlace(data)
    }

    deletePlace = (value) => {
        this.props.deletePlace(value)
    }

    render() {
        const { places } = this.props
        const { initialValue, showForm } = this.state
        return (
            <div>
                <Layout>
                    <div className='container-fluid mb-3 text-left py-2'>
                        <span className='h5 font-weight-bold '>Địa điểm</span>
                    </div>
                        <FormFilter
                            onSubmit={this.handleSubmitFilter}
                        />
                        <button onClick={() => this.handleShowForm(true)} className="btn-primary btn px-2 mb-3 ml-10"> Tạo địa điểm</button>
                        <DataTable
                            dataSource={places.data || []}
                            loading={places.loading}
                            onSubmit={this.updatePlace}
                            onDelete={this.deletePlace}
                        />
                        {/* <Modal
                            title="Tạo địa điểm"
                            visible={showForm}
                            closable={false}
                            onCancel={this.handleCloseModal}
                            footer={null}
                        >
                            <FormCreatePlace
                                destroyOnClose={true}
                                keyboard={true}
                                maskClosable={true}
                                onCancel={() => this.handleShowForm(false)}
                                city={city.data}
                                onSubmit={this.handleCreatePlace}
                                handleShowForm={this.handleShowForm}
                            />
                        </Modal> */}
                    {/* </Spin> */}
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    places: state.Places,
    city: state.City
})

const mapDispatchToProps = dispatch => ({
    getList: (params) => {
        dispatch(getList(params))
    },
    createPlace: (params) => {
        dispatch(createPlace(params))
    },
    updatePlace: (id, params) => {
        dispatch(updatePlace(id, params))
    },
    deletePlace: (id) => {
        dispatch(deletePlace(id))
    },
    getListCity: (params) => {
        dispatch(getListCity(params))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(index)
