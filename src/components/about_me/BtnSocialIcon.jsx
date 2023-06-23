/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
const BtnSocialIcon = ({ icon, url }) => {
    return (
        <div className='btn-social-container'>
            <Link
                aria-label='Button Social Icon for navigate across my social networks'
                className='front-btn-social'
                target="_blank"
                to={url}
            >
                <span>{icon}</span>
            </Link>
        </div>
    )
}
export default BtnSocialIcon