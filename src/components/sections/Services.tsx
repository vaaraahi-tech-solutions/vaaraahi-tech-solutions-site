
import { motion } from 'framer-motion';
import { Code2, Sun, ShieldCheck, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Software & Digital',
    desc: 'Innovative digital solutions for modern businesses.',
    list: [
      'Custom Software Development',
      'Web & Mobile Applications',
      'Cloud Solutions & Integration'
    ]
  },
  {
    icon: Sun,
    title: 'Solar & Energy',
    desc: 'Sustainable energy solutions for a greener future.',
    featured: true,
    list: [
      'Solar Panel Installation',
      'Energy Efficiency Consulting',
      'Renewable Energy Systems'
    ]
  },
  {
    icon: ShieldCheck,
    title: 'Finance & Security',
    desc: 'Comprehensive financial services and security solutions.',
    list: [
      'Financial Consulting',
      'Risk Management',
      'Cybersecurity Solutions'
    ]
  }
];

const Services = () => (
  <section className="services section-padding bg-white" id="services">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">Our Services</h2>
        <p className="section-desc">
          Comprehensive solutions across multiple domains to power your business growth
        </p>
      </div>

      <div className="grid-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className={`premium-card ${s.featured ? 'active' : ''}`}
          >
            <div className="icon-box-gold">
              <s.icon size={28} strokeWidth={2} />
            </div>
            
            <h3 className="text-navy" style={{ fontSize: 24, fontWeight: 800, marginBottom: 12 }}>{s.title}</h3>
            <p className="text-gray" style={{ marginBottom: 32, lineHeight: 1.6 }}>{s.desc}</p>
            
            <ul className="service-list" style={{ listStyle: 'none', marginBottom: 40, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {s.list.map((item, j) => (
                <li key={j} style={{ color: 'var(--text-secondary)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
            
            <a href="#" style={{ color: 'var(--accent)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8 }}>
              Learn More <ArrowRight size={16} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
