import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Maps from "./components/Maps";
import Photo from "./components/Photo";
import Favourite from "./components/Favourite";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Favourite />
      <Photo />
      <Maps />
      <Testimonials />
      <Footer />
    </main>
  );
}
