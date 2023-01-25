import './HomePage.scss';
import pageData from '../components/HomeItem/PageData';
import { Col, Row } from 'react-bootstrap';

const HomePi = () => {
    return (
            <div style={{backgroundColor : "#F2F0EB"}}>
            <div className='background_Image' 
            style={{width : "100%", height : "100vh" }}>
                <div style={{width :"300px", height : "150px"}}></div>
            {pageData.map((i, index) => (
                <ul>
                <li xs={6} style={{textAlign : "left", marginLeft : "15em"}}>
                    <div 
                        style={{fontSize :"2em", marginTop : "1em"}}>
                        {i.title}      
                    </div>          
                    <div style={{fontSize : "1.3em"}}>
                    {i.info}
                    </div>
                </li>
                <li xs={6} 
                style={{marginLeft : "70em", fontSize :"1.3em"}}> 
                -------------- {index+1}
                </li>
                </ul>
            ))}
            </div>
</div>

    );
}
 
export default HomePi;