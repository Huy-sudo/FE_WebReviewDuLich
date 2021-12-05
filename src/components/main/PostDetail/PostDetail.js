import React, {useState} from "react";
import classes from "./PostDetail.module.css";
import Button from "../../helpers/Button";
function PostDetail(props) {
  const post = {
    id: 1,
    postname: "Đồng Nai quê tôi",
    placename: "Đồng Nai",
    author: "Nguyễn Hoàng Đức",
    rating: "4.5",
    content:
      "Đồng Nai, một tỉnh phía Nam của Đông Nam Bộ, sở hữu cho riêng mình những nét đẹp đặc biệt quyến rũ mà đậm nét độc đáo, riêng biệt. Là một trong những tỉnh. Với mục tiêu trở thành đô thị trực thuộc Trung Ương, Đồng Nai và người dân ở đây đang nỗ lực hết mình để phát triển, đạt được những thành quả đáng kinh ngạc. Với vẻ hiện đại của thành thị, xen kẽ đó là sự bình yên của cánh đồng lúa nơi thôn quê, Đồng Nai khoác lên mình một chiếc áo đầy màu sắc, vừa phong cách, ấn tượng mà cũng mang nét mảnh mai, đảm đang như những nét độc đáo của người phụ nữ Việt Nam.",
    imgsrc:
      "https://dbsreal.com/wp-content/uploads/2020/12/bien-hoa-universe-complex-tong-quan-can-ho.jpg",
    created_at: "04/12/2021",
    status: "published",
    views: "0",
  };

  // const [isFocus, setIsFocus] = useState(false);

  // function focusChangeHandler() {
  //   setIsFocus(!isFocus);
  // }
  
  document.getElementById("root").className = classes.postbackground;
  return (
    <div className={classes["post-wrapper"]}>
      <h1>{post.postname}</h1>
      {/* <div className={classes["focus-mode"]}> */}
        {/* <p>Chế độ tập trung: </p> */}
        {/* <Button className={classes.focus} onClick={focusChangeHandler}>{isFocus ? "Bật" : "Tắt"}</Button> */}
      {/* </div> */}
      <div className={classes.info}>
        <div className={classes["author-date"]}>
          <p>
            <em>Tác giả: {post.author}</em>
          </p>
          <p>
            <em>Ngày đăng: {post.created_at}</em>
          </p>
        </div>
        <p className={classes.rating}>
          Đánh giá:{" "}
          <span style={{ color: "#FFBE0D", fontWeight: "bold" }}>
            {post.rating}
          </span>
        </p>
        <p>Địa điểm: {post.placename}</p>
      </div>
      <article>
        <p>{post.content}</p>
        <img className={classes.image} src={post.imgsrc} alt={post.placename} />
      </article>
    </div>
  );
}
export default PostDetail;
