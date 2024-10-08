import React from "react";
import ProjectCardExternalLogo from "../../../components/SvgComponents/ProjectCardExternalLogo";
import ProjectCardGitHubLogo from "../../../components/SvgComponents/ProjectCardGitHubLogo";

const ProjectCard = ({
  imageSrc,
  title,
  description,
  techStack,
  repoLink,
  liveLink,
}) => (
  <div className="lg:h-[440px] bg-card rounded-xl flex justify-center p-5 lg:p-7">
    <div className="lg:w-full h-full flex flex-col gap-2">
      <div className="flex flex-col mb-1.5">
        <img
          className="rounded-xl md:h-52 shadow-lg shadow-body-bg"
          src={imageSrc}
          alt="Pic"
        />
      </div>
      <div className="h-full flex flex-col justify-between gap-1.5 lg:gap-0">
        <p className="font-bold text-base lg:text-lg text-accent1 text-center">
          {title}
        </p>
        <p className="text-accent1 text-sm lg:text-base text-opacity-90">
          {description}
        </p>
        <div className="flex flex-row items-center justify-between gap-2">
          <p className="text-skill-alt text-sm">{techStack}</p>
          <div className="flex flex-row items-center">
            <a href={repoLink}>
              <ProjectCardGitHubLogo />
            </a>
            <a href={liveLink}>
              <ProjectCardExternalLogo />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCard;
