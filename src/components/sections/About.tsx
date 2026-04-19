
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Award, ArrowRight } from 'lucide-react';

const values = [
  { icon: Target, title: 'Mission-Driven' },
  { icon: Lightbulb, title: 'Innovation First' },
  { icon: Users, title: 'Client-Centric' },
  { icon: Award, title: 'Quality Assured' },
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
            Built on Innovation,<br/>
            <span className="text-gold">Driven by Purpose</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 18, lineHeight: 1.7, maxWidth: 500, marginBottom: 24 }}>
            Vaaraahi Tech Solutions is a forward-thinking technology company
            specializing in software development and solar energy integration.
            We believe the best technology is both powerful and sustainable.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 18, lineHeight: 1.7, maxWidth: 500, marginBottom: 40 }}>
            Founded with the vision of bridging digital transformation and green
            energy, we serve businesses of all sizes across diverse industries.
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="premium-card"
              >
                <div className="icon-box-gold" style={{ marginBottom: 20 }}>
                  <v.icon size={28} />
                </div>
                <h4 className="text-navy" style={{ fontSize: 18, fontWeight: 800 }}>{v.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
