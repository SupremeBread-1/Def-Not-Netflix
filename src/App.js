import { useState } from "react";
import "./App.css";

import Footer from "./components/Footer/Footer";

import SearchPage from "./pages/SearchPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

import { Switch, Route, withRouter, Redirect } from "react-router-dom";

import { getUser, logout } from "./services/userService";
import ShowPage from "./pages/ShowPage";

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
  });

  function handleInfo(info) {
    console.log(info);
    setDetails(info);
    props.history.push("/show/:id");
  }

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
                // handleInfo={handleInfo}
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
