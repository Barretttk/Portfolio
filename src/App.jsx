import Topbar from "./components/topbar/Topbar";
import Toggle from "./components/toggle/Toggle";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import About from "./components/about/About";

import "./app.scss";
import { useContext, useState } from "react";
import { ThemeContext } from "./context";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div className="app" style={{
        backgroundColor:darkMode ? "#222": "white",
        color: darkMode && "white"
        }}>

      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Toggle />

      <div className="sections">
        <Intro />
        <About />
        <Portfolio />
        <Projects />
        <Testimonials />
        <Contact />
        
      </div>
    </div>
  );
}

export default App;
