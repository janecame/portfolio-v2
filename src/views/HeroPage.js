import '../assets/css/hero.css';
import '../assets/css/waving.css';
import '../assets/css/typewriter.css';

import CustomButton from "../components/Button/CustomButton";
import Circle from "../components/Circle";
import { IoLogoInstagram, IoLogoFacebook, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';
import { html5, php, materialui, nodejs, js, react, mysql, bootstrap } from '../utils/ImageIcons'



const IconFloat = ({icon, size, top, left}) => {



  return (
        <div className="hero-logos" style={{ width: size, height: size, top: top, left: left}}>
          <img src={icon} alt="hero-profile"/>
        </div>
    );
}



function HeroPage(){

  return (

    <div className="container">
      <div className="wrapper">
        <div className="box">
          
          <div className="hero-content">
            <p className="font-size-semibold">Hi <span class="wave">👋</span> I'm</p>
            <p className="font-size-semibold">Rodrigo Cuello</p>
            <div id="main">
              React JS Developer
              <div id="border"></div>
            </div>
            <p className="font-size-regular">MUR, Philippines</p>
            <div style={{ marginTop: "20px" }} />
            <p className="hero-content-description font-size-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi
            dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati
            on ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in rep
            rehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sin
            t occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es
            t laborum.</p>
            <div style={{ marginTop: "20px" }}>
              <CustomButton
                buttonStyle="btn--primary"
                buttonSize="btn--large"
                buttonType="btn--secondary"
                type="button"
              >
              Hire Me
            </CustomButton>
            </div>
          </div>

          <div className="hero-self">
            <div className="profile">
              <img src={require("../assets/images/rodrigo2.jpg")} alt="hero-profile" className="hero-image"/>
            </div>
            
            

            <IconFloat icon={php} size="80px" top="59%" left="15%" />
            <IconFloat icon={react} size="100px" top="52%" left="34%" />
            <IconFloat icon={mysql} size="60px" top="53%" left="75%" />
            <IconFloat icon={nodejs} size="60px" top="45%" left="23%" />
            <IconFloat icon={js} size="80px" top="68%" left="30%" />
            <IconFloat icon={materialui} size="80px" top="70%" left="58%" />
            <IconFloat icon={bootstrap} size="60px" top="61%" left="53%" />


          </div>
          
          
          
        </div>


        <div className="hero-footer social-links">
          
          <i><IoLogoGithub /></i>
          <i><IoLogoLinkedin /></i>
          <i><IoLogoFacebook /></i>
          <i><IoLogoInstagram /></i>
          
        </div>
        
      </div>

      
       
    </div>
   
  );
}

export default HeroPage;