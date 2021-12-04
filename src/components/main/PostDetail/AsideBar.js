import { classExpression } from "@babel/types";
import React from "react";
import classes from "./AsideBar.module.css";

function AsideBar() {
  const dummy_data = [
    {
      id: 1,
      postname: "Đồng Nai quê tôi",
      author: "Nguyễn Hoàng Đức",
      placename: "Đồng Nai",
      rating: "5.0",
      date: "30/11/2021",
    },
    {
      id: 2,
      postname: "Đồng Nai quê tôi",
      author: "Nguyễn Hoàng Đức",
      placename: "Đồng Nai",
      rating: "5.0",
      date: "30/11/2021",
    },
    {
      id: 3,
      postname: "Đồng Nai quê tôi",
      author: "Nguyễn Hoàng Đức",
      placename: "Đồng Nai",
      rating: "5.0",
      date: "30/11/2021",
    },
    {
      id: 4,
      postname: "Đồng Nai quê tôi",
      author: "Nguyễn Hoàng Đức",
      placename: "Đồng Nai",
      rating: "5.0",
      date: "30/11/2021",
    },
  ];
  return (
    <aside className={classes["container"]}>
      <h2>Xem thêm</h2>
        {dummy_data.map((post) => {
          return (
            <div className={classes["item-wrapper"]} key={post.id}>
              <div>
                <h3>{post.postname}</h3>
                <p>{post.placename}</p>
                <div>
                  <p>Tác giả: {post.author}</p>
                  <p>
                    Đánh giá:
                    <span style={{ color: "#FFBE0D", fontWeight: "bold" }}>
                      {post.rating}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </aside>
  );
}

export default AsideBar;
