import React, { useEffect, useRef, useState } from "react";
import truckImage from "../assets/image_copy.png"; // Update path as needed

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

const About = () => {
  const [headingRef, headingVisible] = useInView();
  const [para1Ref, para1Visible] = useInView();
  const [para2Ref, para2Visible] = useInView();
  const [para3Ref, para3Visible] = useInView();
  const [imageRef, imageVisible] = useInView();

  return (
    <div
      className="bg-[#5f5e67] text-white min-h-[70vh] flex items-center justify-center md:px-12 px-4 py-16"
      id="about"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:max-w-7xl w-full items-center sm:max-w-lg">
        
        {/* Text Section */}
        <div className="flex flex-col gap-6 px-2 lg:text-left">
          <h1
            ref={headingRef}
            className={`text-2xl lg:text-4xl font-light sm:text-md transform transition-all duration-700 ease-out ${
              headingVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Ready-mix concrete that's built to last
          </h1>

          <p
            ref={para1Ref}
            className={`text-[#d6d3d4] font-light text-base lg:text-lg xl:text-xl sm:text-lg transform transition-all duration-700 ease-out delay-100 ${
              para1Visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            We are committed to providing our customers with the highest quality
            concrete products and services, backed by our team of experienced and
            knowledgeable professionals.
          </p>

          <p
            ref={para2Ref}
            className={`text-[#d6d3d4] font-light text-base lg:text-lg xl:text-xl sm:text-lg transform transition-all duration-700 ease-out delay-200 ${
              para2Visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            We use only the finest quality materials and state-of-the-art equipment
            to produce our concrete. Our rigorous quality control program ensures
            that our concrete meets or exceeds all industry standards.
          </p>

          <p
            ref={para3Ref}
            className={`text-[#d6d3d4] font-light text-base lg:text-lg xl:text-xl sm:text-lg transform transition-all duration-700 ease-out delay-300 ${
              para3Visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            We offer a wide range of concrete mixes to meet the needs of any project,
            from small residential jobs to large commercial and industrial projects.
          </p>
        </div>

        {/* Image Section */}
        <div
          ref={imageRef}
          className={`flex justify-center items-center h-[50vh] sm:h-[50vh] lg:h-[65vh] transform transition-all duration-700 ease-out ${
            imageVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          <img
            src={truckImage}
            alt="Concrete Truck"
            className="h-full w-full max-w-full rounded-tr-[100px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
