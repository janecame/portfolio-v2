import React, { useState } from 'react';
import { Link } from 'react-router-dom';	
import '../assets/css/Navbar.css';
import { IoClose, IoMenu } from 'react-icons/io5';
import { useNav } from "../utils/navigation";

function Navbar(){

  const nav = useNav();
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
	const closeMobileMenu = (num) => {
    nav.scrollTo(num);
    setClick(false);
  }

	const showButton = () => {
		if(window.innerWidth <= 960){
			setButton(false);
		} else {
			setButton(true);
		}

	};
  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
      		<div className="navbar-container">
      			<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              {/*<img src={LOGO} alt="ceu"/>*/}
             
              <h1>CUE.<span style={{ color: '#2185D5' }}>me</span></h1> 
      			</Link>
      			
            <div className="menu-icon" onClick={handleClick}>
      				<i>
                 {click ? <IoClose /> : <IoMenu /> }

              </i>
      			</div>


      			<ul className={click ? 'nav-menu active' : 'nav-menu'}>
      				<li className='nav-item'>
      					<Link to='/' className='nav-links' onClick={() => closeMobileMenu(0)}>
      						Home
      					</Link>
      				</li>
      				<li className='nav-item'>
      					<Link to='#' className='nav-links' onClick={() => closeMobileMenu(1)}>
      						Journey
      					</Link>
      				</li>
      				<li className='nav-item'>
      					<Link to='#' className='nav-links' onClick={() => closeMobileMenu(2)}>
      						Projects
      					</Link>
      				</li>
              <li className='nav-item'>
                <Link to='#' className='nav-links' onClick={() => closeMobileMenu(3)}>
                  Gallery
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='#' className='nav-links' onClick={() => closeMobileMenu(4)}>
                  About Me
                </Link>
              </li>

      			</ul>
      		
      		</div>
      </nav>
    </>
  );
}

export default Navbar;