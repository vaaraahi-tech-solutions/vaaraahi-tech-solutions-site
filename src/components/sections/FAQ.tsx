import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: "What industries do you specialize in?", a: "We have deep expertise spanning FinTech, Renewable Energy, Healthcare, and Enterprise B2B SaaS platforms." },
  { q: "How does your pricing model work?", a: "We offer both fixed-bid contracts for well-defined scopes and time-and-materials engagements for continuous agile development." },
  { q: "Can you handle end-to-end solar grid integrations?", a: "Yes, our solar division handles everything from site assessment and hardware procurement to software monitoring integration." },
  { q: "Do you provide post-launch support and maintenance?", a: "Absolutely. We offer 24/7 SLAs and dedicated retainer teams to ensure your systems are always up to date and secure." },
  { q: "How long does a typical software project take?", a: "It ranges from 8 weeks for MVPs to several months for complex enterprise migrations. We provide a detailed timeline during the Discovery phase." }
];

const FAQItem = ({ faq, isOpen, toggle }: { faq: any, isOpen: boolean, toggle: () => void }) => {
  return (
    <div className="faq-item" onClick={toggle}>
      <div className="faq-question">
        {faq.q}
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          {isOpen ? <Minus className="faq-icon" size={20} /> : <Plus className="faq-icon" size={20} />}
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: 'hidden' }}
          >
            <p className="text-gray" style={{ paddingTop: 16, lineHeight: 1.7 }}>{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="faq section-padding bg-offwhite">
      <div className="container" style={{ maxWidth: 800 }}>
        <div className="section-header">
          <span className="section-tag">Common Questions</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>

        <div>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
