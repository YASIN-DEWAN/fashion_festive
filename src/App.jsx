import Header from "./components/Header";
import Hero from "./components/Hero";
import Collections from "./components/Collections";
import ProductGrid from "./components/ProductGrid";
import Editorial from "./components/Editorial";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Collections />
        <ProductGrid />
        <Editorial />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
