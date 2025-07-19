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
  const [proprietorRef, proprietorVisible] = useInView();
  const [officeRef, officeVisible] = useInView();
  const [plantRef, plantVisible] = useInView();
  const [phoneRef, phoneVisible] = useInView();

  return (
    <div className="bg-[#5f5e67] text-white px-6 py-16" id="contact">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-10">

        {/* Centered Title */}
        <div
          ref={titleRef}
          className={`text-center transform transition-all duration-700 ease-out ${
            titleVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl font-light font-[Open_Sans] sm:text-lg lg:text-2xl xl:text-4xl">
            Connect with us
          </h2>
        </div>

        {/* 4 Column Grid: Proprietor, Office, Plant, Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full text-center lg:text-left">

          {/* Proprietor */}
          <div
            ref={proprietorRef}
            className={`transition-all duration-700 ease-out transform ${
              proprietorVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="font-bold mb-2 font-[Open_Sans] sm:text-md lg:text-xl xl:text-2xl">PROPRIETOR</h3>
            <p className="font-[Open_Sans] sm:text-sm lg:text-lg xl:text-xl">Prathap E</p>
          </div>

          {/* Corporate Office */}
          <div
            ref={officeRef}
            className={`transition-all duration-700 ease-out transform delay-100 ${
              officeVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="font-bold mb-2 font-[Open_Sans] sm:text-md lg:text-xl xl:text-2xl">CORPORATE OFFICE</h3>
            <p className="font-[Open_Sans] sm:text-sm lg:text-lg xl:text-xl">
              Margondanahalli, <br />
              Mukthinaga Temple Road,<br />
              Kengeri Hobli, <br />
              Bengaluru-560074
            </p>
          </div>

          {/* Plant Address */}
          <div
            ref={plantRef}
            className={`transition-all duration-700 ease-out transform delay-200 ${
              plantVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="font-bold mb-2 font-[Open_Sans] sm:text-md lg:text-xl xl:text-2xl">PLANT ADDRESS</h3>
            <p className="font-[Open_Sans] sm:text-sm lg:text-lg xl:text-xl">
              Margondanahalli, <br />
              Mukthinaga Temple Road,<br />
              Kengeri Hobli, <br />
              Bengaluru-560074
            </p>
          </div>

          {/* Phone & Social */}
          <div
            ref={phoneRef}
            className={`transition-all duration-700 ease-out transform delay-300 ${
              phoneVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="font-bold mb-2 font-[Open_Sans] sm:text-md lg:text-xl xl:text-2xl">PHONE</h3>
            <p className="font-[Open_Sans] sm:text-sm lg:text-lg xl:text-xl">9964686303</p>
            <p className="font-[Open_Sans] sm:text-sm lg:text-lg xl:text-xl">8217429754</p>
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
