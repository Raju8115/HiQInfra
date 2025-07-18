import React, { useEffect, useRef, useState } from "react";
import meeting from "../assets/image-2.jpg"; // Replace with your image path

// Reusable hook
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

const About_4 = () => {
  const [headingRef, headingVisible] = useInView();
  const [para1Ref, para1Visible] = useInView();
  const [para2Ref, para2Visible] = useInView();
  const [imageRef, imageVisible] = useInView();

  return (
    <div className="text-white min-h-[70vh] flex items-center justify-center md:px-12 px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:max-w-7xl w-full items-center sm:max-w-lg">
        {/* Text Section */}
        <div className="flex flex-col gap-6 px-6 lg:text-left">
          <h1
            ref={headingRef}
            className={`text-2xl lg:text-5xl font-light sm:text-md text-[#9e2a29] transform transition-all duration-700 ease-out ${
              headingVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            Trusted by Builders
          </h1>

          <p
            ref={para1Ref}
            className={`text-black font-light text-base lg:text-lg xl:text-xl sm:text-lg font-[Roboto] transform transition-all duration-700 ease-out delay-100 ${
              para1Visible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            At HIQU, we understand that construction projects can be complex and challenging. That's why we work closely with our customers to understand their needs and ensure that they get the right concrete products and services for their project.
          </p>

          <p
            ref={para2Ref}
            className={`text-black font-light text-base lg:text-lg xl:text-xl sm:text-lg font-[Roboto] transform transition-all duration-700 ease-out delay-200 ${
              para2Visible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            We are also committed to providing our customers with excellent customer service. Our team is always available to answer any questions and provide support throughout the construction process.
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
            src={meeting}
            alt="Meeting"
            className="h-full w-full max-w-full object-cover rounded-tr-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export default About_4;
