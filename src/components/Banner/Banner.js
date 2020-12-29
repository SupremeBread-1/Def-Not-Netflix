import React, { useState, useEffect } from "react";
import axios from "../../services/axiosRequestService";
import { requests } from "../../services/requestService";
import "./Banner.css";

function Banner(props) {
  const [bannerMovie, setBannerMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setBannerMovie(
        // request.data.results[numGenerator(request.data.results.length)]
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  // console.log(bannerMovie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  // function numGenerator(num) {
  //   Math.floor(Math.random() * num - 1);
  // }

  return (
    <header
      className="banner"
      style={{
        background: `url('https://image.tmdb.org/t/p/original${
          bannerMovie?.backdrop_path || bannerMovie?.poster_path
        }') center top/cover `,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {bannerMovie?.title ||
            bannerMovie?.name ||
            bannerMovie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          {props.user && <button className="banner__button">My List</button>}
        </div>
        <h1 className="banner__description">
          {truncate(bannerMovie?.overview, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;

// || undefined
// ? bannerMovie?.title ||
//   bannerMovie?.name ||
//   bannerMovie?.original_name
// : null
