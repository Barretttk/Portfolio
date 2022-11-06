import './menu.scss'

export default function Menu({ menuOpen, setMenuOpen}) {

    return (

        <div className={"menu "+(menuOpen &&"active")}>
        
        <ul>
            <li>
                <a href="#intro">Home</a>
            </li>
        </ul>
        <ul>
            <li>
                <a href="#portfolio">Portfolio</a>
            </li>
        </ul>
        <ul>
            <li>
                <a href="#projects">Project</a>
            </li>
        </ul>
        <ul>
            <li>
                <a href="#testimonials">Testimonials</a>
            </li>
        </ul>
        <ul>
            <li>
                <a href="#Contact">Contact</a>
            </li>
        </ul>

    </div>
  );
}