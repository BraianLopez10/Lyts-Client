import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import "./style.scss";

export const Container = ({ posts }) => {
  const viewPost = () => {
    return posts.map((post, index) => {
      return (
        <Grid item lg={3} sm={6} md={3} xs={6} key={index}>
          <Link className="box__image" to={"/p/" + post._id}>
            <img className="box__image-img" src={post.img} alt="post" />
          </Link>
        </Grid>
      );
    });
  };
  return (
    <>
      <div style={{ margin: "20px" }}>
        {posts.length > 0 ? (
          <p className="p-title-perfil">Tus Publicaciones</p>
        ) : (
          <p className="p-title-perfil">Sin Publicaciones</p>
        )}
      </div>
      <Grid spacing={2} container direction="row">
        {/* {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => viewPost())} */}
        {viewPost()}
      </Grid>
    </>
  );
};
