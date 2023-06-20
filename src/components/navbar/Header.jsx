import { useState, useContext } from 'react';
import { Icon, Switch, ColorThemeSelector } from "./index";
import { AppContext } from '../../context/appContext';
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Header = () => {

    const globalContext = useContext(AppContext);
    const { descriptionApp, themes } = globalContext;

    const [showMenu, setShowMenu] = useState(false);

    const showMenuHandler = () => {
        setShowMenu(!showMenu);
    }

    const handleHover = (event) => {
        event.target.style.color = themes !== undefined
            ? themes
            : "#21F9B8";
    };

    const handleMouseOut = (event) => {
        event.target.style.color = "#FFF";
    };
    /* showMenu ? 'navbar' : "" */
    return (
        <header className='header'>
            <div className='header-container'>
                <Icon className='icon-responsive' />
                <nav className={!showMenu ? 'navbar' : ""}>
                    <ul>
                        {descriptionApp !== undefined ?
                            (
                                descriptionApp.header.navbar.map((section, index) => {
                                    return (
                                        <li key={index}>
                                            <a
                                                onMouseOut={handleMouseOut}
                                                onMouseOver={handleHover}
                                                href={section.url}
                                            >
                                                {section.title}
                                            </a>
                                        </li>
                                    )
                                })
                            ) : (
                                <></>
                            )
                        }
                        <li>
                            <div className='theme-idioms'>
                                <Switch />
                                <ColorThemeSelector />
                            </div>
                        </li>
                    </ul>
                </nav>
                <div
                    className='menu-hamburguer'
                    style={{ color: `${(themes !== undefined) ? themes : "#21F9B8"}` }}
                >
                    {
                        showMenu
                            ? <IoClose onClick={showMenuHandler} />
                            : <FiMenu onClick={showMenuHandler} />
                    }
                </div>
            </div>
        </header>
    )
}

// https://www.youtube.com/watch?v=D31P9ovJjqs

export default Header

{/* <header className='header'>
            <div className='icon-responsive'>
                <Icon />
                {/* <button className='menu-hamburguer' >
                    <span className='menu-line' style={{ backgroundColor: `${(themes !== undefined) ? themes : "#21F9B8"}` }} ></span>
                    <span className='menu-line' style={{ backgroundColor: `${(themes !== undefined) ? themes : "#21F9B8"}` }} ></span>
                    <span className='menu-line' style={{ backgroundColor: `${(themes !== undefined) ? themes : "#21F9B8"}` }} ></span>
                </button> 
                <div className='menu-hamburguer' style={{ color: `${(themes !== undefined) ? themes : "#21F9B8"}` }} >
                    <FiMenu />
                </div>
            </div>
            <>
                <Navbar />
                {
                    /* showMenu ? (
                            <div className='container-show'>
                            <div className='theme-idioms'>
                                <Switch />
                                <ColorThemeSelector />
                            </div> 
                        </div> 
                        </>
                    ) : (
                        <>
    
                        )
            </>

        </header> */}

/*
const Header = () => {
    const history = useHistory();
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    const ctaClickHandler = () => {
        menuToggleHandler();
        history.push("/page-cta");
    };

    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <Link to="/" className={classes.header__content__logo}>
                    navbar
                </Link>
                <nav
                    className={`${classes.header__content__nav} ${
                        menuOpen && size.width < 768 ? classes.isMenu : ""
                    }`}
                >
                    <ul>
                        <li>
                            <Link to="/page-one" onClick={menuToggleHandler}>
                                PageOne
                            </Link>
                        </li>
                        <li>
                            <Link to="/page-two" onClick={menuToggleHandler}>
                                PageTwo
                            </Link>
                        </li>
                        <li>
                            <Link to="/page-three" onClick={menuToggleHandler}>
                                PageThree
                            </Link>
                        </li>
                    </ul>
                    <button onClick={ctaClickHandler}>CTA Page</button>
                </nav>
                <div className={classes.header__content__toggle}>
                    {!menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>
    );
};

https://github.com/CodeFocusChannel/navbar/blob/master/src/components/Layout.js
*/