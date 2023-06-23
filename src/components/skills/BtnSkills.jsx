import { useContext } from 'react'
import { AppContext } from '../../context/appContext';
// eslint-disable-next-line react/prop-types
const BtnSkills = ({ icon }) => {
    const globalContext = useContext(AppContext);
    const { themes } = globalContext;
    return (
        <div className='btn-container-skills'>
            <button
                className='front-btn-skills'
                aria-label="Skill Button"
                title="btn-skills"
            >
                <span className='skill-icon'>{icon}</span>
            </button>
            <div className='bg-btn-skills' style={{ backgroundColor: `${(themes !== undefined) ? themes : "#0038E0"}` }}></div>
        </div>
    )
}
export default BtnSkills