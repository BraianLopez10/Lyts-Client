import React from "react";
//Components
import TitlePostWithAvatar from "../TitlePostWithAvatar";
import InfoPost from "../InfoPost";
import CommentHome from "../../Comment/CommentHome";
//MaterializeUI
import { Card, Typography } from "@material-ui/core";
import "./style-post.scss";
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
      <div>
        <Typography variant="caption">{post.caption}</Typography>
      </div>
      <div className="singlepost__comment">
        <CommentHome
          id={post._id}
          createdAt={post.createdAt}
          comments={post.comments}
          commentsTotal={post.comments.length}
        ></CommentHome>
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
export default SinglePost;
