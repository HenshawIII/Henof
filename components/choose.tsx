"use client";
import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Choose = () => {
    const containerRef = React.useRef<HTMLDivElement | null>(null);
	const contain2 = React.useRef<HTMLDivElement | null>(null);
	

    useGSAP(() => {
        const ctx = gsap.context(() => {
			// Set initial state for text elements
			gsap.set(".animate-text",{
				opacity:0,
				y:60
			})
            
			// Animate text elements when they come into view
			gsap.to(".animate-text",{
				y: 0,
				opacity: 1,
				duration: 0.8,
				ease: 'power2.in',
				stagger: 0.2,
				scrollTrigger: {
					trigger: contain2.current,
					start: 'top 80%',
					end: 'bottom 20%',
					scrub:1,
					toggleActions: 'play none none reverse'
				}
			})

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
				<div ref={contain2}>
				<div className="animate-text inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 mb-6">
				<img src="usryl.svg" alt="" />
					Why choose us
				</div>

				{/* Headline */}
				<h2 className="animate-text md:text-[40px] text-[36px] font-medium leading-tight tracking-tight max-w-4xl mx-auto">
					More than just food —
					<br className="hidden md:block" />
					A commitment to Quality
					<br className="hidden md:block" />
					 {" "}and community.
				</h2>
				</div>
				{/* Cards stack - Desktop (with animations) */}
				<div className="hidden md:block relative mt-16 h-[420px]" ref={containerRef}>
					{/* Left card - dark */}
					<div className="absolute left left-1/2 -translate-x-1/2 text-left   w-[300px] md:w-[33%] h-[30vh] xl:h-[40vh] bg-black text-white rounded-2xl shadow-xl overflow-hidden">
						<div className="p-6 flex flex-col justify-around h-full">
							<img src="/sus.png" alt="Sustainability" className="w-24 h-24 object-cover rounded-md mb-4" />
							<div>
							<h3 className="lg:text-xl text-lg font-semibold mb-2">Sustainable Practices</h3>
							<p className="text-sm text-gray-300 leading-relaxed">
							Our practices minimize waste, promote eco-friendly farming, and support long-term food security for future generations.
							</p>
							</div>
						</div>
					</div>

					{/* Center card - white (on top) */}
					<div className="absolute right left-1/2 -translate-x-1/2 rotate-[0deg] text-left h-[30vh] xl:h-[40vh] w-[300px] md:w-[33%]  bg-orange-500 text-white rounded-2xl shadow-2xl overflow-hidden ring-1 ring-gray-100">
						<div className="p-6 flex flex-col justify-around h-full">
							<img src="/glbb.png" alt="Global Expertise" className="w-24 h-24 object-cover rounded-md mb-4" />
							<div>
							<h3 className="text-lg lg:text-xl font-semibold mb-2">Global Standard</h3>
							<p className="text-sm text-gray-100 leading-relaxed">
							Our modern processing standards preserve the flavor, nutrition, and purity of traditional Nigerian foods. In line with global quality benchmarks
							</p>
							</div>
						</div>
					</div>

					{/* Right card - green */}
					<div className="absolute left-1/2 -translate-x-1/2  w-[300px] md:w-[33%] h-[30vh] xl:h-[40vh] text-left bg-[#fafafa] text-white rounded-2xl shadow-xl overflow-hidden">
						<div className="p-6 flex flex-col justify-around h-full">
							<img src="/Naij.webp" alt="Trusted Partnerships" className="w-24 h-24 object-cover rounded-md mb-4" />
							<div>
							<h3 className="text-lg lg:text-xl font-semibold mb-2 text-gray-900">Trusted Nationwide</h3>
							<p className="text-sm text-gray-600 leading-relaxed">
							Our products reach homes,restaurants across Nigeria — a testament to our reliability and growing reputation for quality.
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
							<img src="/sus.png" alt="Sustainability" className="w-24 h-24 object-cover rounded-md mb-16 md:mb-8" />
							<h3 className="text-xl font-semibold mb-2">Sustainable Practices</h3>
							<p className="text-sm text-gray-300 leading-relaxed">
								Our practices minimize waste, promote eco-friendly farming, and support long-term food security for future generations.
							</p>
						</div>
					</div>

					

					{/* Card 3 - Trusted Nationwide */}
					<div className="w-full max-w-sm mx-auto bg-[#fafafa] text-left text-gray-900 rounded-2xl shadow-xl overflow-hidden">
						<div className="p-6">
							<img src="/Naij.webp" alt="Trusted Nationwide" className="w-24 h-24 object-cover rounded-md mb-16 md:mb-8" />
							<h3 className="text-xl font-semibold mb-2 text-gray-900">Trusted Nationwide</h3>
							<p className="text-sm text-gray-600 leading-relaxed">
								Our products reach homes,restaurants across Nigeria — a testament to our reliability and growing reputation for quality.
							</p>
						</div>
					</div>

					{/* Card 2 - Global Standard */}
					<div className="w-full max-w-sm mx-auto bg-orange-500 text-left text-white rounded-2xl shadow-xl overflow-hidden">
						<div className="p-6">
							<img src="/glbb.png" alt="Global Standard" className="w-24 h-24 object-cover rounded-md mb-16 " />
							<h3 className="text-xl font-semibold mb-2">Global Standard</h3>
							<p className="text-sm text-gray-100 leading-relaxed">
								Our modern processing standards preserve the flavor, nutrition, and purity of traditional Nigerian foods. In line with global quality benchmarks
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Choose;
