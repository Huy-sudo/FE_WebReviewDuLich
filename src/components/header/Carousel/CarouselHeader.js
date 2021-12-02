import React from "react";
import { Carousel } from "antd";
import classes from "./CarouselHeader.module.css";
import NhaTrang from "../../../photo/8.jpg";
import HoChiMinh from "../../../photo/5.jpg";
import DaLat from "../../../photo/7_1.jpg";
import GiaLai from "../../../photo/9.jpg";
import Button from "@restart/ui/esm/Button";

function CarouselHeader() {
  return (
    <>
      <div className={classes["welcome-wrapper"]}>
        <h1 className={classes.title}> Chào mừng đến với Revigo</h1>
        <p>
          Revigo là một tổ chức phi lợi nhuận, nhằm kết nối khách du lịch ở khắp
          mọi miền tổ quốc với mục tiêu xây dựng một cộng đồng lành mạnh, lan
          toả sắc đẹp văn hoá tới mọi người, nâng cao tình yêu và nhận thức về
          tầm quan trọng cùng với vẻ đẹp của thiên nhiên.
        </p>
        <Button className={classes["welcome-more"]}>Khám phá ngay</Button>
      </div>
      <Carousel>
        <div>
          <img className={classes["carousel-img"]} src={GiaLai} alt="Gia Lai" />
        </div>
        <div>
          <img
            className={classes["carousel-img"]}
            src={HoChiMinh}
            alt="Hồ Chí Minh"
          ></img>
        </div>
        <div>
          <img
            className={classes["carousel-img"]}
            src={NhaTrang}
            alt="Nha Trang"
          ></img>
        </div>
        <div>
          <img
            className={classes["carousel-img"]}
            src={DaLat}
            alt="Đà Lạt"
          ></img>
        </div>
      </Carousel>
    </>
  );
}

export default CarouselHeader;
