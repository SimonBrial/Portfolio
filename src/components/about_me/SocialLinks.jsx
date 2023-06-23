import { BsLinkedin, BsTwitter, BsGithub, BsInstagram } from "react-icons/bs";
import { BtnSocialIcon } from "./index";
const SocialLinks = () => {
    return (
        <ul className='social-links-container'>
            <li>
                <BtnSocialIcon icon={<BsLinkedin />} url={"https://www.linkedin.com/in/simon-brice%C3%B1o-618555189/"} />
            </li>
            <li>
                <BtnSocialIcon icon={<BsTwitter />} url={"https://twitter.com/SimonBrial"} />
            </li>
            <li>
                <BtnSocialIcon icon={<BsGithub />} url={"https://github.com/SimonBrial"} />
            </li>
            <li>
                <BtnSocialIcon icon={<BsInstagram />} url={"https://www.instagram.com/simonbrial96/"} />
            </li>
        </ul>
    )
}
export default SocialLinks