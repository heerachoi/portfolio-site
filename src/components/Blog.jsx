import { motion } from "framer-motion";
import { posts } from "../data/posts";
import { site } from "../data/site";
import { easeOut } from "../motion";
import FadeIn from "./FadeIn";
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
        <FadeIn className="blog__head">
          <div>
            <h2 className="blog__title">글</h2>
          </div>
          <motion.a
            href={site.blog.href}
            target="_blank"
            rel="noopener noreferrer"
            className="blog__all"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            블로그 전체 보기
          </motion.a>
        </FadeIn>

        <ul className="blog__list">
          {posts.map((post, i) => (
            <FadeIn
              key={post.link}
              as="li"
              delay={Math.min(i * 0.05, 0.3)}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: Math.min(i * 0.05, 0.3),
                ease: easeOut,
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
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
