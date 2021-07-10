import React from 'react'
import homepic from '../images/Vector 1.png'

const Home = () => {
    return (
        <div className="img1" style={{zIndex:"888"}} >
             <div className="b1">
             <p className="text1">
            <h1>The Future Of Health</h1>
            <h1>Care is Home Care</h1>
             <h3 style={{color:"grey",fontSize:"29px"}}>Over a Decade of Trusted Care</h3>
            </p>
            <button  style={{fontFamily:"sans-serif",width:"390px",textAlign:"center",height:
        "60px",fontSize:"25px",margin:"20px",textDecorationWidth:"10px",
         WebkitTextFillColor:"white",backgroundColor:"blue",marginLeft:"18px"
        
        }}> REQUEST AN APPOINTMENT</button>
            </div>
            <div className="b2">
                <img className="i1" src={homepic} alt="" />
            </div>
          
           
        </div>
    )
}

export default Home
