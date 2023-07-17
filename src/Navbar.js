import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between    items-center fixed top-0 left-0 right-0 z-10  ">
        <NavLink to="/">
          <div className="ml-20">
            <img
              className="h-28 rounded-full"
              src="https://uploads-ssl.webflow.com/62dc3bf0c84234f523cebb22/6383062e9f78ed0b27d8c2f5_White.svg"
              alt=""
            />
            <img src="" alt="" />
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-white   mr-10 space-x-6 ">
          <NavLink to="/beers">BEERS</NavLink>
          <NavLink to="/visits">VISIT</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/experiences">EXPERIENCES</NavLink>
          <NavLink to="/shops">SHOP</NavLink>

          <body class=" flex flex-col ">
            <div>
              <button class="peer px-5 py-2  border border-white rounded-md text-white">
                FIND GEIST
              </button>
              <div
                class="hidden peer-hover:flex hover:flex
         w-[200px]
         flex-col  drop-shadow-lg"
              >
                <NavLink class="block px-4 py-1 text-white " to="/ontap">
                  ON TAP
                </NavLink>
                <NavLink class="block px-4 py-1 text-white " to="/stores">
                  IN STORES
                </NavLink>
                <NavLink class="block px-4 py-1 text-white " to="/locations">
                  QUR LOCATIONS
                </NavLink>
              </div>
            </div>
          </body>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
