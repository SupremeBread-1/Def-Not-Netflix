// import React, { useState, useEffect } from "react";
// import axios from "../../services/axiosRequestService";
import { Link } from "react-router-dom";

function Box(props) {
  // const [searchData, setSearchData] = useState([]);

  const newTo = {
    pathname: "/show/54",
    param1: "Parapa",
  };

  //   console.log(props.searchForm.search);
  //   console.log(props.searchparams(`big`));

  //   useEffect(() => {
  //     async function fetchData() {
  //       const request = await axios.get(
  //         props.searchparams(props.searchForm.search)
  //       );
  //       setSearchData(request);
  //       //   console.log(request);
  //       return request;
  //     }
  //     fetchData();
  //     console.log(searchData);
  //   }, [props.searchparams]);

  return (
    <div
      style={{ position: "fixed", top: "30", marginTop: "250px", color: "red" }}
    >
      no
      {/* {searchData.data.results.map((data, idx) => {
        <div>{data.name || data.original_name}</div>;
      })} */}
      <Link to={newTo}>hi</Link>
    </div>
  );
}

export default Box;
