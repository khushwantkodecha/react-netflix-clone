import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Banner.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const BASE_URL = `https://api.themoviedb.org/3`;
  const IMAGE_URL = `https://image.tmdb.org/t/p/original/`;

  useEffect(() => {
    Axios({
      url: `${BASE_URL}${fetchUrl}`,
      method: "GET",
    }).then((res) => {
      const maxLength = res.data.results.length;
      const randomNumber = Math.floor(Math.random() * (maxLength - 1));
      setMovie(res.data.results[randomNumber]);
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
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie.name ? movie.name : movie.title)
        .then((url) => {
          var video_id = url.split("v=")[1].substring(0, 11);
          setTrailerUrl(video_id);
        })
        .catch(() => alert("Unable to find video Try after refreshing..."));
    }
  };

  const closeYoutube = () => {
    if (trailerUrl) {
      setTrailerUrl("");
    }
  };

  return (
    <React.Fragment>
      <div
        className="banner"
        style={{
          backgroundImage: `url(
          'https://image.tmdb.org/t/p/original/${movie.backdrop_path}'
        )`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          width: "100%",
          height: "auto",
        }}
        onClick={closeYoutube}
      >
        <div className="banner-contents">
          <h1 className="banner-title">
            {movie.name || movie.title || movie.original_name}
          </h1>
          <div className="banner-buttons">
            <button
              className="banner-button"
              onClick={() => handleClick(movie)}
            >
              Play Trailer
            </button>
          </div>
          <p className="banner-description">{movie.overview}</p>
        </div>
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}></YouTube>}
    </React.Fragment>
  );
}

export default Banner;
