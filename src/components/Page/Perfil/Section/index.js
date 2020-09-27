import React from "react";

import ImagePost from "./ImagePost";
import Typography from "@material-ui/core/Typography";

import "./section.scss";

export const ContentSection = (props) => {
  const contentData = props.userPosts;
  return (
    <>
      <h2 style={{ textAlign: "center" }}>TUS PUBLICACIONES</h2>
      <div className="wrap-publicaciones">
        {contentData ? (
          contentData.map((post, index) => {
            return (
              <div className="wrap-publicaciones__box" key={index}>
                <ImagePost postId={post._id} img={post.img}></ImagePost>
              </div>
            );
          })
        ) : (
          <div style={{ margin: "auto" }}>
            <Typography variant="h5" align="center">
              Sin publicaciones{" "}
              <span role="img" aria-label="icon-cam">
                📷
              </span>
            </Typography>
          </div>
        )}
      </div>
    </>
  );
};
