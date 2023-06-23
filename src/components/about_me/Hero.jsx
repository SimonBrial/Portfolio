import { useContext } from 'react';
import { AppContext } from '../../context/appContext';
import { IconAboutMe, IconHeart } from '../../icons';
import { BtnCV, SocialLinks } from './index';
const Hero = () => {
    const globalContext = useContext(AppContext);
    const { descriptionApp, themes } = globalContext;
    return (
        <div className='container-hero' id='about_me'>
            {
                descriptionApp !== undefined ? (
                    <div className='description'>
                        <div className='description-title'>
                            <h1>{descriptionApp.aboutMe.title} </h1>
                            <div className='heart-name' style={{ backgroundColor: `${(themes !== undefined) ? themes : "#0038E0"}` }}>
                                <p className='name'>Simon Briceño</p>
                                <span className='heart'><IconHeart /></span>
                            </div>
                        </div>
                        <div className='description-text'>
                            <p className='description-text-container'>
                                {descriptionApp.aboutMe.paragraph1.start} <strong><span className='bg-text1' style={{ backgroundColor: `${(themes !== undefined) ? themes : "#0038E0"}` }}></span>{descriptionApp.aboutMe.paragraph1.clave}</strong>{descriptionApp.aboutMe.paragraph1.rest}
                            </p>
                            <p className='description-text-container'>
                                <strong><span className='bg-text2' style={{ backgroundColor: `${(themes !== undefined) ? themes : "#0038E0"}` }}></span>{descriptionApp.aboutMe.paragraph2.clave}</strong>{descriptionApp.aboutMe.paragraph2.rest}
                            </p>
                        </div>
                    </div>
                ) : (
                    <></>
                )
            }
            <div className='infography'>
                <IconAboutMe />
                <BtnCV />
            </div>
            <SocialLinks />
        </div>
    )
}
export default Hero