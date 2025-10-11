'use client';

import { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category?: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is Akara and how is it made?",
    answer: "Akara is a traditional Nigerian bean cake made from black-eyed peas. We soak the beans, remove the skin, blend them with onions, peppers, and spices, then deep-fry in palm oil until golden brown. Our recipe has been passed down through generations."
  },
  {
    id: 2,
    question: "What are your delivery areas and times?",
    answer: "We deliver within Akara and surrounding areas within a 15km radius. Delivery times are typically 30-45 minutes from order confirmation. We operate Monday to Saturday from 6:00 AM to 8:00 PM, and Sundays from 8:00 AM to 6:00 PM."
  },
  {
    id: 3,
    question: "Do you offer bulk orders or catering services?",
    answer: "Yes! We provide bulk orders for events, parties, and corporate functions. We offer special pricing for orders over 50 pieces and can accommodate large events with advance notice. Contact us at least 24 hours in advance for bulk orders."
  },
  {
    id: 4,
    question: "How do I place an order?",
    answer: "You can place orders through our website, call us directly, or visit our main location. We accept cash on delivery, bank transfers, and mobile money payments. Online orders can be placed 24/7, and we'll confirm your order within 15 minutes."
  },
  {
    id: 5,
    question: "Are your products suitable for vegetarians?",
    answer: "Yes! Our traditional akara is completely vegetarian and vegan-friendly. We use only plant-based ingredients - no animal products are used in our preparation process. However, we do use palm oil, so please inform us if you have any specific dietary restrictions."
  },
  {
    id: 6,
    question: "What is your refund policy?",
    answer: "We guarantee the quality of our products. If you're not satisfied with your order, please contact us within 2 hours of delivery. We'll provide a full refund or replacement. For bulk orders, we require notification within 1 hour of delivery."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[40px] font-medium text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-5 py-4 text-left focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-inset"
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
