import { useEffect } from "react";
import { useDispatch } from "react-redux";
import DisplayList from "../components/DisplayList";
import { fetchMovies, fetchShows } from "../redux/display/displaySlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchShows());
  }, [dispatch]);

  return (
    <section className="w-screen min-h-screen bg-slate-600">
      <DisplayList />
    </section>
  );
};

export default Home;
