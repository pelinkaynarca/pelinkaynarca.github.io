import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import "../index.css";
import NavbarGitHubLogo from "./SvgComponents/NavbarGitHubLogo";
import NavbarLinkedInLogo from "./SvgComponents/NavbarLinkedInLogo";

const Navbar = () => {
  return (
    <nav className="relative md:sticky top-0 z-10 flex flex-row items-center justify-between w-[92%] lg:w-big-screen py-7 bg-nav-bg px-2.5 backdrop-blur-md">
      <NavLink to="/" className="text-lg font-bold text-accent2">
        pelinKaynarca();
      </NavLink>
      <ul className="hidden md:flex flex-row gap-4 text-sm">
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-accent1 p-2"
                : "font-semibold text-unfocused hover:text-hover-nav p-2"
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
                ? "font-bold text-accent1 p-2"
                : "font-semibold text-unfocused hover:text-hover-nav p-2"
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
                ? "font-bold text-accent1 p-2"
                : "font-semibold text-unfocused hover:text-hover-nav p-2"
            }
          >
            Certificates
          </NavLink>
        </li>
      </ul>
      <div className="flex flex-row items-center gap-1">
        <a href="https://github.com/pelinkaynarca" className="group">
          <NavbarGitHubLogo />
        </a>
        <a href="https://www.linkedin.com/in/pelinkaynarca/" className="group">
          <NavbarLinkedInLogo className="group-hover:fill-accent2" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
