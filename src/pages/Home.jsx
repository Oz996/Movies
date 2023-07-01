import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MovieList from "../components/DisplayList";
import { fetchMovies, fetchShows } from "../redux/display/displaySlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchShows());
  }, [dispatch]);

  return (
    <section className="w-screen h-screen bg-slate-600">
      <MovieList />
    </section>
  );
};

export default Home;
