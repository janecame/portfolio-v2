import { IoLogoInstagram, IoLogoFacebook, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';
import '../assets/css/Footer.css';

function Footer(){

	return(

			<div className="container">
				<div className="footer-wrapper">
          			<div className="footer-box">

          				<h1>CUE.<span style={{ color: '#2185D5' }}>me</span></h1> 
          				<p>09619055939 | email@gmail.com</p>


	          			<div className="social-links" style={{ marginTop: "20px" }}>

	          				<a 
								href='https://github.com/janecame'
								target='github'
								arial-label='github'
							>
								<IoLogoGithub />
							</a>
							<a 
								href='http://www.linkedin.com/in/rodrigo-cuello-cue03'
								target='linkedin'
								arial-label='linkedin'
							>
								<IoLogoLinkedin />
							</a>
							<a 
								href='https://www.facebook.com/jane.came'
								target='Facebook'
								arial-label='Facebook'
							>
								<IoLogoFacebook />
							</a>
							<a 
								href='https://www.instagram.com/rodrigo_cuello_03/?hl=en'
								target='instagram'
								arial-label='instagram'
							>
								<IoLogoInstagram />
							</a>
	          			</div>

	          			<p>© Copyright, CUE.me</p>
	          		</div>
	          	</div>
	          
	        </div>
		);
}

export default Footer;