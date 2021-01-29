import React from "react";
import { Link } from "react-router-dom";
import { Typography, Grid } from "@material-ui/core";
export const Container = ({ posts }) => {
  return (
    <Grid spacing={2} container direction="row" justify="center">
      {posts.map((post, index) => {
        return (
          <Grid item key={index}>
            <Link
              className="wrap-publicaciones__box__image"
              to={"/p/" + post._id}
            >
              <img
                className="wrap-publicaciones__box__image-img"
                src={post.img}
                alt="post"
              />
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
};
