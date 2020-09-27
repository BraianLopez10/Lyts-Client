import React from "react";
import { Typography } from "@material-ui/core";
import ButtonLike from "../Like/ButtonLike";
import ButtonComment from "../Comentario/ButtonComment";

const InfoPost = (props) => {

  const { post, actionLike, actionDisLike } = props;

  const style = {
    margin: "0",
    justifyContent: "center",
    paddding: "0",
    display: "flex"
  }
  return (
    <React.Fragment>
      <div style={style}>
        <ButtonLike
          isLiked={post.isLike}
          numLikes={post.numLikes}
          post_id={post._id}
        />
        <ButtonComment numComentarios={post.numComentarios}></ButtonComment>
      </div>
    </React.Fragment>
  );

}

export default InfoPost;
