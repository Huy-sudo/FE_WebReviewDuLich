import React from "react";
import classes from "./Profile.module.css";
function Profile() {
  const dummy_data = [
    {
      id: 1,
      postname: "Đồng Nai quê tôi",
      placename: "Đồng Nai",
      province: "Đồng Nai",
      rating: 5,
      content:
        "Đồng Nai là một tỉnh thuộc Đông Nam Bộ và cũng là một nơi tuyệt vời và đáng sống bởi sự quyến rũ mà mềm mại của nó. Đồng Nai không chỉ mang cho mình một vẻ đẹp hoà quyện giữa sự hiện đại của thành thị cùng với vẻ mộc mạc của nông thôn mà nó còn ...",
      status: 0,
      date: "12/01/2019",
      picture: " https://cdn.tgdd.vn/Files/2021/04/24/1345978/nhung-dia-diem-check-in-noi-tieng-khi-di-du-lich-q-7.jpg"


    },
    {
      id: 2,
      postname: "Đồng Nai quê tôi",
      placename: "Đồng Nai",
      province: "Đồng Nai",
      rating: 5,
      content:
        "Đồng Nai là một tỉnh thuộc Đông Nam Bộ và cũng là một nơi tuyệt vời và đáng sống bởi sự quyến rũ mà mềm mại của nó. Đồng Nai không chỉ mang cho mình một vẻ đẹp hoà quyện giữa sự hiện đại của thành thị cùng với vẻ mộc mạc của nông thôn mà nó còn ...",
      status: 1,
      date: "12/01/2019",
      picture: " https://cdn.tgdd.vn/Files/2021/04/24/1345978/nhung-dia-diem-check-in-noi-tieng-khi-di-du-lich-q-7.jpg"


    },
    {
      id: 3,
      postname: "Đồng Nai quê tôi",
      placename: "Đồng Nai",
      province: "Đồng Nai",
      rating: 5,
      content:
        "Đồng Nai là một tỉnh thuộc Đông Nam Bộ và cũng là một nơi tuyệt vời và đáng sống bởi sự quyến rũ mà mềm mại của nó. Đồng Nai không chỉ mang cho mình một vẻ đẹp hoà quyện giữa sự hiện đại của thành thị cùng với vẻ mộc mạc của nông thôn mà nó còn ...",
      status: 1,
      date: "12/01/2019",
      picture: " https://cdn.tgdd.vn/Files/2021/04/24/1345978/nhung-dia-diem-check-in-noi-tieng-khi-di-du-lich-q-7.jpg"

    },
    {
      id: 4,
      postname: "Đồng Nai quê tôi",
      placename: "Đồng Nai",
      province: "Đồng Nai",
      rating: 5,
      content:
        "Đồng Nai là một tỉnh thuộc Đông Nam Bộ và cũng là một nơi tuyệt vời và đáng sống bởi sự quyến rũ mà mềm mại của nó. Đồng Nai không chỉ mang cho mình một vẻ đẹp hoà quyện giữa sự hiện đại của thành thị cùng với vẻ mộc mạc của nông thôn mà nó còn ...",
      status: 1,
      date: "12/01/2019",
      picture: " https://cdn.tgdd.vn/Files/2021/04/24/1345978/nhung-dia-diem-check-in-noi-tieng-khi-di-du-lich-q-7.jpg"

    },
    {
      id: 5,
      postname: "Đồng Nai quê tôi",
      placename: "Đồng Nai",
      province: "Đồng Nai",
      rating: 5,
      content:
        "Đồng Nai là một tỉnh thuộc Đông Nam Bộ và cũng là một nơi tuyệt vời và đáng sống bởi sự quyến rũ mà mềm mại của nó. Đồng Nai không chỉ mang cho mình một vẻ đẹp hoà quyện giữa sự hiện đại của thành thị cùng với vẻ mộc mạc của nông thôn mà nó còn ...",
      status: 2,
      date: "12/01/2019",
      picture: " https://cdn.tgdd.vn/Files/2021/04/24/1345978/nhung-dia-diem-check-in-noi-tieng-khi-di-du-lich-q-7.jpg"

    },
    {
      id: 6,
      postname: "Đồng Nai quê tôi",
      placename: "Đồng Nai",
      province: "Đồng Nai",
      rating: 5,
      content:
        "Đồng Nai là một tỉnh thuộc Đông Nam Bộ và cũng là một nơi tuyệt vời và đáng sống bởi sự quyến rũ mà mềm mại của nó. Đồng Nai không chỉ mang cho mình một vẻ đẹp hoà quyện giữa sự hiện đại của thành thị cùng với vẻ mộc mạc của nông thôn mà nó còn ...",
      status: 2,
      date: "12/01/2019",
      picture: " https://cdn.tgdd.vn/Files/2021/04/24/1345978/nhung-dia-diem-check-in-noi-tieng-khi-di-du-lich-q-7.jpg"
    },
  ];

  let unpublishedPost = [];
  let publishedPost = [];
  let deletedPost = [];

  dummy_data.map((post) => {
    if (post.status === 1) {
      return publishedPost.push(post);
    } else if (post.status === 2) {
      return unpublishedPost.push(post);
    } else return deletedPost.push(post);
  });

  document.getElementById("root").className = classes.background;

  return (
    <div className={classes["massive-container"]}>
      <div>
        <h2>Những bài viết đang chờ duyệt</h2>
        {unpublishedPost.map((post) => {
          return (
            <div className={classes.container}>
              <h3>
                <strong>{post.postname}</strong> 
              </h3>
              <p><em>Trạng thái: Đang chờ duyệt</em></p>

              <div className={classes["info-wrapper"]}>
                <div>
                  <p className={classes.placename}>
                    Địa điểm:{" "}
                    <span style={{ fontWeight: "bold" }}>{post.placename}</span>
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
                      {post.rating}
                    </span>
                  </p>
                </div>
                <p className={classes["post-date"]}>
                  Ngày đăng: <span>{post.date}</span>{" "}
                </p>
                <img className={classes.image} src={post.picture}/>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <h2>Những bài viết đã duyệt</h2>
        
        {publishedPost.map((post) => {
          return (
            <div className={classes.container}>
              <h3>
                <strong>{post.postname}</strong>
              </h3>
              <p><em>Trạng thái: Đã duyệt</em></p>
              <div className={classes["info-wrapper"]}>
                <div>
                  <p className={classes.placename}>
                    Địa điểm:{" "}
                    <span style={{ fontWeight: "bold" }}>{post.placename}</span>
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
                      {post.rating}
                    </span>
                  </p>
                </div>
                <p className={classes["post-date"]}>
                  Ngày đăng: <span>{post.date}</span>{" "}
                </p>
                <img className={classes.image} src={post.picture}/>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

//item?.created_at.toLocaleDateString() + " " + item?.created_at.toLocaleTimeString()

export default Profile;
