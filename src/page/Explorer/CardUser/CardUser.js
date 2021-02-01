import { Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import "./caruser-style.scss";

function CardUser({ user, ...props }) {
  return (
    <Link to={`/${user.username}`}>
      <div className="card-user">
        <div className="card-user__img">
          <img alt={user.name} src={user.img}></img>
        </div>
        <div className="card-user__username">
          <p>@{user.username.slice(0, 8)}</p>
        </div>
      </div>
    </Link>
  );
}

export default CardUser;
