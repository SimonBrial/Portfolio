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
            : "#0038E0";
    };
    const handleMouseOut = (event) => {
        event.target.style.color = "#FFF";
    };
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
                    style={{ color: `${(themes !== undefined) ? themes : "#0038E0"}` }}
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
export default Header;