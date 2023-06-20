/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { AppContext } from '../../context/appContext';
import { Icon } from '@iconify/react';

const Element = ({ array, title }) => {

    const globalContext = useContext(AppContext);
    const { themes } = globalContext;

    return (
        <div className='element-container'>
            <h2 style={{
                borderBottom:
                    `${(themes !== undefined)
                        ? `3px solid ${themes}`
                        : "3px solid #21F9B8"}`
            }}>{title}</h2>
            <ul>
                {
                    array.map((item, index) => {
                        return (
                            <li key={index} className='item-list-container'>
                                <button className='container'>
                                    <div className='front-element'>
                                        <span><Icon icon={item.techIcon} /></span>
                                        <p>{item.techName}</p>
                                    </div>
                                    <div className='bg-element' style={{ backgroundColor: `${(themes !== undefined) ? themes : "#21F9B8"}` }}>

                                    </div>
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Element