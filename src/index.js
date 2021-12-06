import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reportWebVitals from "./reportWebVitals";
import { routerMiddleware, ConnectedRouter } from "connected-react-router";
import reducer from "./reducer";
import { createBrowserHistory } from "history";
import saga from "./saga";
import AuthenContext from "./components/context/AuthenContext";
import UserDetail from "./components/context/UserDetail";
import ReviewContext from "./components/context/ReviewContext";
import SearchQuery from "./components/context/SearchQuery";
const history = createBrowserHistory({ basename: "/" });
const sagaMiddleware = createSagaMiddleware();
const composeSetup =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const store = createStore(
  reducer(history),
  composeSetup(applyMiddleware(routerMiddleware(history), sagaMiddleware))
);
sagaMiddleware.run(saga);

ReactDOM.render(
  <AuthenContext.Provider value={{ isLoggedIn: false }}>
    <UserDetail.Provider value={{ id: "", email: "", name: "" }}>
      <ReviewContext.Provider value={{ id: "" }}>
        <SearchQuery.Provider value={{ value: "" }}>
          <Provider store={store}>
            <ConnectedRouter history={history}>
              <App history={history} />
            </ConnectedRouter>
          </Provider>
        </SearchQuery.Provider>
      </ReviewContext.Provider>
    </UserDetail.Provider>
  </AuthenContext.Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
