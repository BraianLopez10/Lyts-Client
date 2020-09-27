import React from "react";
import { Comment } from "./CommentAvatar";
import { Typography } from "@material-ui/core";

const style = {

  height: "400px",
  overflow: "hidden",
  overflowY: "scroll"

}
export const Comments = (props) => {
  return (
    <React.Fragment>
      <div style={style}>
        {Object.keys(props.comments).length === 0 ? (
          <Typography color="textSecondary">
            Sé el primero en comentar
          </Typography>
        ) : (
            props.comments.map((comment, index) => {
              return <Comment comment={comment} key={index}></Comment>;
            })
          )}
      </div>
      <div style={{ borderBottom: "1px solid #D9D9D9D9" }}></div>
    </React.Fragment>
  );
};
