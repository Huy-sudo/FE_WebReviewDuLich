import React from "react";
import classes from "./PostDetail.module.css";
function PostDetail(props) {
  // const [isFocus, setIsFocus] = useState(false);

  // function focusChangeHandler() {
  //   setIsFocus(!isFocus);
  // }

  // let post = props.data;
  document.getElementById("root").className = classes.postbackground;
  return (
    <div className={classes["post-wrapper"]}>
      <h1>{props.data?.name}</h1>
      {/* <div className={classes["focus-mode"]}> */}
      {/* <p>Chế độ tập trung: </p> */}
      {/* <Button className={classes.focus} onClick={focusChangeHandler}>{isFocus ? "Bật" : "Tắt"}</Button> */}
      {/* </div> */}
      <div className={classes.info}>
        <div className={classes["author-date"]}>
          <p>
            <em>Tác giả: {props.data?.user?.name}</em>
          </p>
          <p>
            <em>Ngày đăng: {props.data?.created}</em>
          </p>
        </div>
        <p className={classes.rating}>
          Đánh giá:{" "}
          <span style={{ color: "#FFBE0D", fontWeight: "bold" }}>
            {props.data?.rate}
          </span>
        </p>
        <p>Địa điểm: {props.data?.place?.name}</p>
      </div>
      <article>
        <p>{props.data?.content}</p>
        <img
          className={classes.image}
          src={props.data?.picture}
          alt={props.data?.place?.name}
        />
      </article>
    </div>
  );
}
export default PostDetail;
