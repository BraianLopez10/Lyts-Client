import React from "react";
import { Link } from "react-router-dom";

export default function ImagePost(props) {
  const { img, postId } = props;
  return (
    <Link className="wrap-publicaciones__box__image" to={"/p/" + postId}>
      <img
        className="wrap-publicaciones__box__image-img"
        src={img}
        alt="post"
      />
    </Link>
  );
}
