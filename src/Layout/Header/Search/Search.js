import React, { useEffect } from "react";
// MaterializeUI
import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Api from "../../../services/api";
import AvatarAmigo from "../../../components/Utils/AvatarAmigo";
import { Link } from "react-router-dom";
import "./search.scss";

const Search = () => {
  const [search, setSearch] = React.useState("");

  const [resultado, setResultado] = React.useState([]);

  const consulta = () => {
    return new Promise((resolve, reject) => {
      Api.search(search)
        .then((res) => {
          return resolve(res.data);
        })
        .catch((err) => {
          return reject(err);
        });
    });
  };

  const handleChangeInput = (e) => {
    const value = e.target.value;

    setSearch(value);
  };

  const handleReset = () => {
    setSearch("");
  };

  useEffect(() => {
    if (search.length > 2) {
      consulta().then((res) => {
        setResultado(
          res.map((v) => {
            return v;
          })
        );
      });
    }
    if (search === "") setResultado([]);
  }, [search]);

  return (
    <div className="input-search-container">
      <div className="search-icon">
        <SearchIcon />
      </div>
      <div className="input-search">
        <InputBase
          placeholder="Buscar"
          value={search}
          onChange={handleChangeInput}
        ></InputBase>
      </div>
      {resultado.length > 0 && (
        <div className="result-search">
          {resultado.map((v, index) => {
            return (
              <React.Fragment>
                <Link
                  to={"/" + v.userName}
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "black",
                  }}
                  key={index}
                  onClick={handleReset}
                >
                  <AvatarAmigo
                    username={v.userName}
                    img={v.img}
                    ult={false}
                    tam={40}
                  ></AvatarAmigo>
                </Link>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
