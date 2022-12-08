import '../assets/css/project.css';
import * as Images from '../utils/Galleries';
import { IoLogoCss3  } from 'react-icons/io5';
import { DiCss3, DiHtml5, DiPhp, DiJqueryLogo, DiMysql, DiBootstrap} from "react-icons/di";
import React, { useState } from 'react'; 
import { IoClose } from 'react-icons/io5';

const PROJECTS = [
		{
			img: Images.oems,
			name: "OAMS",
			role: "Lead Programmer",
			description: "OAMS or Online Admision Management System for STI West Negros University is developed during taking my Senio high school grade 12 capstone. I was the lead programmer of the team.",
			devIcons: [<DiHtml5 />, <DiCss3 />, <DiPhp />, <DiJqueryLogo/>, <DiBootstrap/>, <DiMysql />]
		},
		{
			img: Images.baccims,
			name: "baccims",
			role: "Deployment",
			description: "BACCIMS or Crime Mapping Incident Management Information System in Bacolod City. I was task to deploy the project during my on-the-job training in my 3rd years of college",
			devIcons: [<DiHtml5 />, <DiCss3 />, <DiPhp />, <DiJqueryLogo/>, <DiBootstrap/>, <DiMysql />]
		},
		{
			img: Images.brgy38,
			name: "eDocPortal",
			role: "Maintenace, Deployment",
			description: "eDocPortal or Electronic Docment Portal with Quick Response Technology for Bacolod City. I was task to maintain and deploy the project during my on-the-job training in my 3rd years of college",
			devIcons: [<DiHtml5 />, <DiCss3 />, <DiPhp />, <DiJqueryLogo/>, <DiBootstrap/>, <DiMysql />]
		}
	];


const ProjectItem = ({ img, name, role, devIcons, keys}) => {

	return(

		<div className="project-box" key={keys}>
			<img src={img} alt="project-page"/>

			<div className="project-info">
				
				
		        <div className="details">
					<p className="font-size-semibold" >{name}</p>
					<p className="font-size-regular" >{role}</p>
					
				</div>
				<div className="development">
          			{devIcons?.map((icon, i) => 
						    <i key={i}>
						        {icon}
						    </i>
					)}
		          
		          
		        </div>
			</div>
		
		</div>
	);
}


const Project = ({ img, name, role, description, devIcons}) => {

	return(

		<div className="project-wrapper-info">
			<div className="project-info-img">
				<img src={img} alt="project-page-info"/>
			</div>
			<div className="project-info-all">
				<div className="details">
					<p className="font-size-semibold" >{name}</p>
					<p className="font-size-regular" >{role}</p>
					<p className="font-size-regular" >{description}</p>	
				</div>
				<div className="development">
          			{devIcons?.map((icon, i) => 
						    <i key={i}>
						        {icon}
						    </i>
					)} 
		        </div>
			</div>
		
		</div>
	);
}


function ProjectPage(){
	const [view, setView] = useState(false);
	const [info, setInfo] = useState([]);

	const handleClick = (i) => {
		setView(true);
		setInfo(PROJECTS[i]);
	}

	return( 

		<div className="container">
			
			<div className="project-wrapper">
				{!view ? 
					<>
						{PROJECTS.map((obj, key) =>
								<div onClick={() => handleClick(key)}> 
									<ProjectItem
										keys={key}
										img={obj.img}
										name={obj.name}
										role={obj.role}
										devIcons={obj.devIcons}
									/>
								</div>
							)}
					</>
					:
					<>
						<div className="close-icon" onClick={() => setView(false)}>
				      		<i><IoClose /></i>
				      	</div>

				      	<Project 
							img={info.img}
							name={info.name}
							role={info.role}
							description={info.description}
							devIcons={info.devIcons}
						/>
					</>
				}
				
				
	
				
			</div>
			
		</div>
		);
}


export default ProjectPage;