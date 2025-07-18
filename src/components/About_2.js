import React, { useEffect, useRef, useState } from "react";
import bridgeImg from "../assets/image-7.jpg";
import batchingImg from "../assets/image-8.jpg";
import serviceImg from "../assets/image-3.jpg";

const FeatureSection = () => {
  const [inViewStates, setInViewStates] = useState([false, false, false]);

  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setInViewStates((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    [ref0, ref1, ref2].forEach((ref) => ref.current && observer.observe(ref.current));

    return () => {
      [ref0, ref1, ref2].forEach((ref) => ref.current && observer.unobserve(ref.current));
    };
  }, []);

  return (
    <div className="bg-white py-12 px-4 min-h-[86vh] flex flex-col items-center justify-center" id="why_us">
      {/* Section Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-center text-[#9e2a29] mb-12">
        Building a better future, one pour at a time..
      </h2>

      {/* Cards Container */}
      <div className="flex flex-col gap-16 items-center justify-center lg:grid lg:grid-cols-3 lg:gap-12 max-w-6xl mx-auto">
        
        {/* Card 1 */}
        <div
          ref={ref0}
          data-index="0"
          className="flex flex-col items-center text-center px-4 w-[80%] sm:w-[60%] md:w-[50%] lg:w-full xl:w-[80%]"
        >
          <div className="w-[250px] h-[300px] mb-6 overflow-hidden relative rounded-tr-[40px]">
            <img src={bridgeImg} alt="CONSISTENT QUALITY" className="w-full h-full object-cover" />
            <div
              className={`absolute top-0 left-0 h-full w-full bg-white z-10 pointer-events-none ${
                inViewStates[0] ? "translate-x-full" : "translate-x-0"
              }`}
              style={{
                transition: "transform 1.5s ease-in-out",
                willChange: "transform",
              }}
            />
          </div>
          <h3 className={`text-lg font-bold uppercase mb-2 transition-transform duration-1000 ease-in-out ${
              inViewStates[0] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
            CONSISTENT QUALITY
          </h3>
          <p className={`text-gray-600 text-md transition-transform duration-1000 delay-200 ease-in-out ${
              inViewStates[0] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
            High in quality, regardless of the quantity ordered or the time of year.
          </p>
        </div>

        {/* Card 2 */}
        <div
          ref={ref1}
          data-index="1"
          className="flex flex-col items-center text-center px-4 w-[80%] sm:w-[60%] md:w-[50%] lg:w-full xl:w-[80%]"
        >
          <div className="w-[250px] h-[300px] mb-6 overflow-hidden relative rounded-tr-[40px]">
            <img src={batchingImg} alt="ACCURATE BATCHING AND MIXING" className="w-full h-full object-cover" />
            <div
              className={`absolute top-0 left-0 h-full w-full bg-white z-10 pointer-events-none ${
                inViewStates[1] ? "translate-x-full" : "translate-x-0"
              }`}
              style={{
                transition: "transform 1.5s ease-in-out",
                willChange: "transform",
              }}
            />
          </div>
          <h3 className={`text-lg font-bold uppercase mb-2 transition-transform duration-1000 ease-in-out ${
              inViewStates[1] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
            ACCURATE BATCHING AND MIXING
          </h3>
          <p className={`text-gray-600 text-md transition-transform duration-1000 delay-200 ease-in-out ${
              inViewStates[1] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
            Batched and mixed in a controlled environment, using state-of-the-art equipment
          </p>
        </div>

        {/* Card 3 */}
        <div
          ref={ref2}
          data-index="2"
          className="flex flex-col items-center text-center px-4 w-[80%] sm:w-[60%] md:w-[50%] lg:w-full xl:w-[80%]"
        >
          <div className="w-[250px] h-[300px] mb-6 overflow-hidden relative rounded-tr-[40px]">
            <img src={serviceImg} alt="PROFESSIONAL SERVICE" className="w-full h-full object-cover" />
            <div
              className={`absolute top-0 left-0 h-full w-full bg-white z-10 pointer-events-none ${
                inViewStates[2] ? "translate-x-full" : "translate-x-0"
              }`}
              style={{
                transition: "transform 1.5s ease-in-out",
                willChange: "transform",
              }}
            />
          </div>
          <h3 className={`text-lg font-bold uppercase mb-2 transition-transform duration-1000 ease-in-out ${
              inViewStates[2] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
            PROFESSIONAL SERVICE
          </h3>
          <p className={`text-gray-600 text-md transition-transform duration-1000 delay-200 ease-in-out ${
              inViewStates[2] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
            Experienced and knowledgeable staff who can provide you with expert advice and support
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
