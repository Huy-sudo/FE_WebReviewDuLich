import React from "react";
import classes from "./ReviewPost.module.css";
import Button from "../../helpers/Button";

function Review(props) {
    document.querySelector("body").className = classes.background;
  return (
    <section>
      {props.data.map((post) => {
        return (
          <div key={post.id} className={classes["content-wrapper"]}>
            <div className={classes["place-wrapper"]}>
              <h2>{post.placename}</h2>
              <p className={classes["rating-number"]} ><b>Rating: </b>{post.rating}</p>
              <Button className={classes.more}>Xem bài</Button>
            </div>
            <div className={classes["review-wrapper"]}>
              <h3 className={classes["post-name"]} ><em>{post.postname}</em></h3>
              <p className={classes["authorname"]}>Tác giả: {post.author}</p>
              <br />
              <p className={classes["authordate"]}>Ngày đăng: {post.date}</p>
              <br />
              <p className={classes["rateview"]}>Lượt xem: {post.view}</p>
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
