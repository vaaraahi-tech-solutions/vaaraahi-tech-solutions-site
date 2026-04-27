
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Award, ArrowRight } from 'lucide-react';

const values = [
  { icon: Target, title: 'Simple' },
  { icon: Lightbulb, title: 'Fast' },
  { icon: Users, title: 'Expert' },
  { icon: Award, title: 'Quality' },
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-split-row">
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about-panel-left bg-navy"
        >
          <div className="section-tag">WHO WE ARE</div>
          <h2 style={{ fontSize: 48, fontWeight: 800, color: 'white', marginBottom: 24, lineHeight: 1.1 }}>
            Simple Tech for <br/>
            <span className="text-gold">Your Business</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 18, lineHeight: 1.7, maxWidth: 500, marginBottom: 24 }}>
            We are a technology company based in India. We help small and medium businesses grow with modern software and save money using solar energy. Our team makes technology simple and affordable for everyone.
          </p>
          
          <a href="#" className="text-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 700 }}>
            Learn More About Us <ArrowRight size={18} />
          </a>
        </motion.div>

        <div className="about-panel-right bg-white">
          <div className="grid-2">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ y: -10, boxShadow: 'var(--shadow-hover)', borderColor: 'var(--accent)' }}
                transition={{ delay: i * 0.1, duration: 0.6, type: 'spring', stiffness: 100 }}
                viewport={{ once: true }}
                className="premium-card"
                style={{ cursor: 'default' }}
              >
                <motion.div 
                  initial={{ rotate: -10 }}
                  whileHover={{ rotate: 0, scale: 1.1 }}
                  className="icon-box-gold" 
                  style={{ marginBottom: 20 }}
                >
                  <v.icon size={28} />
                </motion.div>
                <h3 className="text-navy" style={{ fontSize: 20, fontWeight: 800 }}>{v.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
