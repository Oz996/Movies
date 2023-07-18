import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetails, getSelectedData } from "../redux/display/displaySlice";
import { AiTwotoneStar } from "react-icons/ai";
import { BiSolidUpvote, BiTime, BiSolidCalendar } from "react-icons/bi";
import NameCard from "../components/NameCard";

const Details = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedData);
  console.log(data);

  useEffect(() => {
    dispatch(fetchDetails(imdbID));
  }, [dispatch, imdbID]);
  return (
    <section className="w-screen bg-slate-600 text-white">
      <div className="w-11/12 mx-auto flex justify-between max-sm:mx-0">
        <div className="flex flex-col gap-10">
          <div className="hidden max-sm:flex flex-col w-screen">
            <img src={data.Poster} alt="" />
            <span className="font-semibold text-xl text-center mt-3">{data.Title}</span>
          </div>
          <div className="flex gap-12 w-10/12 mx-auto pt-10 max-sm:mx-5 max-sm:grid">
            <span className="flex gap-2 items-center">
              <b>IMDB Rating:</b> {data.imdbRating}
              <AiTwotoneStar className="text-orange-300" size={19} />
            </span>
            <span className="flex gap-2 items-center">
              <b>IMDB Votes:</b> {data.imdbVotes}
              <BiSolidUpvote className="text-green-200" />
            </span>
            <span className="flex gap-2 items-center">
              <b>Metascore:</b> {data.Metascore}
              <i className="text-green-200 fa-solid fa-m"></i>
            </span>
            <span className="flex gap-2 items-center">
              <b>Runtime:</b> {data.Runtime} <BiTime />
            </span>
            <span className="flex gap-2 items-center">
              <b>Year:</b> {data.Year} <BiSolidCalendar />
            </span>
          </div>
          <div className="flex flex-row gap-10 w-10/12 mx-auto">
            <div>
              <span>
                Directed by: <NameCard data={data.Director} />
              </span>
            </div>
            <div>
              <span>
                Written by: <NameCard data={data.Writer} />
              </span>
            </div>
            <div>
              <span>
                Stars: <NameCard data={data.Actors} />
              </span>
            </div>
          </div>
          <div className="w-10/12 mx-auto">
            <p className="w-9/12 max-sm:w-full">{data.Plot}</p>
          </div>
          <div className="gap-6 w-10/12 mx-auto mt-[3rem]">
            <div className="w-5/12 max-sm:w-full">
              <div className="grid grid-cols-2 grid-rows-2">
                <span className="font-semibold">Genre:</span>
                <span>{data.Genre}</span>
              </div>
              <div className="grid grid-cols-2 grid-rows-2">
                <span className="font-semibold">Country:</span>
                <span>{data.Country}</span>
              </div>
              <div className="grid grid-cols-2 grid-rows-2">
                <span className="font-semibold">Language:</span>
                <span>{data.Language}</span>
              </div>
              <div className="grid grid-cols-2 grid-rows-2">
                <span className="font-semibold">Awards:</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className="pt-40 w-72 pb-3 max-sm:hidden" src={data.Poster} alt={data.Title} />
          <div className="w-72 flex justify-center text-center max-sm:hidden">
            <span className="font-semibold">{data.Title}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
