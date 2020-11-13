import React from "react";

//Components

import TitlePostWithAvatar from "../../../Utils/Post/Info/TitlePostWithAvatar";
import InfoPost from "../../../Utils/Post/Info/InfoPost";
import CommentPost from "./Comment/CommentPost";

//MaterializeUI
import { Card, Typography } from "@material-ui/core";
import { connect } from "react-redux";

import "./singlepost.scss";
const moment = require("moment");

const SinglePost = (props) => {
  if (!props.post) {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>
          No existe el post
          <span role="img" aria-label="thinking">
            🤔
          </span>
        </h1>
      </div>
    );
  }

  return (
    <Card className="singlepost">
      <div className="singlepost__header">
        <TitlePostWithAvatar
          avatar={props.post.user.img}
          username={props.post.user.userName}
        ></TitlePostWithAvatar>
        <div className="singlepost__header__img">
          <img alt={props.post.caption} src={props.post.img}></img>
        </div>
      </div>
      <div className="singlepost__action">
        <InfoPost post={props.post}></InfoPost>
      </div>
      <div className="singlepost__comment">
        <CommentPost
          id={props.post._id}
          createdAt={props.post.createdAt}
          comments={props.post.comments.slice(0, 2)}
          commentsTotal={props.post.comments.length}
        ></CommentPost>
        <div
          className="singlepost__comment__fecha"
          style={{ textAlign: "center" }}
        >
          <Typography variant="caption" style={{ color: "#9c9c9c" }}>
            Publicado {moment(props.post.createdAt).fromNow()}
          </Typography>
        </div>
      </div>
    </Card>
  );
};
export default connect(null, null)(SinglePost);
