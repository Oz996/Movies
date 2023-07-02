import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ShowCard = ({show}) => {
  return (
    <article className="bg-slate-800 text-center rounded-sm w-52">
    <Link to={`/show/${show.imdbID}`}>
  <div className="w-full h-80 mx-auto">
    <img className="w-full h-full object-cover hover:opacity-80" src={show.Poster} alt={show.Title} />
  </div>
  <h1 className="text-white hover:text-blue-400 pt-2 px-2">{show.Title}</h1>
  <h2 className="text-white text-sm pt-2 pb-1">{show.Year}</h2>
</Link>
</article>
  )
}

ShowCard.propTypes = {
    show: PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Poster: PropTypes.string.isRequired,
      Year: PropTypes.string.isRequired,
      imdbID: PropTypes.string.isRequired,
    }).isRequired,
  };
  

export default ShowCard