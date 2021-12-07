import { Component } from "react";
import Layout from "../../components/helpers/Layout";
import Cookies from "js-cookie";
import SearchPage from "../../components/main/SearchPage/SearchPage";
import SearchQuery from "../../components/context/SearchQuery";
import { connect } from "react-redux";
import { getList } from "./action";
import queryString from "query-string";
class index extends Component {
  constructor(props) {
    super(props);
    const query_params = queryString.parse(window.location.search)
    this.state = {
      initial_filter_value: query_params
    }
  }
  componentWillMount = () => {
    const token = Cookies.get("web_token");
    if (!token) this.props.history.push("/login");
    this.props.history.replace(window.location.pathname + "?" + queryString.stringify(this.context.value));
    this.props.getList({name: this.context.value});
    console.log(this.props.review.search);
    console.log(this.context);
  };

  static contextType = SearchQuery;

  render() {
    return (
        <Layout>
          <SearchPage data={this.props.review.search} />
        </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  review: state,
});

const mapDispatchToProps = (dispatch) => ({
  getList: (params) => {
    dispatch(getList(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
