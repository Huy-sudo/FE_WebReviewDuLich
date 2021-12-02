import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import classes from "./Navigation.module.css";
import { Menu, Dropdown, Avatar } from "antd";
import Button from "../../helpers/Button";
import AuthenContext from "../../context/AuthenContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faSignOutAlt,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

function NavigationContent(props) {
  const [userInput, setUserInput] = useState("");
  let context = useContext(AuthenContext);

  function searchChangeHandler(event) {
    setUserInput(event.target.value);
  }

  function searchHandler() {
    props.onGetUserInput(userInput);
  }

  return (
    <div className={classes["navbar-wrapper"]}>
      <nav className={classes.navbar}>
        {/*<img source="" alt="Logo Revigo" /> {/*ảnh logo*/}
        <div className={classes["middle-bar"]}>
          <NavLink activeClassName={classes.selected} to="/home">
            Trang chủ
          </NavLink>
          <NavLink activeClassName={classes.active} to="/reviewpage">
            Review
          </NavLink>
          <NavLink activeClassName={classes.active} to="/chart">
            Bảng xếp hạng
          </NavLink>
          <NavLink activeClassName={classes.active} to="/">
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
            <Link to="/results">
              <FontAwesomeIcon icon={faSearch}>search</FontAwesomeIcon>
            </Link>
          </Button>
        </div>
      </nav>
      {!context.isLoggedIn && (
        <div className={classes["login-signup"]}>
          <a href="/">Đăng nhập</a>
          <p>|</p>
          <a href="/">Đăng ký</a>
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
                  <Link to={"/admin"} className={classes.menu}>
                    <FontAwesomeIcon style={{ width: 20 }} icon={faUser} /> Quản
                    lý
                  </Link>
                </Menu.Item>
                <Menu.Item key="1">
                  <a href={"/auth/logout"} className={classes.menu}>
                    <FontAwesomeIcon
                      style={{ width: 20 }}
                      icon={faSignOutAlt}
                    />{" "}
                    Sign Out
                  </a>
                </Menu.Item>
              </Menu>
            }
          >
            <div>
              <Avatar className={classes.dropdown} style={{backgroundColor: "#FFFFFFBE"}}>USER</Avatar>
              <FontAwesomeIcon style={{ fontSize: 25, marginLeft: "5px" }} icon={faSortDown} />
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
