import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch, Redirect } from "react-router-dom";
import { verify } from "./scenes/Auth/Login/action";
import Cookies from "js-cookie";
import router from "./routes";

class App extends Component {
<<<<<<< HEAD
  componentDidMount=()=>{
    const token = Cookies.get('web_token')
      if(!token) this.props.history.push('/login')
  }
=======
  componentDidMount = () => {

    const token = Cookies.get("web_token");
    if (!token) this.props.history.push("/login");
  };
>>>>>>> e4d57b25f909d0a1129ea111d82e415ec55a9e2a
  render() {
    let key = 1;
    return (
      <div className="App">
        <ConnectedRouter history={this.props.history}>
          {/* <Layout {...this.props}> */}
          <Switch>
            {router.map((d) => {
              key += 1;
              return (
                <Route
                  exact
                  path={d.path}
                  key={key}
                  component={d.component}
                  // render={(d)=> (d.component) }
                >
                  {/* <div> d</div> */}
                </Route>
              );
            })}
            <Redirect from="*" to="/errors/404" />
          </Switch>
        </ConnectedRouter>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    user: state.login.user,
  }),
  (dispatch) => ({
    verify: () => {
      dispatch(verify());
    },
  })
)(App);
