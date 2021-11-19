import React from 'react';
import classes from './Navigation.module.css';
import Button from '../../helpers/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Navigation() {

    function search() {

    }

    return (
        <nav className={classes.navbar}> 
            <img source="" alt="Logo Revigo"/> {/*ảnh logo*/}
            <a href="/">Trang chủ</a>
            <a href="/">Địa điểm</a>
            <a href="/">Bảng xếp hạng</a>
            <a href="/">Liên hệ</a>
            <input placeholder='Tìm kiếm' className={classes["input-search"]} type="search"/>
            <Button className={classes.buttonsearch} id="search_button" onClick={search} type="submit" ><FontAwesomeIcon icon={faSearch}>search</FontAwesomeIcon></Button>
            <a href="/" className>Đăng nhập</a>
            <p>|</p>
            <a href="/">Đăng ký</a> 
        </nav>
    )
}

export default Navigation;