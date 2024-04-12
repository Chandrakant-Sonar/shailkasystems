import Navbar from "./components/NavBar/navbar";
import "./app.css"
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Hire from "./components/Hire/hire";
// import Apply from "./components/Apply/apply";
// import mainbg from '../src/data/cta-bg.webp' 
function App() {
  return (
    <div >
      {/* <img src={mainbg} alt="main" className="mainbg"/> */}
      
      <Navbar />
      <Intro />
      <About/>
      <Contact />
      <Hire />
      {/* <Apply/>  */}
      <Footer/>
      
    </div>
  );
}

export default App;
