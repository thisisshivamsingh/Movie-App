import React from "react";
import { Card, CardMedia, Grid, CardContent, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMovies } from "../redux/feature/movieSlice";

const MoviesList = ({ name }) => {
  const { moviesList } = useSelector((state) => ({ ...state.movie }));
  const dispatch = useDispatch();
  let timer = true;
  const onScroll = () => {
    if (timer) {
      timer = false;
      setTimeout(() => {
        dispatch(getMovies(name));
        timer = true;
      }, 3000);
    }
  };

  return (
    <div>
      <div onWheel={onScroll}>
        <Grid sx={{ flexGrow: 1 }} container>
          <Grid item xs={12}>
            <Grid
              style={{ width: "500px", margin: "auto" }}
              container
              justifyContent="center"
              spacing={3}
            >
              {moviesList?.map((item, index) => (
                <Grid key={index} item>
                  <Card>
                    <Link to={`/movie/${item.imdbID}`}>
                      <CardMedia
                        component="img"
                        height="350"
                        image={item.Poster}
                        alt={item.Title}
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.primary">
                          {item.Title}
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                          ({item.Year})
                        </Typography>
                      </CardContent>
                    </Link>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default MoviesList;
