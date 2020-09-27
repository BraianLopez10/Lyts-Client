import React, { useEffect, Component, Children } from "react";

import Header from "./Header/Header";
import HeaderMobile from "./Header/HeaderMobile";
import { useMediaQuery } from "react-responsive";
import { connect } from "react-redux";
import "./page.scss";
import AddPhoto from "../components/AddPhoto";
const Page = (props) => {
  const { children } = props;
  const [open, setOpen] = React.useState(false);
  const isSmall = useMediaQuery({ query: "(max-device-width:880px)" });
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className="wrapper-app">
      <AddPhoto open={open} handleClose={handleClose}></AddPhoto>
      {isSmall ? (
        <HeaderMobile handleOpen={handleOpen} {...props}></HeaderMobile>
      ) : (
        <Header handleOpen={handleOpen}></Header>
      )}
      <div className="wrapper-app__content-app">{children}</div>
    </div>
  );
};
const mapStateToProps = (state, props) => {
  return {
    idUserLogged: state.global.idUserLogged,
  };
};
export default connect(mapStateToProps, null)(Page);
