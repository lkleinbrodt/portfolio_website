import Header from "./components/header/Header";
import About from "./components/about/About";
import Nav from "./components/nav/Nav";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
