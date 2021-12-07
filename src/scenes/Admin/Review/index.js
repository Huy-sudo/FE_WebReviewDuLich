import React, { Component } from 'react';
import { Button, Spin, Alert, Modal, Switch } from 'antd';
import { connect } from 'react-redux'
import Layout from '../../../scenes/Admin/Layout/layout'
import DataTable from './components/DataTable'
import { getList, updateReview, deleteReview } from './action'
import moment from 'moment'
import FormFilter from './components/FormFilter'
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
    
    componentDidMount=()=>{
        this.handleSubmitFilter(this.state.initial_filter_values)
    }

    handleSubmitFilter = ({  ...values }) => {
        let params = {
            ...values,
        }
        this.props.history.replace(window.location.pathname + '?' + queryString.stringify(params));
        this.props.getList(params)
    }
  
    updateReview = (values) => {
        let params = {
            ...values,
            status:1
        }
        this.props.updateReview(params)
    }

    deleteReview = (value) => {
        this.props.deleteReview(value)
    }

    render() {
        const { reviews } = this.props
        return (
            <div>
                <Layout>
                    <div className='container-fluid mb-3 text-left py-2'>
                        <span className='h5 font-weight-bold '>Reviews</span>
                    </div>
                        <FormFilter
                            onSubmit={this.handleSubmitFilter}
                        />
                        <DataTable
                            dataSource={reviews.data || []}
                            loading={reviews.loading}
                            updateReview={this.updateReview}
                            deleteReview={this.deleteReview}
                        />
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    reviews: state.review
})

const mapDispatchToProps = dispatch => ({
    getList: (params) => {
        dispatch(getList(params))
    },
    updateReview: (id) => {
        dispatch(updateReview(id))
    },
    deleteReview: (id) => {
        dispatch(deleteReview(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(index)
