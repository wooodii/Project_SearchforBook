import { useContext } from "react";
import { Container, Row, Col, Collapse } from "react-bootstrap"; 
import './LibraryInfo.css';
import DataContext from '../../context/DataContext'

const LibraryInfomation = (
        {key, 도서관명, 소재지도로명주소, 휴관일, 평일운영시작시각, 평일운영종료시각, 
        토요일운영시작시각, 토요일운영종료시각, 도서관전화번호, 홈페이지주소}) => {
        const data = useContext(DataContext);
        
        const likelibrary = () => {
            console.log("확인");
            data.action.setMyBook([...data.state.myBook, {도서관명:  도서관명, 홈페이지주소: 홈페이지주소} ])
        }

        return ( 
            <div 
            style={{border : "2px solid lightgray",  backgroundColor : "#D9CCC1", width : "480px", marginLeft : "9em",
            borderRadius : "20px", margin : "2em 0", padding : "1.5em"}}>
                <Row style={{fontWeight :"bold", fontSize:"1.8em", display : "flex"}}> 
                    <Row> 
                        <div style={{ fontSize : "1em"}}> {도서관명 && 도서관명} </div>  
                    </Row>
                    <Row > 
                    <button style={{padding : "3px 6px"}} className="addLibraryBtn" onClick={likelibrary}> 
                                도서관 등록
                        </button>  
                    </Row>
                </Row>
                    <Row>평일운영시간 | {평일운영시작시각 && 평일운영시작시각} ~ {평일운영종료시각 && 평일운영종료시각}</Row>
                    <Row>토요일운영시간 | {토요일운영시작시각 && 토요일운영시작시각} ~ {토요일운영종료시각 && 토요일운영종료시각} </Row>
                    <Row> 전화번호 | {도서관전화번호 && 도서관전화번호} </Row>
                    <Row style={{textAlign : "left"}}>
                    휴관일 | {휴관일 && 휴관일} <br/>
                    주소 | {소재지도로명주소 && 소재지도로명주소}
                </Row>
            </div>            


    );
} 

export default LibraryInfomation;