import { useState, useEffect } from "react";
import "./App.css";

import Footer from "./components/Footer/Footer";

import SearchPage from "./pages/SearchPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

import { Switch, Route, withRouter, Redirect } from "react-router-dom";

import { getUser, logout } from "./services/userService";
import ShowPage from "./pages/ShowPage";

import { blue, green } from "./services/requestService";

function App(props) {
  const [userState, setUserState] = useState({
    user: getUser(),
  });

  function handleSignupOrLogin() {
    setUserState({ user: getUser() });
    // props.history.push("/dashboard");
    props.history.push("/");
  }

  function handleLogout() {
    logout();
    setUserState({ user: null });
    props.history.push("/");
  }

  const [details, setDetails] = useState({
    id: "",
    media_type: "",
  });

  const [imgVid, setImgVid] = useState({
    img: [],
    vid: [],
  });

  function handleInfo(movie) {
    console.log(movie);
    setDetails({
      ...details,
      [movie]: [movie],
    });

    // if initial green tv request returns success : false then run second round of async with green movie then possibly person as well?
    // async function handleImgVid() {
    //   const
    // }

    props.history.push("/show/:id");
  }

  const [genreList, setGenreList] = useState({
    genre: "",
  });

  useEffect(() => {
    // const movieString = "movie";
    // const tvString = "tv";
    async function handleGenre() {
      const request = await blue("movie");
      const reqtwo = await blue("tv");
      // const fullGenre = request.concat(reqtwo);
      // const fullGenre = Object.assign({}, request, reqtwo);
      var fullGenre = [...request.genres, ...reqtwo.genres];
      // var unqiueFullGenre = [...new Set(fullGenre)];
      // setGenreList(unqiueFullGenre);
      // console.log(request.genres);
      // console.log(reqtwo.genres);
      // console.log(fullGenre);
      // console.log("ok");
      let ids = fullGenre.map((o) => o.id);
      let filtered = fullGenre.filter(
        ({ id }, index) => !ids.includes(id, index + 1)
      );
      // setGenreList(fullGenre);
      // return fullGenre;
      setGenreList(filtered);
      return filtered;
    }
    handleGenre().then((genreList) => console.log(genreList));
    // handleGenre(tvString);
    // console.log(genreList);
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <HomePage
              user={userState.user}
              handleLogout={handleLogout}
              handleInfo={handleInfo}
            />
          )}
        />
        <Route
          exact
          path="/search"
          render={(props) =>
            getUser() ? (
              <SearchPage
                user={userState.user}
                handleLogout={handleLogout}
                handleInfo={handleInfo}
              />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          path="/show/:id"
          render={(props) => (
            <ShowPage
              user={userState.user}
              handleLogout={handleLogout}
              details={details}
              genreList={genreList}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={(props) => (
            <LoginPage handleSignupOrLogin={handleSignupOrLogin} />
          )}
        />
        <Route
          exact
          path="/signup"
          render={(props) => (
            <SignupPage handleSignupOrLogin={handleSignupOrLogin} />
          )}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
