import React from "react";
import OneComment from "../../../Utils/Post/Comentario/OneComment";
import { Typography, Avatar } from "@material-ui/core";
import moment from "moment";
import "./Comment.scss";

export const Comment = (props) => {
  const { comment } = props;

  return (
    <div className="comment-with-avatar">
      <Avatar
        src={comment.user.img}
        style={{
          width: "30px",
          height: "30px",
        }}
      ></Avatar>
      <div className="comentarios-with-avatar">
        <OneComment
          username={comment.user.userName}
          content={comment.content}
        ></OneComment>
        <p className="fecha-comentario" variant="caption">{moment(comment.createdAt).fromNow()}</p>
      </div>


    </div>

  );
};
