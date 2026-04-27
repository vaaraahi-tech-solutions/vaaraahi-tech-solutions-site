
import { motion } from 'framer-motion';

const reasons = [
  {
    num: '01',
    title: 'Expert Team',
    desc: 'We have over 10 years of experience fixing tech and energy problems.',
    imgRight: false
  },
  {
    num: '02',
    title: 'Full Support',
    desc: 'Our team handles everything for you from start to finish.',
    imgRight: true
  },
  {
    num: '03',
    title: 'Always Available',
    desc: 'We are here to help you any time, day or night.',
    imgRight: false
  }
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us section-padding" style={{ backgroundColor: '#050a1a', marginTop: '60px', paddingTop: '100px' }}>
      <div className="container">
        <div className="section-header w-full">
          <span className="section-tag" style={{ color: 'rgba(255,255,255,0.9)' }}>The Vaaraahi Edge</span>
          <h2 className="section-title" style={{ color: 'white' }}>Why Choose Us</h2>
          <p className="section-desc" style={{ color: 'rgba(255,255,255,0.7)' }}>Experience matters. We deliver uncompromising quality across the board.</p>
        </div>

        <div className="why-choose-list" style={{ display: 'flex', flexDirection: 'column', gap: 100 }}>
          {reasons.map((r) => (
            <motion.div
              key={r.num}
              initial={{ opacity: 0, x: r.imgRight ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="why-choose-row"
              style={{
                display: 'flex',
                gap: 80,
                alignItems: 'center',
                flexDirection: r.imgRight ? 'row-reverse' : 'row'
              }}
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="why-choose-img" 
                style={{ flex: 1, position: 'relative' }}
              >
                <div style={{
                  position: 'absolute', inset: -10, border: '2px solid var(--accent)',
                  borderRadius: 'var(--radius-lg)', zIndex: -1, opacity: 0.3,
                  transform: 'translate(20px, 20px)'
                }} />
                <img 
                  src="/assets/why-choose-us.png" 
                  alt={r.title} 
                  style={{ width: '100%', height: 400, objectFit: 'cover', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.1)' }} 
                />
              </motion.div>

              <div className="why-choose-text" style={{ flex: 1 }}>
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3, type: 'spring' }}
                  style={{ 
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', 
                    width: 56, height: 56, background: 'var(--accent)', color: 'white', 
                    borderRadius: '50%', fontWeight: 800, fontSize: 20, marginBottom: 28,
                    boxShadow: '0 10px 20px rgba(201, 147, 10, 0.3)'
                  }}
                >
                  {r.num}
                </motion.div>
                <h3 style={{ color: 'white', fontSize: 40, fontWeight: 900, marginBottom: 20, letterSpacing: '-1px' }}>{r.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 19, lineHeight: 1.8 }}>{r.desc}</p>
                
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  style={{ width: 80, height: 4, background: 'var(--accent)', marginTop: 32, transformOrigin: 'left' }} 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .why-choose-row {
            flex-direction: column !important;
            gap: 24px !important;
          }
          .why-choose-img img {
            height: 220px !important;
          }
          .why-choose-text h3 {
            font-size: 24px !important;
          }
          .why-choose-text p {
            font-size: 15px !important;
          }
          .why-choose-list {
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
