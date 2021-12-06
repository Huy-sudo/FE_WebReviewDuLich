import React from "react";

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

  console.log(unpublishedPost);
  return (
    <div>
      <div>
        <h2>Những bài viết đang chờ duyệt</h2>
        {unpublishedPost.map((post) => {
          return (
            <div>
              <p>
                <strong>{post.postname}</strong>
              </p>
            </div>
          );
        })}
      </div>
      <div>
        <h2>Những bài viết đã duyệt</h2>
      </div>
    </div>
  );
}

export default Profile;
