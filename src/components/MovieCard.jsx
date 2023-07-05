import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {

  return (
      <article className="bg-slate-800 text-center rounded-sm w-52 hover:text-blue-400 text-white">
        <Link to={`/movie/${movie.imdbID}`}>
      <div className="w-full h-80 mx-auto">
        <img className="w-full h-full object-cover hover:opacity-80" src={movie.Poster} alt={movie.Title} />
      </div>
      <h1 className="pt-2 px-2">{movie.Title}</h1>
      <h2 className="text-sm pt-2 pb-1">{movie.Year}</h2>
    </Link>
    </article>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
