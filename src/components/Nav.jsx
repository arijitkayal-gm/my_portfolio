import React, { useState, useEffect } from 'react'
import Button from './Button';

const Nav = ({ scrollToSection, ref, isOpen,setIsOpen }) => {
    
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // Adjust threshold as needed
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.style.overflow = 'auto'; // Restore scroll on unmount
        };
    }, []);


    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    }

    const renderHamburgerIcon = () => (
        <span className={`hamburger ${isOpen ? 'open' : ''}`}>
            <span className="line top"></span>
            <span className='line middle'></span>
            <span className="line bottom"></span>
        </span>
    )

    const menuItems = [
        { id: 1, title: 'Home', number: '01' },
        { id: 2, title: 'About', number: '02' },
        { id: 3, title: 'Projects', number: '03' },
        { id: 4, title: 'Contact', number: '04' },
    ];
    return (
        <>
            <header className='nav-bar'>
                <div className="credits-top">
                    <div className="brand-link">
                        <a href="/"  >
                            <span className="nav-item-text">
                                Arijit Kayal
                            </span>
                        </a>
                    </div>
                </div>
                <ul className="links-wrap">
                    <li className="nav-item" onClick={() => scrollToSection(ref.workRef)}>
                        <span className="nav-label">
                            <span className="nav-item-text">Projects</span>
                        </span>
                    </li>
                    <li className="nav-item" onClick={() => scrollToSection(ref.aboutRef)}>
                        <span className="nav-label">
                            <span className="nav-item-text">About</span>
                        </span>
                    </li>
                    <li className="nav-item" onClick={() => scrollToSection(ref.contactRef)}>
                        <span className="nav-label">
                            <span className="nav-item-text">Contact</span>
                        </span>
                    </li>
                    <li className="nav-item menu-toggle">
                        <div className="nav-label">
                            <span className="nav-item-text" onClick={toggleMenu}>  {isOpen ? 'Close' : 'Menu'}</span>
                        </div>
                    </li>
                </ul>
            </header>

            {isScrolled && (
                <div className='floating-menu'>
                    <Button
                        btnName={renderHamburgerIcon()}
                        btnFunction={toggleMenu}
                        className="btn-custom"
                        textClassName="text-custom"
                        style={{
                            width: "clamp(80px, 8vw, 120px)",   // doubled from 40px, 4vw, 60px
                            height: "clamp(80px, 8vw, 120px)"
                        }}
                        textStyle={{
                            fontSize: "clamp(16px, 1.6vw, 24px)" // doubled from 12px, 0.8vw, 16px
                        }}
                    />
                </div>

            )}
            <div className={`bg-panel-last nav ${isOpen ? 'open' : ''}`}></div>
            <div className={`bg-panel-middle nav ${isOpen ? 'open' : ''}`}></div>
            <div className={`bg-panel-top nav ${isOpen ? 'open' : ''}`}>
                <div className="overlay" onClick={toggleMenu}>
                    <div className="icon-wrap"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" className="menu-button-icon">
                        <path d="M7.33333 16L7.33333 -3.2055e-07L8.66667 -3.78832e-07L8.66667 16L7.33333 16Z" fill="currentColor"></path>
                        <path d="M16 8.66667L-2.62269e-07 8.66667L-3.78832e-07 7.33333L16 7.33333L16 8.66667Z" fill="currentColor"></path>
                        <path d="M6 7.33333L7.33333 7.33333L7.33333 6C7.33333 6.73637 6.73638 7.33333 6 7.33333Z" fill="currentColor"></path>
                        <path d="M10 7.33333L8.66667 7.33333L8.66667 6C8.66667 6.73638 9.26362 7.33333 10 7.33333Z" fill="currentColor"></path>
                        <path d="M6 8.66667L7.33333 8.66667L7.33333 10C7.33333 9.26362 6.73638 8.66667 6 8.66667Z" fill="currentColor"></path>
                        <path d="M10 8.66667L8.66667 8.66667L8.66667 10C8.66667 9.26362 9.26362 8.66667 10 8.66667Z" fill="currentColor"></path>
                    </svg></div>
                </div>
                <div className='menu-inner'>
                    <ul className={`menu-list `}>
                        {menuItems.map((item) => {
                            return (
                                <li key={item.id} className='menu-list-item-container' onClick={() => {
                                    if (item.id === 3) {
                                        scrollToSection(ref.workRef);
                                    }
                                    else if (item.id === 1) {
                                        scrollToSection(ref.topRef);
                                    }
                                    else if (item.id === 2) {
                                        scrollToSection(ref.aboutRef);
                                    }
                                    else if (item.id === 4) {
                                        scrollToSection(ref.contactRef);
                                    }

                                }}>
                                    <div className="menu-list-item">
                                        <span className='menu-list-heading'>{item.title}</span>
                                        <span className='eyebrow'>{item.number}</span>
                                        <div className="menu-list-bg" />
                                    </div>

                                </li>
                            )
                        })}
                    </ul>
                    <div className="menu-details">
                        <p data-menu-fade="" className="p-small">Socials</p>
                        <div className="socials-row">
                            <a data-menu-fade="" href="https://github.com/arijitkayal-gm" className="p-large text-link">GitHub</a>
                            <a data-menu-fade="" href="https://www.linkedin.com/in/arijit-kayal/" className="p-large text-link">LinkedIn</a>
                            <a data-menu-fade="" href="https://codepen.io/arijit-kayal-the-decoder" className="p-large text-link">CodePen</a>
                            <a data-menu-fade="" href="#" className="p-large text-link">X/Twitter</a>
                        </div>
                    </div>
                </div>


            </div>
        </>

    )
}

export default Nav
