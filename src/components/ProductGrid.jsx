import { products } from "../data/products";

export default function ProductGrid() {
  return (
    <section id="featured" className="products section">
      <div className="container">
        <div className="section__header section__header--row">
          <div>
            <p className="section__eyebrow">Just in</p>
            <h2 className="section__title">Featured pieces</h2>
          </div>
          <a href="#featured" className="link-arrow">
            View all →
          </a>
        </div>

        <div className="products__grid">
          {products.map((product) => (
            <article key={product.id} className="product-card">
              <a href="#featured" className="product-card__link">
                <div className="product-card__image">
                  <img src={product.image} alt={product.name} loading="lazy" />
                  {product.tag && (
                    <span className="product-card__tag">{product.tag}</span>
                  )}
                  <button
                    type="button"
                    className="product-card__quick"
                    onClick={(e) => e.preventDefault()}
                  >
                    Quick add
                  </button>
                </div>
                <div className="product-card__info">
                  <p className="product-card__category">{product.category}</p>
                  <h3 className="product-card__name">{product.name}</h3>
                  <p className="product-card__price">${product.price}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
