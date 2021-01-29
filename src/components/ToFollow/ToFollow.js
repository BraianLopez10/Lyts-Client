import React, { useEffect, useState } from "react";

import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import ButtonFollow from "../Utils/ButtonFollow";
import "./tofollow.scss";

function ToFollow({ toFollow }) {
  return (
    <div className="wrap-list-to-follow">
      <p className="sugerencias">Sugerencias para ti</p>
      <div className="list-to-follow">
        {toFollow.map((follow, index) => {
          return (
            <div className="wrap-to-follow" key={index}>
              <div className="name-avatar">
                <Link to={"/" + follow.username} className="enlace-to-follow">
                  <Avatar
                    src={follow.img}
                    style={{ width: "30px", height: "30px" }}
                  ></Avatar>
                </Link>
                <p className="nombre-to-follow">{follow.username}</p>
              </div>
              <ButtonFollow
                variant="text"
                color="blue"
                idUser={follow._id}
              ></ButtonFollow>
            </div>
          );
        })}
      </div>
      <p className="p-by">De LATAM con 💚 para el mundo. By Braian Lopez</p>
    </div>
  );
}

export default ToFollow;
