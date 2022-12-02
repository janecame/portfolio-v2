import { IoLogoInstagram, IoLogoFacebook, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';


function Footer(){

	return(

			<div className="footer social-links">
          
	          	<i><IoLogoGithub /></i>
	          	<i><IoLogoLinkedin /></i>
	          	<i><IoLogoFacebook /></i>
	          	<i><IoLogoInstagram /></i>
	          
	        </div>
		);
}

export default Footer;