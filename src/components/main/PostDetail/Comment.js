import React, { useState } from "react";
import classes from "./Comment.module.css";
import { Link } from "react-router-dom";

function Comment() {
  const data = [
    {
      id: "1",
      user: "Đức Nguyễn",
      comment: "Bài viết hay, chất lượng!",
      date: "28/11/2021",
    },
    {
      id: "2",
      user: "Đức Nguyễn",
      comment: "Bài viết hay, chất lượng!",
      date: "29/11/2021",
    },
    {
      id: "3",
      user: "Đức Nguyễn",
      comment: "Bài viết hay, chất lượng!",
      date: "30/11/2021",
    },
    {
      id: "4",
      user: "Huy Hà",
      comment:
        "Bài viết hay, chất lượng, không biết là có cách nào để mình có thể liên hệ với chủ tus không nhỉ?",
      date: "01/12/2021",
    },
    {
      id: "5",
      user: "Huy Hà",
      comment:
        "Bài viết hay, chất lượng, không biết là có cách nào để mình có thể liên hệ với chủ tus không nhỉ?",
      date: "01/12/2021",
    },
    {
      id: "6",
      user: "Huy Hà",
      comment:
        "Bài viết hay, chất lượng, không biết là có cách nào để mình có thể liên hệ với chủ tus không nhỉ?",
      date: "01/12/2021",
    },
    {
      id: "7",
      user: "Huy Hà",
      comment:
        "Bài viết hay, chất lượng, không biết là có cách nào để mình có thể liên hệ với chủ tus không nhỉ?",
      date: "01/12/2021",
    },
    {
      id: "8",
      user: "Huy Hà",
      comment:
        "Bài viết hay, chất lượng, không biết là có cách nào để mình có thể liên hệ với chủ tus không nhỉ?",
      date: "01/12/2021",
    },
    {
      id: "9",
      user: "Huy Hà",
      comment:
        "Bài viết hay, chất lượng, không biết là có cách nào để mình có thể liên hệ với chủ tus không nhỉ?",
      date: "01/12/2021",
    },
  ];
  
  const [comment, setComment] = useState('');
  function commentChangeHandler(event) {
    setComment(event.target.value);
  }
  function submitHandler() {
    if (comment.trim().length > 0) {

    }
  }
  return (
    <section className={classes["comment-container"]}>
      <h2>Bình luận</h2>
      <form className={classes.comment} onSubmit={submitHandler}>
        <div className={classes["user-avatar"]}>Đức</div>
        <div className={classes["input-wrapper"]}>
          <label htmlFor="comment">Nội dung: </label>
          <input id="comment" type="text" onChange={commentChangeHandler}></input>
          <p>
            <span style={{ fontWeight: "bold", color: "red" }}>Lưu ý</span>: Hãy
            bình luận mang tính xây dựng, góp ý. Mọi nội dung không phù hợp với{" "}
            <Link>tiêu chuẩn cộng đồng</Link> của chúng tôi sẽ bị gỡ. Báo cáo vi phạm với chúng tôi <Link>tại đây!</Link>
          </p>
        </div>
        <input type="submit" value="Đăng"></input>
      </form>
      {data.map((comment) => {
        return (
          <div className={classes["item-wrapper"]} key={comment.id}>
            <div className={classes["user-avatar"]}>
              {comment.user.substring(0, 3).toUpperCase()}
            </div>
            <div className={classes["user-wrapper"]}>
              <p className={classes.username}>{comment.user}</p>
              <p>
                <em>{comment.date}</em>
              </p>
            </div>
            <div className={classes["content-wrapper"]}>
              <p className={classes.content}>{comment.comment}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Comment;
