import React from "react";
import classes from "./ReviewPost.module.css";
import Button from "../../helpers/Button";

function Review(props) {
    document.querySelector("body").className = classes.background;
  return (
    <section>
        <div className={classes.background}></div>
      {props.data.map((post) => {
        return (
          <div key={post.id} className={classes["content-wrapper"]}>
            <div className={classes["place-wrapper"]}>
              <h2>{post.placename}</h2>
              <p><b>Rating: </b>{post.rating}</p>
              <Button className={classes.more}>Xem bài</Button>
            </div>
            <div className={classes["review-wrapper"]}>
              <h3><em>{post.postname}</em></h3>
              <p>Tác giả: {post.author}</p>
              <br />
              <p>Ngày đăng: {post.date}</p>
              <br />
              <p>Lượt xem: {post.view}</p>
              <br />
            </div>
            <div className={classes["img-wrapper"]}>
                <img className={classes.placeimg} src={post.src} alt={post.placename}></img>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Review;
