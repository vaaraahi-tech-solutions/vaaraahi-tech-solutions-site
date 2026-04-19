
import { motion } from 'framer-motion';

const partners = [
  'ORACLE', 'MICROSOFT', 'ADANI SOLAR', 'AWS', 'GOOGLE CLOUD', 'TATA POWER'
];

const Partners = () => {
  return (
    <section className="partners bg-white" style={{ padding: '60px 0', borderBottom: '1px solid var(--border-default)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <span className="section-tag" style={{ fontSize: 12 }}>Trusted by Industry Leaders</span>
        </div>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: 40,
          opacity: 0.6
        }}>
          {partners.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{ 
                fontSize: 24, 
                fontWeight: 900, 
                color: 'var(--primary)', 
                letterSpacing: 2,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              whileHover={{ scale: 1.1, color: 'var(--accent)', opacity: 1 }}
            >
              {p}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
