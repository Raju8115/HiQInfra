import React, { useRef, useEffect, useState } from "react";
import logo from "../assets/image-4.png";
import truck from "../assets/image-5.png";

const useInView = (threshold = 0.1) => {
  const ref = useRef();
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

const Home = () => {
  const [logoRef, logoVisible] = useInView();
  const [headingRef, headingVisible] = useInView();
  const [buttonRef, buttonVisible] = useInView();
  const [imageRef, imageVisible] = useInView();

  return (
    <section
      className="flex flex-col lg:flex-row items-center justify-between bg-white w-full xl:p-12 lg:p-4 mt-12 xl:pl-[120px]"
      id="home"
    >
      <div className="flex flex-col xl:gap-10 gap-8 lg:w-2/5 lg:px-10 xl:pl-12">
        {/* Logo + Text */}
        <div
          ref={logoRef}
          className={`flex items-end transform transition-all duration-700 ease-out ${
            logoVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <img
            src={logo}
            alt="logo"
            className="h-10 w-10 mr-2 object-contain"
          />
          <span className="text-gray-800 text-3xl font-light">HiQu Infra</span>
        </div>

        {/* Heading */}
        <h1
          ref={headingRef}
          className={`text-6xl xl:text-8xl lg:text-7xl md:text-7xl font-light leading-tight text-gray-500 transform transition-all duration-700 ease-out ${
            headingVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          The <br />
          <span className="text-[#9e2a29] font-bold">Stronger,</span>
          <br />
          <span className="text-[#9e2a29] font-bold">Smarter</span>
          <br />
          Concrete
        </h1>

        {/* Button */}
        <button
          ref={buttonRef}
          className={`bg-[#9e2a29] text-[#eee] font-light px-12 py-4 mt-6 w-fit rounded-full shadow hover:bg-[#8b1e1e] transition transform duration-700 ease-out ${
            buttonVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <a href="#contact">Contact us</a>
        </button>
      </div>

      {/* Truck Image */}
      <div
        ref={imageRef}
        className={`lg:w-3/5 mt-10 lg:mt-0 flex justify-center transform transition-all duration-700 ease-out ${
          imageVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        <img
          src={truck}
          alt="Concrete Mixer Truck"
          className="max-w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Home;
