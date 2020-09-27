import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box } from "@material-ui/core";

//Components
import OneComment from "../../../../Utils/Post/Comentario/OneComment";
import AddComment from "../../../../Utils/Post/Comentario/AddComment";

function CommentPost(props) {
  return (
    <div>
      {props.commentsTotal > 2 ? (
        <div>
          <Typography variant="caption">
            <Link to={"/p/" + props.id}>
              Ver los {props.commentsTotal} comentarios
            </Link>
          </Typography>
        </div>
      ) : (
        ""
      )}

      {props.comments.map((value, index) => {
        return (
          <OneComment
            key={index}
            content={value.content}
            username={value.user.userName}
          ></OneComment>
        );
      })}
      <AddComment id={props.id}></AddComment>
    </div>
  );
}

export default CommentPost;
