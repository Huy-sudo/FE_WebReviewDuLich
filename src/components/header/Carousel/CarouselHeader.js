import React from "react";
import { Carousel } from "antd";
import classes from "./CarouselHeader.module.css";
import NhaTrang from "../../../photo/8.jpg";
import HoChiMinh from "../../../photo/5.jpg";
import DaLat from "../../../photo/7_1.jpg";
import GiaLai from "../../../photo/9.jpg";

function CarouselHeader() {
  return (
    <Carousel>
      <div>
        <img className={classes["carousel-img"]} src={GiaLai} alt="Gia Lai"></img>
      </div>
      <div>
        <img className={classes["carousel-img"]} src={HoChiMinh} alt="Hồ Chí Minh"></img>
      </div>
      <div>
        <img className={classes["carousel-img"]} src={NhaTrang} alt="Nha Trang"></img>
      </div>
      <div>
        <img className={classes["carousel-img"]} src={DaLat} alt="Đà Lạt"></img>
      </div>
    </Carousel>
  );
}

export default CarouselHeader;
