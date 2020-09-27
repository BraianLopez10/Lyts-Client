import React from "react";

import { Avatar, Typography } from "@material-ui/core";
import momment from "moment";
import "./avatarAmigo.scss";

export default function AvatarAmigos(props) {
  return (
    <div className="wrap-avatar">
      <div>
        <Avatar
          src={props.img}
          style={{ width: props.tam || 80, height: props.tam || 80 }}
        ></Avatar>
      </div>
      <div className="nombre-box-amigos">
        <Typography variant="h5">{props.username}</Typography>
        {props.ult && (
          <Typography variant="caption" style={{ color: "#9c9c9c" }}>
            ult. vez <strong>{momment(props.lastConnection).fromNow()}</strong>
          </Typography>
        )}
      </div>
    </div>
  );
}
