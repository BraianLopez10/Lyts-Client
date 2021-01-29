import React from "react";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./boxamigos.scss";
import { connect } from "react-redux";

const BoxAmigos = ({ follows = [] }) => {
  return (
    <div className="box-amigos-section">
      {follows.map((value, index) => {
        return (
          <div key={index} className="wrap-user-box">
            <Link className="avatar-box-section" to={"/" + value.username}>
              <div>
                <Avatar className="avatar" src={value.img}></Avatar>
              </div>
              <p variant="caption">{value.username}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    follows: state.home.follows,
  };
};
export default connect(mapStateToProps, null)(BoxAmigos);
