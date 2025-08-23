import React from 'react';
import AboutImg from '../../assets/about-image.jpg';

const AboutSection = () => {
  return (
    <div className=" overflow-hidden flex md:flex-row flex-col justify-between items-center sm:my-20 my-4 md:gap-20 gap-12 px-5 xl:px-10">
      <div className="text-start md:w-1/2 lg:pr-40">
        <h2 className="text-3xl font-semibold text-secondary sm:text-5xl sm:leading-relaxed">
          Vegan foodie who loves to experiment with recipes
        </h2>
        <p className="text-xl mt-4 text-[#5c5c5c]">
          Lorem ipsum dolor sit amet consectetur. Mauris at in luctus faucibus
          at fermentum velit duis amet. Dolor vitae porta ac eget consequat a
          nulla bibendum.
          <br />
          Velit placerat urna adipiscing sociis a. Urna lacus commodo adipiscing
          est magna mi nullam sit. Tellus sagittis urna et mauris amet odio at
          non.
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex">
            <button
              type="button"
              className="py-4 px-12  bg-btnColor hover:bg-white hover:text-secondary  text-white w-full transition ease-in duration-200 text-center text-base font-semibold border border-[#9c702a] focus:outline-none rounded-lg "
            >
              View Recipe
            </button>
          </div>
        </div>
      </div>

      <div className="md:w-1/2">
        <img src={AboutImg} className="rounded-3xl md:max-h-dvh" />
      </div>
    </div>
  );
};

export default AboutSection;
