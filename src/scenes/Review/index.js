import Layout from "../../components/helpers/Layout";
import React from "react";
import { connect } from "react-redux";
import { getList, getListCity } from "./action";
import FilterCity from "../../components/main/Review/FilterCity";
import ReviewPost from "../../components/main/Review/ReviewPost";
import { Component } from "react";
import queryString from "query-string";
import classes from "./Review.module.css";
import FilterTime from "../../components/main/Review/FilterTime";
import { Link } from "react-router-dom";
import AuthenContext from "../../components/context/AuthenContext";
import Cookies from "js-cookie";
class index extends Component {
  constructor(props) {
    super(props);
    const query_params = queryString.parse(window.location.search);
    this.state = {
      initial_filter: query_params,
    };
  }

  componentWillMount() {
    const token = Cookies.get("web_token");
    if (!token) this.props.history.push("/login");
    let params = {}
    this.props.getList(params);
    this.props.getListCity(params);
  }

  getCity = (selectedCity) => {
    let params = {ID_city: selectedCity}
    this.props.getList(params);
    this.props.history.replace(
      window.location.pathname +
        "?" +
        queryString.stringify(selectedCity)
    );
  };

  getTime = (selectedTime) => {

  }

  render() {
    const data = this.props.reviews.data;
    const city = this.props.reviews.city;
    return (
      <AuthenContext.Consumer>
      {ctx => {
        ctx.isLoggedIn = true;
        return (<Layout>
        <div className={classes["filter-wrapper"]}>
        <FilterCity onGetCity={this.getCity} data={city}/>
        <Link to="/newpost" className={classes.newpost}>Đăng bài</Link>
        <FilterTime onGetTime={this.getTime}/>
        </div>
        <ReviewPost data={data} />
      </Layout>)
      }}
      
      </AuthenContext.Consumer>
    );
  }
}

const mapStateToProps = (state) => ({
  reviews: state.reviewPage
});

const mapDispatchToProps = (dispatch) => ({
  getList: (params) => {
    dispatch(getList(params));
  },
  getListCity: (params) => {
    dispatch(getListCity(params));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(index)
