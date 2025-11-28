import React from "react";

import HeroImg from "../../assets/png/hero-img.png";
import { IoIosArrowRoundForward } from "react-icons/io";

import Button from "./Button";

const Hero: React.FC = () => {
  return (
    <section className="bg-[#f2f1fe] py-20 md:py-32 lg:py-[138px]">
      <div className="align-center flex items-center justify-between gap-12">
        <div className="flex flex-col justify-between gap-6">
          <h1 className="w-full max-w-[584px] text-4xl font-bold md:text-5xl lg:text-6xl">
            Create, Read, <br />{" "}
            <span className="bg-linear-to-r from-[#4346EF] to-[#8524E5] bg-clip-text text-transparent">
              Inspire.
            </span>
          </h1>
          <p className="text-text-secondary max-w-lg text-[18px] lg:text-[20px]">
            Discover stories written by amazing people. Share your knowledge and
            inspire others with your unique perspective.
          </p>

          <div className="flex flex-col gap-4 md:flex-row">
            <Button
              className="flex w-48 items-center justify-center gap-2"
              size="lg"
              variant="primary"
            >
              Explore Posts
              <IoIosArrowRoundForward className="h-7 w-7" />
            </Button>
            <Button className="w-[152px]" size="lg" variant="outline">
              Get Started
            </Button>
          </div>
        </div>
        <div className="hidden w-[584px] lg:block">
          <img className="w-full" src={HeroImg} alt="hero img illustrator" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
