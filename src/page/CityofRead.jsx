import {Col, Row } from "react-bootstrap";
import './CityofRead.css';
import uncomfortableStore1 from '../asset/busanCamp/uncomfortableStore1.jpeg';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const CityofRead = () => {   

  const busandata = [
    {id : 1, img : "바로대출.png",  title : "지역서점바로대출", link : "https://korearf.kpipa.or.kr/",  context : "읽고 싶은 책을 가까운 서점에서 빌리고, 읽은 후 도서관으로 반납하는 서비스입니다. 신청한 도서는 반납 후 해당 공공도서관 도서로 소장됩니다."},
    {id : 2, img : "원북원.png", title : "원북원부산", link : "https://korearf.kpipa.or.kr/",   context : "부산광역시교육청 및 부산광역시, 부산일보사가 주최하고 부산광역시공공도서관이 주관하는 시민독서생활화 운동입니다 "},
    {id : 3, img : "행복한책.png", title : "행복한 책 나눔", link : "https://library.busan.go.kr/portal/html.do?menu_idx=24" ,  context : "읽는 사회 분위기 조성과 지역 서점 활성화를 위하여, 다읽은 책을 사업 참여 서점에 가져가면 책값의 일정 부분을 도서교환권으로 환불해주는 사업입니다."},
    {id : 4, img : "독서문화축제.png", title : "독서문화축제",link : "https://korearf.kpipa.or.kr/",  context : " 생활 속에서 시민이 손쉽게 누리는 독서문화 활성화를 위해 독서 관련 캠페인을 통한 범시민 독서생활화를 실천합니다."},
  ]

    return (
      <>
      <p style={{fontSize : "3em", fontWeight : "bold", marginTop : "5em"}}> 책 읽는 도시 부산</p>
      <p style={{fontSize : "1.5em"}}> 부산시민이라면 참여할 수 있는 도서관련 캠페인입니다.</p>
        <div style={{margin : "0 10em",  display : "flex",
        borderRadius : "10px",
        backgroundColor : "#eee", 
        margin : "3em 10em", padding : "2em 1em"}}>

            {busandata.map((i ,index) => (

            <Card style={{ width: '28em', margin : "2em 1.5em", height : "40em"}}> 
              <Card.Img
                variant="top" width="100%" height="350em"
                src={require(`../asset/publish/${i.img}`)} />
              <Card.Body>
              <Card.Title>
                 <span style={{fontSize : "1.6em", borderBottom : "2px solid black"}}>
                  {i.title} 
                </span>
              </Card.Title>
              <Card.Text style={{marginTop :"1.2em", textAlign : "center"}}>
                <span style={{fontSize : "1.4em",  height: "150px"}}>
                    {i.context}</span> 
                </Card.Text>
              <Button type="button" className="btn_busan" 
              onClick={() => (window.location.href = `{i.link}`)} variant="primary">
                바로가기
              </Button>
              </Card.Body>
            </Card>

            ))}
        
  
        </div>
        </>
    );
}

export default CityofRead;