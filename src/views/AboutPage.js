import '../assets/css/about.css';
import { IoSpeedometerOutline, IoSparklesOutline, IoLogoGithub } from 'react-icons/io5';


const AboutItem = ({ icon, description }) => {
	return (
			<div className="about-item">
				<div>
					{icon}
				</div>
				<div>
					<p>{description}</p>
					<p>dsajdsajdksjadkjk</p>
				</div>
			</div>

		);
}


function AboutPage(){

	return(
			<div className="container">
				<div className="about-wrapper">
					<div className="about-box about-info">
						<p className="font-size-semibold">Rodrigo M. Cuello Jr.</p>
						<p className="font-size-semibold">"Qoutes"</p>
						<p className="font-size-regular"><strong>Went to</strong> STI West Negros University </p>
						<p className="font-size-regular"><strong>Lives at</strong> Murcia, Blumintritt, Canla-on View Subd. </p>
						<p className="font-size-regular">October 03, 2000</p>
						<p className="font-size-regular">Single</p>
						<p className="font-size-regular">Male</p>


					</div>
					<div className="circle" />
					<div className="about-box">
						<AboutItem icon={<IoSpeedometerOutline />} description="whateever" />
						<AboutItem icon={<IoSparklesOutline />} description="whateever" />	
						<AboutItem icon={<IoLogoGithub />} description="whateever" />	

					</div>
				</div>
			</div>
			
		);
}


export default AboutPage;