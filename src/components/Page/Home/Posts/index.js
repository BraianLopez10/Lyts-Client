import React from "react";
import SinglePost from "./Singlepost";

function Posts(props) {
  return (
    <>
      {props.posts.map((value, index) => {
        return <SinglePost post={value} key={index}></SinglePost>;
      })}
    </>
  );
}

export default Posts;
