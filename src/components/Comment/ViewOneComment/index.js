import React from "react";
import { Link } from "react-router-dom";

import "./oneComment.scss";

export default function ViewOneComment(props) {
  return (
    <div className="one-comment">
      <Link to={"/" + props.username} className="url url-comment">
        {props.username}
      </Link>{" "}
      <p>{props.content}</p>
    </div>
  );
}
