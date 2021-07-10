import React from 'react'
import { NavLink,Nav,Bars,NavMenu } from './NavbarElements' 
import  uclogo from '../../images/UC-Logo_Vector-01 2.jpg'
import phone from '../../images/phone.png'

const Navbar = ({toggle}) => {
    return (
        <div>
            <Nav>
                <NavLink to="/" >
                 <img  className="uc"src={uclogo}  alt=""/>
                </NavLink>
                
                <Bars  onClick={toggle}/>
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                       ABOUT <h4 className="line" >|</h4>
                    </NavLink>
                    <NavLink to="/services" activeStyle>
                       SERVICES  <h4  className="line" >|</h4>
                    </NavLink>
                    <NavLink to="/resources" activeStyle>
                       RESOURCES  <h4  className="line" >|</h4>
                    </NavLink>
                    <NavLink to="/careers" activeStyle>
                       CAREERS  <h4  className="line" >|</h4>
                    </NavLink>
                    <NavLink to="/homecare heroes" activeStyle>
                       HOMECARE HEROES  <h4  className="line">|</h4>
                    </NavLink>
                    <NavLink to="/contact-us" activeStyle>
                       CONTACT <h4 style={{WebkitTextFillColor:"blue",marginLeft:"100px",display:"flex"}}> <img src={phone} alt=""/> 866-986-3356</h4> 
                    </NavLink>
                </NavMenu>
            </Nav>
        </div>
    )
}

export default Navbar

