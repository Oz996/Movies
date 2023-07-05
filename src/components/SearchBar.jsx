import {AiOutlineSearch} from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { searchMovie } from '../redux/display/displaySlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [search, setSearch] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSearch = (e) => {
      e.preventDefault()
      dispatch(searchMovie(search)) 
      navigate("/search") 
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

  return (
    <section className="w-full h-14 bg-white">
      <form action="" className="flex gap-5 pt-3 w-11/12 mx-auto justify-center items-center" onSubmit={handleSearch}>
        <label htmlFor="title" className='font-semibold text-lg'>Title</label>
        <input type="text" name="title" className=" w-72 px-4 py-1 border border-slate-300" onChange={handleChange}/>
        <label htmlFor="year" className='font-semibold text-lg'>Year</label>
        <input type="text" name="year" className="w-28 px-4 py-1 border border-slate-300"/>
        <select name="type" className="h-9 text-black border-slate-300 px-4">
          <option value="">Type</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
        </select>
        <button className='bg-cyan-900 hover:bg-cyan-800 text-white px-3 rounded h-9'><AiOutlineSearch size={17}/></button> 
      </form>
    </section>
  );
};

export default SearchBar;
