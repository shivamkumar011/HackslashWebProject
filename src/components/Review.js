import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Carousel, { slidesToShowPlugin, slidesToScrollPlugin } from '@brainhubeu/react-carousel';
 import '@brainhubeu/react-carousel/lib/style.css';
 import star from '../images/stars.png'
 import arrow from '../images/arrow.png'
 

 
const Review = () => {

  
    return (
        <div style={{backgroundColor:"#FFE6EE"}}>
        <div className="ev"style={{display:"flex"}}>
        <div style={{margin:"40px"}}>
            <h1>5.0</h1>
            <img src={star} alt=""/>
            <p>
                2,054 verified customers <br/>
                reviews by Google.
            </p>
        </div>
   
<Carousel 
  plugins={[
     'centered',
     'infinite',
     'arrows',
    {
      resolve: slidesToShowPlugin,
      options: {
       numberOfSlides: 2,
      },
    },
    {
      resolve: slidesToScrollPlugin,
      options: {
       numberOfSlides: 2,
      },
    },
  ]}   
> 
<Card style={{ width: '22rem',height:'300px' }}>
     
        <Card.Body>
        
    <Card.Title>Alvin Stanley</Card.Title>
    <Card.Img variant="top" src={star} style={{width:"140px",height:"30px"}} />
    
    <Card.Text style={{marginTop:"20px",fontFamily:"sans-serif"}}>
     <p style={{fontFamily:"sans-serif"}} >
         Great company to work for! This <br/>
         organization cares for its team of<br/>
         caregivers,office employees,and clients.There is always someone<br/>
         available to pick up the phone when <br/>
         you need help.

     </p>
    </Card.Text>
   
  </Card.Body>
</Card>
<Card style={{ width: '22rem',height:'300px' }}>
      
        <Card.Body>
    <Card.Title>Alvin Stanley</Card.Title>
    <Card.Img variant="top" src={star} style={{width:"140px",height:"30px"}} />
    <Card.Text>
    <p style={{marginTop:"20px",fontFamily:"sans-serif"}}>
         Great company to work for! This <br/>
         organization cares for its team of<br/>
         caregivers,office employees,and clients.

     </p>
    </Card.Text>
   
  </Card.Body>
</Card>
<Card style={{ width: '22rem',height:'300px' }}>
      <Card.Img variant="top" src="" />
        <Card.Body>
    <Card.Title>Alvin Stanley</Card.Title>
    <Card.Img variant="top" src={star} style={{width:"140px",height:"30px",marginBottom:"20px",marginTop:"10px"}}/>
    <Card.Text style={{marginTop:"20px",textAlign:"center",fontFamily:"sans-serif"}}>
     Awesome!
    </Card.Text>
   
  </Card.Body>
</Card>
  
</Carousel>




      
      </div>
      <div style={{display:"flex",marginLeft:"400px",marginTop:"10px"}}>
          <h1 style={{fontSize:"23px",color:"blue" }}>SEE ALL REVIEWS</h1>
          <img src={arrow}    alt=""/>
      </div>
        </div>
        

    )
}

export default Review
