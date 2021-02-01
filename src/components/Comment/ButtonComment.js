import React from "react";
import ChatIcon from "@material-ui/icons/Chat";
import { Button } from "@material-ui/core";

export default function ButtonComment(props) {
  const { numComentarios } = props;
  return (
    <Button size="small">
      <ChatIcon></ChatIcon>
      {numComentarios}
    </Button>
  );
}
