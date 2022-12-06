import React from 'react';
import '../assets/css/circle.css';


const SIZES = ['shape--large', 'shape--medium', 'shape--small'];
const BGCOLOR = ['bg--primary', 'bg--secondary', 'bg--tertiary'];

const Circle = ({ shapeSize, bgColor, position }) => {

	const checkShapeSize = SIZES.includes(shapeSize) ? shapeSize : SIZES[0];
	const checkColor = BGCOLOR.includes(bgColor) ? bgColor : BGCOLOR[0];
	
	return(
		  	<div className={`circle ${checkShapeSize} ${checkColor}`} style={{ top: position[0],  left: position[1] }}>
		      	<div className="shape" />
		  	</div>	

	);

};

export default Circle;