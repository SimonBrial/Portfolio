import { useContext } from 'react';
import AppContext from '../../context/appContext/AppContext';
import { Switch, ColorThemeSelector } from "./index";
import { FiMenu } from "react-icons/fi"
const Navbar = () => {
    const globalContext = useContext(AppContext);
    const { descriptionApp, themes } = globalContext;
    const handleHover = (event) => {
        event.target.style.color = themes !== undefined ? themes : "#0038E0";
    };
    const handleMouseOut = (event) => {
        event.target.style.color = "#FFF";
    };
    return (
        <div>
            <nav className='navbar'>
                {descriptionApp !== undefined ?
                    (
                        descriptionApp.header.navbar.map((section, index) => {
                            return (
                                <a
                                    onMouseOut={handleMouseOut}
                                    onMouseOver={handleHover}
                                    href={section.url}
                                    key={index}
                                >
                                    {section.title}
                                </a>
                            )
                        })
                    ) : (
                        <></>
                    )
                }
                <div className='theme-idioms'>
                    <Switch />
                    <ColorThemeSelector />
                </div>
            </nav>
            <div className='menu-hamburguer' style={{ color: `${(themes !== undefined) ? themes : "#0038E0"}` }} >
                <FiMenu />
            </div>
        </div>
    )
}
export default Navbar