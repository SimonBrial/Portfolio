import { useState, useContext, useEffect, useRef } from "react";
import { AppContext } from "../../context/appContext";
import { arrayThemes } from "../../utils/index";
import { ColorThemeItem } from "./index";
import { BsFillCaretDownFill } from "react-icons/bs";
//import useOutsideClick from "../../hooks/useOutsideClick";

const ColorThemeSelector = () => {
    const globalContext = useContext(AppContext);
    const { themes } = globalContext;

    const activeRef = useRef(null);
    const dropdownListRef = useRef(null);
    const [isShow, setIsShow] = useState(false);

    const showDropdown = () => setIsShow(!isShow);

    const keyHandler = (event) => {
        if (event.key === "Escape" && isShow) {
            setIsShow(false);
        }
    };

    const clickOutsideHandler = (event) => {
        // Se evalua si se hizo click en algun sitio fuera del dropdown
        if (dropdownListRef.current) {
            if (dropdownListRef.current.contains(event.target) || activeRef.current.contains(event.target)) {
                return;
            }
            setIsShow(false)
        }
    };

    useEffect(() => {
        if (isShow) {
            dropdownListRef.current.querySelector("#btn-theme-color").focus();
            document.addEventListener("mousedown", clickOutsideHandler);
        } else {
            document.addEventListener("mousedown", clickOutsideHandler);
        }
    }, [isShow])

    const dropdownShow = isShow
        ? "dropdown-container dropdown-container-active"
        : "dropdown-container"


    return (
        <div className="theme-container" onKeyUp={keyHandler}>
            <div className="color-selector-theme">
                <div className="color-selector">
                    <span className="color-square" style={{ backgroundColor: `${(themes !== undefined) ? themes : "#21F9B8"}` }}></span>
                </div>
                <button
                    aria-label="Dropdown Button"
                    className="arrow-selector"
                    title="arrow-dropdown"
                    onClick={showDropdown}
                    ref={activeRef}
                >
                    <BsFillCaretDownFill />
                </button>
            </div>
            <div className="bg-container">
                <div className="bg-selector-theme-left" style={{ backgroundColor: `${(themes !== undefined) ? themes : "#21F9B8"}` }} ></div>
                <div className="bg-selector-theme-right" style={{ backgroundColor: `${(themes !== undefined) ? themes : "#21F9B8"}` }} ></div>
            </div>
            {isShow ? (
                <div className={dropdownShow}
                    ref={dropdownListRef}
                >
                    <ul>
                        {
                            arrayThemes.map((themeItem, index) => {
                                return (
                                    <li key={index}>
                                        <ColorThemeItem
                                            colorCode={themeItem.code}
                                            id={themeItem.id}
                                        />
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default ColorThemeSelector;
