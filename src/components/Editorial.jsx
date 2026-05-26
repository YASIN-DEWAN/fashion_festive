export default function Editorial() {
  return (
    <section id="editorial" className="editorial section">
      <div className="editorial__grid container">
        <div className="editorial__image">
          <img
            src="/photos/BEDFCAC0-000F-4C5C-8DA2-E273AF8AFC2B.jpeg"
            alt="Editorial product portrait"
            loading="lazy"
          />
        </div>
        <div className="editorial__content">
          <p className="section__eyebrow">The journal</p>
          <h2 className="section__title">
            Slow fashion,
            <br />
            considered craft
          </h2>
          <p className="editorial__text">
            Each piece is designed in our studio and produced in small batches
            with partners who share our commitment to quality and responsible
            sourcing. Discover the stories behind the fabrics, the makers, and
            the silhouettes defining this season.
          </p>
          <a href="#editorial" className="btn btn--outline">
            Read the editorial
          </a>
        </div>
      </div>
    </section>
  );
}
