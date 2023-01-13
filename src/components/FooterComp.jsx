import React from 'react';
import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter, IoLogoYoutube } from "react-icons/io";
import { IconContext } from "react-icons";
import { Col, Row } from 'react-bootstrap';
import './FooterComp.css';

export default function App() {  
  return (
    <footer className='text-center text-white'>
      <Row className='text-center p-3' style={{ backgroundColor: 'black', color : 'white'}}>
        <Col xs={9} style ={{display : 'inline-block' , size : "1em", padding : "2em 0", textAlign : "left"}}>
           <div style={{marginLeft : "10em", fontSize : "1.2em"}}>
           (46949) 부산광역시 사상구 사상로310번길 33(덕포동) | 
            TEL 051-310-5400 | FAX 051-310-5429 <br/>
            <span style={{fontSize : "1em"}}> Copyright © 2020 Busan Metropolitan City Library, All rights reserved.</span>
           </div>
        </Col>
        <Col xs={3} style={{display : "flex", padding : "2em 0"}}>
        <IconContext.Provider  value={{size : "2em"}}>
          <div className='sns-icon' style={{marginRight : "1em"}}>
          <IoLogoInstagram/> <br/> instargram
          </div>

          <div className='sns-icon' style={{marginRight : "1em"}}>
          <IoLogoFacebook/><br/> facebook
          </div>

          <div className='sns-icon' style={{marginRight : "1em"}}>
          <IoLogoTwitter/> <br/>twitter
          </div>
          <div className='sns-icon' style={{marginRight : "1em"}}>
          <IoLogoYoutube/> <br/>youtube
          </div>
        </IconContext.Provider>
        </Col>
      </Row>
    </footer>
  );
}