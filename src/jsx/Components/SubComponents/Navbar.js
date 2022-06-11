import React, { useState, useEffect } from "react";
import { NavLink, matchPath, useLocation } from "react-router-dom";
import Dropdown from "./Dropdown";
import { MoreDropdown } from "./moreDropdown";
import { Link as MyLink } from "react-scroll";
export const Navbar = () => {
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  let location = useLocation();
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };
  const match = matchPath(location.pathname, {
    path: "/lazy-lounge",
    exact: true,
    strict: false
  });

  useEffect(
    () => {
      if (typeof window !== "undefined") {
        window.addEventListener("scroll", controlNavbar);

        // cleanup function
        return () => {
          window.removeEventListener("scroll", controlNavbar);
        };
      }
    },
    [lastScrollY]
  );
  return (
    <div
      className={`py-8 px-10 lg:px-20 xl:px-40 2xl:px-80 flex  items-center justify-between bg-darkBlue_900 fixed w-full left-0 duration-300 ${show
        ? "top-0"
        : "-top-96"}`}
    >
      <ul className="flex items-center gap-x-5">
        <li>
          <NavLink
            smooth={true}
            duration={1000}
            className="tags text-white cursor-pointer hover:text-fuchsia_600 text-xl tracking-wider"
            to=""
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="tags text-white cursor-pointer hover:text-fuchsia_600 text-xl tracking-wider"
            activeStyle={{ color: "#B150ED" }}
            to="lazy-lounge"
          >
            Lazy Lounge
          </NavLink>
        </li>
        <li>
          {match
            ? <MyLink
                smooth={true}
                duration={1000}
                className="tags text-white cursor-pointer hover:text-fuchsia_600 text-xl tracking-wider"
                activeStyle={{ color: "#B150ED" }}
                to="roadmap"
              >
                Roadmap
              </MyLink>
            : <NavLink
                className="tags text-white cursor-pointer hover:text-fuchsia_600 text-xl tracking-wider"
                activeStyle={{ color: "#B150ED" }}
                to="lazy-lounge"
              >
                Roadmap
              </NavLink>}
        </li>
        <li>
          {match
            ? <MyLink
                smooth={true}
                duration={1000}
                className="tags text-white cursor-pointer hover:text-fuchsia_600 text-xl tracking-wider"
                activeStyle={{ color: "#B150ED" }}
                to="team"
              >
                Team
              </MyLink>
            : <NavLink
                className="tags text-white cursor-pointer hover:text-fuchsia_600 text-xl tracking-wider"
                activeStyle={{ color: "#B150ED" }}
                to="lazy-lounge"
              >
                Team
              </NavLink>}
        </li>
        <li className="relative">
          <button
            onClick={() => {
              setShowDropdown(!showDropdown);
            }}
            className="tags text-white hover:text-fuchsia_600 text-xl tracking-wider"
          >
            More
          </button>
          {showDropdown &&
            <Dropdown show={showDropdown} setShow={setShowDropdown}>
              {" "}<MoreDropdown />{" "}
            </Dropdown>}
        </li>
      </ul>
      <div className="flex items-center gap-x-5">
        <a href="https://twitter.com/lazyllamascnft?s=21" target = "_blank" className="border-1 border-white hover:border-fuchsia_600 text-center text-white w-44 rounded-lg py-2 hover:bg-fuchsia_600 hover:text-black duration-500">
          Twitter
        </a>
        <a href="https://discord.com/invite/Fvvs6PVrsE" target = "_blank" className="border-1 border-white hover:border-fuchsia_600 text-center text-white w-44 rounded-lg py-2 hover:bg-fuchsia_600 hover:text-black duration-500">
          Discord
        </a>
      </div>
    </div>
  );
};
