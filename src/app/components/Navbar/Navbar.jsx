import './Navbar.css';
import {useState, useEffect} from 'react';
import Link from "next/link";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div className={`nav ${scrolled ? 'scrolled' : ''}`}>
            <nav className="container">
                <img
                    className="nav-logo"
                    src="/images/nav-logo.svg"
                    alt="Logo mladejovsky"
                    draggable="false"
                    loading="eager"
                    placeholder="blur"
                />
                <div className={`burger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <li  data-aos="fade-down" data-aos-once="true"
                        data-aos-delay="0"><span>Portfolio</span>
                    </li>
                    <li  data-aos="fade-down" data-aos-once="true"
                        data-aos-delay="100"><span>Proč já?</span>
                    </li>
                    <li  data-aos="fade-down" data-aos-once="true"
                        data-aos-delay="200"><span>Reference</span>
                    </li>
                    <li  data-aos="fade-down" data-aos-once="true"
                        data-aos-delay="300"><span>Časté dotazy</span>
                    </li>
                    <li data-aos="fade-down" data-aos-once="true" data-aos-delay="500">
                        <Link href="tel:723709079">
                            <button  className="btn btn-secondary">Konzultace
                                zdarma
                            </button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
