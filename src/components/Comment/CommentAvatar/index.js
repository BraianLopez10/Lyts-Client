import React from "react";
import OneComment from "../ViewOneComment";
import { Avatar } from "@material-ui/core";
import moment from "moment";
import "./Comment.scss";

export const Comment = (props) => {
  const { comment } = props;

  return (
    <div className="comment-with-avatar">
      <Avatar
        src={comment.img}
        style={{
          width: "30px",
          height: "30px",
        }}
      ></Avatar>
      <div className="comentarios-with-avatar">
        <OneComment
          username={comment.username}
          content={comment.content}
        ></OneComment>
        <p className="fecha-comentario" variant="caption">
          {moment(comment.createdAt).fromNow()}
        </p>
      </div>
    </div>
  );
};
