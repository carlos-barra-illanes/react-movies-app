import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import  Content  from "./Content";
import  Pagination  from "./Pagination";
import "../assets/css/Trending.css"
import '../App.css';

export default function Trending() {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_KEY}&language=es-MX&page=${page}`
    );

    setContent(data.results);
 
  };

  useEffect(() => {
    fetchTrending();
    // eslint-disable-next-line
  },  [page]);

  return (
    <div >
      <span className="pageTitle"> Tendencias </span>
      <div className="trending">
        {content &&
          content.map((c) => (
           
            <Content
            key={c.id}
            id={c.id}
            poster={c.poster_path}
            title={c.title || c.name}
            date={c.first_air_date || c.release_date}
            media_type={c.media_type}
            vote_average={c.vote_average}
          />
          ))}
      </div>
      <Pagination setPage={setPage} />
    </div>
  );
}
