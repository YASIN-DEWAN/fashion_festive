import { collections } from "../data/products";

export default function Collections() {
  return (
    <section id="collections" className="collections section">
      <div className="container">
        <div className="section__header">
          <p className="section__eyebrow">Curated for you</p>
          <h2 className="section__title">Collections</h2>
        </div>

        <div className="collections__grid">
          {collections.map((item, index) => (
            <article
              key={item.id}
              className={`collection-card ${index === 0 ? "collection-card--featured" : ""}`}
            >
              <a href="#featured" className="collection-card__link">
                <div className="collection-card__image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <div className="collection-card__body">
                  <p className="collection-card__subtitle">{item.subtitle}</p>
                  <h3 className="collection-card__title">{item.title}</h3>
                  <span className="collection-card__cta">{item.cta} →</span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
