import React, { useEffect, useRef, useState } from "react";

// Reusable scroll hook
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

const ContactSection = () => {
  const [titleRef, titleVisible] = useInView();
  const [officeRef, officeVisible] = useInView();
  const [plantRef, plantVisible] = useInView();
  const [phoneRef, phoneVisible] = useInView();

  return (
    <div className="bg-[#9e2a29] text-white px-6 py-16" id="contact">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10">

        {/* Title */}
        <div
          ref={titleRef}
          className={`w-full lg:w-1/3 text-center lg:text-left transform transition-all duration-700 ease-out ${
            titleVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl font-light font-[Open_Sans] sm:text-lg lg:text-2xl xl:text-4xl">
            Connect with us
          </h2>
        </div>

        {/* Content Blocks */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center lg:text-left">

          {/* Corporate Office */}
          <div
            ref={officeRef}
            className={`transition-all duration-700 ease-out transform ${
              officeVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="font-bold mb-2 font-[Open_Sans] sm:text-md lg:text-xl xl:text-2xl">CORPORATE OFFICE</h3>
            <p className="font-[Open_Sans] sm:text-sm lg:text-lg xl:text-xl">
              1546 2nd Floor, 9th cross,<br />
              80 ft road, 2nd phase,<br />
              Chandra Layout Bengaluru<br />
              560040
            </p>
          </div>

          {/* Plant Address */}
          <div
            ref={plantRef}
            className={`transition-all duration-700 ease-out transform delay-100 ${
              plantVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="font-bold mb-2 font-[Open_Sans] sm:text-md lg:text-xl xl:text-2xl">PLANT ADDRESS</h3>
            <p className="font-[Open_Sans] sm:text-sm lg:text-lg xl:text-xl">
              Sy No 42/4,<br />
              Kanaminike Village,<br />
              Kengeri Hobli<br />
              Bengaluru 560074
            </p>
          </div>

          {/* Phone & Social */}
          <div
            ref={phoneRef}
            className={`transition-all duration-700 ease-out transform delay-200 ${
              phoneVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="font-bold mb-2 font-[Open_Sans] sm:text-md lg:text-xl xl:text-2xl">Phone</h3>
            <p className="font-[Open_Sans] sm:text-sm lg:text-lg xl:text-xl">99 00 00 4074</p>
            <p className="font-[Open_Sans] sm:text-sm lg:text-lg xl:text-xl">99 00 00 4075</p>
            <div className="mt-4">
              <p className="font-[Open_Sans] sm:text-sm lg:text-lg xl:text-xl">Facebook</p>
              <p className="font-[Open_Sans] sm:text-sm lg:text-lg xl:text-xl">Instagram</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactSection;
