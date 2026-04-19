import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-inner">
            
            <div className="logo-wrap">
              <div className="logo-circle">V</div>
              <div className={`logo-title ${!scrolled ? 'light' : ''}`}>VAARAAHI TECH SOLUTIONS</div>
            </div>

            <ul className="nav-links">
              {navLinks.map((l) => (
                <li key={l.name}>
                  <a href={l.href}>{l.name}</a>
                </li>
              ))}
            </ul>

            <div className="nav-actions">
              <a href="#contact" className="btn-gold">Get Started</a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              style={{ color: scrolled ? 'var(--primary)' : 'white' }}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile slide-down menu */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            zIndex: 999,
            backgroundColor: 'rgba(10,15,46,0.98)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 32,
            animation: 'fadeIn 0.3s ease',
          }}
        >
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              position: 'absolute', top: 20, right: 20,
              background: 'none', border: 'none', color: 'white', cursor: 'pointer',
            }}
          >
            <X size={32} />
          </button>

          {navLinks.map(l => (
            <a
              key={l.name}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{
                color: 'white',
                fontSize: 24,
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
            >
              {l.name}
            </a>
          ))}

          <a
            href="#contact"
            className="btn-gold"
            onClick={() => setMobileOpen(false)}
            style={{ marginTop: 16, padding: '14px 40px' }}
          >
            Get Started
          </a>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
