import React, { Component } from "react";
import { Avatar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./miniPerfil.scss";

function MiniPerfil(props) {
  return (
    <div className="wrap-perfil-left">
      <div>
        <Avatar
          alt="Foto perfil"
          src={props.auth.img}
          style={{ width: 70, height: 70 }}
        />
      </div>
      <div className="nombre">
        <Link
          to={"/" + props.auth.username}
          style={{ textDecoration: "none ", color: "black !important" }}
        >
          <Typography variant="h6" color="textPrimary">
            {props.auth.name} {props.auth.lastname}
          </Typography>
        </Link>
        <Typography variant="caption" style={{ color: "#9c9c9c" }}>
          @{props.auth.username}
        </Typography>
      </div>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(MiniPerfil);
