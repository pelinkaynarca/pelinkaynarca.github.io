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
  <div className="lg:h-[430px] bg-section-bg rounded-xl flex justify-center p-6">
    <div className="lg:w-full h-full flex flex-col gap-2">
      <div className="flex flex-col gap-4">
        <img
          className="rounded-xl shadow-lg shadow-body-bg"
          src={imageSrc}
          alt="Image"
        />
        <p className="font-bold text-base lg:text-lg text-accent1 text-center">
          {title}
        </p>
      </div>
      <div className="h-full flex flex-col justify-between">
        <div className="flex">
          <p className="text-accent1 text-sm lg:text-base text-opacity-90">
            {description}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between">
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
