// import { useState } from "react";
import { requests } from "../services/requestService";
import Header from "../components/Header/Header";
// import Sidebar from "../components/Sidebar/Sidebar";
import Banner from "../components/Banner/Banner";
import Row from "../components/Row/Row";

export default function HomePage(props) {
  // const [popup, handlePopup] = useState(false);

  // function handleSidebar() {
  //   handlePopup(true);
  //   console.log("clicked");
  // }

  return (
    <div className="home">
      <Header
        user={props.user}
        // handleSidebar={handleSidebar}
        handleLogout={props.handleLogout}
      />
      <Banner user={props.user} />
      {props.user && <Row title="My List" />}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
        handleInfo={props.handleInfo}
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        handleInfo={props.handleInfo}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        handleInfo={props.handleInfo}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        handleInfo={props.handleInfo}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        handleInfo={props.handleInfo}
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        handleInfo={props.handleInfo}
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        handleInfo={props.handleInfo}
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        handleInfo={props.handleInfo}
      />
    </div>
  );
}
