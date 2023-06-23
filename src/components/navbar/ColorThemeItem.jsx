import { useContext } from 'react';
import { AppContext } from '../../context/appContext';
// eslint-disable-next-line react/prop-types
const ColorThemeItem = ({ colorCode, id }) => {
    const globalContext = useContext(AppContext);
    const { selectTheme } = globalContext;
    return (
        <div className='dropdown-item-container'>
            <p>color {id}</p>
            <div className='color-code-container'>
                <button
                    style={{ backgroundColor: `${colorCode}` }}
                    onClick={() => selectTheme(id)}
                    aria-label='Color Theme Button'
                    className='front-color-code'
                    title='btn-color-theme'
                    id='btn-theme-color'
                ></button>
                <div className='bg-color-code'></div>
            </div>
        </div>
    )
}
export default ColorThemeItem