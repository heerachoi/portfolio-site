import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {new Date().getFullYear()} 최희라</span>
        <a href="#top" className="footer__top">
          맨 위로
        </a>
      </div>
    </footer>
  );
}
