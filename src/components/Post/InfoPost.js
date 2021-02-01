import React from "react";
import ButtonLike from "./ButtonLike";
import ButtonComment from "../Comment/ButtonComment";

const InfoPost = (props) => {
  const { post } = props;
  const style = {
    margin: "0",
    justifyContent: "center",
    paddding: "0",
    display: "flex",
  };
  return (
    <div style={style}>
      <ButtonLike
        isLiked={post.isLike}
        numLikes={post.likes.length}
        post_id={post._id}
      />
      <ButtonComment numComentarios={post.comments.length}></ButtonComment>
    </div>
  );
};

export default InfoPost;
