import n from './Nav.module.scss'
import {Link} from "react-scroll";

function Nav() {
    return (
        <div className={n.nav}>
            <Link
                activeClass={n.active}
                spy={true}
                smooth={true}
                to="main"
            >
                Main
            </Link>
            <Link
                activeClass={n.active}
                spy={true}
                smooth={true}
                to="skills"
                offset={-165}
            >
                Skills
            </Link>
            <Link
                activeClass={n.active}
                spy={true}
                smooth={true}
                to="projects"
                offset={-180}
            >
                Projects
            </Link>
            <Link
                activeClass={n.active}
                spy={true}
                smooth={true}
                to="contacts"
                offset={-180}
            >
                Contacts
            </Link>
        </div>
    );
}

export default Nav;