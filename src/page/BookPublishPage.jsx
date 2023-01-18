import './BookPublishPage.scss';
import Slider from "react-slick";
import CityofRead from './CityofRead';
import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter, IoLogoYoutube } from "react-icons/io";
import { IconContext } from "react-icons";
import { Col, Row } from 'react-bootstrap';
import 탐진강 from '../asset/banner/탐진강.png'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,  display: "block", background: "black", borderRadius : "50%", width  : "20px "}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius : "50%"}}
      onClick={onClick}
    />
  );
}


const BookPublishPage = () => {
  const bookpubData = [
    {id : 1, title : "호밀밭", front : "호밀밭로고.png",  
      back : "호밀밭홈.png", list : "도서구매",  area : "부산광역시 수영구 연수로 357번길 17-8 (48231)", 
      des : "http://www.homilbooks.com/", sec : "세상 모든 것에 감탄하는 지혜로운 사람들의 공간",
      s1 : "주간베스트 도서", s2 : "감성공간", s3 : "재방문 많은"},
    {id : 2, title : "산지니", front : "산지니로고.jpg",  
      back : "산지니홈.png", list : "독수리로고", 
       sec : "'산지니'는 산속에서 자라 오랜 해를 묵은 매로서 가장 높이 날고 가장 오래 버티는 매입니다. 그 기억은 저에게 산지니란 이름을 가슴 깊이 새기도록 해주었습니다.",
      area : "(48058)부산광역시 해운대구 수영강변대로 140 부산문화콘텐츠콤플렉스 613호", 
      des : "http://sanzinibook.com/g5/bbs/content.php?co_id=company",  
      s1 : "재방문 많은", s2 : "감성공간", s3 : "재방문 많은"},
    {id : 3, title : "부산출판문화원", front : "부산출판문화원.PNG", 
      back : "부산대문화원홈.png", list : "전문서적",   sec : "좋은 책으로 교육과 연구, 그리고 삶 잇기 연구없는 교육, 교육없는 연구, 출판없는 대학은 미래가 없다! 부산대 대변혁의 시작은 교육과 연구, 삶을 잇는 좋은 책내기!",
      area : "(46241) 부산광역시 금정구 부산대학로63번길 2 (장전동) ", 
      des : "https://press.pusan.ac.kr/press/index.do", 
      s1 : "재방문 많은", s2 : "감성공간", s3 : "전문서적"}, ]

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding : 2,
    slidesToShow: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
    
  };

    return (
        <>
        <img width="100%" height="800px" src={탐진강} alt="" />

        <div style={{marginTop : "4em", padding : "2em 4em"}}>
          <h1 style={{fontWeight : "bold", fontSize : "3em"}}> 부산 출판사</h1>
          <p style={{fontSize : "1.6em"}}>우리 지역의 크고 다양한 서점을 소개합니다.</p>
        </div>


        <div style={{border : "2px solid gray", padding : "5em 5em"}}>

        <Slider {...settings}>
          {bookpubData.map((i, index) => (
                <div class="component">
                  <ul class="align">
                  {/* <!-- Book 1 -->*/}
                  <li>
            <figure class='book'>        
                {/* <!-- front -->*/}     
                  <ul class='hardcover_front'>
                    <li>
                       <img style={{width : "12em", height : "16em", marginTop : "3em", 
                       borderRadius : "50%", margin : "3em auto"}} 
                       src={require(`../asset/publish/${i.front}`) }></img>
                      <span class="ribbon bestseller">{i.id} </span>
                    </li>
                    <li></li>
                  </ul>        
                  {/* <!-- page->*/}     
                  <ul class='page'>
                    <li> <a class="btn12" href={i.des} 
                        style={{display : "absolute", zIndex :"999", top : 0}}> 홈페이지 방문 </a>
                    </li>
                    <li>
                  
                    <img style={{width : "20em", height : "24em",  margin : "0 auto"}} 
                       src={require(`../asset/publish/${i.back}`) }></img>
                       </li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>        
                   {/* <!-- back -->*/}    
                  <ul class='hardcover_back'>
                    <li></li>
                    <li></li>
                  </ul>
                  <ul class='book_spine'>
                    <li></li>
                    <li></li>
                  </ul>
                  
        <figcaption style={{marginLeft :"12em", width : "35em"}}>

          <div style={{
              border : "2px solid gray", display : "inline-block", 
              padding : "0.2em 0.3em", borderRadius : "5px",
              marginRight : "0.3em"}}> {i.s1}</div>
          <div style={{border : "2px solid gray", marginRight : "0.3em",
              display : "inline-block", padding : "0.2em 0.3em", 
              borderRadius : "5px"}}>{i.s2} </div>
          <div style={{border : "2px solid gray",
              display : "inline-block", padding : "0.2em 0.3em", 
              borderRadius : "5px"}}>{i.s3} </div>

          <a  href={i.des}>
          <h1 style={{marginTop : "0.5em"}}>{i.title}</h1>
          </a>
          <span style={{fontSize : "1.3em"}}>{i.area}</span>
          <hr/>
            <div style={{fontSize : "1.5em"}}>
              {i.sec}
            </div>

            <Row style={{marginTop : "2em"}}>

          <IconContext.Provider  value={{size : "2em"}}>
          <Col xs={1} className='sns-icon' style={{marginRight : "1em", color : "pink"}}>
          <IoLogoInstagram/> 
          </Col>

          <Col xs={1} className='sns-icon' style={{marginRight : "1em", coloe : "blue"}}>
          <IoLogoFacebook/>
          </Col>

          <Col xs={1} className='sns-icon' style={{marginRight : "1em", color : "skyblue"}}>
          <IoLogoTwitter /> 
          </Col>
          <Col xs={1} className='sns-icon' style={{marginRight : "1em",color : "red"}}>
          <IoLogoYoutube/> 
          </Col>
          </IconContext.Provider>
        
            </Row>
        
        </figcaption>
      </figure>
    </li>  
    </ul>
     </div>
          ))}

        </Slider>
            
        </div>

        <CityofRead/>
  </>
    );
}
 


export default BookPublishPage;