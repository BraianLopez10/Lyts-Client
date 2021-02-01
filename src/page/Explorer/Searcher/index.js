import React from "react";
import "./index.scss";
import { Button } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
export const Searcher = () => {
  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="wrap-searcher">
      <form className="form-busqueda" onSubmit={handleForm}>
        <div className="form_group">
          <input placeholder="usuario" type="text"></input>
          <Button variant="contained" color="primary" type="submit">
            <SearchOutlined></SearchOutlined>
          </Button>
        </div>
      </form>
    </div>
  );
};
