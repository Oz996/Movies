import {AiOutlineSearch} from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { searchMovie } from '../redux/display/displaySlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({setSearchBar}) => {
    const [search, setSearch] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSearch = (e) => {
      e.preventDefault()
      dispatch(searchMovie(search)) 
      navigate("/search") 
      setSearchBar(false)
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

  return (
    <section className="w-full h-14 bg-white">
      <form action="" className="flex gap-1 pt-3 w-11/12 mx-auto justify-center items-center" onSubmit={handleSearch}>
        <input type="text" name="title" placeholder='Search Movies or Shows...' className=" w-96 px-4 py-1 border border-slate-300 h-9" onChange={handleChange}/>
        <button className='bg-cyan-900 hover:bg-cyan-800 text-white px-3 rounded h-9'><AiOutlineSearch size={17}/></button> 
      </form>
    </section>
  );
};

export default SearchBar;
