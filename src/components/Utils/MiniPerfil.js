import React, { Component } from "react";
import { Avatar, Typography } from "@material-ui/core";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import "./miniPerfil.scss";

class MiniPerfil extends Component {
  render() {
    return (
      <div className="wrap-perfil-left">
        <div>
          <Avatar
            alt="Foto perfil"
            src={this.props.userLogged.img}
            style={{ width: 70, height: 70 }}
          />
        </div>
        <div className="nombre">
          <Link
            to={"/" + this.props.userLogged.userName}
            style={{ textDecoration: "none ", color: "black !important" }}
          >
            <Typography variant="h6" color="textPrimary">
              {this.props.userLogged.name} {this.props.userLogged.lastname}
            </Typography>
          </Link>
          <Typography variant="caption" style={{ color: "#9c9c9c" }}>
            @{this.props.userLogged.userName}
          </Typography>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  userLogged: state.userLogged,
});

export default connect(mapStateToProps, null)(MiniPerfil);
