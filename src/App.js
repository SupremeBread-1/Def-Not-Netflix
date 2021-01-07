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

    async function mediaCheck() {
      const test1 = await green("tv", movie.id);
      const test2 = await green("movie", movie.id);
      const test3 = await green("person", movie.id);

      console.log(test1);
      console.log(test2);
      console.log(test3);
      // console.log(test2.images);
      // console.log(test1[0]);

      console.log(movie?.title || movie?.name || movie?.original_name);

      if (test1.success === false) {
        if (test2.success === false) {
          if (
            test3?.title ||
            test3?.name ||
            test3?.original_name === movie?.title ||
            movie?.name ||
            movie?.original_name
          ) {
            // console.log(test3?.title || test3?.name || test3?.original_name);
            // return test3;
            setImgVid([test3?.images, test3?.videos]);
            return;
          } else {
            console.log("broken beyond repair");
          }
        } else {
          if (
            test2?.title ||
            test2?.name ||
            test2?.original_name === movie?.title ||
            movie?.name ||
            movie?.original_name
          ) {
            // console.log(test2?.title || test2?.name || test2?.original_name);
            // return test2;
            setImgVid([test2?.images, test2?.videos]);
            return;
          } else {
            if (
              test3?.title ||
              test3?.name ||
              test3?.original_name === movie?.title ||
              movie?.name ||
              movie?.original_name
            ) {
              // console.log(test3?.title || test3?.name || test3?.original_name);
              // return test3;
              setImgVid([test3?.images, test3?.videos]);
              return;
            } else {
              console.log("broken beyond repair");
            }
          }
          // return test2;
        }
      } else {
        if (
          test1?.title ||
          test1?.name ||
          test1?.original_name === movie?.title ||
          movie?.name ||
          movie?.original_name
        ) {
          // console.log(test1?.title || test1?.name || test1?.original_name);
          // return test1;
          setImgVid([test1?.images, test1?.videos]);
          // console.log(imgVid);
          return;
        } else {
          if (test2.success === false) {
            if (
              test3?.title ||
              test3?.name ||
              test3?.original_name === movie?.title ||
              movie?.name ||
              movie?.original_name
            ) {
              // console.log(test3?.title || test3?.name || test3?.original_name);
              // return test3;
              setImgVid([test3?.images, test3?.videos]);
              return;
            } else {
              console.log("broken beyond repair");
            }
          } else {
            if (
              test2?.title ||
              test2?.name ||
              test2?.original_name === movie?.title ||
              movie?.name ||
              movie?.original_name
            ) {
              // console.log(test2?.title || test2?.name || test2?.original_name);
              // return test2;
              setImgVid([test2?.images, test2?.videos]);
              return;
            } else {
              if (
                test3?.title ||
                test3?.name ||
                test3?.original_name === movie?.title ||
                movie?.name ||
                movie?.original_name
              ) {
                // console.log(test3?.title || test3?.name || test3?.original_name);
                // return test3;
                setImgVid([test3?.images, test3?.videos]);
                return;
              } else {
                console.log("broken beyond repair");
              }
            }
          }
        }
      }
    }
    mediaCheck();

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
              imgVid={imgVid}
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

// console.log(test1.success);
//       console.log(test2.success);
//       console.log(test3.success);
//       return test1.success === undefined
//         ? console.log(test1)
//         : test2.success === undefined
//         ? console.log(test2)
//         : test3.success === undefined
//         ? console.log(test3)
//         : console.log("nope");

//       // console.log(test1);

// test1?.title ||
//       test1?.name ||
//       test1?.original_name === movie?.title ||
//       movie?.name ||
//       movie?.original_name
//         ? console.log(
//             "test1",
//             test1?.title,
//             test1?.name,
//             test1?.original_name,
//             movie?.title,
//             movie?.name,
//             movie?.original_name
//           )
//         : test2?.title ||
//           test2?.name ||
//           test2?.original_name === movie?.title ||
//           movie?.name ||
//           movie?.original_name
//         ? console.log(
//             "test2",
//             test2?.title,
//             test2?.name,
//             test2?.original_name,
//             movie?.title,
//             movie?.name,
//             movie?.original_name
//           )
//         : test3?.title ||
//           test3?.name ||
//           test3?.original_name === movie?.title ||
//           movie?.name ||
//           movie?.original_name
//         ? console.log(
//             "test3",
//             test3?.title,
//             test3?.name,
//             test3?.original_name,
//             movie?.title,
//             movie?.name,
//             movie?.original_name
//           )
//         : console.log("none of the above");

// if(test1.success === false) {
//  if (test2.success === false) {
//    return test3;
//  } else {
//    return test2;
//  }
// } else {
//   return test1;
// }

// console.log("test3", test3);
// console.log("test2", test2);
// console.log("test1", test1);
