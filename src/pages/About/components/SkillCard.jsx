import React from "react";
import { NavLink } from "react-router-dom";

const SkillCard = ({ LogoComponent, title }) => (
  <NavLink className="h-full w-full"
  to="/projects">
  <div className="flex flex-row items-center cursor-pointer h-20 gap-2.5 lg:gap-4 p-2.5 md:p-5 border-2 rounded-md shadow-lg lg:w-[230px] group hover:bg-hover-skill border-accent2 border-opacity-70">
    <LogoComponent className="transition-transform w-10 lg:w-12 ease-in-out group-hover:scale-110 duration-300" />
    <div className="flex items-center h-full">
      <p className="text-sm sm:text-base lg:text-lg leading-tight font-semibold transition-transform group-hover:-translate-y-3.5 duration-300">
        {title}
      </p>
      <span className="absolute text-xs sm:text-base font-medium transition-transform ease-in-out opacity-0 group-hover:opacity-80 group-hover:translate-y-3.5 text-skill-alt">
        See projects
        </span>
    </div>
  </div>
  </NavLink>
);

export default SkillCard;
