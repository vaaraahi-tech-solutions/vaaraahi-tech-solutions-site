
import { motion } from 'framer-motion';
import { Share2, Link, Mail } from 'lucide-react';

const team = [
  { name: 'Arjun Desai', role: 'Chief Technology Officer', text: 'Leading the software division with 15 years of enterprise architecture experience.', img: '/assets/team-arjun.png' },
  { name: 'Priya Iyer', role: 'Head of Solar Energy', text: 'Spearheading sustainable solutions and green energy grid integrations globally.', img: '/assets/team-priya.png' },
  { name: 'Siddharth Menon', role: 'Director of Security', text: 'Ensuring bank-grade security protocols for all our fintech partners.', img: '/assets/team-siddharth.png' }
];

const Team = () => {
  return (
    <section className="team section-padding bg-navy">
      <div className="container">
        <div className="section-header w-full">
          <span className="section-tag" style={{ color: 'rgba(255,255,255,0.9)' }}>Leadership</span>
          <h2 className="section-title text-white" style={{ color: 'white' }}>Meet Our Team</h2>
          <p className="section-desc" style={{ color: 'rgba(255,255,255,0.7)' }}>The visionaries driving Vaaraahi Tech Solutions forward.</p>
        </div>

        <div className="grid-3">
          {team.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="premium-card"
              style={{
                textAlign: 'center',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(59,130,246,0.15)',
                borderRadius: 16,
                padding: 40,
              }}
            >
              <div style={{ width: 120, height: 120, borderRadius: '50%', margin: '0 auto 24px', overflow: 'hidden', border: '3px solid #3b82f6' }}>
                <img src={t.img} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              
              <h4 style={{ color: 'white', fontSize: 20, fontWeight: 800 }}>{t.name}</h4>
              <p style={{ color: '#60a5fa', fontSize: 14, fontWeight: 600, marginBottom: 16 }}>{t.role}</p>
              <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, marginBottom: 24, fontSize: 15 }}>{t.text}</p>
              
              <div style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
                {[Share2, Link, Mail].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    style={{
                      width: 34, height: 34, borderRadius: '50%',
                      border: '1px solid rgba(59,130,246,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'rgba(255,255,255,0.5)', transition: 'all 0.2s',
                      backgroundColor: 'rgba(59,130,246,0.05)',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#60a5fa'; e.currentTarget.style.borderColor = '#3b82f6'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)'; }}
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
