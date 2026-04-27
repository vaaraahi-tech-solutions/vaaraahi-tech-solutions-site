import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact bg-navy section-padding" id="contact">
      <div className="container">
        
        <div className="about-split-row" style={{ alignItems: 'flex-start', padding: 0 }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ flex: 1, paddingRight: 80 }}
          >
            <div className="section-tag">GET IN TOUCH</div>
            <h3 className="section-title" style={{ color: 'white' }}>Let's talk about your <br/><span className="text-gold">project</span></h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 18, marginTop: 12 }}>It's free and takes just 5 minutes</p>
            
            <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <a href="https://wa.me/919876543210" className="btn-gold" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, padding: '16px' }}>
                WhatsApp Us
              </a>
              <a href="tel:+919876543210" className="btn-white-outline" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, padding: '16px' }}>
                Call Us Now
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            style={{ flex: 1.2, width: '100%' }}
          >
            <form onSubmit={handleSubmit} className="premium-card" style={{ padding: 48 }}>
              <div className="grid-2" style={{ gap: 20, marginBottom: 20 }}>
                <div className="form-group">
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: 'var(--primary)', marginBottom: 8 }}>Full Name</label>
                  <input className="input-field" required placeholder="John Doe"
                    value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                </div>
                <div className="form-group">
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: 'var(--primary)', marginBottom: 8 }}>Email Address</label>
                  <input className="input-field" type="email" required placeholder="hello@company.com"
                    value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                </div>
              </div>
              <div className="form-group" style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: 'var(--primary)', marginBottom: 8 }}>Subject</label>
                <input className="input-field" required placeholder="How can we help you?"
                  value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} />
              </div>
              <div className="form-group">
                <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: 'var(--primary)', marginBottom: 8 }}>Message</label>
                <textarea className="input-field" required placeholder="Tell us about your project..."
                  value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
              </div>
              <button 
                type="submit" 
                className={`btn-gold ${sent ? 'sent' : ''}`}
                style={{ width: '100%', marginTop: 24, padding: 18 }}
              >
                {sent ? 'Message Sent!' : <><Send size={18} /> Send Message &rarr;</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
