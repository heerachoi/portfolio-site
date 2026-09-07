import { motion } from "framer-motion";
import { blogUrl, posts } from "../data/posts";
import "./Blog.css";

function formatDate(iso) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return `${y}.${m}.${d}`;
}

export default function Blog() {
  return (
    <section id="blog" className="blog section">
      <div className="container">
        <motion.div
          className="blog__head"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <h2 className="blog__title">글</h2>
            <p className="blog__sub">
              React·Three.js·성능 개선 등, CODESIGN에 기록한 최근 글
            </p>
          </div>
          <motion.a
            href={blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="blog__all"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            블로그 전체 보기
          </motion.a>
        </motion.div>

        <ul className="blog__list">
          {posts.map((post, i) => (
            <motion.li
              key={post.link}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: Math.min(i * 0.05, 0.3),
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="blog__item"
              >
                <time className="blog__date" dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
                <div className="blog__content">
                  <h3 className="blog__item-title">{post.title}</h3>
                  <p className="blog__excerpt">{post.excerpt}</p>
                </div>
                <span className="blog__arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
