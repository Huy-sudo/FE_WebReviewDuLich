import React, { useState } from "react";
import classes from "./NewPost.module.css";
import Input from "../../helpers/Input";
import CityPicker from "./CityPicker";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";
import PlacePicker from "./PlacePicker";
function NewPost(props) {
  const [postname, setPostname] = useState("");
  const [place, setPlace] = useState("");
  const [content, setContent] = useState("");
  const [imgsrc, setImgsrc] = useState("");
  const [rating, setRating] = useState(null);
  const [city, setCity] = useState("");

  function postnameChangeHandler(event) {
    setPostname(event.target.value);
  }

  function contentChangeHandler(event) {
    setContent(event.target.value);
  }

  function saveRatingValue(value) {
    setRating(value);
  }

  function imgsrcChangeHandler(event) {
    setImgsrc(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    let params = {
      ID_user: props.user.id,
      name: postname,
      ID_city: city,
      ID_place: place,
      content: content,
      rate: rating,
      status: 2,
    }
    props.onSaveData(params)
    setPostname("");
    setContent("");
    setPlace("");
    setRating("");
    setImgsrc("");
    setCity("");
  }

  document.getElementById("root").className = classes.background;
  return (
    <>
      <form onSubmit={submitHandler} className={classes.container}>
        <h1>Đăng bài review</h1>
        <div className={classes.postname}>
          <label htmlFor="postname">
            Tên bài viết <span style={{ color: "red" }}>*</span>
          </label>
          <Input
            type="text"
            value={postname}
            onChange={postnameChangeHandler}
          />
          <label htmlFor="imgsrc">Chọn nguồn ảnh</label>
          <Input
            type="text"
            id="imgsrc"
            value={imgsrc}
            onChange={imgsrcChangeHandler}
          />
        </div>
        <PlacePicker data={props.placeData} onSaveData={setPlace} />
        <CityPicker data={props.cityData} onSaveData={setCity} />
        <div>
          <label htmlFor="content">
            Nội dung <span style={{ color: "red" }}>*</span>
          </label>
        </div>
        <textarea
          id="content"
          value={content}
          onChange={contentChangeHandler}
        ></textarea>
        <div className={classes.rating}>
          <label>
            Đánh giá của bạn <span style={{ color: "red" }}>*</span>
          </label>
          <StarRating onSaveData={saveRatingValue} />
        </div>
        <Link to="/profile">
          <Input className={classes.submit} type="submit" value="Đăng" />
        </Link>
      </form>
    </>
  );
}

export default NewPost;
