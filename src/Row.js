import React, { useEffect, useState } from "react";
import { requests } from "./requests";
import Axios from "axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const BASE_URL = `https://api.themoviedb.org/3`;
  const IMAGE_URL = `https://image.tmdb.org/t/p/original/`;

  useEffect(() => {
    Axios({
      url: `${BASE_URL}${fetchUrl}`,
      method: "GET",
    }).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    console.log(movie);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie.name ? movie.name : movie.title)
        .then((url) => {
          console.log(url);
          var video_id = url.split("v=")[1].substring(0, 11);
          setTrailerUrl(video_id);
        })
        .catch(() => alert("Unable to find video Try after refreshing..."));
    }
  };

  return (
    <div className="main-row">
      <h3 className="row-title">{title}</h3>

      <div className="row-images">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            title={isLargeRow ? movie.name : movie.original_title}
            className={`row-image ${isLargeRow && "row-image-large"}`}
            src={`${IMAGE_URL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}></YouTube>}
    </div>
  );
};

export default Row;
