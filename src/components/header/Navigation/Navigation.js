import React, { useState, useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import classes from "./Navigation.module.css";
import { Menu, Dropdown, Avatar } from "antd";
import Button from "../../helpers/Button";
import AuthenContext from "../../context/AuthenContext";
import UserDetail from "../../context/UserDetail";
import SearchQuery from "../../context/SearchQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faSignOutAlt,
  faSortDown,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import Logo from "../../../photo/logo.png"

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return () => {setValue(value => value + 1)};
}

function NavigationContent(props) {
  const [userInput, setUserInput] = useState("");
  let context = useContext(AuthenContext);
  let searchContext = useContext(SearchQuery);
  function searchChangeHandler(event) {
    setUserInput(event.target.value);
  }

  function searchHandler() {
    searchContext.value = userInput;
  }

  function signoutHandler() {
    context.isLoggedIn = false;
    Cookies.set("web_token", "");
    console.log(Cookies.get("web_token"));
    window.location.pathname = "/login";
  }

  const userContext = useContext(UserDetail);
  const [isAdmin, setIsAdmin] = useState(0);

  useEffect(() => {
    setIsAdmin(userContext.isAdmin);
  }, [userContext.isAdmin]);

  return (
    <div className={classes["navbar-wrapper"]}>
      <nav className={classes.navbar} >
        <img src={Logo} alt="Logo Revigo" className={classes.logo}/>
        <div className={classes["middle-bar"]}>
          <NavLink activeClassName={classes.selected} to="/home">
            Trang chủ
          </NavLink>
          <NavLink activeClassName={classes.selected} to="/reviewpage">
            Review
          </NavLink>
          <NavLink activeClassName={classes.selected} to="/chart">
            Bảng xếp hạng
          </NavLink>
          <NavLink activeClassName={classes.selected} to="/a">
            Liên hệ
          </NavLink>
          <input
            placeholder="Tìm kiếm"
            className={classes["input-search"]}
            type="search"
            onChange={searchChangeHandler}
            value={userInput}
          />
          <Button
            className={classes.buttonsearch}
            id="search_button"
            onClick={searchHandler}
            type="submit"
          >
            <Link to="/search">
              <FontAwesomeIcon icon={faSearch}>search</FontAwesomeIcon>
            </Link>
          </Button>
        </div>
      </nav>
      {!context.isLoggedIn && (
        <div className={classes["login-signup"]}>
          <a href="/">Đăng nhập</a>
          <p>|</p>
          <NavLink to="/signup">Đăng ký</NavLink>
        </div>
      )}
      {context.isLoggedIn && (
        <div className={classes["profile"]}>
          <Dropdown
            className={classes.dropdown}
            trigger="click"
            overlay={
              <Menu className={classes["menu-wrapper"]}>
                <Menu.Item key="0">
                  <Link to={"/profile"} className={classes.menu}>
                    <FontAwesomeIcon style={{ width: 20 }} icon={faUser} />{" "}
                    Trang cá nhân
                  </Link>
                </Menu.Item>
                {isAdmin ? <Menu.Item key="1">
                  <Link to={"/admin"} className={classes.menu}>
                    <FontAwesomeIcon style={{ width: 20 }} icon={faCogs} /> Quản
                    lý
                  </Link>
                </Menu.Item> : <></>}
                <Menu.Item key="2">
                  <a className={classes.menu} onClick={signoutHandler}>
                    <FontAwesomeIcon
                      style={{ width: 20 }}
                      icon={faSignOutAlt}
                    />{" "}
                    Đăng xuất
                  </a>
                </Menu.Item>
              </Menu>
            }
          >
            <div>
              <Avatar
                className={classes.dropdown}
                style={{ backgroundColor: "#FFFFFFBE" }}
              >
                USER
              </Avatar>
              <FontAwesomeIcon
                style={{ fontSize: 25, marginLeft: "5px" }}
                icon={faSortDown}
              />
            </div>
          </Dropdown>
        </div>
      )}
    </div>
  );
}

function Navigation(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <NavigationContent onGetUserInput={props.onGetUserInput} />,
        document.querySelector("header")
      )}
    </>
  );
}

export default Navigation;
