
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Work from "./components/works/Work";
import Contact from "./components/contact/Contact";
import "./app.scss";

function App() {

  return (

    <div className="app">
      <Topbar />
        <div className="sections">
            <Intro />
            <Portfolio />
            <Testimonials />
            <Work />
            <Contact />
        </div>
    </div>
  );
}

export default App;
