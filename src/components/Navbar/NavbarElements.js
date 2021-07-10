import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import{FaBars}from 'react-icons/fa'

export const Nav=styled.nav`
background:#ffffff;
height: 80px;
display: flex;
justify-content: space-between;
padding:0.5rem calc((100vw-1000px)/2);
z-index: 10;

`
export const NavLink=styled(Link)`
color:#000000 ;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-size:16px;
z-index: 899;
&.active{
 color: blue;
}

`
export const Bars= styled(FaBars)`
display: none;
color:#10A5F5;
@media screen and (max-width:768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0px;
    
    transform: translate(-100%,93%);
    font-size:1.8rem ;
    cursor: pointer;
}

`
export const NavMenu=styled.div`
display: flex;
align-items: center;
margin-right: 20px;
@media screen and(max-width:768px){
    display: none;
}
`


