import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {FaBars, FaSpaceShuttle, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './Home.css'
import { useState } from 'react';

export default () => {
    
    const bluePepsi = 'https://i.ibb.co/njpXyVn/pepsi001.png' ;
    const greyPepsi = 'https://i.ibb.co/6ySGDkR/pepsi002.png' ;
    const blackPepsi = 'https://i.ibb.co/jfxGL8d/pepsi003.png' ;
    const [img, setimg] = useState(bluePepsi);
    const [background, setbackground] = useState('#0261bf');
    

    let homeStyles = {
        background: background
    }
    const home = {
      
    }

    
    const handleBlue = () => {
        setimg(bluePepsi) ;
        setbackground('#0261bf')
    }
    const handleGrey = () => {
        setimg(greyPepsi);
        setbackground('#e60c2d')
        let homeStyles = {
            background: background
        }
    }
    const handleBlack = () => {
        setimg(blackPepsi);
        setbackground('#1f1e1f');
        let homeStyles = {
            background: background
        } ;
        
    }
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <div style={homeStyles} className='home'>
            <Router>
            
                <div>
                <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src='https://i.ibb.co/myT6v4Z/logo.png' className='pepsiLogo' ></img>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            {click ? <FaTimes />  : <FaBars />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'} style={click ? homeStyles : home} >
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                path='/Services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
               <div  className='section'>
                   <div className="words">
                        <h1 className='title'> WHAT I LIKE</h1>
                        <p className='subtitle'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea odio, amet molestiae magni perspiciatis culpa architecto iste facere labore consequatur nesciunt obcaecati vel, nihil possimus, voluptatibus minima aut earum aliquid.</p>
                        <button className='btn'>VIEW ALL PRODUCTS</button>
                   </div>
                   <div className='image'>
                       <img src={img} className='img'></img>
                   </div>
               </div>
               <div className='botles'>
                   <img src={bluePepsi} className='pepsi blue' onClick={handleBlue}></img>
                   <img src={greyPepsi} className='pepsi' onClick={handleGrey}></img>
                   <img src={blackPepsi} className='pepsi' onClick={handleBlack}></img>
               </div>
               </div>
              
                

            </Router>
            
        </div>
    )
}