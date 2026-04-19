import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 150, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Satisfaction' },
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Expert Engineers' },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = value / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 20);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <div ref={ref} className="stat-value">{count}{suffix}</div>;
};

const Stats = () => {
  return (
    <section className="stats bg-navy section-padding" style={{ padding: '60px 0' }}>
      <div className="container">
        <div className="stats-grid" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 32 }}>
          {stats.map((s, i) => (
            <React.Fragment key={s.label}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="stat-item"
              >
                <Counter value={s.value} suffix={s.suffix} />
                <div className="stat-label">{s.label}</div>
              </motion.div>
              {i < stats.length - 1 && (
                <div style={{ width: 1, height: 60, background: 'var(--accent)', opacity: 0.3, marginTop: 16 }} className="stat-divider" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
