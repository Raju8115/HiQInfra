import React, { useEffect, useRef, useState } from "react";
import buildingImage from "../assets/image-1.jpg"; // Replace with your actual image

// Reusable custom hook
const useInView = (threshold = 0.2) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};

const About_3 = () => {
  const [headingRef, headingVisible] = useInView();
  const [para1Ref, para1Visible] = useInView();
  const [para2Ref, para2Visible] = useInView();
  const [imageRef, imageVisible] = useInView();

  return (
    <div className="bg-[#9e2a29] text-white min-h-[70vh] flex items-center justify-center md:px-12 px-4 py-16" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:max-w-7xl w-full items-center sm:max-w-lg">

        {/* Text Section */}
        <div className="flex flex-col gap-6 px-2 lg:text-left">
          <h1
            ref={headingRef}
            className={`text-2xl lg:text-4xl font-light sm:text-md transform transition-all duration-700 ease-out ${
              headingVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            The foundation of your success
          </h1>

          <p
            ref={para1Ref}
            className={`text-[#d6d3d4] font-light text-base lg:text-lg xl:text-xl sm:text-lg transform transition-all duration-700 ease-out delay-100 ${
              para1Visible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            When choosing a ready-mix concrete company, it is important to weigh all of the factors involved. However, the quality of the concrete should be your top priority.
          </p>

          <p
            ref={para2Ref}
            className={`text-[#d6d3d4] font-light text-base lg:text-lg xl:text-xl sm:text-lg transform transition-all duration-700 ease-out delay-200 ${
              para2Visible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            By choosing a <strong>HIQU</strong> ready-mix concrete company, you can be confident that you are getting the best possible product for your project.
          </p>
        </div>

        {/* Image Section */}
        <div
          ref={imageRef}
          className={`flex justify-center items-center h-[50vh] sm:h-[50vh] lg:h-[65vh] transform transition-transform duration-[1500ms] ease-out ${
            imageVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          <img
            src={buildingImage}
            alt="Modern Building"
            className="h-full w-full max-w-full object-cover rounded-tr-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export default About_3;