
import { motion } from 'framer-motion';
import { Code2, Sun, ShieldCheck, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Software & Digital',
    desc: 'Simple tech tools to help your business grow.',
    list: [
      'Business Websites — Works on all devices.',
      'Mobile Apps — For Android and iPhone.',
      'Smart Software — Manage work easily.',
      'Cloud Support — Access data anywhere.'
    ]
  },
  {
    icon: Sun,
    title: 'Solar & Energy',
    desc: 'Save money and help the planet with solar power.',
    featured: true,
    list: [
      'Solar Installation — For home or office.',
      'Lower Bills — Save money every month.',
      'Clean Energy — Green power from the sun.',
      'Free Support — We take care of everything.'
    ]
  },
  {
    icon: ShieldCheck,
    title: 'Finance & Safety',
    desc: 'Easy tools to keep your business safe.',
    list: [
      'Money Advice — Help with business funds.',
      'Business Safety — Protecting your company.',
      'Data Protection — Keeping your info safe.'
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
            whileHover={{ y: -12, boxShadow: 'var(--shadow-hover)' }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className={`premium-card ${s.featured ? 'active' : ''}`}
            style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
          >
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="icon-box-gold"
            >
              <s.icon size={28} strokeWidth={2} />
            </motion.div>
            
            <h3 className="text-navy" style={{ fontSize: 24, fontWeight: 800, marginBottom: 12 }}>{s.title}</h3>
            <p className="text-gray" style={{ marginBottom: 32, lineHeight: 1.6, fontSize: 15 }}>{s.desc}</p>
            
            <ul className="service-list" style={{ listStyle: 'none', marginBottom: 40, display: 'flex', flexDirection: 'column', gap: 14, flexGrow: 1 }}>
              {s.list.map((item, j) => (
                <motion.li 
                  key={j} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + j * 0.1 }}
                  viewport={{ once: true }}
                  style={{ color: 'var(--text-secondary)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 12, fontSize: 14 }}
                >
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                  {item}
                </motion.li>
              ))}
            </ul>
            
            <a href="#contact" style={{ color: 'var(--accent)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8, marginTop: 'auto' }}>
              Learn More <ArrowRight size={16} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
