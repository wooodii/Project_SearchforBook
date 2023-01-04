import { Checkbox } from "@mui/material";
import { useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {FcAdvertising, FcClock, FcLike, FcLikePlaceholder, FcLock, FcOrganization, FcPhone } from "react-icons/fc"; 
import '../css/LibraryInfo.css';
import DataContext from '../context/DataContext'

const LibraryInfomation = (
        {key, 도서관명, 소재지도로명주소, 휴관일, 평일운영시작시각, 평일운영종료시각, 
        토요일운영시작시각, 토요일운영종료시각, 도서관전화번호, 홈페이지주소}) => {
        const data = useContext(DataContext);
        
        const likelibrary = () => {
            console.log("확인");
            data.action.setMyBook([...data.state.myBook, {도서관명:  도서관명, 홈페이지주소: 홈페이지주소} ])
        }

        return ( 
            <Container>
            <Row style={{border : "2px solid black", borderRadius : "20px", margin : "2em 0", padding : "1.5em"}}>
            <Col xs={5}>
                        <Row style={{fontWeight :"bold", fontSize:"1.8em", display : "flex"}}> 
                            <Row> <div style={{ fontSize : "0.7em"}}> {도서관명 && 도서관명} </div>  </Row>
                            <Row> <div> <button className="addLibraryBtn" onClick={likelibrary}> <FcLike/> </button>  </div></Row>
                            
                        </Row>
            </Col>
            <Col xs={7}>
                <Row>
                    <Row>평일운영시간 | {평일운영시작시각 && 평일운영시작시각} ~ {평일운영종료시각 && 평일운영종료시각}</Row>
                    <Row>토요일운영시간 | {토요일운영시작시각 && 토요일운영시작시각} ~ {토요일운영종료시각 && 토요일운영종료시각} </Row>
                    <Row> 전화번호 | {도서관전화번호 && 도서관전화번호} </Row>
                </Row>      <hr />
                <Row>
                    휴관일 | {휴관일 && 휴관일} 
                </Row>
                <Row>
                    주소 | {소재지도로명주소 && 소재지도로명주소}
                </Row>
            </Col>            
            </Row>
        </Container>
    );
} 

export default LibraryInfomation;