const footerLinks = {
  Shop: ["New in", "Women", "Men", "Sale"],
  Help: ["Shipping", "Returns", "Size guide", "Contact"],
  About: ["Our story", "Sustainability", "Careers", "Stores"],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#" className="footer__logo">
            Fashion Festive
          </a>
          <p>Contemporary fashion, thoughtfully made.</p>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className="footer__col">
            <h4>{title}</h4>
            <ul>
              {links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer__bottom container">
        <p>© 2026 Fashion Festive. All rights reserved.</p>
        <div className="footer__legal">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}
