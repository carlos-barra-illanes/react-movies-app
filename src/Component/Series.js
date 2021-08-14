import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import  Content  from "./Content";
import  Pagination  from "./Pagination";



export default function Series() {
   const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();


    const fetchSeries = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_KEY}&language=es-MX&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
        );
        setContent(data.results);
        setNumOfPages(data.total_pages);
        // console.log(data);
      };

      useEffect(() => {
        window.scroll(0, 0);
        fetchSeries();
        // eslint-disable-next-line
      }, [ page]);

    return (
        <div>
      <span className="pageTitle">Descubre tus proxima serie favorita</span>

      <div className="trending">
        {content &&
          content.map((c) => (
            <Content
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="tv"
              vote_average={c.vote_average}
            />
          ))}
      </div>
      {numOfPages > 1 && (
        <Pagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
    )
}
