import PropTypes from "prop-types";

const ShowCard = ({show}) => {
  return (
    <article className="bg-slate-800 text-center rounded-sm">
      <div className="w-40 h-60 mx-auto">
        <img className="w-full h-full object-cover" src={show.Poster} alt={show.Title} />
      </div>
      <h1 className="text-white hover:text-blue-400 pt-2 px-2">{show.Title}</h1>
      <h2 className="text-white text-sm pt-2 pb-1">{show.Year}</h2>
    </article>
  )
}

ShowCard.propTypes = {
    show: PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Poster: PropTypes.string.isRequired,
      Year: PropTypes.string.isRequired,
    }).isRequired,
  };
  

export default ShowCard