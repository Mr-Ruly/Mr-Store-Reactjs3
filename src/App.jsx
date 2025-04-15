import Contact from "./components/shared/Contact";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import Hero from "./components/shared/Hero";
import Productlist from "./components/shared/Productlist";
import Team from "./components/shared/Team";

function App() {
  return (
    <>
      <div className="container">
      <Header />
      <Hero />
      <Productlist />
      <Team />
      <Contact />
      <Footer />
      
      </div>
    </>
  )
}

export default App;