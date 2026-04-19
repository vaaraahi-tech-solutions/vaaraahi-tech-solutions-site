
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const posts = [
  { img: '/assets/blog-fintech.png', tag: 'FINTECH', title: 'The Future of Decentralized Finance in 2026', excerpt: 'Exploring the paradigm shift in global banking infrastructures and how blockchain technology is reaching maturity.' },
  { img: '/assets/blog-solar.png', tag: 'SUSTAINABILITY', title: 'Maximizing Solar Grid Efficiency with AI', excerpt: 'How predictive machine learning models are increasing renewable energy yields by up to 15% across enterprise arrays.' },
  { img: '/assets/blog-software.png', tag: 'SOFTWARE ENG', title: 'Micro-Frontends: Scaling React Applications', excerpt: 'Our architectural approach to breaking down monoliths and empowering autonomous development teams.' }
];

const Blog = () => {
  return (
    <section className="blog section-padding bg-white">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Insights</span>
          <h2 className="section-title">Latest Articles</h2>
        </div>

        <div className="grid-3">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="premium-card"
              style={{ padding: 0, overflow: 'hidden' }}
            >
              <div style={{ height: 200, position: 'relative', overflow: 'hidden' }}>
                <img src={post.img} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'var(--accent)', opacity: 0.1, mixBlendMode: 'multiply' }} className="blog-img-overlay" />
              </div>
              <div style={{ padding: 32 }}>
                <span className="text-gold" style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>{post.tag}</span>
                <h4 className="text-navy" style={{ fontSize: 22, fontWeight: 800, margin: '12px 0 16px', lineHeight: 1.3 }}>{post.title}</h4>
                <p className="text-gray" style={{ lineHeight: 1.6, marginBottom: 24 }}>{post.excerpt}</p>
                <a href="#" className="text-gold" style={{ fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6 }}>
                  Read More <ArrowRight size={16} />
                </a>
              </div>
              
              <style>{`
                .premium-card:hover .blog-img-overlay { opacity: 0.3 !important; }
              `}</style>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
