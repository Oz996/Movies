import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetails, getSelectedData } from "../redux/display/displaySlice";
import { AiTwotoneStar } from "react-icons/ai";
import {BiSolidUpvote, BiTime , BiSolidCalendar} from 'react-icons/bi'

const Movie = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedData);
  console.log(data);

  useEffect(() => {
    dispatch(fetchDetails(imdbID));
  }, [dispatch, imdbID]);
  return (
    <section className="w-screen h-screen bg-slate-600 text-white">
      <div className="w-11/12 mx-auto flex justify-between">
        <div className="flex gap-10">
          <div className="flex gap-14">
           <span className="flex gap-2"><b>IMDB Rating:</b>  {data.imdbRating}<AiTwotoneStar className="text-orange-200" size={19} /></span>
           <span className="flex gap-2"> <b>IMDB Votes:</b>  {data.imdbVotes} <BiSolidUpvote className="text-green-200"/> </span> 
           <span className="flex gap-2"> <b>Runtime:</b>  {data.Runtime} <BiTime/> </span> 
           <span className="flex gap-2"> <b>Year:</b>  {data.Year} <BiSolidCalendar/> </span> 
          </div>
        </div>
        <div>
          <img src={data.Poster} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Movie;
