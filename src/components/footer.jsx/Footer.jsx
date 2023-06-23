import { useContext } from 'react';
import { AppContext } from '../../context/appContext';
const Footer = () => {
    const globalContext = useContext(AppContext);
    const {descriptionApp } = globalContext;
    return (
        <footer>
            {
                descriptionApp !== undefined ? (
                    <p>{descriptionApp.footer}</p>
                ) : ( <></>)
            }
            <span>&#169;</span>
        </footer>
    )
}
export default Footer