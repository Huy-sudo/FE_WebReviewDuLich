import React from "react";
import classes from "./FeaturedPlaces.module.css";

function FeaturedPlaces(props) {
  let places = props.data.slice(0, 4);

  return (
    //image, name, address, province, find out more button, description
    <section className={classes["feature-wrapper"]}>
      <h1>
        Những địa điểm <span style={{ color: "green" }}>nổi bật</span>
      </h1>
      <div className={classes['feature-content']}>
      {places.map((place) => {
        return (
          <div key={place.id} className={classes['place-content']}>
            <img src={place.imgsrc} alt={place.name}></img>
            <p className={classes['city-name']}>{place.name}</p><br/>
            <p><span>Địa chỉ: </span>{place.address}</p><br/>
            <p><span>Tỉnh/Thành phố:</span> {place.province}</p><br/>
            <p className={classes["city-content"]}><span>Mô tả:</span> {place.content}</p>
          </div>
        );
      })}
      </div>
      <p></p>
      <p></p>
    </section>
  );
}

export default FeaturedPlaces;
