import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Details from "./pages/Details";
import Search from "./pages/Search";

const App = () => {
  return (
    <div className="w-screen min-h-screen bg-slate-600">
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/:imdbID" element={<Details/>}/>
          <Route path="/search" element={<Search/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
