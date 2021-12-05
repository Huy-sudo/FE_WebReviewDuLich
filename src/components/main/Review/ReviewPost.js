import React from "react";
import classes from "./ReviewPost.module.css";
import { List } from "antd";
import { Link } from "react-router-dom";

function Review(props) {
  document.getElementById("root").className = classes.background;
  function timestampConverter(timestamp) {
    let t = timestamp.slice(0, 16);
    let result = new Date(t);
    return result;
  }

  let data = props.data.map(x => {
    return {
      ...x,
      created_at: timestampConverter(x.created_at)
    }
  })

  console.log(data);
  return (
    <List
      className={classes.container}
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 5,
      }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          className={classes["content-wrapper"]}
          key={item?.id}
          extra={
            <div className={classes["image-wrapper"]}>
              <img
                className={classes.image}
                width={272}
                alt={`${item?.place?.name}`}
                src={`${item?.picture}`}
              />{" "}
              <Link to={`/postdetail/${item.ID}`}>Xem thêm</Link> 
            </div>
          }
        >
          <List.Item.Meta
            title={
              <Link className={classes["post-name"]} to="/home">
                {item.name}
              </Link>
            }
            description={
              <div>
                <p className={classes.placename}>
                  Địa điểm:{" "}
                  <span style={{ fontWeight: "bold" }}>{item?.place?.name}</span>
                </p>
                <p className={classes.rating}>
                  Rating:{" "}
                  <span
                    style={{
                      color: "#FFBE0D",
                      fontWeight: "bold",
                      fontSize: "24px",
                    }}
                  >
                    {item.rate}
                  </span>
                </p>
              </div>
            }
          />
          <div className={classes["info-wrapper"]}>
            <p className={classes["post-info"]}>
              Tác giả: <span style={{fontStyle: "italic"}}>{item?.user?.name}</span>{" "}
            </p>
            <p className={classes["post-info"]}>
              Ngày đăng: <span>{item?.created_at.toLocaleDateString() + " " + item?.created_at.toLocaleTimeString()}</span>{" "}
            </p>
            <p className={classes["post-info"]}>
              {" "}
              Lượt xem: <span>{item?.views}</span>
            </p>
          </div>
        </List.Item>
      )}
    />
  );
}

export default Review;
