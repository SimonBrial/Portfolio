import { useState, useContext, useEffect } from 'react';
import AppContext from '../../context/appContext/AppContext';

const Switch = () => {

    const globalContext = useContext(AppContext);
    const { selectLanguage, descriptionApp, themes, themeDark } = globalContext;

    const [language, setLanguage] = useState(false);

    useEffect(() => {
        selectLanguage(language)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [language])

    return (
        <div className='switch'>
            {
                descriptionApp !== undefined ?
                    (
                        <p className='switcher-title'>{descriptionApp.header.switchBtn}</p>
                    ) :
                    (
                        <p className='switcher-title'>Idioms</p>
                    )
            }
            <div className='switcher'>
                <p>Esp</p>
                <div className='switcher-container' style={{ backgroundColor: `${(themes !== undefined) ? themes : "#21F9B8"}` }}>
                    <div className='switcher-container-inside' style={{ backgroundColor: `${(themeDark !== undefined) ? themeDark[0] : "#00B16C"}` }}>
                        <input title="checkbox-switch" type='checkbox' id='switcher' onClick={() => setLanguage(!language)} />
                        <label htmlFor="switcher" className='switcher-selector'>
                        </label>
                    </div>
                </div>
                <p>Eng</p>
            </div>
        </div>
    )
}

export default Switch