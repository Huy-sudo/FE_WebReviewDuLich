import React, {useState} from "react";
import ReactDOM from "react-dom";
import classes from "./Navigation.module.css";
import Button from "../../helpers/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

function NavigationContent(props) {
  const [userInput, setUserInput] = useState('');

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
          <a href="/">Trang chủ</a>
          <a href="/">Địa điểm</a>
          <a href="/">Bảng xếp hạng</a>
          <a href="/">Liên hệ</a>
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
            <Link to="/results"><FontAwesomeIcon icon={faSearch}>search</FontAwesomeIcon></Link>
          </Button>
        </div>
        
      </nav>
      <div className={classes["login-signup"]}>
        <a href="/">Đăng nhập</a>
        <p>|</p>
        <a href="/">Đăng ký</a>
      </div>
    </div>
  );
}

function Navigation(props) {
  return <>
    {ReactDOM.createPortal(<NavigationContent onGetUserInput={props.onGetUserInput}/>, document.querySelector("header"))}
  </>
}

export default Navigation;
