import Layout from "../../components/helpers/Layout";
import React from "react";
import { getList } from "./action";
import FilterCity from "../../components/main/Review/FilterCity";
import ReviewPost from "../../components/main/Review/ReviewPost";
import { Component } from "react";
import queryString from "query-string";
class index extends Component {
  constructor(props) {
    super(props);
    const query_params = queryString.parse(window.location.search);
    this.state = {
      initial_filter: query_params,
    };
  }

  getCity = (selectedCity) => {
    this.props.getList(selectedCity);
    this.props.history.replace(
      window.location.pathname +
        "?" +
        this.state.initial_filter.stringify(selectedCity)
    );
  };

  render() {
    const { reviews } = this.props;
    const dummy_posts = [
      {
        placename: "Đồng Nai",
        postname: "Đồng Nai quê tôi",
        author: "Nguyễn Hoàng Đức",
        date: "29/11/2021",
        rating: 3.5,
      },
      {
        placename: "Đồng Nai",
        postname: "Đồng Nai quê tôi",
        author: "Nguyễn Hoàng Đức",
        date: "29/11/2021",
        rating: 3.5,
      },
      {
        placename: "Đồng Nai",
        postname: "Đồng Nai quê tôi",
        author: "Nguyễn Hoàng Đức",
        date: "29/11/2021",
        rating: 3.5,
      },
      {
        placename: "Đồng Nai",
        postname: "Đồng Nai quê tôi",
        author: "Nguyễn Hoàng Đức",
        date: "29/11/2021",
        rating: 3.5,
      },
      {
        placename: "Đồng Nai",
        postname: "Đồng Nai quê tôi",
        author: "Nguyễn Hoàng Đức",
        date: "29/11/2021",
        rating: 3.5,
      },
      {
        placename: "Đồng Nai",
        postname: "Đồng Nai quê tôi",
        author: "Nguyễn Hoàng Đức",
        date: "29/11/2021",
        rating: 3.5,
      },
    ];

    return (
      <Layout>
        <FilterCity onGetCity={this.getCity} />
        <ReviewPost data={dummy_posts} />
      </Layout>
    );
  }
}

const mapStatetoProps = (state) => ({
  reviews: state.Reviews,
});

const mapDispatchToProps = (dispatch) => ({
  getList: (params) => {
    dispatch(getList(params));
  },
});
export default index;
