import {Col, Row } from "react-bootstrap";
import './CityofRead.css';
import uncomfortableStore1 from '../asset/busanCamp/uncomfortableStore1.jpeg';

const CityofRead = () => {   
    return (
        <div className="Cityofreadbox">
        <p style={{fontSize : "3em", fontWeight : "bold"}}> 책 읽는 도시 부산</p>
        <p style={{fontSize : "1.5em"}}> 부산시민이라면 참여할 수 있는 도서관련 캠페인입니다.</p>
        <Row style={{marginTop : "5vh"}}>
            <Col style={{border : "2px solid black", borderRadius : "10px", marginRight : "1.5em"}}>

                <a
                  className='cardlink' href="https://library.busan.go.kr:8585/baro/homepage/main.do">
                    <div className="barrowbook"> 
                         <div className="cityBox" style={{position : "relative", zIndex : "20", display : "flex"}}> 
                        <h4 style={{position : "absolute", zIndex : "-100", top : "-1.5em"}}>지역서점바로대출</h4> 
                        <div style={{width : "65%",textAlign : "left", position : "absolute", zIndex : "10", marginTop : "2em", display : "flex"}}>
                        읽고 싶은 책을 가까운 서점에서 빌리고,  읽은 후 도서관으로 반납하는 서비스입니다. 
                        신청한 도서는 반납 후 해당 공공도서관 도서로 소장됩니다.
                        </div>
                    </div>
                    </div>

                </a>
               
            </Col>
            <Col style={{border : "2px solid black", borderRadius : "10px"}}>
                <a className='cardlink' href="https://home.pen.go.kr/siminlib/cm/cntnts/cntntsView.do?mi=13256&cntntsId=1462">
                    <div className="onebookone"> 
                         <div className="cityBox" style={{position : "relative", zIndex : "20", display : "flex"}}> 
                        <h4 style={{position : "absolute", zIndex : "-100", top : "-1.5em"}}>원북원부산</h4> 
                        <img className="cityBoxImg" style={{position : "absolute", zIndex : "-100", top : "-3em", right : "0em",}} src={uncomfortableStore1} alt="" />
                        <div style={{width : "65%",textAlign : "left", position : "absolute", zIndex : "10", marginTop : "2em", display : "flex"}}>
                        부산광역시교육청 및 부산광역시, <br/> 부산일보사가 주최하고 
                        부산광역시공공도서관이 주관하는 시민독서생활화 운동입니다 
                        </div>
                    </div>
                    </div>
                </a>
            </Col>
        </Row>
        <Row>
            <Col style={{border : "2px solid black", borderRadius : "10px", marginTop : "1.5em", marginRight : "1.5em"}}>
                <a className='cardlink' href="https://library.busan.go.kr/portal/html.do?menu_idx=24">
                    <div className="booknanum"> 
                <h4>행복한 책 나눔</h4> 

                <div className="cityBox">
                    책읽는 사회 분위기 조성과 지역 서점 활성화를 위하여, <br/>
                    다읽은 책을 사업 참여 서점에 가져가면 책값의 일정 부분을 도서교환권으로 환불해주는 사업입니다.
                </div>    
                </div>
                </a>
                
            </Col>
            
            <Col style={{border : "2px solid black", borderRadius : "10px", marginTop : "1.5em"}}>
            <a className='cardlink' href="https://korearf.kpipa.or.kr/" >
                <div className="bookparty"> 
               <h4>독서문화축제</h4> 
               <div className="cityBox">
                생활 속에서 시민이 손쉽게 누리는 독서문화 활성화를 위해
                독서 관련 캠페인을 통한 범시민 독서생활화를 실천합니다.
               </div>
               </div> 
            </a>
            </Col>
        </Row>
        </div>
    );
}

export default CityofRead;