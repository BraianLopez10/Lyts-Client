import React from "react";
import { Typography, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

import "./oneComment.scss";

export default function Comment(props) {
  return (
    <div className="one-comment">
      <Link to={"/" + props.username} className="url url-comment">
        {props.username}
      </Link>{" "}
      <p>{props.content}</p>
    </div>
  );
}
