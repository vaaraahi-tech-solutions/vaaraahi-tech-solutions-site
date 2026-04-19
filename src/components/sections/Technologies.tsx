
import { motion } from 'framer-motion';

const techs = [
  'React', 'Node.js', 'Python', 'AWS', 
  'PostgreSQL', 'Flutter', 'TensorFlow', 'NetSuite'
];

const Technologies = () => {
  return (
    <section className="technologies section-padding bg-white">
      <div className="container">
        <div className="section-header" style={{ marginBottom: 60 }}>
          <h2 className="section-title" style={{ fontSize: 32, textAlign: 'center' }}>Technologies We Use</h2>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 20 }}>
          {techs.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              style={{
                background: 'var(--bg-warm)',
                padding: '20px 40px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-default)',
                color: 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: 16,
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent)';
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.boxShadow = 'var(--shadow-subtle)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'var(--border-default)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {t}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
