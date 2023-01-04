import '../css/RecommendBook.css';
import Container from 'react-bootstrap/Container';
import React from "react";
import CityofRead from './CityofRead';
import BookSlide from './BookSlide';
import { Outlet } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import SideBanner from '../components/SideBanner';
import Menubar from '../components/Menubar';

function PrevRecommendBook() {  

  const pickList = [
    {id : 1, title : "종합추천", context : "고객님의 취향을 분석해 이틀밤낮 고민하여 고른 책을 확인하세요"},
    {id : 2, title : "작가Picks", context : "Picks를 통해 고객님의 선호 작가와 비슷한 새로운 작가를 만나보세요"},
    {id : 3, title : "내 마음대로 Picks", context : "오늘은 내 맘대로 이 책 한 권 어때요?"},
    {id : 4, title : "소울메이트 Picks", context : "고객님과 취향이 비슷한 소울메이트들은 어떤 책을 읽고 있을까요?"},
    {id : 5, title : "MBTI Picks", context : "고객님과 같은 MBTI유형들은 어떤 책을 좋아할까요?"}
  ]
  
  return (
    <>
    {/** 맨 위쪽에는 추천도서 안내 배너를 가로 직사각형으로 올리고
     * 아래에 파일철 카드 형식으로 작성 mbti, recommend평가, 
  */}    
    <Menubar/>

    <div style={{position : "fixed", top : "10em", right : "25px"}}>
    <SideBanner/>
    </div>
    
    <Container>
      <BookSlide/>
    </Container>
    
    <Container>
      <CityofRead/>
    </Container>

    <hr/>
    <div style={{display : "flex", paddingTop : "3em",paddingBottom : "3em"}}>
    <div style={{marginTop : "7em", marginLeft : "10em", marginRight : "7em"}}>
          <h1>Picks!</h1>
          <p>취향에 맞는 책을 추천드려요</p>
    </div>
    <div>
          {pickList.map((list) => (
        <Card onClick={() => (pickPage)} style={{margin : "2em", display : "inline-block", width : "15em", height : "15em"}}>
          <span style={{fontSize : "1.5em"}}>{list.title}</span>
          <hr/>
          {list.context}
        </Card>
    ))}
    </div>
    </div>
    <hr/>
    
    {/** 여기에 출력될 수 있도록 param값 다시 설정 */}
    <Container>
      <Outlet/>
    </Container>    


    </>


  );
}

export default PrevRecommendBook;
