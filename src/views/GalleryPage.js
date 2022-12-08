import React, { useState } from 'react';
import '../assets/css/gallery.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { IoClose } from 'react-icons/io5';
import * as Images from '../utils/Galleries';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const MY_ART = [
			{
				img: Images.drawing1,
				title: "basta ah",
				rows: 5,
    		cols: 2
			},
			{
				img: Images.drawing2,
				title: "basta ah",
				rows: 5,
    		cols: 2
			},
			{
				img: Images.drawing3,
				title: "basta ah",
				rows: 5,
    		cols: 2
			},
			{
				img: Images.drawing4,
				title: "basta ah",
				rows: 5,
    		cols: 2
			},
			{
				img: Images.drawing5,
				title: "basta ah",
				rows: 5,
    		cols: 2
			},
			{
				img: Images.drawing6,
				title: "basta ah",
				rows: 5,
    		cols: 2
			}
			];

const MY_GAMES = [
			{
				img: Images.dota2,
				title: "basta ah",
				rows: 4,
    		cols: 4
			},
			{
				img: Images.dota1,
				title: "basta ah",
				rows: 2,
    		cols: 2
			},
			
			{
				img: Images.dota3,
				title: "basta ah",
				rows: 2,
    		cols: 2
			},
			{
				img: Images.ml1,
				title: "basta ah",
				rows: 4,
    		cols: 4
			}
			];

const MY_PER = [
			{
				img: Images.personal1,
				title: "basta ah",
				rows: 4,
    		cols: 4
			},
			{
				img: Images.personal2,
				title: "basta ah",
				rows: 4,
    		cols: 2
			},			{
				img: Images.personal4,
				title: "basta ah",
				rows: 4,
    		cols: 2
			},

			{
				img: Images.personal5,
				title: "basta ah",
				rows: 4,
    		cols: 2
			},
			{
				img: Images.personal6,
				title: "basta ah",
				rows: 4,
    		cols: 2
			}
			];





function getImages(images) {
  switch (images) {
    case 0:
      return MY_ART;
    case 1:
      return MY_GAMES;
    case 2:
      return MY_PER;
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
						<p className="font-size-regular">Art Works</p>
					</div>
					<div onClick={() => handleOpen(1)}>
						<img src={Images.emberspirit2} alt="" />
						<p className="font-size-regular">E-Gaming</p>
					</div>
					<div onClick={() => handleOpen(2)}>
						<img src={Images.personal1} alt="" />
						<p className="font-size-regular">Personal</p>
					</div>
				</div>
				

			:
				<>
					<div className="close-icon" onClick={() => setView(false)}>
	      			<i><IoClose /></i>
	      	</div>
					 <ImageList
				      sx={{ width: '80%', 
							      height: '80vh', 
							      borderRadius: '10px', 
							      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", 
							      backgroundColor: "rgba(0, 0, 0, 0.35)"  
							    }}
				      variant="quilted"
				      cols={6}
				      rowHeight={121}
				    >
				      {getImages(type).map((item) => (
				        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
				          <img
				            {...srcset(item.img, 121, item.rows, item.cols)}
				            alt={item.title}
				            loading="lazy"

				            style={{ borderRadius: '10px'  }}
				          />
				        </ImageListItem>
				      ))}
			    </ImageList>
				</>
			}

				

			
		</div>

		);
}

export default GalleryPage;

