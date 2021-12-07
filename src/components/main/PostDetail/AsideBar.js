import React from "react";
import classes from "./AsideBar.module.css";

function AsideBar(props) {
  // const dummy_data = [
  //   {
  //     id: 1,
  //     postname: "Đồng Nai quê tôi",
  //     author: "Nguyễn Hoàng Đức",
  //     placename: "Đồng Nai",
  //     rating: "5.0",
  //     date: "30/11/2021",
  //   },
  //   {
  //     id: 2,
  //     postname: "Đồng Nai quê tôi",
  //     author: "Nguyễn Hoàng Đức",
  //     placename: "Đồng Nai",
  //     rating: "5.0",
  //     date: "30/11/2021",
  //   },
  //   {
  //     id: 3,
  //     postname: "Đồng Nai quê tôi",
  //     author: "Nguyễn Hoàng Đức",
  //     placename: "Đồng Nai",
  //     rating: "5.0",
  //     date: "30/11/2021",
  //   },
  //   {
  //     id: 4,
  //     postname: "Đồng Nai quê tôi",
  //     author: "Nguyễn Hoàng Đức",
  //     placename: "Đồng Nai",
  //     rating: "5.0",
  //     date: "30/11/2021",
  //   },
  //   {
  //     id: 5,
  //     postname: "Đồng Nai quê tôi",
  //     author: "Nguyễn Hoàng Đức",
  //     placename: "Đồng Nai",
  //     rating: "5.0",
  //     date: "30/11/2021",
  //   },
  //   {
  //     id: 6,
  //     postname: "Đồng Nai quê tôi",
  //     author: "Nguyễn Hoàng Đức",
  //     placename: "Đồng Nai",
  //     rating: "5.0",
  //     date: "30/11/2021",
  //   },
  //   {
  //     id: 7,
  //     postname: "Đồng Nai quê tôi",
  //     author: "Nguyễn Hoàng Đức",
  //     placename: "Đồng Nai",
  //     rating: "5.0",
  //     date: "30/11/2021",
  //   },
  //   {
  //     id: 8,
  //     postname: "Đồng Nai quê tôi",
  //     author: "Nguyễn Hoàng Đức",
  //     placename: "Đồng Nai",
  //     rating: "5.0",
  //     date: "30/11/2021",
  //   },
  // ];
  let data = props.data.slice(0, 2);
  return (
    <aside className={classes["asidebar-container"]}>
      <h2>Xem thêm</h2>
      {data.map((post) => {
        return (
          <div className={classes["item-wrapper"]} key={post.id}>
            <div>
              <h3><a href={`/postdetail/${post.ID}`}>{post.name}</a></h3>
              <p className={classes.author}><em>Tác giả: {post.user.name}</em></p>
              <div className={classes.info}>
                <p>{post.place.name}</p>
                <p >
                  Đánh giá:{" "}
                  <span style={{ color: "#c28e00", fontWeight: "bold", fontSize: "22px" }}>
                    {post.rate}
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
