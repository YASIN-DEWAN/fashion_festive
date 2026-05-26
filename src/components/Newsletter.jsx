import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  return (
    <section className="newsletter section">
      <div className="container newsletter__inner">
        <div className="newsletter__copy">
          <p className="section__eyebrow">Stay in touch</p>
          <h2 className="section__title">Join the list</h2>
          <p className="newsletter__text">
            Early access to drops, private sales, and style notes — delivered
            once a week, never spam.
          </p>
        </div>

        {submitted ? (
          <p className="newsletter__success" role="status">
            Thank you — you&apos;re on the list.
          </p>
        ) : (
          <form className="newsletter__form" onSubmit={handleSubmit}>
            <label htmlFor="email" className="visually-hidden">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn--primary">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
