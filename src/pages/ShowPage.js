import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import "./ShowPage.css";

function ShowPage(props) {
  //   const va = this.props.location.param1;
  // console.log(props);

  const [showMovie, setShowMovie] = useState({
    show: [],
  });

  const grabItems = [props.details[`[object Object]`][0]];
  console.log(grabItems[0].id);
  console.log(grabItems[0].poster_path);

  return (
    <div className="show__page">
      <Header user={props.user} handleLogout={props.handleLogout} />
      <div className="show__bigContainer">
        <p>{grabItems[0]?.id}</p>
        <p>{grabItems[0]?.poster_path}</p>
        <p>{grabItems[0]?.media_type}</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/AZGcmvrTX9M?autoplay=0&showinfo=0&controls=0"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default ShowPage;
