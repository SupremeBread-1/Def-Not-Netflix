import React, { useState, useEffect } from "react";
import axios from "../../services/axiosRequestService";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow, handleInfo, imgVidShower }) {
  const [movies, setMovies] = useState([]);

  const [imgVidRow, setImgVidRow] = useState(false);

  useEffect(() => {
    if (imgVidShower) {
      setImgVidRow(true);
    } else {
      setImgVidRow(false);
    }
  }, [imgVidShower]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //   console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  //   console.log(movies);
  //   console.table(movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        <>
          {imgVidRow ? (
            <>
              <div>no</div>
            </>
          ) : (
            <>
              {movies.map((movie) => (
                <img
                  key={movie.id}
                  className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                  src={`${base_url}${
                    isLargeRow
                      ? movie.poster_path
                      : movie.backdrop_path || movie.poster_path
                  }`}
                  alt={movie.name}
                  onClick={() => handleInfo(movie)}
                />
              ))}
            </>
          )}
        </>
      </div>
    </div>
  );
}

export default Row;
