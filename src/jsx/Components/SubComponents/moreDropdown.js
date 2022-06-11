import React from "react";
import { NavLink } from "react-router-dom";

export const MoreDropdown = () => {
  return (
    <ul
      className="-left-20 top-10 absolute bg-darkBlue_900"
      style={{ boxShadow: "0px 0px 20px -6px" }}
    >
      <li className="w-60 flex justify-end py-2 px-4">
        <NavLink
          activeStyle={{ color: "#B150ED" }}
          smooth={true}
          duration={1000}
          className="tags text-white hover:text-fuchsia_600 text-xl tracking-wider"
          to="lazy-token"
        >
          Lazy Token
        </NavLink>
      </li>
      <li className="w-60 flex justify-end py-2 px-4">
        <NavLink
          activeStyle={{ color: "#B150ED" }}
          smooth={true}
          duration={1000}
          className="tags text-white hover:text-fuchsia_600 text-xl tracking-wider"
          to="lazy-island"
        >
          Lazy Island
        </NavLink>
      </li>
      <li className="w-60 flex justify-end py-2 px-4">
        <NavLink
          activeStyle={{ color: "#B150ED" }}
          smooth={true}
          duration={1000}
          className="tags text-white hover:text-fuchsia_600 text-xl tracking-wider"
          to="media"
        >
          Media
        </NavLink>
      </li>
      <li className="w-60 flex justify-end py-2 px-4">
        <NavLink
          activeStyle={{ color: "#B150ED" }}
          smooth={true}
          duration={1000}
          className="tags text-white hover:text-fuchsia_600 text-xl tracking-wider"
          to="the-lab"
        >
          The Lab
        </NavLink>
      </li>
      <li className="w-60 flex justify-end py-2 px-4">
        <NavLink
          activeStyle={{ color: "#B150ED" }}
          smooth={true}
          duration={1000}
          className="tags text-white hover:text-fuchsia_600 text-xl tracking-wider"
          to="lab-lobby"
        >
          Lab Lobby
        </NavLink>
      </li>
      <li className="w-60 flex justify-end py-2 px-4">
        <NavLink
          activeStyle={{ color: "#B150ED" }}
          smooth={true}
          duration={1000}
          className="tags text-white hover:text-fuchsia_600 text-xl tracking-wider"
          to="mixing-chamber"
        >
          Mixing Chamber
        </NavLink>
      </li>
      <li className="w-60 flex justify-end py-2 px-4">
        <NavLink
          activeStyle={{ color: "#B150ED" }}
          smooth={true}
          duration={1000}
          className="tags text-white hover:text-fuchsia_600 text-xl tracking-wider"
          to="mutation-chamber"
        >
          Mutation Chamber
        </NavLink>
      </li>
      <li className="w-60 flex justify-end py-2 px-4">
        <NavLink
          activeStyle={{ color: "#B150ED" }}
          smooth={true}
          duration={1000}
          className="tags text-white hover:text-fuchsia_600 text-xl tracking-wider"
          to="lab-how-to"
        >
          Lab Info
        </NavLink>
      </li>
      <li className="w-60 flex justify-end py-2 px-4">
        <NavLink
          activeStyle={{ color: "#B150ED" }}
          smooth={true}
          duration={1000}
          className="tags text-white hover:text-fuchsia_600 text-xl tracking-wider"
          to="serum-x"
        >
          Serum-X
        </NavLink>
      </li>
    </ul>
  );
};
