import Feature from "./components/Feature";
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
    </main>
  );
};
export default App;
