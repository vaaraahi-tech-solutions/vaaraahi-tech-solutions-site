
import { motion } from 'framer-motion';

const steps = [
  { num: 1, title: 'Discovery', desc: 'We analyze your requirements and map out the architecture.' },
  { num: 2, title: 'Design', desc: 'Crafting pixel-perfect prototypes and UI/UX flows.' },
  { num: 3, title: 'Development', desc: 'Agile sprints building robust, scalable solutions.' },
  { num: 4, title: 'Delivery', desc: 'Rigorous QA testing leading to a seamless launch.' },
];

const Process = () => {
  return (
    <section className="process section-padding bg-offwhite">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">How We Work</span>
          <h2 className="section-title">Our Process</h2>
          <p className="section-desc">A streamlined workflow designed for maximum efficiency and transparency.</p>
        </div>

        <div className="process-timeline">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="process-step"
            >
              <div className="process-circle">{step.num}</div>
              <h4 className="text-navy" style={{ fontSize: 20, fontWeight: 800, marginBottom: 12 }}>{step.title}</h4>
              <p className="text-gray" style={{ lineHeight: 1.6 }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
