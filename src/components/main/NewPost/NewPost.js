import React, { useState } from "react";
import classes from "./NewPost.module.css";
import Input from "../../helpers/Input";
import FilterCity from "../Review/FilterCity";
import { style } from "dom-helpers";
import CityPicker from "./CityPicker";
import StarRating from "./StarRating";

function NewPost() {
  const [postname, setPostname] = useState("");
  const [placename, setPlacename] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(null);
  function postnameChangeHandler(event) {
    setPostname(event.target.value);
  }

  function placenameChangeHandler(event) {
    setPlacename(event.target.value);
  }
  function contentChangeHandler(event) {
    setContent(event.target.value);
  }

  function saveRatingValue(value) {
    setRating(value);
  }

  function submitHandler() {
    setPostname("");
    setContent("");
    setPlacename("");
    setRating("");
  }
  document.getElementById("root").className = classes.background;
  return (
    <form onSubmit={submitHandler} className={classes.container}>
      <h1>Đăng bài review</h1>
      <div className={classes.postname}>
        <label htmlFor="postname">
          Tên bài viết <span style={{ color: "red" }}>*</span>
        </label>
        <Input type="text" value={postname} onChange={postnameChangeHandler} />
        <label htmlFor="placename">
          Tên địa điểm <span style={{ color: "red" }}>*</span>
        </label>
        <Input
          type="text"
          id="placename"
          value={placename}
          onChange={placenameChangeHandler}
        />
      </div>
      <CityPicker />
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
      <StarRating onSaveData={saveRatingValue}/>
      </div>
      <Input className={classes.submit} type="submit" value="Đăng" />
    </form>
  );
}

export default NewPost;
