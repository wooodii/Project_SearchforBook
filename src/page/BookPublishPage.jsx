import bear from  '../asset/weeklybest/bear.png'
import './BookPublishPage.scss';
import walk from '../asset/storeimg/walk.png'; 
import Slider from "react-slick";
import CityofRead from './CityofRead';
import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter, IoLogoYoutube } from "react-icons/io";
import { IconContext } from "react-icons";
import { Row } from 'react-bootstrap';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}


const BookPublishPage = () => {
  const bookpubData = [
    {id : 1, title : "호밀밭", front : "호밀밭로고.png",  
      back : "", list : "도서구매",  area : "부산광역시 수영구 연수로 357번길 17-8 (48231)", 
      des : "http://www.homilbooks.com/", 
      s1 : "주간베스트 도서", s2 : "감성공간", s3 : "재방문 많은"},
    {id : 2, title : "산지니", front : "산지니로고.jpg",  
      back : "", list : "독수리로고", 
      area : "(48058)부산광역시 해운대구 수영강변대로 140 부산문화콘텐츠콤플렉스 613호", 
      des : "http://sanzinibook.com/g5/bbs/content.php?co_id=company",  
      s1 : "재방문 많은", s2 : "감성공간", s3 : "재방문 많은"},
    {id : 3, title : "부산출판문화원", front : "부산출판문화원.PNG", 
      back : "", list : "전문서적",  
      area : "(46241) 부산광역시 금정구 부산대학로63번길 2 (장전동) ", 
      des : "https://press.pusan.ac.kr/press/index.do", 
      s1 : "재방문 많은", s2 : "감성공간", s3 : "재방문 많은"}, ]

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
          <img width="100%" height="800px" src={walk} alt="" />
        <div style={{marginTop : "4em"}}>
          <h1 style={{fontWeight : "bold", fontSize : "3em"}}> 부산 출판사</h1>
          <p style={{fontSize : "1.5em"}}>우리 지역의 크고 다양한 서점을 소개합니다.</p>
        </div>
          
          <div style={{display : "flex", float : "right", marginRight : "10em", 
        fontSize : "1.2em"}}>
            옆으로 스크롤 >>
          </div>

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
                       borderRadius : "50%", margin : "0 auto"}} 
                       src={require(`../asset/publish/${i.front}`) }></img>
                      <span class="ribbon bestseller">{i.id} </span>
                    </li>
                    <li></li>
                  </ul>        
                  {/* <!-- page->*/}     
                  <ul class='page'>
                    <li></li>
                    <li>
                  
                    <img style={{width : "12em", height : "16em", 
                       borderRadius : "50%", margin : "0 auto"}} 
                       src={require(`../asset/publish/${i.front}`) }></img>

                       </li>
                      <a class="btn12" href={i.des} 
                        style={{display : "absolute", zIndex :"999", top : 0}}> 홈페이지 방문 </a>
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
                  
        <figcaption style={{marginLeft :"12em"}}>

          <div style={{
              border : "2px solid black", display : "inline-block", 
              padding : "0.2em 0.3em", borderRadius : "5px",
              marginRight : "0.3em"}}> {i.s1}</div>
          <div style={{border : "2px solid black", marginRight : "0.3em",
              display : "inline-block", padding : "0.2em 0.3em", 
              borderRadius : "5px"}}>{i.s2} </div>
          <div style={{border : "2px solid black",
              display : "inline-block", padding : "0.2em 0.3em", 
              borderRadius : "5px"}}>{i.s3} </div>

          <h1 style={{marginTop : "0.5em"}}>{i.title}</h1>
          <span>{i.area}</span>
          <hr/>
          <p>{i.des}</p>
            

            <Row>

          <IconContext.Provider  value={{size : "2em"}}>
          <div className='sns-icon' style={{marginRight : "1em", color : "pink"}}>
          <IoLogoInstagram/> 
          </div>

          <div className='sns-icon' style={{marginRight : "1em", coloe : "blue"}}>
          <IoLogoFacebook/>
          </div>

          <div className='sns-icon' style={{marginRight : "1em", color : "skyblue"}}>
          <IoLogoTwitter/> 
          </div>
          <div className='sns-icon' style={{marginRight : "1em",color : "red"}}>
          <IoLogoYoutube/> 
          </div>
          </IconContext.Provider>
        
            </Row>
        
        </figcaption>
      </figure>
    </li>  
    </ul>
     </div>
          ))}

        </Slider>


        <CityofRead/>
  </>
    );
}
 


export default BookPublishPage;