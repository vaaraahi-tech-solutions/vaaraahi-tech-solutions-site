import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Code2, Sun, ShieldCheck } from 'lucide-react';

const floatingCards = [
  { icon: Code2, label: 'Software & Digital', color: '#3b82f6', delay: 0.6 },
  { icon: Sun, label: 'Solar Energy', color: '#f59e0b', delay: 0.8 },
  { icon: ShieldCheck, label: 'Finance & Security', color: '#10b981', delay: 1.0 },
];

const Hero = () => {
  return (
    <section className="hero" style={{ overflow: 'hidden' }}>
      <div className="hero-watermark" />

      {/* Animated background grid lines */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        backgroundImage: 'linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
      }} />

      {/* Glowing orbs */}
      <div style={{
        position: 'absolute', width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
        top: '10%', left: '-10%', zIndex: 1, pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,147,10,0.1) 0%, transparent 70%)',
        bottom: '5%', right: '-5%', zIndex: 1, pointerEvents: 'none'
      }} />

      <div className="container hero-content" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-badge"
            style={{ marginBottom: 40 }}
          >
            ✦ PREMIUM TECHNOLOGY SOLUTIONS
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              fontSize: 'clamp(52px, 9vw, 100px)',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-3px',
              marginBottom: 8,
              color: 'white',
              textShadow: '0 0 60px rgba(59,130,246,0.3)',
            }}
          >
            VAARAAHI
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontSize: 'clamp(52px, 9vw, 100px)',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-3px',
              marginBottom: 32,
              background: 'linear-gradient(135deg, #f59e0b 0%, #fcd34d 50%, #C9930A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            TECH SOLUTIONS
          </motion.h1>

          {/* Divider line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              width: 120, height: 3, margin: '0 auto 28px',
              background: 'linear-gradient(90deg, transparent, #3b82f6, transparent)',
              borderRadius: 999
            }}
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hero-desc"
            style={{ maxWidth: 580, margin: '0 auto 48px', fontSize: 18 }}
          >
            Empowering businesses with cutting-edge software, sustainable energy
            solutions, and comprehensive financial services.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="hero-btns"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <a href="#services" className="btn-gold" style={{ padding: '16px 40px', fontSize: 16 }}>
              Explore Services <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-white-outline" style={{ padding: '16px 40px', fontSize: 16 }}>
              Contact Us
            </a>
          </motion.div>

          {/* Floating service chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 60, flexWrap: 'wrap' }}
          >
            {floatingCards.map(({ icon: Icon, label, color, delay }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay, duration: 0.5 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: 999,
                  padding: '10px 20px',
                  cursor: 'default',
                }}
              >
                <div style={{
                  width: 28, height: 28, borderRadius: '50%',
                  background: `${color}22`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color,
                }}>
                  <Icon size={14} />
                </div>
                <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13, fontWeight: 600 }}>{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="hero-scroll-ind">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
