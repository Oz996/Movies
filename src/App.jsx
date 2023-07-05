import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Movie from "./pages/Movie";
import Show from "./pages/Show";
import Search from "./pages/Search";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<Movie/>}/>
          <Route path="/show/:imdbID" element={<Show/>}/>
          <Route path="/search" element={<Search/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
