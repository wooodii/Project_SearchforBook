import './HomePage.scss';
import pageData from '../components/HomeItem/PageData';
import { Col, Row } from 'react-bootstrap';

const HomePi = () => {
    return (
        <div className='background_Image'>
            <div style={{width : "100%"}}>
            {pageData.map((i, index) => (
                <Row>
                <Col xs={6} style={{textAlign : "left", marginLeft : "6em"}}>
                    <div 
                        style={{fontSize :"2em", marginTop : "2em"}}>
                        {i.title}      
                    </div>          
                    <div style={{fontSize : "1.2em"}}>
                    {i.info}
                    </div>
                </Col>
                <Col xs={6} 
                style={{marginLeft : "50em", fontSize :"1em"}}> 
                -------------- {index+1}

                </Col>
                </Row>
            ))}
            </div>
        </div>
    );
}
 
export default HomePi;