import React from "react";
import myPhoto from "../../../assets/my-photo.jpeg";

const IntroductionCard = () => (
    <div className="relative flex items-center justify-center w-[92%] lg:w-big-screen mb-14 text-accent1">
        <div className="w-full border-[1px] flex flex-col gap-5 md:gap-10 rounded-2xl shadow-lg border-accent2 h-fit md:h-[500px] bg-card border-opacity-25 py-5 px-2 md:p-10">
          <div className="relative flex flex-row items-center w-64 lg:w-96">
            <p className="relative flex-shrink mx-4 text-2xl font-semibold">
              About Me
            </p>
            <div className="flex-grow border-t border-gray-400 text-accent2"></div>
          </div>
          <div
            id="about-content"
            className="flex flex-col items-center gap-5 md:flex-row md:justify-around"
          >
            <div id="about-image-wrapper" className="w-48 md:w-64">
              <img className="w-full rounded-xl" src={myPhoto} alt="Pic" />
            </div>
            <div className="flex flex-col justify-center text-justify text-sm w-[90%] md:w-4/6 h-full gap-5 md:text-lg">
              <span className="indent-10">
                Hi! This is Pelin Kaynarca. An enthusiastic newcomer to the
                world of web development with the ability of learning new
                concepts fast. My goal is to always keep up with the trends and
                new technologies in the industry and channel my knowledge into
                creating user-friendly products.
                </span>
              <span className="indent-10">
                I started my journed with front-end development, later I got to
                use back-end technologies like PostgreSQL, Java, Spring Boot as
                well. If you are looking for someone to hire or collaboration,
                do not hesitate to contact me!
              </span>
            </div>
          </div>
        </div>
    </div>
);

export default IntroductionCard;