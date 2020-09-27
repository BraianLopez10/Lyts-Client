import React from "react";
import { Link } from "react-router-dom";
import ExploreOutlinedIcon from "@material-ui/icons/Explore";
import HomeOutlinedIcon from "@material-ui/icons/Home";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/Favorite";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import UserButton from "./User/UserButton";
import "./header.scss";
const Header = (props) => {
  return (
    <div className="header-desktop">
      <div className="header-desktop__content">
        <div className="header-desktop__content__logo">
          <Link to="/" className="header-desktop__content__logo-a">
            Lyts
          </Link>
        </div>
        <ul className="header-desktop__content__menu">
          <li className="header-desktop__content__menu-li">
            <HomeOutlinedIcon style={{ fontSize: "1.1em" }}></HomeOutlinedIcon>
          </li>
          <li
            className="header-desktop__content__menu-li"
            onClick={() => {
              props.handleOpen();
            }}
          >
            <PhotoCameraIcon style={{ fontSize: "1.1em" }}></PhotoCameraIcon>
          </li>
          <li className="header-desktop__content__menu-li">
            <ExploreOutlinedIcon
              style={{ fontSize: "1.1em" }}
            ></ExploreOutlinedIcon>
          </li>
          <li className="header-desktop__content__menu-li">
            <FavoriteBorderOutlinedIcon
              style={{ fontSize: "1.1em" }}
            ></FavoriteBorderOutlinedIcon>
          </li>
          <li className="header-desktop__content__menu-li">
            <UserButton></UserButton>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
