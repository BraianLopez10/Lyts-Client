import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import "./titlepost.scss";
export default function TitlePostWithAvatar(props) {
  const { avatar, username } = props;
  return (
    <div className="container-title">
      <div>
        <Avatar alt="user img" src={avatar} />
      </div>
      <div>
        <Link
          to={"/" + username}
          style={{ textDecoration: "none", cursor: "pointer" }}
        >
          <Typography className="user-name">{username}</Typography>
        </Link>
      </div>
    </div>
  );
}
