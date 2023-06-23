import { useContext } from 'react';
import { AppContext } from '../../context/appContext';
import { BiCloudDownload } from "react-icons/bi";
const BtnCV = () => {
    const globalContext = useContext(AppContext);
    const { descriptionApp, themes } = globalContext;
    const handleDownload = () => {
        const fileName = 'SimonBriceñoCV.pdf';
        const fileURL = `/docs/${fileName}`;
        const link = document.createElement('a');
        link.href = fileURL;
        link.download = fileName;
        link.click();
    };
    return (
        <div className='btn-container'>
            <button
                onClick={handleDownload}
                aria-label="CV Button"
                className='btn-front'
                target="_blank"
                title="btn-CV"
            >
                <span className='btn-icon'><BiCloudDownload /></span>
                {
                    descriptionApp !== undefined ?
                        (
                            <p>{descriptionApp.aboutMe.downBtn}</p>
                        ) : (
                            <p>Download CV</p>
                        )
                }
            </button>
            <div className='btn-background' style={{ backgroundColor: `${(themes !== undefined) ? themes : "#0038E0"}` }}></div>
        </div>
    )
}
export default BtnCV