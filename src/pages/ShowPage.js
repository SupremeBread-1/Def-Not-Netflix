import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import "./ShowPage.css";

function ShowPage(props) {
  //   const va = this.props.location.param1;
  console.log(props);

  const [showMovie, setShowMovie] = useState({
    show: [],
  });

  return (
    <div className="show__page">
      <Header user={props.user} handleLogout={props.handleLogout} />
      <div className="show__bigContainer">
        <p>{props.details}</p>
      </div>
    </div>
  );
}

export default ShowPage;
