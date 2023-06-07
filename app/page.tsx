import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Maps from "./components/Maps";
import Photo from "./components/Photo";
import Promo from "./components/Promo";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Promo />
      <Photo />
      <Maps />
      <Testimonials />
      <Footer />
    </main>
  );
}
