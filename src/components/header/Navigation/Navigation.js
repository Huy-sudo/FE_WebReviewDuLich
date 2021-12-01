import React from "react";
import classes from "./Navigation.module.css";
import { Menu, Dropdown, Space, Avatar } from 'antd';
import Button from "../../helpers/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faSearch, faSortDown, faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  function search() { } //go to search page

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
          />
          <Button
            className={classes.buttonsearch}
            id="search_button"
            onClick={search}
            type="submit"
          >
            <FontAwesomeIcon icon={faSearch}>search</FontAwesomeIcon>
          </Button>
        </div>
      </nav>
      {/* <div className={classes["login-signup"]}>
        <a href="/">Đăng nhập</a>
        <p>|</p>
        <a href="/">Đăng ký</a>
      </div> */}
      <div className={classes["profile"]}>
        <Dropdown
          trigger={['click']}
          overlay={(
            <Menu>
              <Menu.Item key="0">
                <Link to={'/admin'}><FontAwesomeIcon style={{ width: 20 }} icon={faUser} /> {('Quản lý')}</Link>
              </Menu.Item>
              <Menu.Item key="1">
                <a href={'/auth/logout'}><FontAwesomeIcon style={{ width: 20 }} icon={faSignOutAlt} /> {('Sign Out')}</a>
              </Menu.Item>
            </Menu>
          )}
        >
          <Space className="cursor-pointer">
            <Avatar >USER</Avatar>
            <FontAwesomeIcon style={{ fontSize: 20 }} icon={faSortDown} />
          </Space>
        </Dropdown>
      </div>
    </div>
  );
}

export default Navigation;
