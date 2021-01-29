import React from "react";
//Components
import TitlePostWithAvatar from "../Utils/Post/Info/TitlePostWithAvatar";
import InfoPost from "../Utils/Post/Info/InfoPost";
import CommentPost from "./Comment/CommentPost";
//MaterializeUI
import { Card, Typography } from "@material-ui/core";
import { connect } from "react-redux";

import "./singlepost.scss";
const moment = require("moment");

const SinglePost = ({ post }) => {
  return (
    <Card className="singlepost">
      <div className="singlepost__header">
        <TitlePostWithAvatar
          avatar={post.user.img}
          username={post.user.username}
        ></TitlePostWithAvatar>
        <div className="singlepost__header__img">
          <img alt={post.caption} src={post.img}></img>
        </div>
      </div>
      <div className="singlepost__action">
        <InfoPost post={post}></InfoPost>
      </div>
      <div className="singlepost__comment">
        <CommentPost
          id={post._id}
          createdAt={post.createdAt}
          comments={post.comments.slice(0, 2)}
          commentsTotal={post.comments.length}
        ></CommentPost>
        <div
          className="singlepost__comment__fecha"
          style={{ textAlign: "center" }}
        >
          <Typography variant="caption" style={{ color: "#9c9c9c" }}>
            Publicado {moment(post.createdAt).fromNow()}
          </Typography>
        </div>
      </div>
    </Card>
  );
};
export default connect(null, null)(SinglePost);
