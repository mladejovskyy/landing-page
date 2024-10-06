import './Navbar.css';
import {useState, useEffect} from 'react';
import Link from "next/link";
import {useRouter} from 'next/navigation';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();

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

    const scrollToTarget = async (sectionId) => {
        const currentPath = window.location.pathname;
        if (currentPath === '/') {
            // On homepage, directly scroll to the target section
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({behavior: 'smooth'});
            }
        } else {
            // Redirect to the homepage and then scroll
            await router.push('/');

            // Ensure scrolling happens after page navigation
            setTimeout(() => {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({behavior: 'smooth'});
                }
            }, 100); // Short delay to ensure page redirection is processed
        }

        // Close the menu on mobile after clicking
        setMenuOpen(false);
    };

    return (
        <div className={`nav ${scrolled ? 'scrolled' : ''}`}>
            <nav className="container">
                <img
                    onClick={() => scrollToTarget('hero')}
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
                    {/*
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
                    */}
                    <li  data-aos="fade-down" data-aos-once="true"
                        data-aos-delay="100">
                        <Link href="https://www.github.com/mladejovskyy/" target="_blank" className='link'>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1053_4)">
                                    <path
                                        d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2562 29.2312C11.0062 29.3625 11.2875 28.9125 11.2875 28.5187C11.2875 28.1625 11.2688 26.9812 11.2688 25.725C7.5 26.4187 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8437C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8312 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4813 24.0187 11.3438 23.625C11.475 22.65 11.8687 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5812 6.05625 11.2312 7.0125 10.1812C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1812C24.0188 11.2312 24.6 12.5625 24.6 14.2125C24.6 19.9687 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5187C18.75 28.9125 19.0312 29.3812 19.7812 29.2312C22.7595 28.2267 25.3475 26.3131 27.1808 23.76C29.014 21.207 30 18.1431 30 15C30 6.7125 23.2875 0 15 0Z"
                                        fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1053_4">
                                        <rect width="30" height="30" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </Link>
                    </li>
                    <li  data-aos="fade-down" data-aos-once="true"
                        data-aos-delay="200">
                        <Link href="https://www.linkedin.com/in/mladejovsky/" target="_blank" className='link'>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1053_2)">
                                    <path
                                        d="M0 2.14875C0 0.961875 0.98625 0 2.20312 0H27.7969C29.0138 0 30 0.961875 30 2.14875V27.8512C30 29.0381 29.0138 30 27.7969 30H2.20312C0.98625 30 0 29.0381 0 27.8512V2.14875ZM9.26812 25.1138V11.5669H4.76625V25.1138H9.26812ZM7.01813 9.71625C8.5875 9.71625 9.56437 8.6775 9.56437 7.37625C9.53625 6.04688 8.58938 5.03625 7.04813 5.03625C5.50688 5.03625 4.5 6.04875 4.5 7.37625C4.5 8.6775 5.47687 9.71625 6.98812 9.71625H7.01813ZM16.2206 25.1138V17.5481C16.2206 17.1431 16.2506 16.7381 16.3706 16.4494C16.695 15.6412 17.4356 14.8031 18.6806 14.8031C20.31 14.8031 20.9606 16.0444 20.9606 17.8669V25.1138H25.4625V17.3438C25.4625 13.1812 23.2425 11.2463 20.28 11.2463C17.8913 11.2463 16.8206 12.5588 16.2206 13.4831V13.53H16.1906L16.2206 13.4831V11.5669H11.7206C11.7769 12.8381 11.7206 25.1138 11.7206 25.1138H16.2206Z"
                                        fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1053_2">
                                        <rect width="30" height="30" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </Link>
                    </li>
                    <li data-aos="fade-down" data-aos-once="true" data-aos-delay="300">
                        <Link href="tel:723709079">
                            <button  className="btn btn-primary">Konzultace
                                zdarma
                            </button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
