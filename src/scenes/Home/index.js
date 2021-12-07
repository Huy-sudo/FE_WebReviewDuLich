import React, { Component } from "react";
import MostReviewedPlacesChart from "../../components/main/Home/MostReviewedPlacesChart";
import FeaturedPlaces from "../../components/main/Home/FeaturedPlaces";
import Layout from "../../components/helpers/Layout";
import CarouselHeader from "../../components/header/Carousel/CarouselHeader";
import AuthenContext from "../../components/context/AuthenContext";
import { getList } from "./action";
import { connect } from "react-redux";
import Cookies from "js-cookie";
import UserDetail from "../../components/context/UserDetail";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdmin: 0,
    };
  }
  componentDidMount() {
    let params = {};
    this.props.getList(params);
  }

  componentDidUpdate() {
    this.context.isAdmin = this.state.isAdmin;
    console.log(this.context);
  }

  componentWillMount = () => {
    const token = Cookies.get("web_token");
    if (!token) this.props.history.push("/login");
    setTimeout(() => {
      this.setState({ isAdmin: this.props.user[0].isAdmin });
    }, 2000);
    console.log("render lan dau")
  };
  static contextType = UserDetail;
  render() {
    const data = this.props.places.data;
    // console.log(this.state.isAdmin);
    return (
      <AuthenContext.Consumer>
        {(context) => {
          context.isLoggedIn = true;
          return (
            <Layout isAdmin={this.state.isAdmin}>
              <CarouselHeader />
              <FeaturedPlaces data={data} />
              <MostReviewedPlacesChart data={data} />
            </Layout>
          );
        }}
      </AuthenContext.Consumer>
    );
  }
}

const mapStateToProps = (state) => ({
  places: state.home,
  user: state.login.user,
});

const mapDispatchToProps = (dispatch) => ({
  getList: (params) => {
    dispatch(getList(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
