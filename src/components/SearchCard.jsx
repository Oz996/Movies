import React from "react";
import { Link } from "react-router-dom";

const SearchCard = ({ search }) => {
  return (
    <article className="bg-slate-800 w-[13rem] min-h-[24rem] text-center rounded-xl text-white cursor-pointer">
      <Link
        to={`/${search.imdbID}`}
        className="hover:text-blue-400 hover:opacity-80 duration-200"
      >
        <div className="w-[13rem] h-[18rem] mx-auto">
          <img
            className="w-full h-full object-fill"
            src={search.Poster}
            alt={search.Title}
          />
        </div>
        <h1 className="pt-2 px-2 font-semibold">{search.Title}</h1>
        <h2 className="text-sm pt-2">{search.Year}</h2>
      </Link>
    </article>
  );
};

export default SearchCard;
