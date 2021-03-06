import React, { useState } from "react";
import Header from "../components/Header/Header";
import PersonProfile from "../components/PersonProfile/PersonProfile";
import MediaProfile from "../components/MediaProfile/MediaProfile";
import "./ShowPage.css";

function ShowPage(props) {
  //   const va = this.props.location.param1;
  console.log(props);
  // console.log(props.imgVid);

  // const [showMovie, setShowMovie] = useState({
  //   show: [],
  // });

  const grabItems = [props.details[`[object Object]`][0]];
  // console.log(grabItems[0].id);
  // console.log(grabItems[0].poster_path);
  // console.log(props.genreList);

  const imagesVideos = props.imgVid;

  return (
    <div className="show__page">
      <Header user={props.user} handleLogout={props.handleLogout} />
      {grabItems[0].media_type === "person" ? (
        <PersonProfile grabItems={grabItems} imagesVideos={imagesVideos} />
      ) : (
        <MediaProfile
          grabItems={grabItems}
          genreList={props.genreList}
          imagesVideos={imagesVideos}
        />
      )}
    </div>
  );
}

export default ShowPage;
