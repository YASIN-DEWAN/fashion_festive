export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__media">
        <img
          src="/photos/main_for_cover.jpeg"
          alt="Sale cover photo"
        />
        <div className="hero__overlay" />
      </div>

      <div className="hero__content container">
        <p className="hero__eyebrow">Spring / Summer 2026</p>
        <h1 className="hero__title">
          Dress the
          <br />
          <em>season</em>
        </h1>
        <p className="hero__text">
          Curated pieces in natural fabrics and refined silhouettes — made
          for movement, light, and everyday elegance.
        </p>
        <div className="hero__actions">
          <a href="#collections" className="btn btn--primary">
            Shop collections
          </a>
          <a href="#featured" className="btn btn--ghost">
            View lookbook
          </a>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
