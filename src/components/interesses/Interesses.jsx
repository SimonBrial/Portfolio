import { useContext } from 'react';
import { AppContext } from '../../context/appContext';
import { arrayInteresses } from '../../utils/index';
import { Element } from "./index";
const Interesses = () => {
    const globalContext = useContext(AppContext);
    const { descriptionApp, themes } = globalContext;
    //console.log(descriptionApp.interesses)
    return (
        <section className='interesses-container' id='interesses'>
            <h1 style={{
                borderBottom:
                    `${(themes !== undefined)
                        ? `3px solid ${themes}`
                        : "3px solid #0038E0"}`
            }}>{descriptionApp ? descriptionApp.interesses : null}</h1>
            {
                arrayInteresses.map((item, index) => {
                    if (descriptionApp !== undefined) {
                        return (
                            <div key={index}>
                                <Element array={item.techArray} title={
                                    descriptionApp.interesses == "Interesses"
                                        ? item.category[0]
                                        : item.category[1]
                                }
                                />
                            </div>
                        )
                    }
                })
            }
        </section>
    )
}
export default Interesses;