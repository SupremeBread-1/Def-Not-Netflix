import React from "react";
import "./MediaProfile.css";
import Row from "../Row/Row";

function MediaProfile(props) {
  // console.log(props.grabItems);
  const media = props.grabItems;

  // console.log(props.genreList);
  const lister = props.genreList;

  console.log(props.imagesVideos);

  function genreFind(id) {
    const genreArr = [];
    for (const genre of id) {
      // console.log(genre);
      //   console.log(typeof genre);

      //   if(!id.hasOwnProperty(genre)) continue;
      //   if(id[genre] === "")
      for (const list of lister) {
        // if (!lister.hasOwnProperty(list)) continue;
        // console.log(list.id);
        // console.log(typeof list.id);
        if (list.id === genre) {
          // console.log(list.name);
          genreArr.push(list.name);
          //   return list.name;
        }
        // else {
        //   console.log("not it");
        // }
      }
    }
    // console.log(genreArr);
    return genreArr.toString();
  }

  //   genreFind(media[0]?.genre_ids);

  return (
    <div className="show__bigContainer">
      <div className="show__content">
        <h1 className="show__title">
          {media[0]?.title || media[0]?.name || media[0]?.original_name}
        </h1>
        <p className="show__details">
          {media[0]?.first_air_date
            ? media[0]?.first_air_date.substr(0, 4)
            : media[0]?.release_date.substr(0, 4)}
          <span className="show__language">{media[0]?.original_language}</span>
          <span>{media[0]?.vote_average}</span>
        </p>
        <p>{genreFind(media[0]?.genre_ids)}</p>
        <p className="show__description">{media[0]?.overview}</p>
      </div>
      <div className="show__backgroundBigContainer">
        {/* background image div with inset box shadow */}
        <div
          className="show__backgroundLittleContainer"
          style={{
            background: `url('https://image.tmdb.org/t/p/original${media[0]?.backdrop_path}') center center/cover`,
          }}
        ></div>
      </div>
      <div className="show__imgvid">
        <Row
          imgVidShower
          title="Videos & Images"
          imagesVideos={props.imagesVideos}
        />
      </div>
    </div>
  );
}

export default MediaProfile;

// {
//   /* <p>{props.grabItems[0]?.id}</p>
//       <p>{props.grabItems[0]?.poster_path}</p>
//       <p>{props.grabItems[0]?.media_type}</p>
//       <p>
//         {props.grabItems[0]?.genre_ids?.map((i) => (
//           <span>{i}</span>
//         ))}
//       </p>
//       <iframe
//         width="560"
//         height="315"
//         src="https://www.youtube.com/embed/AZGcmvrTX9M?autoplay=0&showinfo=0&controls=0"
//         frameborder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowfullscreen
//       ></iframe> */
// }

// box-shadow total cover CSS
// box-shadow: 0 0 15px 5px red inset;

// style={{
//     background: `url('https://image.tmdb.org/t/p/original${media[0]?.backdrop_path}') center center/cover`,
//   }}
