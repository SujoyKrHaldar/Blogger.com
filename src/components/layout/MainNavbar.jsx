/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";
import SearchInput from "../shared/SearchInput";
import CtaBtn from "../shared/CtaBtn";
import Image from "../shared/Image";

function MainNavbar({ authStatus, toggelMenu, imgSrc }) {
  return (
    <div className="z-20 py-3 w-full h-fit bg-white border-b border-gray-500 pointer-events-auto">
      <div className="container  flex items-center justify-between gap-4">
        <Link to="/">
          <h1 className=" font-bold text-3xl">Blogger.com</h1>
        </Link>

        <nav className="flex items-center gap-8">
          <SearchInput
            className="bg-gray-100 border border-gray-300 px-4 py-[0.6rem] rounded-full"
            placeholder="Search"
          />

          <NavLink to="/feed">
            <p>Feed</p>
          </NavLink>

          {authStatus ? (
            <>
              <CtaBtn url="/create" className="text-white py-[0.7rem]">
                <p>Write Post</p>
              </CtaBtn>

              <div
                onClick={toggelMenu}
                className="bg-white border-2 border-green-700 w-12 h-12 rounded-full overflow-hidden -ml-4 cursor-pointer"
              >
                <Image src={imgSrc} alt="avatar" className="scale-125" />
              </div>
            </>
          ) : (
            <>
              <NavLink to="/login">
                <p>Login</p>
              </NavLink>

              <CtaBtn url="/signup" className="text-white -ml-1">
                <p> Signup</p>
              </CtaBtn>
            </>
          )}
        </nav>
      </div>
    </div>
  );
}

export default MainNavbar;
