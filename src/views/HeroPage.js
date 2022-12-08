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
            <p className="hero-content-description font-size-regular">

            Hello! My name is Rodrigo Cuello and I want to be a React JS Developer with a passion for creating 
            innovative and user-friendly applications. I do coding for 3 years of experience in the 
            field, working with a variety of programming languages and frameworks. 
            I am proficient in Javascript, and PHP. I am always looking to learn and grow as a developer, and I am excited to share my skills and experience with you through my portfolio. Thank you for taking the time to visit!
            </p>
            <div style={{ marginTop: "20px" }}>
              <CustomButton
                buttonStyle="btn--primary"
                buttonSize="btn--large"
                buttonType="btn--secondary"
                type="button"
              >
              Download CV
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
            <Circle 
              bgColor="bg--secondary"
              position={['18%', '55%']}
              shapeSize="shape--small"
            />

          </div>
          
          
          
        </div>


        <div className="hero-footer social-links">
          
              <a 
                href='https://github.com/janecame'
                target='github'
                arial-label='github'
                style={{ fontSize: '20px'}}
              >
                <IoLogoGithub />
              </a>
              <a 
                href='http://www.linkedin.com/in/rodrigo-cuello-cue03'
                target='linkedin'
                arial-label='linkedin'
                style={{ fontSize: '20px'}}
              >
                <IoLogoLinkedin />
              </a>
              <a 
                href='https://www.facebook.com/jane.came'
                target='Facebook'
                arial-label='Facebook'
                style={{ fontSize: '20px'}}
              >
                <IoLogoFacebook />
              </a>
              <a 
                href='https://www.instagram.com/rodrigo_cuello_03/?hl=en'
                target='instagram'
                arial-label='instagram'
                style={{ fontSize: '20px'}}
              >
                <IoLogoInstagram />
              </a>
          
        </div>
        
      </div>

      
       
    </div>
   
  );
}

export default HeroPage;