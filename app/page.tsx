import Footer from "./components/Footer";
import Header from "./components/Header";
import Gallery from "./sections/Gallery";
import Hero from "./sections/Hero";
import Services from "./sections/Services";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col flex-wrap">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Footer />
    </main>
  );
}
