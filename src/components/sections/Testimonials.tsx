
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajiv Sharma',
    company: 'TechFlow Solutions',
    text: "Vaaraahi transformed our legacy software into a cloud-native powerhouse. The team's dedication to quality is unmatched. Truly a premium experience."
  },
  {
    name: 'Meera Reddy',
    company: 'EcoGreen Industries',
    text: 'Their solar integration expertise helped us cut energy costs by 40%. Seamless execution from discovery to delivery. Highly recommend their energy division.'
  },
  {
    name: 'Amit Patel',
    company: 'FinServe Group',
    text: 'Security and finance workflows are complex, but Vaaraahi navigated them with ease. We now have a robust, compliant platform thanks to their engineers.'
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials section-padding bg-offwhite">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Client Success</span>
          <h2 className="section-title">What Our Partners Say</h2>
          <p className="section-desc">Don't just take our word for it. Here is what leading businesses have to say about our solutions.</p>
        </div>

        <div className="grid-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="premium-card"
              style={{ background: '#F8F7F2', borderColor: 'var(--border-default)' }}
            >
              <Quote size={40} color="var(--accent)" style={{ opacity: 0.4, marginBottom: 20 }} />
              <p className="text-gray" style={{ fontStyle: 'italic', marginBottom: 24, fontSize: 16, lineHeight: 1.7 }}>"{t.text}"</p>
              
              <div style={{ display: 'flex', gap: 4, marginBottom: 16, color: 'var(--accent)' }}>
                {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
              </div>

              <h4 className="text-navy" style={{ fontWeight: 800, fontSize: 18 }}>{t.name}</h4>
              <span className="text-gray" style={{ fontSize: 14 }}>{t.company}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
