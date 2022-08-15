import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import useStyles from "../styles";
import { getMovies } from "../redux/feature/movieSlice";
import MoviesList from "./MoviesList";

const Search = () => {
  const [name, setName] = useState("spider");
  const classes = useStyles();
  const {
    moviesList: { Error: error },
  } = useSelector((state) => ({ ...state.movie }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies(name));
  }, [name]);
  return (
    <>
      <h2 className={classes.title}>Movie Search App</h2>
      <from className={classes.form} onSubmit={(e) => e.preventDefault()}>
        <TextField
          type="text"
          fullWidth
          value={name}
          sx={{ m: 1, width: "55ch" }}
          onChange={(e) => setName(e.target.value)}
        />
        {error && error === "Incorrect IMDb ID." ? (
          <p className={classes.error}>Please Search Movie Name</p>
        ) : error === "Too many results." ? (
          <p className={classes.error}>Invalid Text</p>
        ) : null}
      </from>
      <MoviesList name={name} />
    </>
  );
};

export default Search;
