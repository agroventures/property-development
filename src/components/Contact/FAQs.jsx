import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';

const faqs = [
    {
        question: 'How can I ensure legal ownership of land before purchasing in Sri Lanka?',
        answer:
            'All plots sold by Agro Ventures Property Development come with clear title deeds, legally verified by professional lawyers. Our in-house legal team confirms that documents are genuine, free from encumbrances, and properly registered with local authorities. We maintain full transparency throughout the transaction to safeguard your investment.',
    },
    {
        question: 'Why is investing in fast-developing areas like Malabe or Kalutara a good idea?',
        answer:
            'Areas such as Malabe and Kalutara are undergoing rapid urbanization, making them ideal for investment. With new expressways, IT parks, and improved infrastructure, land in these locations is likely to increase in value significantly over time. Our experienced real estate consultants assist in selecting plots with the best growth potential.',
    },
    {
        question: 'Can I get a bank loan if I purchase land through Agro Ventures Property Development?',
        answer: "Yes. Agro Ventures Property Development has partnerships with Sri Lanka's leading banks to offer land loans at low interest rates with easy repayment terms. We assist buyers in securing financing smoothly and without hassle.",
    },
    {
        question: 'What financing options are available?',
        answer:
            'We provide a range of financing options through our partnerships with banks and financial institutions.',
    }
    //   {
    //     question: 'Why should I trust Agro Ventures Property Development in buying land in Sri Lanka?',
    //     answer:
    //       'With over two decades of history and a name to reckon with when it comes to legally sound land projects, Agro Ventures Property Development is a brand that Sri Lankans trust. Our experts include certified property consultants, lawyers, and finance professionals who ensure that every transaction is transparent, secure, and compliant with Sri Lankan law.',
    //   },
];

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-linear-to-b from-primary-50 to-white">
            <div className="max-w-6xl mx-auto px-4">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <SectionTitle title="Common Inquiries" />
                    <h2 className="text-4xl md:text-5xl font-bold mt-4">
                        Frequently Asked <span className="text-gold-500">Questions</span>
                    </h2>
                    <p className="text-gray-500 mt-4">
                        Everything you need to know before investing with us.
                    </p>
                </div>

                {/* FAQ */}
                <div className="space-y-5">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <motion.div
                                key={index}
                                layout
                                className={`rounded-2xl backdrop-blur-lg border transition-all duration-300 ${isOpen
                                        ? 'bg-white/80 border-primary-200 shadow-2xl'
                                        : 'bg-white/60 border-gray-200 hover:shadow-xl'
                                    }`}
                            >
                                {/* Question */}
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full flex items-center justify-between px-6 py-6 text-left"
                                >
                                    <span
                                        className={`text-lg font-semibold transition ${isOpen ? 'text-gold-500' : 'text-gray-800'
                                            }`}
                                    >
                                        {faq.question}
                                    </span>

                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={`w-9 h-9 rounded-full flex items-center justify-center ${isOpen
                                                ? 'bg-primary-500 text-white'
                                                : 'bg-gray-100 text-gray-600'
                                            }`}
                                    >
                                        <ChevronDown size={18} />
                                    </motion.div>
                                </button>

                                {/* Answer */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6">
                                                <div className="h-px bg-gray-200 mb-4" />
                                                <p className="text-gray-600 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQs;