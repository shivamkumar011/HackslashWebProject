import React from 'react'
import Footer from '../components/footer/index.js'
import Icon from '../components/icons'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useMediaQuery } from 'react-responsive';
import MetaTags from 'react-meta-tags';
import './footer.css';
import ScrollToTop from '../components/ScrollToTop/index.js';

export function FooterContainer() {
    return (
        <Footer>
            <MetaTags>     
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </MetaTags>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column1>
                <div className="mobscroll"><ScrollToTop/></div>
                <Footer.Title>HEADQUARTERS</Footer.Title>
                <div src="" className="underline"></div>
                <Footer.Link1 href="#"><div src="" className="underline2"></div></Footer.Link1>
                    <Footer.Link1 href="#">246-50 57th Drive 
                                        <br/>Douglaston, NY 11362
                                        <br/>hello@universacare.com </Footer.Link1>
                    <div className="phone2"><Footer.Link1 href="#">P: (718) 224-3758</Footer.Link1></div>
                    <div className="phone2"><Footer.Link1 href="#">F: 8777999065 </Footer.Link1></div> 
                    <div className="phone1"><Footer.Link1 href="#">Phone: (718) 224-3758</Footer.Link1></div>
                    <div className="phone1"><Footer.Link1 href="#">Fax: 8777999065 </Footer.Link1></div>
                    
                    <br/>
                <div className="careme"></div>
                </Footer.Column1>
                <Footer.Hide>
                <Footer.Column>
                <Footer.Title>SERVICES</Footer.Title> 
                <div src="" className="underline"></div>
                    <Footer.Link href="#"><div src="" className="circle1"><div className="text"><Footer.Link href="#"> Hourly Care</Footer.Link></div></div></Footer.Link>
                    <Footer.Link href="#"><div src="" className="circle1"><div className="text"><Footer.Link href="#"> Daily Care</Footer.Link></div></div></Footer.Link>
                    <Footer.Link href="#"><div src="" className="circle1"><div className="text"><Footer.Link href="#"> Hospital to Home</Footer.Link></div></div></Footer.Link>
                    <Footer.Link href="#"><div src="" className="circle1"><div className="text"><Footer.Link href="#"> Respite Care</Footer.Link></div></div></Footer.Link>
                    <Footer.Link href="#"><div src="" className="circle1"><div className="text"><Footer.Link href="#"> Specialized Care</Footer.Link></div></div></Footer.Link>
                </Footer.Column>
                </Footer.Hide>

                <Footer.Hide>
                <Footer.Column2>
                <Footer.Title>COMPANY</Footer.Title>
                <div src="" className="underline"></div>
                    <Footer.Link href="#"><div src="" className="circle1"><div className="text"><Footer.Link href="#"> About us</Footer.Link></div></div></Footer.Link>
                    <Footer.Link href="#"><div src="" className="circle1"><div className="text"><Footer.Link href="#"> Locations</Footer.Link></div></div></Footer.Link>
                    <Footer.Link href="#"><div src="" className="circle1"><div className="text"><Footer.Link href="#"> Caregivers</Footer.Link></div></div></Footer.Link>
                    <Footer.Link href="#"><div src="" className="circle1"><div className="text"><Footer.Link href="#"> News & Blog</Footer.Link></div></div></Footer.Link>
                    <Footer.Link href="#"><div src="" className="circle1"><div className="text"><Footer.Link href="#"> Contact Us</Footer.Link></div></div></Footer.Link>
                    <Footer.Link href="#"><div src="" className="circle1"><div className="text"><Footer.Link href="#"> FAQ</Footer.Link></div></div></Footer.Link>
                </Footer.Column2>
                </Footer.Hide>
                
                <Footer.Together>
                    <Footer.Title>SERVICES&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;COMPANY</Footer.Title>
                    <Footer.Link><div className="text"><div src="" className="underline3"></div></div></Footer.Link>
                    <Footer.Link href="#"><div className="text"><img src="" className="circle1"/><Footer.Link href="#"> Hourly Care &nbsp;&emsp;&emsp;</Footer.Link><img src="" className="circle1"/><Footer.Link href="#"> About us</Footer.Link></div></Footer.Link>
                    <Footer.Link href="#"><div className="text"><img src="" className="circle1"/><Footer.Link href="#"> Daily Care&nbsp;&emsp;&emsp;&emsp;</Footer.Link><img src="" className="circle1"/><Footer.Link href="#"> Locations</Footer.Link></div></Footer.Link>
                    <Footer.Link href="#"><div className="text"><img src="" className="circle1"/><Footer.Link href="#"> Hospital to Home&nbsp;</Footer.Link><img src="" className="circle1"/><Footer.Link href="#"> Caregivers</Footer.Link></div></Footer.Link>
                    <Footer.Link href="#"><div className="text"><img src="" className="circle1"/><Footer.Link href="#"> Respite Care&nbsp;&emsp;&emsp;</Footer.Link><img src="" className="circle1"/><Footer.Link href="#"> News & Blog</Footer.Link></div></Footer.Link>
                    <Footer.Link href="#"><div className="text"><img src="" className="circle1"/><Footer.Link href="#"> Specialized Care&nbsp;&nbsp;</Footer.Link><img src="" className="circle1"/><Footer.Link href="#"> Contact Us</Footer.Link></div></Footer.Link>
                    <Footer.Link href="#"><div className="text"><Footer.Link href="#">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;</Footer.Link><img src="" className="circle1"/><Footer.Link href="#"> FAQ</Footer.Link></div></Footer.Link>
                    </Footer.Together>

                <Footer.Column3>
                    <div className="hide"><ScrollToTop/></div> 
                    <Footer.Text>Sign up to receive the latest articles </Footer.Text>
                    <Footer.Form noValidate autoComplete="off" className="form1" >
                    <TextField id="outlined-basic" label="Your email adress" variant="outlined" />
                    </Footer.Form>
                    <div className="space" >&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <Button className="submit2" variant="contained" color="primary">SUBMIT</Button>
                    </div>
                    <div className="btn2"><Button className="submit" variant="contained" color="primary">SUBMIT</Button></div> 
                    <Footer.Link><div className="images" ><div className="c1"/><div className="c2"/></div></Footer.Link>
                    <div className="bottom">Follow Us<div className="face"></div></div> 
                </Footer.Column3>
            </Footer.Row>
            </Footer.Wrapper>

            <hr className="line" />

            <Footer.Wrapper1>
            <Footer.Row1>
            <Footer.Link2 href="#">Copyright 2020 </Footer.Link2><Footer.Link3 href="#">Universacare </Footer.Link3><Footer.Link2 href="#">- All rights reserved.</Footer.Link2>
            </Footer.Row1>
            </Footer.Wrapper1>
        </Footer>
    )
}