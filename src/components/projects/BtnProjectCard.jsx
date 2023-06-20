import { useContext } from 'react';
import { AppContext } from "../../context/appContext/index";
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const BtnProjectCard = ({ icon, description, url }) => {
    const globalContext = useContext(AppContext);
    const { themes } = globalContext;

    return (
        <div className='btn-project-container'>
            <Link className='front-btn-project' to={url} target="_blank" >
                <span>{icon}</span>
                <p>{description}</p>
            </Link>
            <div className='bg-btn-project' style={{ backgroundColor: `${(themes !== undefined) ? themes : "#21F9B8"}` }}></div>
        </div>
    )
}

export default BtnProjectCard