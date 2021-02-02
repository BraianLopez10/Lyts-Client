import React, { useState } from "react";
import "./index.scss";
import { Button } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
export const Searcher = () => {
  const [input, setInput] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="wrap-searcher">
      <form className="form-busqueda" onSubmit={handleForm}>
        <div className="form_group">
          <input
            value={input}
            onChange={handleChange}
            placeholder="usuario"
            type="text"
          ></input>
          <Button variant="contained" color="primary" type="submit">
            <SearchOutlined></SearchOutlined>
          </Button>
        </div>
      </form>
    </div>
  );
};
