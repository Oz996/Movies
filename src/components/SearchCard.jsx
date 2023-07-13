import React from "react";
import { Link } from "react-router-dom";

const SearchCard = ({ search }) => {
  return (
    <article className="bg-slate-800 w-64 text-center rounded-xl hover:text-blue-400 text-white cursor-pointer">
      <Link to={`/${search.imdbID}`}>
        <div className="w-full h-80 mx-auto">
          <img
            className="w-full h-full object-cover hover:opacity-80"
            src={search.Poster}
            alt={search.Title}
          />
        </div>
        <h1 className="pt-2 px-2 font-semibold">{search.Title}</h1>
        <h2 className="text-sm pt-2 pb-1">{search.Year}</h2>
      </Link>
    </article>
  );
};

export default SearchCard;
