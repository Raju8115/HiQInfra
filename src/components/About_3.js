import React, { useEffect, useRef, useState } from "react";
import buildingImage from "../assets/image-1.jpg";

const About_3 = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const [textVisible, setTextVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === textRef.current && entry.isIntersecting) {
            setTextVisible(true);
          }
          if (entry.target === imageRef.current && entry.isIntersecting) {
            setImageVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <div className="bg-[#5f5e67] text-white min-h-[70vh] flex items-center justify-center md:px-12 px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:max-w-7xl w-full items-center sm:max-w-lg">
        
        {/* Text Section */}
        <div
          ref={textRef}
          className={`flex flex-col gap-6 px-2 lg:text-left px-6 transform transition-all ease-in-out ${
            textVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`} style={{
                transition: "transform 1.5s ease-in-out",
                willChange: "transform",
              }}
        >
          <h1 className="text-2xl lg:text-4xl font-light sm:text-md">
            The foundation of your success
          </h1>
          <p className="text-[#d6d3d4] font-light text-base lg:text-lg xl:text-xl sm:text-lg">
            When choosing a ready-mix concrete company, it is important to weigh all of the factors involved. However, the quality of the concrete should be your top priority.
          </p>
          <p className="text-[#d6d3d4] font-light text-base lg:text-lg xl:text-xl sm:text-lg">
            By choosing a <strong>SMM</strong> ready-mix concrete company, you can be confident that you are getting the best possible product for your project.
          </p>
        </div>

        {/* Image Section */}
        <div
          ref={imageRef}
          className={`flex justify-center items-center h-[50vh] sm:h-[50vh] lg:h-[65vh] transform transition-transform ease-in-out ${
            imageVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
          style={{
                transition: "transform 1.5s ease-in-out",
                willChange: "transform",
              }}
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
