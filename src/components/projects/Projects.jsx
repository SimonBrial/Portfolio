import { useContext } from 'react';
import AppContext from '../../context/appContext/AppContext';
import "../../sass/base/_projects.scss";
import { Card } from "./index";
import { arrayUrl } from '../../utils/index';
const Projects = () => {
    const globalContext = useContext(AppContext);
    const { descriptionApp, themes } = globalContext;
    return (
        <section className='projects-container' id='projects'>
            {
                descriptionApp !== undefined ?
                    (
                        <div className='projects-title'>
                            <h1 style={{
                                borderBottom:
                                    `${(themes !== undefined)
                                        ? `3px solid ${themes}`
                                        : "3px solid #0038E0"}`
                            }}>{descriptionApp.projects.title}</h1>
                            <p>{descriptionApp.projects.paragraph}</p>
                        </div>
                    ) : (
                        <div className='projects-title'>
                            <h1>Projects</h1>
                            <p>A continuacion se muestran varios proyectos desarrollados con las tecnologias mencionadas anteriormente</p>
                        </div>
                    )
            }
            <section className='projects-area'>
                {
                    arrayUrl.map((project, index) => {
                        const { 
                            technologies, 
                            urlProject, 
                            urlCode, 
                            urlImg,
                            name,
                        } = project;

                        return (
                            <article key={index} className='card-container'>
                                <Card
                                    technologies={technologies}
                                    urlProject={urlProject}
                                    urlCode={urlCode}
                                    urlImg={urlImg}
                                    name={name}
                                />
                            </article>
                        )
                    })
                }
            </section>
        </section>
    )
}
export default Projects