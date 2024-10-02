import React from "react";
import myPhoto from "../../../assets/my-photo.jpg";

const IntroductionCard = () => (
    <div className="relative flex items-center justify-center w-[92%] lg:w-big-screen mb-14 text-accent1">
        <div className="w-full border-[1px] flex flex-col rounded-2xl gap-5 md:gap-0 shadow-lg border-accent2 h-fit md:h-[500px] bg-card border-opacity-25 py-5 px-2 md:p-10">
          <div className="relative flex flex-row items-center w-64 lg:w-96">
            <p className="relative flex-shrink mx-4 lg:mb-0 text-2xl font-semibold">
              About Me
            </p>
            <div className="flex-grow border-t border-gray-400 text-accent2"></div>
          </div>
          <div
            id="about-content"
            className="flex flex-col items-center gap-5 md:flex-row md:justify-around h-full"
          >
            <div id="about-image-wrapper" className="w-48 md:w-64">
              <img className="w-full rounded-full" src={myPhoto} alt="Pic" />
            </div>
            <div className="flex flex-col justify-center text-justify text-sm w-[90%] md:w-4/6 h-full gap-5 md:text-base lg:text-lg">
              <span className="indent-7">
              Hi! I'm Pelin, a web developer who believes in the power of determination. In 2023, I made a bold career change to pursue my passion for web development. Like crocheting, which I also taught myself from scratch, my coding journey has shown me that if I set my mind to something, I can achieve it — even if it means starting from zero. 
                </span>
              <span className="indent-7">
              I have recently gained hands-on experience with modern technologies like Spring Boot, PostgreSQL, Angular 16, and I am focused on continuous learning and personal growth in my career.
              </span>
            </div>
          </div>
        </div>
    </div>
);

export default IntroductionCard;