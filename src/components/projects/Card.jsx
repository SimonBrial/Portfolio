import { useState, useEffect, useContext } from 'react';
import AppContext from '../../context/appContext/AppContext';
import BtnProjectCard from './BtnProjectCard';
import "../../sass/base/_card.scss";
import { FaRegEye } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";

// eslint-disable-next-line react/prop-types
const Card = ({ urlProject, name, urlCode, technologies, urlImg }) => {
    const globalContext = useContext(AppContext);
    const { descriptionApp } = globalContext;

    const [technologiesStr, setTechonologiesStr] = useState("");
    const [text, setText] = useState([]);

    useEffect(() => {
        if (descriptionApp !== undefined) {
            setText(descriptionApp.projects.projectBtn)
        }
    }, [descriptionApp])

    const technologiesFormat = (tech) => {
        return tech.join(" | ");
    }

    useEffect(() => {
        setTechonologiesStr(technologiesFormat(technologies));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className='img-container'>
                <img src={urlImg} alt={name} />
            </div>
            <div className='footer-card'>
                <div className='footer-text'>
                    <h2>{name}</h2>
                    <p>{technologiesStr}</p>
                </div>
                <div className='btn-action-container'>
                    <BtnProjectCard description={text[0]} icon={<FaRegEye />} url={urlProject} />
                    <BtnProjectCard description={text[1]} icon={<BiCodeAlt />} url={urlCode} />
                </div>
            </div>
        </>
    )
}

export default Card