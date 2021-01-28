import React, { useState, useEffect } from "react";
import axios from "../../services/axiosRequestService";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({
  title,
  fetchUrl,
  isLargeRow,
  handleInfo,
  imgVidShower,
  imagesVideos,
}) {
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
              {(imagesVideos[0]?.backdrops.length == 0) &
                (imagesVideos[0]?.posters.length == 0) &
                (imagesVideos[1]?.results.length == 0) ||
              imagesVideos[0]?.profiles ? (
                <div>No Results</div>
              ) : (
                <>
                  {imagesVideos[1]?.results.map((video) => (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.key}`}
                      frameBorder="0"
                      key={video.id}
                    >
                      {video.name}
                    </iframe>
                  ))}
                  {imagesVideos[0]?.backdrops?.map((images) => (
                    <img
                      key={images?.file_path}
                      className="row__poster"
                      src={`${base_url}${images?.file_path}`}
                      alt={images?.file_path}
                    />
                  ))}
                  {imagesVideos[0]?.posters?.map((image) => (
                    <img
                      key={image?.file_path}
                      className="row__poster"
                      src={`${base_url}${image?.file_path}`}
                      alt={image?.file_path}
                    />
                  ))}
                </>
              )}
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
