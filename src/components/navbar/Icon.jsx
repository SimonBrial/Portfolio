import { useContext } from 'react';
import { AppContext } from '../../context/appContext';
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { RxSlash } from "react-icons/rx";
import { IconHeart } from '../../icons/index';
const Icon = () => {
    const globalContext = useContext(AppContext);
    const { themes } = globalContext;
    return (
        <div className='icon'>
            <span style={{ color: `${(themes !== undefined) ? themes : "#0038E0"}` }}><MdArrowBackIos /></span>
            <h1>SB</h1>
            <span style={{ color: `${(themes !== undefined) ? themes : "#0038E0"}` }}><IconHeart /></span>
            <span style={{ color: `${(themes !== undefined) ? themes : "#0038E0"}` }}><RxSlash /></span>
            <span style={{ color: `${(themes !== undefined) ? themes : "#0038E0"}` }}><MdArrowForwardIos /></span>
        </div>
    )
}
export default Icon