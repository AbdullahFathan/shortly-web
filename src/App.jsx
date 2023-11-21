import CTA from "./components/CTA";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Shorten from "./components/Shorten";
import Stats from "./components/Stats";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Shorten />
      <Stats />
      <Feature />
      <CTA />
      <Footer />
    </main>
  );
};
export default App;
