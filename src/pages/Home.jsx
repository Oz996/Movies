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

      <DisplayList />

  );
};

export default Home;
