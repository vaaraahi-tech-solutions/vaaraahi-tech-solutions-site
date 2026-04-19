
import { motion } from 'framer-motion';

const reasons = [
  {
    num: '01',
    title: '10+ Years Experience',
    desc: 'Our veteran engineers have seen it all. We bring a decade of deep technical expertise to ensure your systems are robust, scalable, and beautifully designed.',
    imgRight: false
  },
  {
    num: '02',
    title: 'End-to-End Solutions',
    desc: 'From initial ideation and UI/UX design to backend development and cloud deployment, we cover the entire lifecycle of your digital product.',
    imgRight: true
  },
  {
    num: '03',
    title: '24/7 Dedicated Support',
    desc: 'Technology never sleeps, and neither do we. Our dedicated maintenance teams ensure your infrastructure stays online and performs optimally around the clock.',
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

        <div className="why-choose-list" style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
          {reasons.map((r) => (
            <motion.div
              key={r.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="why-choose-row"
              style={{
                display: 'flex',
                gap: 60,
                alignItems: 'center',
                flexDirection: r.imgRight ? 'row-reverse' : 'row'
              }}
            >
              <div className="why-choose-img" style={{ flex: 1 }}>
                <img 
                  src="/assets/why-choose-us.png" 
                  alt={r.title} 
                  style={{ width: '100%', height: 360, objectFit: 'cover', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-default)' }} 
                />
              </div>

              <div className="why-choose-text" style={{ flex: 1 }}>
                <div style={{ 
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', 
                  width: 50, height: 50, background: 'var(--accent)', color: 'white', 
                  borderRadius: '50%', fontWeight: 800, fontSize: 18, marginBottom: 24,
                  boxShadow: 'var(--shadow-gold)'
                }}>
                  {r.num}
                </div>
                <h3 style={{ color: 'white', fontSize: 32, fontWeight: 800, marginBottom: 16 }}>{r.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 18, lineHeight: 1.7 }}>{r.desc}</p>
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
