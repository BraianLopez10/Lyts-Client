import React from "react";
import ExploreOutlinedIcon from "@material-ui/icons/Explore";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorder";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import HomeOutlinedIcon from "@material-ui/icons/Home";
import { Avatar, Button } from "@material-ui/core";
import Logout from "../../components/Profile/Logout";
import { Link } from "react-router-dom";
import "./headerMobile.scss";
import { connect } from "react-redux";

const HeaderMobile = (props) => {
  return (
    <div className="header-mobile">
      <div className="header-mobile__header">
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          <h3 className="header-mobile__header-h3">Lyts</h3>
        </Link>
        <div style={{ position: "absolute", right: "10px" }}>
          <Logout></Logout>
        </div>
      </div>
      <div className="header-mobile__content">
        <div className="header-mobile__content__menu">
          <ul className="header-mobile__content__menu-ul">
            <li
              className="header-mobile__content__menu-li"
              onClick={() => {
                props.handleOpen();
              }}
            >
              <PhotoCameraIcon></PhotoCameraIcon>
            </li>
            <li className="header-mobile__content__menu-li">
              <Link to="/explorer">
                <ExploreOutlinedIcon></ExploreOutlinedIcon>
              </Link>
            </li>
            <li className="header-mobile__content__menu-li">
              <Link to="/">
                <HomeOutlinedIcon></HomeOutlinedIcon>
              </Link>
            </li>
            <li className="header-mobile__content__menu-li">
              <Link to="/notificacion">
                <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
              </Link>
            </li>
            <li className="header-mobile__content__menu-li">
              <Link to={`/${props.userLogged.username}`}>
                <Avatar
                  src={props.userLogged.img}
                  style={{ width: "25px", height: "25px" }}
                ></Avatar>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userLogged: state.auth,
});

export default connect(mapStateToProps, null)(HeaderMobile);
