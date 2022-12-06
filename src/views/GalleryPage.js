import React, { useState } from 'react';
import '../assets/css/gallery.css';

import { IoClose } from 'react-icons/io5';
import * as Images from '../utils/Galleries';

const Element = ({ image, description, keys }) => {
	return(
		<div className="media-element" key={keys}>
		    <img src={image} alt="" />
		    <p>{description}</p>
		  </div>

		);
}

const MY_ART = [
			{
				image: Images.drawing1,
				description: "basta ah"
			},
			{
				image: Images.drawing1,
				description: "basta ah"
			},
			{
				image: Images.drawing2,
				description: "basta ah"
			},
			{
				image: Images.drawing3,
				description: "basta ah"
			},

			{
				image: Images.drawing4,
				description: "basta ah"
			},
			{
				image: Images.drawing5,
				description: "basta ah"
			},
			{
				image: Images.drawing6,
				description: "basta ah"
			}
			];

const MY_GAMES = [
			{
				image: Images.dota1,
				description: "basta"
			},
			{
				image: Images.dota2,
				description: "basta"
			},
			{
				image: Images.dota3,
				description: "basta"
			},
			{
				image: Images.ml1,
				description: "basta"
			}
			];

const MY_PER = [
			{
				image: Images.drawing6,
				description: "basta per"
			},
			{
				image: Images.drawing6,
				description: "basta per"
			},
			{
				image: Images.drawing6,
				description: "basta per"
			},
			{
				image: Images.drawing6,
				description: "basta per"
			},

			{
				image: Images.drawing6,
				description: "basta per"
			},
			{
				image: Images.drawing6,
				description: "basta per"
			},
			{
				image: Images.drawing6,
				description: "basta per"
			}
			];


const Arts = () => {

	return (
			<div className="media-scroller snaps-inline">
				{MY_ART.map((e, i) => (
					<Element image={e.image} description={e.description} />
				))}	
			  		
			</div>


		);
}

const Egames = () => {

	return (
			<div className="media-scroller snaps-inline">
				{MY_GAMES.map((e, i) => (
					<Element image={e.image} description={e.description} />
				))}	
			  		
			</div>
	);
}


const Personal = () => {

	return (
			<div className="media-scroller snaps-inline">
				{MY_PER.map((e, i) => (
					<Element image={e.image} description={e.description} />
				))}	
			  		
			</div>
	);
}



function getGallery(type) {
  switch (type) {
    case 0:
      return <Arts />;
    case 1:
      return <Egames />;
    case 2:
      return <Personal />;
    default:
      return "unknown step";
  }
}


function GalleryPage () {
	const[type, setType] = useState(0);
	const[view, setView] = useState(false);

	const handleOpen = (num) =>{
		setType(num);
		setView(true);
	}

	return (

		<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100vw', height: '100vh' }}>
			{!view ? 
				


				<div className="gallery">
					<div onClick={() => handleOpen(0)}>
						<img src={Images.drawing31} alt="" />
						<p>My Art</p>
					</div>
					<div onClick={() => handleOpen(1)}>
						<img src={Images.emberspirit2} alt="" />
						<p>E-Gaming</p>
					</div>
					<div onClick={() => handleOpen(2)}>
						<img src={Images.personal1} alt="" />
						<p>Personal</p>
					</div>
				</div>
				

			:
				<>
					<div className="close-icon" onClick={() => setView(false)}>
	      				<i><IoClose /></i>
	      			</div>
					{getGallery(type)}
				</>
			}

				

			
		</div>

		);
}

export default GalleryPage;

