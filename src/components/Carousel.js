import React from 'react'
import ReactCardCarousel from 'react-card-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Button } from 'react-bootstrap';
import Carousel, { slidesToShowPlugin, slidesToScrollPlugin } from '@brainhubeu/react-carousel';
 import '@brainhubeu/react-carousel/lib/style.css';
import care1 from '../images/care1.png'
import care2 from '../images/care2.png'
import care3 from '../images/care3.png'
import care4 from '../images/care4.png'
import care5 from '../images/care5.png'
import phone from '../images/phone2.png'

import NextIcon from '../images/NextIcon.png'
const Caraousel = () => {
    return (
        <div>


<div  style={{marginLeft:"170px",width:"500px",marginTop:"40px",align:"center"}}>
                 <h2 className="Peace"style={{fontFamily:"sans-serif"}}>your peace of mind is</h2>
                  <h1 className="Peace" style={{fontFamily:"sans-serif" ,width:"430px"}}>our number one priority.</h1>
                  <div style={{background:"orange",width:"200px",height:"2px",marginTop:"30px",marginBottom:"40px"}}>

                  </div>
                  <p  className="Peace"style={{fontFamily:"sans-serif"}}>
                      UniversaCare offers a range of services for<br/> in-home care. We are your partners in <br/>
                      care ,and work with you to come up with a<br/>
                      plan of action. 
                 </p>         
       </div>

            <Carousel
  plugins={[
    'infinite',
    'fastSwipe',
    {
      resolve: slidesToShowPlugin,
      options: {
       numberOfSlides: 2
      }
    },
  ]}
>
<Card style={{ width: '100%' }}>
    <Card.Img variant="top" src={care5}  />
    <Card.Body>
      <Card.Title><h4>Hourly Home Care</h4></Card.Title>
      <Card.Text>
        <p >
            4x higher coverage limit<br/>
            than traditional policies<br/>
            for computers and home<br/>
            office equipment.
        </p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted" style={{align:"end"}}><img src={NextIcon} alt="" style={{alignContent:"end"}} className="ml"/></small>
    </Card.Footer>
  </Card>
  <Card style={{ width: '100%' }}>
    <Card.Img variant="top" src={care4} />
    <Card.Body>
      <Card.Title><h4>Personal Care</h4></Card.Title>
      <Card.Text>
      <p>
            4x higher coverage limit<br/>
            than traditional policies<br/>
            for computers and home<br/>
            office equipment.
        </p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><img src={NextIcon} alt="" style={{alignContent:"end"}} className="ml"/></small>
    </Card.Footer>
  </Card>

  <Card style={{ width: '100%' }}>
    <Card.Img variant="top" src={care3} />
    <Card.Body>
      <Card.Title><h4>Private Nursing</h4></Card.Title>
      <Card.Text>
      <p>
            4x higher coverage limit<br/>
            than traditional policies<br/>
            for computers and home<br/>
            office equipment.
        </p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><img src={NextIcon} alt="" style={{alignContent:"end"}} className="ml"/></small>
    </Card.Footer>
  </Card>

  <Card style={{ width: '100%' }}>
    <Card.Img variant="top" src={care2} />
    <Card.Body>
      <Card.Title><h4>Respite Care</h4></Card.Title>
      <Card.Text>
      <p>
            4x higher coverage limit<br/>
            than traditional policies<br/>
            for computers and home<br/>
            office equipment.
        </p>.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><img src={NextIcon} alt="" style={{alignContent:"end"}} className="ml"/></small>
    </Card.Footer>
  </Card>
  <Card style={{ width: '100%' }}>
    <Card.Img variant="top" src={care1} />
    <Card.Body>
      <Card.Title><h4>Life-in-Aid</h4></Card.Title>
      <Card.Text>
      <p>
            4x higher coverage limit<br/>
            than traditional policies<br/>
            for computers and home<br/>
            office equipment.
        </p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><img src={NextIcon} alt="" style={{alignContent:"end"}} className="ml"/></small>
    </Card.Footer>
  </Card>
  <Card style={{ width: '100%' }}>
    <Card.Img variant="top" src={care2} />
    <Card.Body>
      <Card.Title><h4>Memory Care</h4></Card.Title>
      <Card.Text>
      <p>
            4x higher coverage limit<br/>
            than traditional policies<br/>
            for computers and home<br/>
            office equipment.
        </p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><img src={NextIcon} alt="" style={{alignContent:"end"}} className="ml"/></small>
    </Card.Footer>
  </Card>

  <Card style={{ width: '100%' }}>
    <Card.Img variant="top" src={care5} />
    <Card.Body>
      <Card.Title><h4>Memory Care</h4></Card.Title>
      <Card.Text>
      <p>
            4x higher coverage limit<br/>
            than traditional policies<br/>
            for computers and home<br/>
            office equipment.
        </p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><img src={NextIcon} alt="" style={{alignContent:"end"}} className="ml"/></small>
    </Card.Footer>
  </Card>

 
</Carousel>

<div>
<Card style={{marginTop:"40px",marginLeft:"150px",width:"310px"}}>
    <Card.Img variant="top" src={phone} style={{width:"125px",marginLeft:"40px",marginTop:"50px",marginBottom:"23px"}}/>
    <Card.Body>
      <Card.Title><h6 style={{fontSize:"19px"}}>Do you need support ?</h6></Card.Title>
      <Card.Text>
        <h3 style={{fontSize:"15px",marginLeft:"35px"}}>We glad to help!</h3>
      </Card.Text>
      <Button variant="primary" style={{marginLeft:"10px",width:"200px",height:"60px"}}>CONTACT US</Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
</div>
        </div>
    )
}

export default Caraousel
