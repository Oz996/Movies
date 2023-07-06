import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../redux/display/displaySlice";
import DisplayCard from "./DisplayCard";

const MovieList = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  if (movies.Response === "False") {
    return (
      <div>
        <span className="text-white">Error fetching Movies</span>
      </div>
    );
  }

  if (shows.Response === "False") {
    return (
      <div>
        <span className="text-white">Error fetching Shows</span>
      </div>
    );
  }

  return (
    <section className="w-11/12 mx-auto">
      <h1 className="text-xl text-white pt-5">Latest Movies</h1>
      <div className="grid grid-rows-1 gap-3 grid-flow-col pt-6 overflow-x-scroll">
        {movies.Search &&
          movies.Search.map((data, index) => (
            <DisplayCard key={index} data={data} />
          ))}
      </div>
      <h1 className="text-xl text-white pt-5">Latest Shows</h1>
      <div className="grid grid-rows-1 gap-3 grid-flow-col pt-6 overflow-x-scroll">
        {shows.Search &&
          shows.Search.map((data, index) => (
            <DisplayCard key={index} data={data} />
          ))}
      </div>
    </section>
  );
};

export default MovieList;
