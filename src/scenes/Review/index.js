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

  getCity = (selectedCity) => {
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
    const { reviews } = this.props;
    const dummy_posts = [
      {
        id: 1,
        placename: "Đồng Nai",
        postname: "Đồng Nai quê tôi",
        author: "Nguyễn Hoàng Đức",
        date: "29/11/2021",
        rating: 3.5,
        view: 1200300,
        src: "https://file1.dangcongsan.vn/DATA/0/2019/01/tr%E1%BA%A5n_bi%C3%AAn_ng%C3%A0y_m%E1%BB%9Bi___t%C3%A1c_gi%E1%BA%A3__nguy%E1%BB%85n_th%C3%A0nh_an_gi%E1%BA%A3i_ba_cu%E1%BB%99c_thi_%E1%BA%A3nh_%C4%91%E1%BA%B9p_du_l%E1%BB%8Bch_%C4%91%E1%BB%93ng_nai_11_39_32_772-19_34_54_691.jpg"
      },
      {
        id: 2,
        placename: "Đồng Nai",
        postname: "Đồng Nai quê tôi",
        author: "Nguyễn Hoàng Đức",
        date: "29/11/2021",
        rating: 3.5,
        view: 1200300,
        src: "https://file1.dangcongsan.vn/DATA/0/2019/01/tr%E1%BA%A5n_bi%C3%AAn_ng%C3%A0y_m%E1%BB%9Bi___t%C3%A1c_gi%E1%BA%A3__nguy%E1%BB%85n_th%C3%A0nh_an_gi%E1%BA%A3i_ba_cu%E1%BB%99c_thi_%E1%BA%A3nh_%C4%91%E1%BA%B9p_du_l%E1%BB%8Bch_%C4%91%E1%BB%93ng_nai_11_39_32_772-19_34_54_691.jpg"
      },
      {
        id: 3,
        placename: "Đồng Nai",
        postname: "Đồng Nai quê tôi",
        author: "Nguyễn Hoàng Đức",
        date: "29/11/2021",
        rating: 3.5,
        view: 1200300,
        src: "https://file1.dangcongsan.vn/DATA/0/2019/01/tr%E1%BA%A5n_bi%C3%AAn_ng%C3%A0y_m%E1%BB%9Bi___t%C3%A1c_gi%E1%BA%A3__nguy%E1%BB%85n_th%C3%A0nh_an_gi%E1%BA%A3i_ba_cu%E1%BB%99c_thi_%E1%BA%A3nh_%C4%91%E1%BA%B9p_du_l%E1%BB%8Bch_%C4%91%E1%BB%93ng_nai_11_39_32_772-19_34_54_691.jpg"
      },
      {
        id: 4,
        placename: "Đồng Nai",
        postname: "Đồng Nai quê tôi",
        author: "Nguyễn Hoàng Đức",
        date: "29/11/2021",
        rating: 3.5,
        view: 1200300,
        src: "https://file1.dangcongsan.vn/DATA/0/2019/01/tr%E1%BA%A5n_bi%C3%AAn_ng%C3%A0y_m%E1%BB%9Bi___t%C3%A1c_gi%E1%BA%A3__nguy%E1%BB%85n_th%C3%A0nh_an_gi%E1%BA%A3i_ba_cu%E1%BB%99c_thi_%E1%BA%A3nh_%C4%91%E1%BA%B9p_du_l%E1%BB%8Bch_%C4%91%E1%BB%93ng_nai_11_39_32_772-19_34_54_691.jpg"
      },
      {
        id: 5,
        placename: "Đồng Nai",
        postname: "Đồng Nai quê tôi",
        author: "Nguyễn Hoàng Đức",
        date: "29/11/2021",
        rating: 3.5,
        view: 1200300,
        src: "https://file1.dangcongsan.vn/DATA/0/2019/01/tr%E1%BA%A5n_bi%C3%AAn_ng%C3%A0y_m%E1%BB%9Bi___t%C3%A1c_gi%E1%BA%A3__nguy%E1%BB%85n_th%C3%A0nh_an_gi%E1%BA%A3i_ba_cu%E1%BB%99c_thi_%E1%BA%A3nh_%C4%91%E1%BA%B9p_du_l%E1%BB%8Bch_%C4%91%E1%BB%93ng_nai_11_39_32_772-19_34_54_691.jpg"
      },
      {
        id: 6,
        placename: "Đồng Nai",
        postname: "Đồng Nai quê tôi",
        author: "Nguyễn Hoàng Đức",
        date: "29/11/2021",
        rating: 3.5,
        view: 1200300,
        src: "https://file1.dangcongsan.vn/DATA/0/2019/01/tr%E1%BA%A5n_bi%C3%AAn_ng%C3%A0y_m%E1%BB%9Bi___t%C3%A1c_gi%E1%BA%A3__nguy%E1%BB%85n_th%C3%A0nh_an_gi%E1%BA%A3i_ba_cu%E1%BB%99c_thi_%E1%BA%A3nh_%C4%91%E1%BA%B9p_du_l%E1%BB%8Bch_%C4%91%E1%BB%93ng_nai_11_39_32_772-19_34_54_691.jpg"
      },
    ];

    return (
      <Layout>
        <div className={classes["filter-wrapper"]}>
        
        <FilterCity onGetCity={this.getCity} />
        <FilterTime onGetTime={this.getTime}/>
        </div>
        <ReviewPost data={dummy_posts} />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  reviews: state.Reviews,
});

const mapDispatchToProps = (dispatch) => ({
  getList: (params) => {
    dispatch(getList(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(index)
