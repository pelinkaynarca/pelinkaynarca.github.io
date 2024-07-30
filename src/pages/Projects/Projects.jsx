import React from "react";
import PageLayout from "../../components/PageLayout";
import ProjectCard from "./components/ProjectCard";
import LBProjectImg from "../../assets/lb-project.png";
import IPProjectImg from "../../assets/ip-project.png";
import LMSProjectImg from "../../assets/lms-project.png";

const Projects = () => {
  return (
    <PageLayout>
      <section
        id="portfolio"
        className="flex flex-col items-center text-accent1 relative mt-5 w-[92%] lg:w-big-screen"
      >
        <div className="flex flex-col items-center mb-12 gap-2">
          <div className="relative flex flex-row items-center w-80 md:w-96">
            <div className="flex-grow border-t border-gray-400 text-accent2"></div>
            <p className="relative flex-shrink mx-4 text-4xl md:text-5xl font-semibold">
              My Portfolio
            </p>
            <div className="flex-grow border-t border-gray-400 text-accent2"></div>
          </div>
          <p className="bg-clip-text text-[#00000000] font-semibold bg-gradient-to-t from-accent1 text-center to-skill-alt">
            Explore some of the projects
            <br className="block md:hidden"></br> I have worked on so far
          </p>
        </div>
        <div className="w-full grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-7">
          <ProjectCard
            imageSrc={LBProjectImg}
            title="Year in Film Colors"
            description="A project where the user's Letterboxd diary is transformed
            into a dynamic colorful representation in the form of a
            calendar."
            techStack="JS, TailwindCSS, Puppeteer"
            repoLink="https://github.com/pelinkaynarca/letterboxd-year-in-film-colors"
            liveLink="https://yearinfilmcolors.onrender.com"
          />
          <ProjectCard
            imageSrc={IPProjectImg}
            title="IP Address Tracker"
            description="A project that not only enables users to track and visualize
            any IP address on a map but also provides additional
            information such as ISP and timezone."
            techStack="JS, TailwindCSS, IP Geolocation API, LeafletJS"
            repoLink="https://github.com/pelinkaynarca/ip-address-tracker"
            liveLink=""
          />
          <ProjectCard
            imageSrc={LMSProjectImg}
            title="Library Management System"
            description="A group project with n-tier architecture that offers an
            efficient and secure system for managing book loans. It
            features authentication and role-based authorization."
            techStack="Java, Spring Boot, Spring Security, MapStruct"
            repoLink="https://github.com/pelinkaynarca/library-management-system-spring-boot-project"
            liveLink=""
          />
        </div>
      </section>
    </PageLayout>
  );
};

export default Projects;
