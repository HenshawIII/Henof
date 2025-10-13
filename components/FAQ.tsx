'use client';

import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category?: string;
}

const faqData: FAQItem[] = [
  {
    "id": 1,
    "question": "What products does Henof Foods offer?",
    "answer": "Henof Foods produces and packages a range of locally sourced Nigerian staples, including beans, garri, flours, grains, and spices. All our products are 100% natural and processed under hygienic conditions to preserve freshness and nutrition."
  },

  {
    "id": 3,
    "question": "Do you supply to restaurants, hotels, and retailers?",
    "answer": "Yes! We provide bulk and wholesale supply to restaurants, hotels, caterers, and retail outlets. Our products are packaged to meet both household and commercial needs. Contact our sales team to discuss partnership options or bulk pricing."
  },
  {
    "id": 4,
    "question": "How can I buy your products?",
    "answer": "You can purchase Henof Foods products through our official distributors, retail partners, or directly from us. Online ordering and nationwide delivery options are also available. For direct orders, please reach out via our contact page or customer care line."
  },
  {
    "id": 5,
    "question": "Are Henof Foods products organic or preservative-free?",
    "answer": "Yes. Our products are 100% natural, free from artificial preservatives, additives, or colorings. We focus on clean, safe, and healthy food production practices that preserve the authentic taste of Nigerian staples."
  },
  {
    "id": 8,
    "question": "Does Henof Foods offer private label or co-branding opportunities?",
    "answer": "Yes. We partner with retailers, supermarkets, and food businesses that want to sell locally sourced products under their own brand. Our private label service includes product processing, packaging, and quality assurance — all handled to meet your brand standards."
  },
  {
    "id": 9,
    "question": "How can I become a distributor or business partner?",
    "answer": "We welcome partnerships with distributors, wholesalers, and corporate buyers who share our vision for promoting quality Nigerian food. Simply reach out through our 'Contact' page or email our partnerships team. We’ll guide you through the onboarding and distribution process."
  }
  
]


export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Set initial state for FAQ elements
      gsap.set('.animate-faq', {
        y: 10,
        opacity: 0
      });

      // Animate FAQ elements sliding up
      gsap.to('.animate-faq', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
          end: 'bottom 20%',
          toggleActions: 'play none none none'
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, { scope: containerRef });

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[40px] font-medium text-gray-900 mb-4 animate-faq">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden animate-faq"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-5 py-4 text-left focus:outline-none  "
                aria-expanded={openItems.includes(item.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-base  font-medium text-gray-900 pr-4">
                      {item.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center transition-all duration-200 hover:bg-orange-200">
                      <svg
                        className={`w-4 h-4 text-orange-600 transition-transform duration-200 ${
                          openItems.includes(item.id) ? 'rotate-45' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.includes(item.id) 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 pb-4">
                  <div className="border-t border-gray-100 pt-3">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
      </div>
    </section>
  );
}
