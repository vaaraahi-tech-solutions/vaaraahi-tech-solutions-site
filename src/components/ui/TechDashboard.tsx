import { motion } from 'framer-motion';

const TechDashboard = () => {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
      {/* Central Rotating Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute', top: '50%', left: '50%',
          width: 800, height: 800,
          border: '1px dashed rgba(201, 147, 10, 0.2)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute', top: '50%', left: '50%',
          width: 600, height: 600,
          border: '2px solid rgba(201, 147, 10, 0.1)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div style={{ position: 'absolute', top: -5, left: '50%', width: 10, height: 10, background: 'var(--accent)', borderRadius: '50%', boxShadow: '0 0 15px var(--accent)' }} />
      </motion.div>

      {/* Floating Circuit Paths */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 1, 0] }}
          transition={{ duration: 4, delay: i * 1, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: 'absolute', top: `${20 + i * 15}%`, left: `${10 + i * 10}%` }}
        >
          <svg width="200" height="100" viewBox="0 0 200 100">
            <motion.path
              d="M0 50 L100 50 L150 0 L200 0"
              fill="transparent"
              stroke="var(--accent)"
              strokeWidth="1"
              opacity="0.3"
            />
          </svg>
        </motion.div>
      ))}

      {/* Scanning Line */}
      <motion.div
        animate={{ top: ['-10%', '110%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute', left: 0, right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
          opacity: 0.1,
          zIndex: 2
        }}
      />

      {/* Data Points */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2 + i % 3, repeat: Infinity, delay: i * 0.5 }}
          style={{
            position: 'absolute',
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            width: 4, height: 4,
            background: 'var(--accent)',
            borderRadius: '50%',
            boxShadow: '0 0 10px var(--accent)'
          }}
        />
      ))}
    </div>
  );
};

export default TechDashboard;
