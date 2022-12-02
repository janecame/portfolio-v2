import HeroPage from './HeroPage';
import ProjectPage from './ProjectPage';
import TimelinePage from './TimelinePage';
import GalleryPage from './GalleryPage';   
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React, { useRef, useState } from 'react';
import { useNav } from "../utils/navigation";


function MainPage() {
	const [galleryOpen, setGalleryOpen] = useState(false); 
	const nav = useNav();
	

	return(
		<>
			
			<Parallax pages={4} style={{ top: '0', left: '0' }} ref={nav.ref}>

			  <ParallaxLayer
			    offset={0}
			    speed={2.5}
			  >
			    <HeroPage />
			  </ParallaxLayer>
			  <ParallaxLayer offset={1} speed={0.3} style={{ backgroundColor: '#333'}} />
			  <ParallaxLayer
			    offset={1}
			    speed={0.5}
			    style={{
			      display: 'flex',
			      justifyContent: 'center',
			      alignItems: 'center'
			    }}
			  >
			 	 <TimelinePage />
			  </ParallaxLayer>

			  <ParallaxLayer offset={2} speed={2} style={{ backgroundColor: '#333' }} />
			  <ParallaxLayer
			    offset={2}
			    speed={1.5}
			    style={{
			      display: 'flex',
			      justifyContent: 'center',
			      alignItems: 'center',
			      color: 'white'
			    }}>
			    <ProjectPage />
			  </ParallaxLayer>

			  <ParallaxLayer
			    offset={3}
			    speed={1.5}
			    style={{
			      display: 'flex',
			      justifyContent: 'center',
			      alignItems: 'center'
			    }}>

			    {galleryOpen ? 
			    	<GalleryPage />
			    	
			    : 
			    	<>
			    	<h1>dsakdsa</h1>
			    	<button type='button' onClick={() => setGalleryOpen(true)} > Gallery</button>
					</>
				}
			    
			  </ParallaxLayer>


			  
			</Parallax>
			
		</>
		);


}

export default MainPage;