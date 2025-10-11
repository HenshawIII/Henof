import React from 'react';

const CEO = () => {
  return (
    <section className="w-full pb-12 pl-4 flex justify-end">
      <div className="md:w-[92%]  grid grid-cols-1  md:grid-cols-5 rounded-xl rounded-r-none overflow-hidden shadow-sm">
        {/* Left: CEO image */}
        <div className="relative order-2 md:order-1 h-[520px] col-span-2 sm:h-[620px] lg:h-[680px]">
          <img
            src="/Utibe.jpg"
            alt="Founder & CEO"
            className="w-full h-full object-cover"
          />
          <div className="absolute -bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-gray-300/80  via-gray-300/60 blur-[20px] to-transparent" />
          <span className="absolute bottom-6 left-6 text-white z-20 text-sm tracking-wide">
            Founder & CEO
          </span>
        </div>

        {/* Right: Quote and details */}
        <div className="bg-orange-500 order-1 md:order-2 col-span-3 text-white p-8 sm:p-8 flex flex-col justify-around">
          <div className=" flex flex-col md:flex-row md:gap-8 gap-2">
            <div className="md:text-9xl text-7xl leading-none">“</div>
            <p className="text-[20px] lg:text-[26px] leading-tight tracking-tight font-medium max-w-md md:translate-y-6">
              "We started this journey with a simple belief — that farming can feed the
              world without harming it. Every seed we plant, every partnership we
              build, reflects our commitment to sustainability, innovation, and
              people."
            </p>
          </div>

          <div className="mt-12 flex flex-col lg:flex-row justify-between gap-6 lg:items-end items-start md:p-2">
            <h3 className="text-3xl lg:text-5xl xl:text-7xl font-semibold tracking-tight">
              Utibe
              <br />
               Henshaw
            </h3>

            <button className="inline-flex h-10 items-center gap-2 lg:-translate-x-20 bg-white/10 hover:bg-white/20 text-white md:px-6 md:py-4 p-4 rounded-full backdrop-blur transition-colors ">
              <img src="usericon.svg" alt="" />
              Meet our team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEO;
