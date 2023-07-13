import { Link } from "react-router-dom";

const DisplayCard = ({ data }) => {
  return (
    <article className="bg-slate-800 text-center rounded-sm w-52 hover:text-blue-400 text-white">
      <Link to={`/${data.imdbID}`}>
        <div className="w-full h-80 mx-auto">
          <img
            className="w-full h-full object-cover hover:opacity-80"
            src={data.Poster}
            alt={data.Title}
          />
        </div>
        <h1 className="pt-2 px-2">{data.Title}</h1>
        <h2 className="text-sm pt-2 pb-1">{data.Year}</h2>
      </Link>
    </article>
  );
};

export default DisplayCard;
