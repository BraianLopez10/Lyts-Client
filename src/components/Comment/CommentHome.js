import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

//Components
import OneComment from "./ViewOneComment";
import AddComment from "./AddComment";

function CommentHome(props) {
  return (
    <div style={{ textAlign: "left" }}>
      {props.comments.slice(0, 5).map((value, index) => {
        return (
          <OneComment
            key={index}
            content={value.content}
            username={value.username}
          ></OneComment>
        );
      })}
      {props.commentsTotal > 2 && (
        <div>
          <Typography variant="caption">
            <Link to={"/p/" + props.id}>
              Ver los {props.commentsTotal} comentarios
            </Link>
          </Typography>
        </div>
      )}
      <AddComment id={props.id}></AddComment>
    </div>
  );
}

export default CommentHome;
