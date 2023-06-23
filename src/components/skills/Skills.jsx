import { useContext } from 'react';
import AppContext from '../../context/appContext/AppContext';
import "../../sass/base/_skills.scss"
import BtnSkills from './BtnSkills';
import { arrayIcons } from '../../utils/index';
const Skills = () => {
    const globalContext = useContext(AppContext);
    const { descriptionApp, themes } = globalContext;
    return (
        <section className='container-skills' id='skills'>
            {
                descriptionApp !== undefined ? (
                    <div>
                        <h1 style={{
                            borderBottom:
                                `${(themes !== undefined)
                                    ? `3px solid ${themes}`
                                    : "3px solid #0038E0"}`
                        }}>{descriptionApp.skills.title}</h1>
                        <p>
                            {descriptionApp.skills.paragraph}
                        </p>
                    </div>
                ) : (
                    <div>
                        <h1>Skills</h1>
                        <p>Aquí se muestran los skills que con los que he ido practicando a lo largo de mis estudios...</p>
                    </div>
                )
            }
            <div className='skills-btn-container'>
                <ul className='skills-list'>
                    {
                        arrayIcons.map((Icon, index) => {
                            return (
                                <li key={index}>
                                    <BtnSkills icon={Icon()} />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}
export default Skills