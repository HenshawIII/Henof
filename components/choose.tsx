"use client";
import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Choose = () => {
    const containerRef = React.useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            

            gsap.to('.left', {
                x: -350,
                y: 0,
                rotate:7,
                duration:0.6,
                opacity: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'top 30%',
                    scrub: 1,
                },
            });

            gsap.to('.right', {
                x: 350,
                y: 0,
                rotate:-7,
                duration:0.6,
                opacity: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'top 30%',
                    scrub: 1,
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, { scope: containerRef });
	return (
		<div className="bg-white pt-24 pb-18 mb-20 px-4" >
			<div className="max-w-6xl mx-auto text-center">
				{/* Tag */}
				<div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 mb-6">
				<img src="usryl.svg" alt="" />
					Why choose us
				</div>

				{/* Headline */}
				<h2 className="text-[40px] font-medium leading-tight tracking-tight max-w-4xl mx-auto">
					We’re more than just a farm —
					<br className="hidden md:block" />
					we’re your trusted partner in
					<br className="hidden md:block" />
					sustainable agriculture.
				</h2>

				{/* Cards stack - Desktop (with animations) */}
				<div className="hidden md:block relative mt-16 h-[420px]" ref={containerRef}>
					{/* Left card - dark */}
					<div className="absolute left left-1/2 -translate-x-1/2 text-left   w-[300px] md:w-[33%] h-[30vh] xl:h-[40vh] bg-black text-white rounded-2xl shadow-xl overflow-hidden">
						<div className="p-6 flex flex-col justify-around h-full">
							<img src="/Flour.png" alt="Sustainability" className="w-24 h-24 object-cover rounded-md mb-4" />
							<div>
							<h3 className="lg:text-xl text-lg font-semibold mb-2">Sustainable Practices</h3>
							<p className="text-sm text-gray-300 leading-relaxed">
								From pesticide-free methods to efficient water use, we adopt
								methods that respect the earth and secure a healthy future.
							</p>
							</div>
						</div>
					</div>

					{/* Center card - white (on top) */}
					<div className="absolute right left-1/2 -translate-x-1/2 rotate-[0deg] text-left h-[30vh] xl:h-[40vh] w-[300px] md:w-[33%]  bg-orange-500 text-white rounded-2xl shadow-2xl overflow-hidden ring-1 ring-gray-100">
						<div className="p-6 flex flex-col justify-around h-full">
							<img src="/FolakeMi.jpg" alt="Global Expertise" className="w-24 h-24 object-cover rounded-md mb-4" />
							<div>
							<h3 className="text-lg lg:text-xl font-semibold mb-2">Global Expertise</h3>
							<p className="text-sm text-gray-100 leading-relaxed">
								Years of international experience delivering scalable agricultural
								solutions across diverse climates and regions.
							</p>
							</div>
						</div>
					</div>

					{/* Right card - green */}
					<div className="absolute left-1/2 -translate-x-1/2  w-[300px] md:w-[33%] h-[30vh] xl:h-[40vh] text-left bg-[#fafafa] text-white rounded-2xl shadow-xl overflow-hidden">
						<div className="p-6 flex flex-col justify-around h-full">
							<img src="/Flouri.png" alt="Trusted Partnerships" className="w-24 h-24 object-cover rounded-md mb-4" />
							<div>
							<h3 className="text-lg lg:text-xl font-semibold mb-2 text-gray-900">Trusted Partnerships</h3>
							<p className="text-sm text-gray-600 leading-relaxed">
								We work closely with brands and partners to ensure quality,
								traceability, and long-term success and goals.
							</p>
							</div>
						</div>
					</div>
				</div>

				{/* Cards stack - Mobile (no animations) */}
				<div className="md:hidden my-16 space-y-6">
					{/* Card 1 - Sustainable Practices */}
					<div className="w-full max-w-sm mx-auto bg-black text-left text-white rounded-2xl shadow-xl overflow-hidden">
						<div className="p-6">
							<img src="/Flour.png" alt="Sustainability" className="w-24 h-24 object-cover rounded-md mb-16 md:mb-8" />
							<h3 className="text-xl font-semibold mb-2">Sustainable Practices</h3>
							<p className="text-sm text-gray-300 leading-relaxed">
								From pesticide-free methods to efficient water use, we adopt
								methods that respect the earth and secure a healthier future.
							</p>
						</div>
					</div>

					

					{/* Card 3 - Trusted Partnerships */}
					<div className="w-full max-w-sm mx-auto bg-[#fafafa] text-left text-gray-900 rounded-2xl shadow-xl overflow-hidden">
						<div className="p-6">
							<img src="/Flouri.png" alt="Trusted Partnerships" className="w-24 h-24 object-cover rounded-md mb-16 md:mb-8" />
							<h3 className="text-xl font-semibold mb-2 text-gray-900">Trusted Partnerships</h3>
							<p className="text-sm text-gray-600 leading-relaxed">
								We work closely with brands and partners to ensure quality,
								traceability, and long-term success.
							</p>
						</div>
					</div>

					{/* Card 2 - Global Expertise */}
					<div className="w-full max-w-sm mx-auto bg-orange-500 text-left text-white rounded-2xl shadow-xl overflow-hidden">
						<div className="p-6">
							<img src="/FolakeMi.jpg" alt="Global Expertise" className="w-24 h-24 object-cover rounded-md mb-16 " />
							<h3 className="text-xl font-semibold mb-2">Global Expertise</h3>
							<p className="text-sm text-gray-100 leading-relaxed">
								Years of international experience delivering scalable agricultural
								solutions across diverse climates and regions.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Choose;
