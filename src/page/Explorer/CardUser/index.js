import React from "react";
import CardUser from "./CardUser";
import "./index.scss";
function CardList({ users }) {
  return (
    <div class="container-user-card">
      {users.map((u, index) => (
        <CardUser key={index} user={u}></CardUser>
      ))}
    </div>
  );
}

export default CardList;
