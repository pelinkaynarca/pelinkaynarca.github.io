import React from "react";

const SkillCard = ({ LogoComponent, title }) => (
  <div className="flex flex-row items-center h-20 gap-2.5 lg:gap-4 p-2.5 md:p-5 border-2 rounded-md shadow-lg lg:w-[230px] group hover:bg-hover-skill border-accent2 border-opacity-70">
    <LogoComponent className="transition-transform w-10 lg:w-12 ease-in-out group-hover:scale-110 duration-300" />
    <div className="flex items-center">
      <p className="text-base lg:text-lg font-semibold transition-transform group-hover:-translate-y-3 duration-300">
        {title}
      </p>
      <p className="absolute text-sm lg:text-base font-medium transition-transform ease-in-out opacity-0 group-hover:opacity-80 group-hover:translate-y-3 text-skill-alt">
        See projects
      </p>
    </div>
  </div>
);

export default SkillCard;
