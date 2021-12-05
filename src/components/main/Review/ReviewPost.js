import React from "react";
import classes from "./ReviewPost.module.css";
import { List, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Button from "../../helpers/Button";
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);


function Review(props) {
  document.getElementById("root").className = classes.background;
  function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min;
    return time;
  }

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
      dataSource={props.data}
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
              <Button>Xem thêm</Button>
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
              Ngày đăng: <span>{timeConverter(item?.created_at)}</span>{" "}
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
