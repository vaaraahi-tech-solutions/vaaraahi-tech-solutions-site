
import { Mail, Phone, MapPin, Share2, Globe, GitBranch } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = ['Home', 'Services', 'About Us', 'Team', 'Blog', 'Contact'];
const services = ['Software Development', 'Solar Energy', 'Cloud Solutions', 'Cybersecurity', 'Financial Consulting'];

const Footer = () => (
  <footer style={{
    backgroundColor: '#050a18',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
  }}>
    {/* Top blue gradient bar */}
    <div style={{ height: 3, background: 'linear-gradient(90deg, #1d4ed8, #3b82f6, #60a5fa, #3b82f6, #1d4ed8)' }} />

    {/* Decorative glow blobs */}
    <div style={{
      position: 'absolute', width: 500, height: 500, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
      top: -100, left: -100, pointerEvents: 'none'
    }} />
    <div style={{
      position: 'absolute', width: 400, height: 400, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
      bottom: 0, right: -80, pointerEvents: 'none'
    }} />

    {/* Main content */}
    <div className="container" style={{ position: 'relative', zIndex: 1, padding: '80px 24px 48px' }}>

      {/* Top row: Brand + columns */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1.4fr',
        gap: 60,
        paddingBottom: 60,
        borderBottom: '1px solid rgba(59,130,246,0.15)',
        marginBottom: 40,
      }}
      className="footer-grid"
      >

        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20
          }}>
            <div style={{
              width: 38, height: 38, borderRadius: '50%',
              background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 900, color: 'white', fontSize: 16, flexShrink: 0
            }}>V</div>
            <span style={{ fontSize: 22, fontWeight: 900, color: '#60a5fa', letterSpacing: 1 }}>VAARAAHI</span>
          </div>

          <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: 14, marginBottom: 28, maxWidth: 280 }}>
            Premium software engineering, solar energy solutions, and financial services.
            Building a smarter, greener future — one innovation at a time.
          </p>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: 12 }}>
            {[
              { Icon: Share2, label: 'LinkedIn' },
              { Icon: Globe, label: 'Twitter' },
              { Icon: GitBranch, label: 'GitHub' },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                title={label}
                style={{
                  width: 38, height: 38,
                  border: '1px solid rgba(59,130,246,0.3)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.5)',
                  transition: 'all 0.2s',
                  backgroundColor: 'rgba(59,130,246,0.05)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(59,130,246,0.2)';
                  (e.currentTarget as HTMLAnchorElement).style.color = '#60a5fa';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = '#3b82f6';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(59,130,246,0.05)';
                  (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.5)';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(59,130,246,0.3)';
                }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h4 style={{ color: 'white', fontWeight: 800, fontSize: 15, marginBottom: 24, textTransform: 'uppercase', letterSpacing: 1 }}>
            Company
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {navLinks.map(link => (
              <li key={link}>
                <a
                  href="#"
                  style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, textDecoration: 'none', transition: 'color 0.2s', display: 'inline-flex', alignItems: 'center', gap: 6 }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#60a5fa')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#3b82f6', display: 'inline-block', flexShrink: 0 }} />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 style={{ color: 'white', fontWeight: 800, fontSize: 15, marginBottom: 24, textTransform: 'uppercase', letterSpacing: 1 }}>
            Services
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {services.map(svc => (
              <li key={svc}>
                <a
                  href="#"
                  style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, textDecoration: 'none', transition: 'color 0.2s', display: 'inline-flex', alignItems: 'center', gap: 6 }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#60a5fa')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#3b82f6', display: 'inline-block', flexShrink: 0 }} />
                  {svc}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h4 style={{ color: 'white', fontWeight: 800, fontSize: 15, marginBottom: 24, textTransform: 'uppercase', letterSpacing: 1 }}>
            Contact Us
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { Icon: Phone, text: '+91 98765 43210' },
              { Icon: Mail, text: 'vaaraahitechsolutions.team@gmail.com' },
              { Icon: MapPin, text: 'Hitech City, Hyderabad, Telangana' },
            ].map(({ Icon, text }) => (
              <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{
                  width: 34, height: 34, borderRadius: 8,
                  background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#60a5fa', flexShrink: 0
                }}>
                  <Icon size={15} />
                </div>
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.6, paddingTop: 6 }}>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Bottom bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 16,
      }}>
        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13 }}>
          © {new Date().getFullYear()} Vaaraahi Tech Solutions Pvt. Ltd. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: 28 }}>
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
            <a
              key={item}
              href="#"
              style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#60a5fa')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

    </div>

    {/* Footer grid responsive style */}
    <style>{`
      @media (max-width: 1024px) {
        .footer-grid { grid-template-columns: 1fr 1fr !important; }
      }
      @media (max-width: 640px) {
        .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
      }
    `}</style>
  </footer>
);

export default Footer;
