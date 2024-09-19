import React from "react";
import "../../index.css";
import HtmlLogo from "../../components/SvgComponents/HtmlLogo";
import CssLogo from "../../components/SvgComponents/CssLogo";
import TailwindCssLogo from "../../components/SvgComponents/TailwindCssLogo";
import JavaScriptLogo from "../../components/SvgComponents/JavaScriptLogo";
import JavaLogo from "../../components/SvgComponents/JavaLogo";
import SpringBootLogo from "../../components/SvgComponents/SpringBootLogo";
import PostgreSQLLogo from "../../components/SvgComponents/PostgreSQLLogo";
import SkillCard from "./components/SkillCard";
import IntroductionCard from "./components/IntroductionCard";
import PageLayout from "../../components/PageLayout";

const About = () => {
  return (
    <PageLayout>
      <IntroductionCard></IntroductionCard>
      <section
        id="skills"
        className="flex flex-col text-accent1 w-[92%] lg:w-big-screen px-0 lg:px-5 mb-14"
      >
        <div className="relative flex flex-row items-center w-48 mb-7">
          <div className="flex-grow border-t border-gray-400 text-accent2"></div>
          <p className="relative flex-shrink mx-4 text-xl font-semibold">
            Tech Stack
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4 lg:grid-rows-2 lg:gap-7">
          <SkillCard LogoComponent={HtmlLogo} title="HTML5" />
          <SkillCard LogoComponent={CssLogo} title="CSS3" />
          <SkillCard LogoComponent={TailwindCssLogo} title="Tailwind CSS" />
          <SkillCard LogoComponent={JavaScriptLogo} title="JavaScript" />
          <SkillCard LogoComponent={JavaLogo} title="Java" />
          <SkillCard LogoComponent={SpringBootLogo} title="Spring Boot" />
          <SkillCard LogoComponent={PostgreSQLLogo} title="PostgreSQL" />
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
