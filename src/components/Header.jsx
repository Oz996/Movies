import { NavLink, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {CgProfile} from 'react-icons/cg'
import {AiOutlineSearch} from 'react-icons/ai'
import SearchBar from "./SearchBar";
import { useState } from "react";

const Header = () => {
  const { isAuthenticated, loginWithPopup, logout } = useAuth0();
  const [searchBar, setSearchBar] = useState(false)
  return (
    <>
      <nav className="w-screen h-16 bg-slate-800 flex">
        <div className="flex w-10/12 m-auto items-center justify-between">
           <NavLink to="/" className="text-white uppercase text-3xl">movies</NavLink>
          <div className="flex gap-6">
            <NavLink className="text-white"> Movies</NavLink>
            <NavLink className="text-white"> TV Shows</NavLink>
          </div>
          <div className="flex items-center gap-3">
            {isAuthenticated ? (
                <span onClick={logout} className="text-white"> <CgProfile size={35}/></span>
                ) : (
                    <button onClick={loginWithPopup} className="text-white p-3 hover:bg-slate-900">
                Login
              </button>
            )}
            <AiOutlineSearch onClick={() => setSearchBar(prev => !prev)} size={23} className="text-white cursor-pointer"/>
          </div>
        </div>
      </nav>
      {searchBar && <SearchBar setSearchBar={setSearchBar}/>}
      <Outlet />
    </>
  );
};

export default Header;
