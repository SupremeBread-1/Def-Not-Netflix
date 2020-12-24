// import { useState } from "react";
import Header from "../components/Header/Header";
// import { searchparams, red } from "../services/requestService";
import { red } from "../services/requestService";
// import Box from "../components/Box/Box";
import "./SearchPage.css";
import search from "../images/search.png";
import noimg from "../images/no_image.png";

// import React, { useState, useEffect } from "react";
import React, { useState } from "react";
// import axios from "../services/axiosRequestService";
// require("dotenv").config();
// const API_KEY = process.env.REACT_APP_API_KEY;

function SearchPage(props) {
  const [searchForm, setSearchForm] = useState({
    search: "",
  });

  const [searchData, setSearchData] = useState([]);

  const imageUrl = "https://image.tmdb.org/t/p/original";

  // function red() {
  //   return fetch(
  //     `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=fish&page=1&include_adult=false`
  //   ).then((res) => res.json());
  // }

  // useEffect(() => {
  //   async function fetching() {
  //     const request = await red();
  //     console.log(request);
  //     setSearchData(request.results);

  //     return request;
  //   }
  //   fetching();
  // }, []);

  // console.log(searchData);

  function handleChange(event) {
    setSearchForm((prevState) => ({
      ...prevState,
      [event.target.name]: [event.target.value],
    }));
  }

  async function handleSearchSubmit(event) {
    event.preventDefault();
    // console.log(searchForm);
    const request = await red(searchForm.search);
    setSearchData(request);
    console.log(searchData);
    setSearchForm({
      search: "",
    });
  }

  // useEffect(() => {
  //   async function fetchData() {
  //     const request = await axios.get(searchparams(searchForm.search));
  //     setSearchData(request);
  //     console.log(request);
  //     return request;
  //   }
  //   fetchData();
  //   console.log(searchData);
  // }, []);

  // const url = `/search/multi?api_key=${API_KEY}&language=en-US&query=water&page=1&include_adult=false`;
  // useEffect(() => {
  //   async function fetchData() {
  //     const request = await axios.get(url);
  //     //   console.log(request.data.results);
  //     setSearchData(request.data.results);
  //     // console.log(searchData);
  //     return request;
  //   }
  //   fetchData();
  //   console.log(searchData);
  // }, [url]);

  return (
    <div className="search__page">
      <Header user={props.user} handleLogout={props.handleLogout} />
      <main className="search__bigContainer">
        <div className="search__blankSpace">{/* StandIn */}</div>
        <div className="search__mainBox">
          <form onSubmit={handleSearchSubmit} className="search__form">
            <div className="search__container">
              <input
                type="text"
                name="search"
                id="search"
                className="form__input"
                value={searchForm.search}
                placeholder="Search"
                onChange={handleChange}
              />
              <button type="submit" className="search__submitButton">
                <img src={search} alt="magnify" />
              </button>
            </div>
          </form>
          {/* <Box searchparams={searchparams} searchForm={searchForm} /> */}
          <div className="trap">
            {searchData.results?.map((a) => (
              <div key={a?.id} style={{ objectFit: "contain" }}>
                <img
                  src={`${imageUrl}${
                    a?.poster_path ||
                    a?.profile_path ||
                    (a?.known_for &&
                      a.known_for.length &&
                      a?.known_for[0].poster_path)
                  }`}
                  alt={
                    a?.title || a?.name || a?.original_title || a?.original_name
                  }
                  className="trap__images"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      {/* <Box /> */}
    </div>
  );
}

export default SearchPage;

// check sink
// {a?${imageUrl}a.poster_path}
// if (a?.poster_path) {
//   src={`${imageUrl}${a?.poster_path}`}
// } else if () {

// } {

// }

// {|| a?.known_for && [null] || a?.known_for && a?.known_for[0].poster_path}
// || (!a?.known_for && "/dfa2wl1TyOJQ1KZbrj2PqLVPH1u.jpg") ||(!a?.poster_path && "/dfa2wl1TyOJQ1KZbrj2PqLVPH1u.jpg")
