import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
export default function ExplorerPost({ posts }) {
  return (
    <Grid spacing={2} container direction="row">
      {posts.map((p, index) => {
        return (
          <Grid item lg={3} sm={6} md={3} xs={6} key={index}>
            <Link className="box__image" to={"/" + p.user.username}>
              <img className="box__image-img" src={p.img} alt="post" />
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
}
