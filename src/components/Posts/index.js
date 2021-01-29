import React from "react";
import Post from "./Post";
function Posts(props) {
  return (
    <>
      {props.posts.map((value, index) => {
        return <Post post={value} key={index}></Post>;
      })}
    </>
  );
}

export default Posts;
