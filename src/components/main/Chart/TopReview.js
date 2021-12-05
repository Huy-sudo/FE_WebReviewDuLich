import React from "react";
import classes from "./TopReview.module.css";
import Button from "../../helpers/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function TopReview() {
  const dummy_posts = [
    {
      id: 1,
      placename: "Đồng Nai",
      postname: "Đồng Nai quê tôi",
      author: "Nguyễn Hoàng Đức",
      date: "29/11/2021",
      rating: 3.5,
      view: 1200300,
      src: "https://file1.dangcongsan.vn/DATA/0/2019/01/tr%E1%BA%A5n_bi%C3%AAn_ng%C3%A0y_m%E1%BB%9Bi___t%C3%A1c_gi%E1%BA%A3__nguy%E1%BB%85n_th%C3%A0nh_an_gi%E1%BA%A3i_ba_cu%E1%BB%99c_thi_%E1%BA%A3nh_%C4%91%E1%BA%B9p_du_l%E1%BB%8Bch_%C4%91%E1%BB%93ng_nai_11_39_32_772-19_34_54_691.jpg",
    },
    {
      id: 2,
      placename: "Đồng Nai",
      postname: "Đồng Nai quê tôi",
      author: "Nguyễn Hoàng Đức",
      date: "29/11/2021",
      rating: 3.5,
      view: 1200300,
      src: "https://file1.dangcongsan.vn/DATA/0/2019/01/tr%E1%BA%A5n_bi%C3%AAn_ng%C3%A0y_m%E1%BB%9Bi___t%C3%A1c_gi%E1%BA%A3__nguy%E1%BB%85n_th%C3%A0nh_an_gi%E1%BA%A3i_ba_cu%E1%BB%99c_thi_%E1%BA%A3nh_%C4%91%E1%BA%B9p_du_l%E1%BB%8Bch_%C4%91%E1%BB%93ng_nai_11_39_32_772-19_34_54_691.jpg",
    },
    {
      id: 3,
      placename: "Đồng Nai",
      postname: "Đồng Nai quê tôi",
      author: "Nguyễn Hoàng Đức",
      date: "29/11/2021",
      rating: 3.5,
      view: 1200300,
      src: "https://file1.dangcongsan.vn/DATA/0/2019/01/tr%E1%BA%A5n_bi%C3%AAn_ng%C3%A0y_m%E1%BB%9Bi___t%C3%A1c_gi%E1%BA%A3__nguy%E1%BB%85n_th%C3%A0nh_an_gi%E1%BA%A3i_ba_cu%E1%BB%99c_thi_%E1%BA%A3nh_%C4%91%E1%BA%B9p_du_l%E1%BB%8Bch_%C4%91%E1%BB%93ng_nai_11_39_32_772-19_34_54_691.jpg",
    },
    {
      id: 4,
      placename: "Đồng Nai",
      postname: "Đồng Nai quê tôi",
      author: "Nguyễn Hoàng Đức",
      date: "29/11/2021",
      rating: 3.5,
      view: 1200300,
      src: "https://file1.dangcongsan.vn/DATA/0/2019/01/tr%E1%BA%A5n_bi%C3%AAn_ng%C3%A0y_m%E1%BB%9Bi___t%C3%A1c_gi%E1%BA%A3__nguy%E1%BB%85n_th%C3%A0nh_an_gi%E1%BA%A3i_ba_cu%E1%BB%99c_thi_%E1%BA%A3nh_%C4%91%E1%BA%B9p_du_l%E1%BB%8Bch_%C4%91%E1%BB%93ng_nai_11_39_32_772-19_34_54_691.jpg",
    },
    {
      id: 5,
      placename: "Đồng Nai",
      postname: "Đồng Nai quê tôi",
      author: "Nguyễn Hoàng Đức",
      date: "29/11/2021",
      rating: 3.5,
      view: 1200300,
      src: "https://file1.dangcongsan.vn/DATA/0/2019/01/tr%E1%BA%A5n_bi%C3%AAn_ng%C3%A0y_m%E1%BB%9Bi___t%C3%A1c_gi%E1%BA%A3__nguy%E1%BB%85n_th%C3%A0nh_an_gi%E1%BA%A3i_ba_cu%E1%BB%99c_thi_%E1%BA%A3nh_%C4%91%E1%BA%B9p_du_l%E1%BB%8Bch_%C4%91%E1%BB%93ng_nai_11_39_32_772-19_34_54_691.jpg",
    },
    {
      id: 6,
      placename: "Đồng Nai",
      postname: "Đồng Nai quê tôi",
      author: "Nguyễn Hoàng Đức",
      date: "29/11/2021",
      rating: 3.5,
      view: 1200300,
      src: "https://file1.dangcongsan.vn/DATA/0/2019/01/tr%E1%BA%A5n_bi%C3%AAn_ng%C3%A0y_m%E1%BB%9Bi___t%C3%A1c_gi%E1%BA%A3__nguy%E1%BB%85n_th%C3%A0nh_an_gi%E1%BA%A3i_ba_cu%E1%BB%99c_thi_%E1%BA%A3nh_%C4%91%E1%BA%B9p_du_l%E1%BB%8Bch_%C4%91%E1%BB%93ng_nai_11_39_32_772-19_34_54_691.jpg",
    },
  ];
  let rank = 1;  
  return (
    <section className={classes.container}>
      <div>
        <h2 className={classes["name-post"]}>Bảng xếp hạng bài viết tuần</h2>
        {dummy_posts.map((post) => {
          return (
            <div key={post.id} className={classes["post-chart-wrapper"]}>
              <div className={classes["rank-wrapper"]}>
              <p className={classes.rank}>{rank++}</p>
              </div>
              <img
                className={classes.image}
                src={post.src}
                alt={post.placename}
              />
              <div className={classes["name-wrapper"]}>
                <h3 className={classes["name-place"]}>{post.postname} </h3>
                <p className={classes.name}>
                  Tác giả: {post.author} <br />
                  Ngày đăng: {post.date} <br />
                </p>
              </div>
              <Button className={classes.arrow}>
                <FontAwesomeIcon
                  className={classes.rightbutton}
                  icon={faArrowRight}
                />
              </Button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TopReview;
