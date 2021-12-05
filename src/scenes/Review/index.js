import Layout from "../../components/helpers/Layout";
import React from "react";
import { connect } from "react-redux";
import { getList } from "./action";
import FilterCity from "../../components/main/Review/FilterCity";
import ReviewPost from "../../components/main/Review/ReviewPost";
import { Component } from "react";
import queryString from "query-string";
import classes from "./Review.module.css";
import FilterTime from "../../components/main/Review/FilterTime";
class index extends Component {
  constructor(props) {
    super(props);
    const query_params = queryString.parse(window.location.search);
    this.state = {
      initial_filter: query_params,
    };
  }

  componentWillMount() {
    let params = {}
    this.props.getList(params);
  }

  getCity = (selectedCity) => {
    let params = {}
    this.props.getList(params);
    console.log(this.props)

    this.props.getList(selectedCity);
    this.props.history.replace(
      window.location.pathname +
        "?" +
        this.state.initial_filter.stringify(selectedCity)
    );
  };

  getTime = (selectedTime) => {

  }

  render() {
    const data = this.props.reviews.data;
    return (
      <Layout>
        <div className={classes["filter-wrapper"]}>
        
        <FilterCity onGetCity={this.getCity} />
        <FilterTime onGetTime={this.getTime}/>
        </div>
        <ReviewPost data={data} />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  reviews: state.review,
});

const mapDispatchToProps = (dispatch) => ({
  getList: (params) => {
    dispatch(getList(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(index)
