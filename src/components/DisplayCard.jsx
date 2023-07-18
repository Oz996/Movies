import { Link } from "react-router-dom";

const DisplayCard = ({ data }) => {
  return (
    <article className="bg-slate-800 text-center rounded-sm w-[11.6rem] h-[23.5rem] hover:text-blue-400 text-white max-sm:w-[13rem]">
      <Link to={`/${data.imdbID}`}>
        <div className="w-full mx-auto">
          <img
            className="w-full h-[18.3rem] object-fill hover:opacity-80"
            src={data.Poster}
            alt={data.Title}
          />
        </div>
        <h1 className="pt-2 px-2 text-[.9rem]">{data.Title}</h1>
        <h2 className="text-xs pt-2 pb-1">{data.Year}</h2>
      </Link>
    </article>
  );
};

export default DisplayCard;
