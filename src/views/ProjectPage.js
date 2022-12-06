import '../assets/css/ProjectPage.css';
import { html5, php, materialui, nodejs, js, react, mysql, bootstrap } from '../utils/ImageIcons';
import { IoLogoCss3  } from 'react-icons/io5';
import { DiCss3, DiHtml5, DiPhp, DiJqueryLogo, DiMysql, DiBootstrap} from "react-icons/di";

const Project = ({ img, name, role, description, devIcons }) => {
	
	return(

		<div className="project-box">
			<div className="project-img">
				<img src={img} alt="project-page"/>
			</div>
			<div className="project-info">
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

	return( 

		<div className="container">
			
			<div className="project-wrapper">
				<Project
					img={materialui}
					name="materialui"
					role="contributions"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo
								d tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim
								Duis aute ir"
					devIcons={[<DiHtml5 />, <DiCss3 />, <DiPhp />, <DiJqueryLogo/>, <DiBootstrap/>, <DiMysql />]}
				/>

				<Project
					img={bootstrap}
					name="materialui"
					role="contributions"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo
								d tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim
								Duis aute ir"
					devIcons={[<DiHtml5 />, <DiCss3 />, <DiPhp />, <DiJqueryLogo/>, <DiBootstrap/>, <DiMysql />]}
				/>

				<div className="view-more-menu">
					<a href="#" onClick={() => console.log("dsdsdsds")}>More >></a>
				</div>
				
			</div>
			
		</div>
		);
}


export default ProjectPage;