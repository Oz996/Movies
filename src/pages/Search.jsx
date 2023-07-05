import { useSelector } from "react-redux"
import { getSearchData } from "../redux/display/displaySlice"

const Search = () => {
    const searchResults = useSelector(getSearchData)
    const isLoading = useSelector((state) => state.display.loading)
    console.log(searchResults)

    if (isLoading) {
        return <div> Loading...</div>
    }

    if (searchResults.length === 0) {
        return <div>No search results found</div>
    }

  return (
    <section>
        {searchResults && searchResults.map((data)=> (
            <div key={data.imdbID}>
                <h2>{data.Title}</h2>
            </div>
        ))}
    </section>
  )
}

export default Search