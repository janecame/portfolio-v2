import { IoLogoInstagram, IoLogoFacebook, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';
import '../assets/css/Footer.css';

function Footer(){

	return(

			<div className="container">
				<div className="footer-wrapper">
          			<div className="footer-box">

          				<h1>Logo Here</h1>
          				<p>cuello.web.app | 09619055939 | email@gmail.com</p>

	          			<div className="social-links">
	          				<i><IoLogoGithub /></i>
				          	<i><IoLogoLinkedin /></i>
				          	<i><IoLogoFacebook /></i>
				          	<i><IoLogoInstagram /></i>
	          			</div>
	          		</div>
	          	</div>
	          
	        </div>
		);
}

export default Footer;