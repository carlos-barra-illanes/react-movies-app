import React from "react";
import { img_300, unavailable } from "../Config/Global";
import "../assets/css/Content.css";
import { Badge } from "@material-ui/core";
export default function Content({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) {
  return (
    <div id={id} className="media">
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />  
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </div>
  );
}
