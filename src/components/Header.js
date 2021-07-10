import React from 'react'
 import log from '../images/grommet-icons_circle-information.png'
function Header() {
    return (
        <div className="notificationbar" >

       <a  className="link" href="!#" style={{textAlign:"center",display:"flex",justifyContent:"center",WebkitTextFillColor:"#1261A0",padding:"3dp",marginTop:"4px",textDecoration:"none"}}> <img className="link" src={log} style={{padding:"1px",marginRight:"3px"}}alt=""/><h3 className="link" style={{fontSize:"22px"}}>READ ABOUT OUR COVID-19 PRECAUTIONS </h3></a>
           
            
        </div>
    )
}

export default Header
