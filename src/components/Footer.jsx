import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex md:hidden bottom-0 fixed py-2 items-center justify-center bg-nav-bg backdrop-blur-sm z-10 w-screen rounded-t-3xl border-accent2 border-[1px] border-opacity-25">
      <ul className="flex flex-row justify-center items-center gap-4 text-sm">
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-accent1 text-center flex flex-col p-2 after:content-[''] after:w-full after:rounded-lg after:h-[4px] after:bg-accent2"
                : "font-semibold text-accent1 hover:text-hover-nav p-2"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-accent1 text-center flex flex-col p-2 after:content-[''] after:w-full after:rounded-lg after:h-[4px] after:bg-accent2"
                : "font-semibold text-accent1 hover:text-hover-nav p-2"
            }
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/certificates"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-accent1 text-center flex flex-col p-2 after:content-[''] after:w-full after:rounded-lg after:h-[4px] after:bg-accent2"
                : "font-semibold text-accent1 hover:text-hover-nav p-2"
            }
          >
            Certificates
          </NavLink>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
