import { useState } from "react";
import { Col, Container,  Row } from "react-bootstrap";
import "../components/LibraryInfo/LibraryInfo.css";
import PageNotFound from "./PageNotFound";
import LibraryList from '../json/LibraryList.json';
import Pagination from "../components/Pagination";
import LibraryInfomation from "../components/LibraryInfo/LibraryInfomation";
import BusanMap from "../components/LibraryInfo/BusanMap";

const LibraryInfoPage = () => {
    const [searchLib, setSearchLib] = useState("");
    const [limit, setLimit] = useState(2);
    const [page, setPage] = useState(1);
    const offset = (page - 1)*limit;

    return (    
        <div style={{ backgroundColor : "#F2F0EB", paddingTop : "10px"}}>
        <div style={{margin : "0 10em"}} className="LibInfoBox"> 
                <div style={{margin : "5vh", display :"flex", alignItem:"center", justifyContent:"center"}}>
                    <h1 style={{fontSize : "3em", fontWeight : "bold"}} >도서관 안내</h1>
                    <p style={{fontSize : "1.5em", marginTop : "1em", marginLeft : "0.5em"}}>찾으시는 지역을 선택하고, 해당 지역 내 도서관에 관한 정보를 제공받으세요</p>
                </div>                   
                    <input style={{
                        boxSizing: "border-box",
                        width : "1000px",
                        outline : "none",
                        height : "5vh",
                        alignItems: "center",
                        justifyContent :"center",
                        marginBottom : "2em"
                    }} type = "text" placeholder = "찾고자하는 도서관명을 입력하세요" 
                    onChange = {e => {setSearchLib(e.target.value)}} />                    
                <Row>
                <Col>
                    <BusanMap style={{marginLeft : "3em"}}  searchPlace={searchLib}/>
                </Col>
                    <Col>
                <div>        
                        {LibraryList.filter((val) => {
                            if(searchLib == "" ){
                                return val;
                            }else if(val.도서관명.toLowerCase().includes(searchLib.toLowerCase())){
                                return val;
                            }else{
                                <PageNotFound/>
                            }
                        }).slice(offset, offset + limit).map((val, index) => {
                            return <LibraryInfomation 
                                key={val.id} 
                                도서관명={val.도서관명} 자료실={val.도서관유형} 
                                소재지도로명주소={val.소재지도로명주소} 
                                휴관일={val.휴관일} 
                                평일운영시작시간={val.평일운영시작시각} 
                                평일운영종료시각={val.평일운영종료시각} 
                                토요일운영시작시간={val.토요일운영시작시각} 
                                토요일운영종료시각={val.토요일운영종료시각}
                                도서관전화번호={val.도서관전화번호} 홈페이지주소={val.홈페이지주소} > </LibraryInfomation> 
                        })}
   
                <Pagination 
                        total={LibraryList.length}
                        limit={limit}
                        page={page}
                        setPage={setPage}/>
                </div>
                </Col>
                </Row>
            
        </div>
        </div>
    );
}

export default LibraryInfoPage;