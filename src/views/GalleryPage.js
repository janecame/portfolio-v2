
import '../assets/css/GalleryPage.css';

import { drawing1, drawing2, drawing3, drawing5 } from '../utils/Galleries';


const Element = ({ image, description }) => {
	return(
		<div className="media-element">
		    <img src={image} alt="" />
		    <p>{description}</p>
		  </div>

		);
}


function GalleryPage () {


	return (

		<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100vw', height: '100vh' }}>
			<div className="media-scroller snaps-inline">
			  
			  	<Element image={drawing1} description="Drawing 1" />
			  	<Element image={drawing3} description="Drawing 1" />
			  	<Element image={drawing2} description="Drawing 1" />
			  	<Element image={drawing3} description="Drawing 1" />
			  	<Element image={drawing5} description="Drawing 1" />
			  	<Element image={drawing2} description="Drawing 1" />
			  	<Element image={drawing1} description="Drawing 1" />
			 
			</div>
		</div>

		);
}

export default GalleryPage;

