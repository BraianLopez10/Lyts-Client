import React from "react";
import { Typography } from "@material-ui/core";

export default function TitlePost(props) {
  const { userName, caption } = props;
  return (
    <div>
      <Typography variant="subtitle1" display="inline">
        <strong>{userName}</strong>
      </Typography>
      <Typography
        style={{ marginLeft: 4 }}
        variant="subtitle1"
        display="inline"
      >
        {caption}
      </Typography>
    </div>
  );
}
