import React, { useEffect, useState } from "react";
import axios from "../axios";

import requests from "../Request";

function Banner() {
  const [moviess, setMoviess] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMoviess(
        request.data.results
         [ Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);
  
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${moviess?.backdrop_path}"
    )`,
        backgroundPosition: "center-center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {moviess?.title || moviess?.name || moviess?.original_name}
        </h1>

        <div className="buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My-list</button>
        </div>
        <h1 className="banner__description">
          {truncate(moviess?.overview, 150)}
        </h1>
      </div>
    </header>
    //  <div className="banner--fadeBottom"></div>
  );
}

export default Banner;
