import '../assets/css/about.css';
import { IoSpeedometerOutline, IoAnalyticsOutline, IoTimerOutline } from 'react-icons/io5';


const AboutItem = ({ icon, title, description }) => {
	return (
			<div className="about-item">
				<div>
					{icon}
				</div>
				<div>
					<h2>{title}</h2>
					<p>{description}</p>
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
						<p className="font-size-semibold">"Google is my best friend Nah ChatGPT."</p>
						<p className="font-size-regular"><strong>Went to</strong> STI West Negros University </p>
						<p className="font-size-regular"><strong>Lives at</strong> Murcia, Blumintritt, Canla-on View Subd. </p>
						<p className="font-size-regular"><strong>Bron in </strong> October 03, 2000</p>


					</div>
					<div className="about-box">
						<AboutItem 
							icon={<IoSpeedometerOutline />} 
							title="consistency" 
							description="Coding since 2018 until present"
						/>
						<AboutItem 
							icon={<IoAnalyticsOutline />} 
							title="perseverance" 
							description="Learning and solving every error or bugs"/>	
						<AboutItem 
							icon={<IoTimerOutline />} 
							title="self-discplined" 
							description="5-8 hours of coding every single day"/>	

					</div>
				</div>
			</div>
			
		);
}


export default AboutPage;