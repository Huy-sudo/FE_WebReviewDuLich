import React from "react";
import classes from "./PostDetail.module.css";
function PostDetail(props) {
  const post = {
    id: 1,
    postname: "Đồng Nai quê tôi",
    placename: "Đồng Nai",
    author: "Nguyễn Hoàng Đức",
    rating: "4.5",
    content:
      "Đồng Nai, một tỉnh phía Nam của Đông Nam Bộ, sở hữu cho riêng mình những nét đẹp đặc biệt quyến rũ mà đậm nét độc đáo, riêng biệt. Là một trong những tỉnh. Với mục tiêu trở thành đô thị trực thuộc Trung Ương, Đồng Nai và người dân ở đây đang nỗ lực hết mình để phát triển, đạt được những thành quả đáng kinh ngạc. Với vẻ hiện đại của thành thị, xen kẽ đó là sự bình yên của cánh đồng lúa nơi thôn quê, Đồng Nai khoác lên mình một chiếc áo đầy màu sắc, vừa phong cách, ấn tượng mà cũng mang nét mảnh mai, đảm đang như những nét độc đáo của người phụ nữ Việt Nam.",
    imgsrc: "",
    created_at: "04/12/2021",
    status: "published",
    views: "0",
  };

  return (
    <div className={classes["post-wrapper"]}>
      <h1>{post.postname}</h1>
      <div>
        <p>Tác giả: {post.author}</p>
        <p>
          <em>Ngày đăng: {post.created_at}</em>
        </p>
        <h2>Đánh giá: {post.rating}</h2>
      </div>
      <article>
        <p>Địa điểm được review: {post.placename}</p>
        <p>{post.content}</p>
      </article>
    </div>
  );
}
export default PostDetail;
