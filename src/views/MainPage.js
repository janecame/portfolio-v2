import HeroPage from './HeroPage';
import ProjectPage from './ProjectPage';
import TimelinePage from './TimelinePage';
import GalleryPage from './GalleryPage'; 
import AboutPage from './AboutPage'; 
import Footer from '../components/Footer';  
import Circle from '../components/Circle'; 
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React, { useRef, useState } from 'react';
import { useNav } from "../utils/navigation";

function MainPage() {
	const nav = useNav();
	

	return(
		<>
			
			<Parallax pages={6} style={{ top: '0', left: '0' }} ref={nav.ref}>
			  <ParallaxLayer
				offset={0}
				speed={1.5}
				>
			  	<Circle 
	              position={['48%', '52%']}
	              shapeSize="shape--medium"
	            />
	            
			  	</ParallaxLayer>

			  <ParallaxLayer
			    offset={0}
			    speed={2.5}
			  >
			    <HeroPage />
			  </ParallaxLayer>
			   
			  <ParallaxLayer
				offset={1}
				speed={1.5}
				>
				<Circle
				  bgColor="bg--tertiary"
	              position={['5%', '-5%']}
	              shapeSize="shape--small"

	            />
				<Circle
	              position={['10%', '80%']}
	              shapeSize="shape--small"

	            />
			  	<Circle 
			  	  bgColor="bg--secondary"
	              position={['70%', '32%']}
	              shapeSize="shape--medium"
	            />
	            
			  	</ParallaxLayer>

			  <ParallaxLayer
			    offset={1}
			    speed={0.5}
			    style={{
			      display: 'flex',
			      justifyContent: 'center',
			      alignItems: 'center',
			      color: '#000'
			    }}
			  >
			 	 <TimelinePage />
			  
			  </ParallaxLayer>


			  <ParallaxLayer
			    offset={2}
			    speed={2.5}
			  >
			  	<Circle 
			  		bgColor="bg--tertiary"
		            position={['30%', '-10%']}
		            shapeSize="shape--small"
			  	/>
			  	<Circle 
			  		bgColor="bg--secondary"
		            position={['10%', '85%']}
		            shapeSize="shape--small"
			  	/>
			  	
			  </ParallaxLayer>

			  <ParallaxLayer
			    offset={2}
			    speed={2.0}
			  >
			  	<Circle 
			  		bgColor="bg--primary"
		            position={['80%', '25%']}
		            shapeSize="shape--large"
			  	/>
			  	
			  </ParallaxLayer>

			  <ParallaxLayer
			    offset={2}
			    speed={1.5}
			    style={{
			      display: 'flex',
			      justifyContent: 'center',
			      alignItems: 'center'
			    }}>
			    <ProjectPage />
			  </ParallaxLayer>


			  <ParallaxLayer
			    offset={3}
			    speed={2.5}
			  >
			  	<Circle 
			  		bgColor="bg--tertiary"
		            position={['60%', '1%']}
		            shapeSize="shape--small"
			  	/>
			  	<Circle 
			  		bgColor="bg--secondary"
		            position={['10%', '85%']}
		            shapeSize="shape--small"
			  	/>
			  	
			  </ParallaxLayer>

			  <ParallaxLayer
			    offset={3}
			    speed={2.0}
			  >
			  	<Circle 
			  		bgColor="bg--primary"
		            position={['70%', '65%']}
		            shapeSize="shape--large"
			  	/>
			  	<Circle 
			  		bgColor="bg--primary"
		            position={['10%', '30%']}
		            shapeSize="shape--medium"
			  	/>
			  	
			  	
			  </ParallaxLayer>



			  <ParallaxLayer
			    offset={3}
			    speed={1.5}
			    style={{
			      display: 'flex',
			      justifyContent: 'center',
			      alignItems: 'center'
			    }}>
			    <GalleryPage />
			  </ParallaxLayer>





			  <ParallaxLayer offset={4} speed={1.5}>
			    <AboutPage />  
			  </ParallaxLayer>
			  


			  <ParallaxLayer offset={5} speed={1.5} style={{
			      display: 'flex',
			      flexDirection: 'column',
			      justifyContent: 'end',
			      heigth: '100vh'
			    	
			    }}>
			    <Footer />
			  </ParallaxLayer>




			</Parallax>
			
		</>
		);


}

export default MainPage;