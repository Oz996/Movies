import { useSelector } from "react-redux";
import { getSearchData } from "../redux/display/displaySlice";
import SearchCard from "../components/SearchCard";
import Loader from "../utils/Loader/Loader";

const Search = () => {
  const searchResults = useSelector(getSearchData);
  const isLoading = useSelector((state) => state.display.loading);
  console.log(searchResults);

  if (isLoading) {
    return <Loader />;
  }

  if (searchResults.Response == "False") {
    return (
      <div className="text-white w-6/12 mx-auto pt-10">
        No search results found
      </div>
    );
  }

  return (
    <section className="w-11/12 mx-auto">
      <h1 className="text-xl text-white pt-5">Search Results</h1>
      <div className="grid grid-rows-2 gap-3 gap-y-16 grid-flow-col pt-6">
        {searchResults.Search &&
          searchResults.Search.map((search, index) => (
            <SearchCard key={index} search={search} />
          ))}
      </div>
    </section>
  );
};

export default Search;
